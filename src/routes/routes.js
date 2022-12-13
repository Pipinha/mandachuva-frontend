import Home from "../modules/Home"
import Test from "../modules/Test"
import Middleware from "../modules/Middleware"
import AccountLogin from "../modules/Account/AccountLogin"
import Register from "../modules/Register/Register"
import CreatorProfile from "../modules/Creator/CreatorProfile"
import CompanyProfile from "../modules/Company/CompanyProfile"

const routes = [
    {
        exact: true,
        path: '/',
        component: Middleware,
        routes: [
            {
                exact: true,
                path: '/company/profile',
                component: CompanyProfile,
                auth: true,
            },
            {
                exact: true,
                path: '/creator/profile',
                component: CreatorProfile,
                auth: true,
            },
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