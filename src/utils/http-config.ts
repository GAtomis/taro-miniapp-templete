
//成功code码
const successCode = [0, 200, 601, 1008008000, 1007002004, 1008006004, 1011000102, 1011000020]
//错误code码
const errorCode = [404, 500, 403, 401,]
// http://192.168.1.142:48083 https://mall.wiseid.cn
// https://test.wiseid.cn
let proxyUrl = 'https://mall.wiseid.cn'

const rootPath = process.env.TARO_APP_ROOT_PATH

function getBaseUrl() {

    switch (process.env.NODE_ENV) {
        // case 'development': proxyUrl = 'http://192.168.1.142:48080'
        //     break;

        default: proxyUrl = process.env.TARO_APP_API as string
            break;
    }

    return proxyUrl

}
export {
    successCode,
    errorCode,
    getBaseUrl,
    rootPath
}