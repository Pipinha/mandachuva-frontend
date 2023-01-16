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
import CompanySettingPayment from "../modules/Company/CompanySettingPayment"
import CompanySettingPaymentEdit from "../modules/Company/CompanySettingPaymentEdit"
import CompanyJobList from "../modules/Company/Job/CompanyJobList"
import CompanySearch from "../modules/Company/CompanySearch"
import { PROFILE_COMPANY, PROFILE_CREATOR } from "../constants/Config"
import CompanyBrandList from "../modules/Company/Brand/CompanyBrandList"
import CompanyBrandView from "../modules/Company/Brand/CompanyBrandView"
import CompanyCreatorList from "../modules/Company/Creator/CompanyCreatorList"
import CompanyJobView from "../modules/Company/Job/CompanyJobView"

const routes = [
    {
        exact: true,
        path: '/',
        component: Middleware,
        routes: [
            {
                exact: true,
                path: '/company/creator',
                component: CompanyCreatorList,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: false,
                path: '/company/brand/:id',
                component: CompanyBrandView,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: true,
                path: '/company/brand',
                component: CompanyBrandList,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: true,
                path: '/company/search',
                component: CompanySearch,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: false,
                path: '/company/rainjobs/:id',
                component: CompanyJobView,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: true,
                path: '/company/rainjobs',
                component: CompanyJobList,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: false,
                path: '/company/setting/payment/:id',
                component: CompanySettingPaymentEdit,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: true,
                path: '/company/setting/payment',
                component: CompanySettingPayment,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: true,
                path: '/company/setting/privacy',
                component: CompanySettingPrivacy,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: true,
                path: '/company/setting',
                component: CompanySetting,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: true,
                path: '/company/profile',
                component: CompanyProfile,
                auth: true,
                profileId: PROFILE_COMPANY
            },
            {
                exact: false,
                path: '/creator/brand/:id',
                component: CreatorBrandView,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: true,
                path: '/creator/brand',
                component: CreatorBrandList,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: false,
                path: '/creator/rainjobs/:id',
                component: CreatorJobView,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: true,
                path: '/creator/rainjobs',
                component: CreatorJobList,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: false,
                path: '/creator/ready-to-post/edit/:id',
                component: CreatorPostEdit,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: true,
                path: '/creator/ready-to-post',
                component: CreatorPostList,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: true,
                path: '/creator/setting/privacy',
                component: CreatorSettingPrivacy,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: true,
                path: '/creator/setting/social',
                component: CreatorSettingSocial,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: true,
                path: '/creator/setting',
                component: CreatorSetting,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: true,
                path: '/creator/profile',
                component: CreatorProfile,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: false,
                path: '/creator/:username',
                component: CreatorRainlink,
                auth: true,
                profileId: PROFILE_CREATOR
            },
            {
                exact: true,
                path: '/register',
                component: Register,
                auth: false,
                profileId: null
            },
            {
                exact: true,
                path: '/account/recovery',
                component: AccountRecovery,
                auth: false,
                profileId: null
            },
            {
                exact: true,
                path: '/account/forgot',
                component: AccountForgot,
                auth: false,
                profileId: null
            },
            {
                exact: true,
                path: '/account/login',
                component: AccountLogin,
                auth: false,
                profileId: null
            },
            {
                exact: true,
                path: '/test',
                component: Test,
                auth: false,
                profileId: null
            },
            {
                exact: true,
                path: '/',
                component: Home,
                auth: false,
                profileId: null
            }
        ],
    },
]

export default routes