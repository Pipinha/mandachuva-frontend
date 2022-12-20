import Home from "../modules/Home"
import Test from "../modules/Test"
import Middleware from "../modules/Middleware"
import AccountLogin from "../modules/Account/AccountLogin"
import Register from "../modules/Register/Register"
import CreatorProfile from "../modules/Creator/CreatorProfile"
import CompanyProfile from "../modules/Company/CompanyProfile"
import CreatorSetting from "../modules/Creator/CreatorSetting"
import CreatorSettingSocial from "../modules/Creator/CreatorSettingSocial"
import CreatorPostList from "../modules/Creator/Post/CreatorPostList"
import CreatorPostEdit from "../modules/Creator/Post/CreatorPostEdit"
import CreatorSettingPrivacy from "../modules/Creator/CreatorSettingPrivacy"

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
                exact: false,
                path: '/creator/ready-to-post/edit/:id',
                component: CreatorPostEdit,
                auth: true,
            },
            {
                exact: true,
                path: '/creator/ready-to-post',
                component: CreatorPostList,
                auth: true,
            },
            {
                exact: true,
                path: '/creator/setting/privacy',
                component: CreatorSettingPrivacy,
                auth: true,
            },
            {
                exact: true,
                path: '/creator/setting/social',
                component: CreatorSettingSocial,
                auth: true,
            },
            {
                exact: true,
                path: '/creator/setting',
                component: CreatorSetting,
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