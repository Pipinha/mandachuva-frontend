import Home from "../modules/Home"
import Middleware from "../modules/Middleware"

const routes = [
    {
        exact: true,
        path: '/',
        component: Middleware,
        routes: [
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