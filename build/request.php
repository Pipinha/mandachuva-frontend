<?php

require_once 'config.php';

if (!Request::get('method')) {
    Request::json([
        'response' => [
            'code' => 1,
            'msg' => 'Informar o $_GET[method]',
        ],
        'data' => null,
    ]);
}

if (!Request::get('url')) {
    Request::json([
        'response' => [
            'code' => 1,
            'msg' => 'Informar o $_GET[url]',
        ],
        'data' => null,
    ]);
}

$data = Request::getData();
if (!is_array($data)) {
    $data = null;
}

if (Request::get('url')) {
    $_GET['url'] = base64_decode(Request::get('url'));
    $_GET['url'] = str_replace(' ', '+', $_GET['url']);
}

$remoteAddr = null;
if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $remoteAddr = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else if (isset($_SERVER['REMOTE_ADDR'])) {
    $remoteAddr = $_SERVER['REMOTE_ADDR'];
}

$headers = array(
    'appKey: ' . APP_KEY,
    'token: ' . Request::getHeader('token'),
    'remoteAddr: ' . $remoteAddr,
);

try {
    switch (Request::getHttpMethod()) {
        case 'GET':
            $resposta = Request::sendGetJson(API_URL . Request::get('url'), $headers, true, false);
            Request::json($resposta['response'], $resposta['info']['http_code']);
            break;
        case 'POST':
            $resposta = Request::sendPostJson(API_URL . Request::get('url'), $data, $headers, true, false);
            Request::json($resposta['response'], $resposta['info']['http_code']);
            break;
        case 'PUT':
            $resposta = Request::sendPutJson(API_URL . Request::get('url'), $data, $headers, true, false);
            Request::json($resposta['response'], $resposta['info']['http_code']);
            break;
        case 'DELETE':
            $resposta = Request::sendDeleteDataJson(API_URL . Request::get('url'), $data, $headers, true, false);
            Request::json($resposta['response'], $resposta['info']['http_code']);
            break;
        default:
            Request::json([
                'response' => [
                    'code' => 1,
                    'msg' => 'Método não permitido.',
                ],
                'data' => null,
            ]);
            break;
    }
} catch (Exception $e) {
    Request::json([
        'response' => [
            'code' => 1,
            'msg' => $e->getMessage(),
        ],
        'data' => null,
    ]);
}


class Request
{
    public static function json($json, $httpCode = 200)
    {
        if (is_array($json)) {
            $content = json_encode($json);
        } else {
            $content = $json;
        }
        header('content-type: application/json;charset:utf-8');
        http_response_code($httpCode);
        ob_start();
        echo $content;
        ob_end_flush();
        $content = null;
        exit();
    }

    public static function removeInvisibleCharacters($str, $url_encoded = true)
    {
        $non_displayables = array();
        // every control character except newline (dec 10),
        // carriage return (dec 13) and horizontal tab (dec 09)
        if ($url_encoded) {
            $non_displayables[] = '/%0[0-8bcef]/i'; // url encoded 00-08, 11, 12, 14, 15
            $non_displayables[] = '/%1[0-9a-f]/i'; // url encoded 16-31
        }
        $non_displayables[] = '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/S'; // 00-08, 11, 12, 14-31, 127
        do {
            $str = preg_replace($non_displayables, '', $str, -1, $count);
        } while ($count);

        return $str;
    }

    public static function escapeSequenceDecode($str)
    {
        // [U+D800 - U+DBFF][U+DC00 - U+DFFF]|[U+0000 - U+FFFF]
        $regex = '/\\\u([dD][89abAB][\da-fA-F]{2})\\\u([dD][c-fC-F][\da-fA-F]{2})
              |\\\u([\da-fA-F]{4})/sx';

        return preg_replace_callback($regex, function ($matches) {
            if (isset($matches[3])) {
                $cp = hexdec($matches[3]);
            } else {
                $lead = hexdec($matches[1]);
                $trail = hexdec($matches[2]);

                // http://unicode.org/faq/utf_bom.html#utf16-4
                $cp = ($lead << 10) + $trail + 0x10000 - (0xD800 << 10) - 0xDC00;
            }

            // https://tools.ietf.org/html/rfc3629#section-3
            // Characters between U+D800 and U+DFFF are not allowed in UTF-8
            if ($cp > 0xD7FF && 0xE000 > $cp) {
                $cp = 0xFFFD;
            }

            // https://github.com/php/php-src/blob/php-5.6.4/ext/standard/html.c#L471
            // php_utf32_utf8(unsigned char *buf, unsigned k)

            if ($cp < 0x80) {
                return chr($cp);
            } elseif ($cp < 0xA0) {
                return chr(0xC0 | $cp >> 6) . chr(0x80 | $cp & 0x3F);
            }

            return html_entity_decode('&#' . $cp . ';');
        }, $str);
    }

    public static function get($key)
    {
        if (!isset($_GET[$key])) {
            return null;
        }
        if (is_array($_GET[$key])) {
            self::inputArray($_GET[$key]);

            return $_GET[$key];
        }
        $_GET[$key] = self::removeInvisibleCharacters($_GET[$key], false);
        if (trim($_GET[$key]) == '') {
            return null;
        }

        return trim($_GET[$key]);
    }

    private static function inputArray(&$array)
    {
        foreach ($array as &$value) {
            if (!is_array($value)) {
                $value = self::removeInvisibleCharacters($value, false);
                continue;
            }
            self::inputArray($value);
        }
    }

    public static function posts()
    {
        if (!isset($_POST)) {
            return array();
        }
        self::inputArray($_POST);

        return $_POST;
    }

