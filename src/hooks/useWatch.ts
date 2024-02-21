import React, { useEffect, useRef, useState } from 'react'

/**
 * @description: 类似vue watch
 * @param {*} getState 返回一个被监听state对象
 * @param {function} effect 回调一个数据改变后的函数
 * @param {object} opt 配置参数
 * @return {*}
 */
 const useWatch=<T=any>(getState:()=>T, effect: (newVal: T) => void, opt: {
    immediately: boolean
} = {
        immediately: false
    }) => {
    const initPage = useRef(true)

    useEffect(() => {
        console.log('effect');
        if(!opt.immediately){
            if(initPage.current){
                initPage.current=false
                return
            }
        }
        effect(getState())
    }, [getState()])
}

export default useWatch