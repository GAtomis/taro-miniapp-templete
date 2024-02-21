export interface CouponAttr {
    id: number
    name: string
    status: number
    usePrice: number
    validStartTime: number
    validEndTime: number
    discountType: number
    discountPercent: any
    discountPrice: number
    discountLimitPrice: any
    productScope:number
  }

  export interface CouponTemp {
    id: number
    name: string
    takeLimitCount: number
    usePrice: number
    productScope: number
    validityType: number
    validStartTime?: number
    validEndTime?: number
    fixedStartTerm?: number
    fixedEndTerm?: number
    discountType: number
    discountPercent?: number
    discountPrice: number
    discountLimitPrice?: number
    canTake: boolean
  }
  