    public static function post($key)
    {
        if (!isset($_POST[$key])) {
            return null;
        }
        if (is_array($_POST[$key])) {
            self::inputArray($_POST[$key]);

            return $_POST[$key];
        }
        $_POST[$key] = self::removeInvisibleCharacters($_POST[$key], false);
        if (trim($_POST[$key]) == '') {
            return null;
        }

        return trim($_POST[$key]);
    }

    public static function getHttpMethod()
    {
        if (!isset($_SERVER['REQUEST_METHOD'])) {
            return false;
        }

        return $_SERVER['REQUEST_METHOD'];
    }

    public static function getData()
    {
        $data = file_get_contents('php://input');
        $data = json_decode($data, true);

        return isset($data) ? $data : false;
    }

    public static function getHeader($field)
    {
        if (isset($_SERVER['HTTP_' . strtoupper($field)])) {
            return self::removeInvisibleCharacters($_SERVER['HTTP_' . strtoupper($field)]);
        }
        if (isset($_SERVER[strtoupper($field)])) {
            return self::removeInvisibleCharacters($_SERVER[strtoupper($field)]);
        }
        if (isset($_SERVER[$field])) {
            return self::removeInvisibleCharacters($_SERVER[$field]);
        }

        return '';
    }

    /**
     * @param $url
     * @param $data
     * @param array $headers
     * @return array
     * @throws Exception
     */
    public static function sendPostJson($url, $data, $headers = [], $ssl = true, $encoded = true, $timeout = 30)
    {
        $ch = curl_init();
        $postFields = (is_array($data) ? json_encode($data) : $data);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, self::escapeSequenceDecode($postFields));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_HEADER, false);

        if ($ssl === false) {
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        }

        if ($encoded === false) {
            curl_setopt($ch, CURLOPT_ENCODING, "");
        }

        $response = curl_exec($ch);
        $info = curl_getinfo($ch);

        if (curl_errno($ch)) {
            throw new Exception('Ocorreu um erro na sua requisição / Info: ' . json_encode($info, JSON_PRETTY_PRINT));
        }

        curl_close($ch);

        return array(
            'response' => $response,
            'info' => $info
        );
    }

    /**
     * @param $url
     * @param array $headers
     * @return array
     * @throws Exception
     */
    public static function sendGetJson($url, $headers = [], $ssl = true, $encoded = true, $timeout = 30)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_HEADER, false);

        if ($ssl === false) {
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        }

        if ($encoded === false) {
            curl_setopt($ch, CURLOPT_ENCODING, "");
        }

        $response = curl_exec($ch);
        $info = curl_getinfo($ch);

        if (curl_errno($ch)) {
            throw new Exception('Ocorreu um erro na sua requisição / Info: ' . json_encode($info, JSON_PRETTY_PRINT));
        }

        curl_close($ch);

        return array(
            'response' => $response,
            'info' => $info
        );
    }

    public static function sendDeleteJson($url, $headers = [], $ssl = true, $encoded = true, $timeout = 30)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_HEADER, false);

        if ($ssl === false) {
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        }

        if ($encoded === false) {
            curl_setopt($ch, CURLOPT_ENCODING, "");
        }

        $response = curl_exec($ch);
        $info = curl_getinfo($ch);

        if (curl_errno($ch)) {
            throw new Exception('Ocorreu um erro na sua requisição / Info: ' . json_encode($info, JSON_PRETTY_PRINT));
        }

        curl_close($ch);

        return array(
            'response' => $response,
            'info' => $info
        );
    }

    public static function sendDeleteDataJson($url, $data = [], $headers = [], $ssl = true, $encoded = true, $timeout = 30)
    {
        $ch = curl_init();
        $postFields = (is_array($data) ? json_encode($data) : $data);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
        curl_setopt($ch, CURLOPT_POSTFIELDS, self::escapeSequenceDecode($postFields));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_HEADER, false);

        if ($ssl === false) {
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        }

        if ($encoded === false) {
            curl_setopt($ch, CURLOPT_ENCODING, "");
        }

        $response = curl_exec($ch);
        $info = curl_getinfo($ch);

        if (curl_errno($ch)) {
            throw new Exception('Ocorreu um erro na sua requisição / Info: ' . json_encode($info, JSON_PRETTY_PRINT));
        }

        curl_close($ch);

        return array(
            'response' => $response,
            'info' => $info
        );
    }

    public static function sendPutJson($url, $data, $headers = [], $ssl = true, $encoded = true, $timeout = 30)
    {
        $ch = curl_init();
        $postFields = (is_array($data) ? json_encode($data) : $data);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
        curl_setopt($ch, CURLOPT_POSTFIELDS, self::escapeSequenceDecode($postFields));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_HEADER, false);

        if ($ssl === false) {
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        }

        if ($encoded === false) {
            curl_setopt($ch, CURLOPT_ENCODING, "");
        }

        $response = curl_exec($ch);
        $info = curl_getinfo($ch);

        if (curl_errno($ch)) {
            throw new Exception('Ocorreu um erro na sua requisição / Info: ' . json_encode($info, JSON_PRETTY_PRINT));
        }

        curl_close($ch);

        return array(
            'response' => $response,
            'info' => $info
        );
    }

    public static function log($url, $headers, $data, $response)
    {
        if (Request::get('log')) {
            echo 'URL:<br/>';
            echo $url . '<br/>';
            echo 'HEADER:<br/>';
            echo implode('<br/>', $headers) . '<br/>';
            echo 'BODY:<br/>';
            echo json_encode($data, JSON_PRETTY_PRINT) . '<br/>';
            echo 'RESPONSE:<br/>';
            echo $response . '<br/>';
            exit();
        }
    }
}
