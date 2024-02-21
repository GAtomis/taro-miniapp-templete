export interface AfterSaleCard {
    id: number
    spuId: number
    spuName: string
    skuId: number
    properties: Property[]
    picUrl: string
    count: number
    status: number
    refundPrice: number

    // no: string
    // goodsStatus?: number
    // way: number
    // type: number
    // applyReason: string
    // applyDescription?: string
    // applyPicUrls: any
    // orderId: number
    // orderNo: string
    // orderItemId: number
    // auditReason: any

    // refundTime: number
    // logisticsId: any
    // logisticsNo: any
    // deliveryTime: any
    // receiveTime: any
    // receiveReason: any
  }
  
  export interface Property {
    propertyId: number
    propertyName: string
    valueId: number
    valueName: string
  }