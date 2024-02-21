export interface OrderListItem {
    id?: number
    no?: string
    type?: number
    status?: number
    productCount?: number
    commentStatus?: boolean
    createTime?: number
    payOrderId?: number
    payPrice: number
    deliveryType?: number
    items: Item[],
    [key: string]: any
  }
  
interface Item {
    id: number
    orderId?: number
    spuName: string
    skuId: number
    properties: Property[]
    picUrl: string
    count: number
    commentStatus?: boolean
    price?: number
    payPrice: number
    afterSaleId?: any
    afterSaleStatus?: number
    [key: string]: any
  }
  interface Property{
    propertyId: number
    propertyName:string
    valueId: number
    valueName: string
    [key: string]: any

  }

  export type OrderTradeCount ={
    allCount: number
    deliveredCount: number
    uncommentedCount: number
    undeliveredCount: number
    unpaidCount: number
    afterCount?:number
}