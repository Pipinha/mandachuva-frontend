import Home from "../modules/Home"
import Test from "../modules/Test"
import Middleware from "../modules/Middleware"
import AccountLogin from "../modules/Account/AccountLogin"
import Register from "../modules/Register/Register"

const routes = [
    {
        exact: true,
        path: '/',
        component: Middleware,
        routes: [
            {
                exact: true,
                path: '/register',
                component: Register,
                auth: false,
            },
            {
                exact: true,
                path: '/account/login',
                component: AccountLogin,
                auth: false,
            },
            {
                exact: true,
                path: '/test',
                component: Test,
                auth: false,
            },
            {
                exact: true,
                path: '/',
                component: Home,
                auth: false,
            }
        ],
    },
]

export default routes