export interface SkuAttributes {
    propertyId: any
    propertyName: any
    valueId: any
    valueName: any
    brandNames: string[]
    categoryNames: string[]
    spuAttrs: SpuAttr[]
  }
  
  export interface SpuAttr {
    attrId: number
    attrName: string
    attrValues: string[]
  }
  