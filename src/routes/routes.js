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
import CompanyCreatorView from "../modules/Company/Creator/CompanyCreatorView"
import CompanyCreatorPostStep1 from "../modules/Company/Creator/CompanyCreatorPostStep1"
import CompanyCreatorPostStep2 from "../modules/Company/Creator/CompanyCreatorPostStep2"
import CompanyCreatorPostStep3 from "../modules/Company/Creator/CompanyCreatorPostStep3"
import CreatorSearch from "../modules/Creator/CreatorSearch"
import CompanyOrderView from "../modules/Company/Order/CompanyOrderView"
import CompanyCreatorInsta from "../modules/Company/Creator/CompanyCreatorInsta"
import CreatorList from "../modules/Creator/Creator/CreatorList"
import CreatorView from "../modules/Creator/Creator/CreatorView"
import CreatorInsta from "../modules/Creator/Creator/CreatorInsta"
import CreatorPostStep1 from "../modules/Creator/Creator/CreatorPostStep1"
import CreatorPostStep2 from "../modules/Creator/Creator/CreatorPostStep2"
import CreatorPostStep3 from "../modules/Creator/Creator/CreatorPostStep3"
import CreatorOrderView from "../modules/Creator/Order/CreatorOrderView"

const routes = [
    {
        exact: true,
        path: '/',
        component: Middleware,
        routes: [
            {
                exact: true,
                path: '/company/order/:id',
                component: CompanyOrderView,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/creator/insta/:id',
                component: CompanyCreatorInsta,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/creator/post-step3/:id',
                component: CompanyCreatorPostStep3,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/creator/post-step2/:id',
                component: CompanyCreatorPostStep2,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/creator/post-step1/:id',
                component: CompanyCreatorPostStep1,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/creator/:id',
                component: CompanyCreatorView,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/creator',
                component: CompanyCreatorList,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: false,
                path: '/company/brand/:id',
                component: CompanyBrandView,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/brand',
                component: CompanyBrandList,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/search',
                component: CompanySearch,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: false,
                path: '/company/rainjobs/:id',
                component: CompanyJobView,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/rainjobs',
                component: CompanyJobList,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: false,
                path: '/company/setting/payment/:id',
                component: CompanySettingPaymentEdit,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/setting/payment',
                component: CompanySettingPayment,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/setting/privacy',
                component: CompanySettingPrivacy,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/setting',
                component: CompanySetting,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/company/profile',
                component: CompanyProfile,
                auth: true,
                profileId: PROFILE_COMPANY,
                public: null
            },
            {
                exact: true,
                path: '/creator/order/:id',
                component: CreatorOrderView,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/post-step3/:id',
                component: CreatorPostStep3,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/post-step2/:id',
                component: CreatorPostStep2,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/post-step1/:id',
                component: CreatorPostStep1,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/insta/:id',
                component: CreatorInsta,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/view/:id',
                component: CreatorView,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/list',
                component: CreatorList,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: false,
                path: '/creator/brand/:id',
                component: CreatorBrandView,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/brand',
                component: CreatorBrandList,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: false,
                path: '/creator/rainjobs/:id',
                component: CreatorJobView,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/rainjobs',
                component: CreatorJobList,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/search',
                component: CreatorSearch,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: false,
                path: '/creator/ready-to-post/edit/:id',
                component: CreatorPostEdit,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/ready-to-post',
                component: CreatorPostList,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/setting/privacy',
                component: CreatorSettingPrivacy,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/setting/social',
                component: CreatorSettingSocial,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/setting',
                component: CreatorSetting,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: true,
                path: '/creator/profile',
                component: CreatorProfile,
                auth: true,
                profileId: PROFILE_CREATOR,
                public: null
            },
            {
                exact: false,
                path: '/creator/:username',
                component: CreatorRainlink,
                auth: null,
                profileId: PROFILE_CREATOR,
                public: true
            },
            {
                exact: true,
                path: '/register',
                component: Register,
                auth: false,
                profileId: null,
                public: null
            },
            {
                exact: true,
                path: '/account/recovery',
                component: AccountRecovery,
                auth: false,
                profileId: null,
                public: null
            },
            {
                exact: true,
                path: '/account/forgot',
                component: AccountForgot,
                auth: false,
                profileId: null,
                public: null
            },
            {
                exact: true,
                path: '/account/login',
                component: AccountLogin,
                auth: false,
                profileId: null,
                public: null
            },
            {
                exact: true,
                path: '/test',
                component: Test,
                auth: false,
                profileId: null,
                public: null
            },
            {
                exact: true,
                path: '/',
                component: Home,
                auth: false,
                profileId: null,
                public: null
            }
        ],
    },
]

export default routes