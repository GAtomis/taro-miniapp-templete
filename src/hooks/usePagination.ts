import React,{ useRef,useState } from "react";

export default function () {

    const pagination = useRef({
        pageNo: 1,
        pageSize: 10,
        isFull: false
    })




  /**
 * @description: 修正请求分页参数
 * @param {any} data 当前请求参数
 * @param {*} isInit 是否初始化
 * @return {*}
 */
    const modifyParams = (data: any[] = [], isInit = false) => {
        if (isInit) {
            pagination.current = {
                pageSize: 10,
                pageNo: 1,
                isFull: false
            }
            return
        }
        if (data.length < pagination.current.pageSize) {
            console.log("有被锁");

            pagination.current.isFull = true
            console.log("有被锁", pagination.current);
        } else {
            pagination.current.pageNo++
        }

    }


    return {

        pagination,
        modifyParams


    }


}
export const updateList:<T=any[]>(state:[data:T,fn:React.Dispatch<React.SetStateAction<T>>],list:T,pageIndex:number) =>void=([data,setData],list,pageIndex)=>{

    pageIndex===1?setData(list):setData([...data,...list])

}

export interface UsePagination<T extends Pagination=Pagination>{

    getListFn:(params?:T )=>Promise<any>
    

}
