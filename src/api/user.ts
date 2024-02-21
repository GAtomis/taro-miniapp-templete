import http from '../utils/request-api'

export function login(data:LoginParams) {
    return http.request<Result<any>>({
        method: 'POST',
        url: '/member/auth/weixin-mini-app-login',
        data
    })
}
export function getUserInfo() {
    return http.request<Result<any>>({
        method: 'GET',
        url: '/member/user/get',
  
    })
}
export function updateUserInfo(data:{
    nickname?: string
    avatar?: string
}) {
    return http.request<Result<any>>({
        method: 'PUT',
        url: '/member/user/update',
        data
    })
}


// point
export function getUserPoint(data) {
    return http.request<Result<any>>({
        method: 'GET',
        url: '/member/point/record/page',
        data
    })
}
