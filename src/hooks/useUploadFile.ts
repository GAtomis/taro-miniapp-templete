import Taro from '@tarojs/taro'
import { getBaseUrl } from '../utils/http-config'


export function useUploadFile() {
    const proxyUrl = getBaseUrl()
    const chooseAvatar = async (e) => {
        const avatarUrl = e.detail.avatarUrl
        updateLoad(avatarUrl)

    }
    const updateLoad = (avatarUrl: string) => {
        const params = {
            file: avatarUrl
        }
        return new Promise((resolve, reject) => {
            Taro.uploadFile({
                url: proxyUrl + '/app-api/infra/file/upload',
                filePath: avatarUrl,
                name: 'file',
                formData: params,
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Bearer '+Taro.getStorageSync('token'),
                    ['tenant-id']:1,
                    'terminal': '10'

                },
                success: (res) => {
                    console.log(res)
                    const data = JSON.parse(res.data)
                    resolve(data)

                },
                fail: (error) => {
                    reject(error)
                }
            })



        })

    }
    return {
        chooseAvatar,
        updateLoad
    }
}