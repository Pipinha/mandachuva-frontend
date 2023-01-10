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
import CreatorRainlink from "../modules/Creator/CreatorRainlink"
import CreatorJobList from "../modules/Creator/Job/CreatorJobList"
import CreatorJobView from "../modules/Creator/Job/CreatorJobView"
import CreatorBrandView from "../modules/Creator/Brand/CreatorBrandView"
import CreatorBrandList from "../modules/Creator/Brand/CreatorBrandList"
import AccountForgot from "../modules/Account/AccountForgot"
import AccountRecovery from "../modules/Account/AccountRecovery"
import CompanySetting from "../modules/Company/CompanySetting"
import CompanySettingPrivacy from "../modules/Company/CompanySettingPrivacy"

const routes = [
    {
        exact: true,
        path: '/',
        component: Middleware,
        routes: [
            {
                exact: true,
                path: '/company/setting/privacy',
                component: CompanySettingPrivacy,
                auth: true,
            },
            {
                exact: true,
                path: '/company/setting',
                component: CompanySetting,
                auth: true,
            },
            {
                exact: true,
                path: '/company/profile',
                component: CompanyProfile,
                auth: true,
            },
            {
                exact: false,
                path: '/creator/brand/:id',
                component: CreatorBrandView,
                auth: true,
            },
            {
                exact: true,
                path: '/creator/brand',
                component: CreatorBrandList,
                auth: true,
            },
            {
                exact: false,
                path: '/creator/rainjobs/:id',
                component: CreatorJobView,
                auth: true,
            },
            {
                exact: true,
                path: '/creator/rainjobs',
                component: CreatorJobList,
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
                exact: false,
                path: '/creator/:username',
                component: CreatorRainlink,
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
                path: '/account/recovery',
                component: AccountRecovery,
                auth: false,
            },
            {
                exact: true,
                path: '/account/forgot',
                component: AccountForgot,
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