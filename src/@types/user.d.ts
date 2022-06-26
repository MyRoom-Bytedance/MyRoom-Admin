/**
 * 用户基础信息
 */
type UserBaseInfo = {
    autoLogin?: boolean,  // 自动登录功能使用
    token?: string,
    uid: string,
    nickname: string,
    avatar?: string,
}

/**
 * 用户敏感信息
 */
type UserSensitiveInfo = {
    username: string,
    password: string,
}

/**
 * 完整用户信息
 */
type FullUserInfo = UserBaseInfo & UserSensitiveInfo;