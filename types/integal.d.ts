
export  interface SignInConfig{
    day:number,
    point:number
    

}

export interface SignInRecord{

    createTime: number
        day: number
        experience: number
        point: number
}

export interface SignInRecordSummary{
    continuousDay: number
        todaySignIn: boolean
        totalDay: number

}