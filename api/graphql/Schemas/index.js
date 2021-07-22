const { gql } = require('apollo-server')

module.exports = gql`
type Images {
    productid:ID!
    mainimageurl: String
    additionalimage1: String
    additionalimage2: String
    additionalimage3: String
    additionalimage4: String
    additionalimage5: String
}
type Variants {
    variantid:Int
    sku:String
    productid:Int
    color:String
    size:String
    processor:String
    graphics:String
    price:Float
    discount:Float
    pwfee:Float
    purchasetax:Float
    conversionrate:Float
    frieghtrate:Float
    daystoship:Int
    duty:Float
    taxes:Float
    fees:Float
    margin:Float 
    quantity:Int
    domesticfreight:Float
   }
   type specifications{
    seqid:ID!
    productid:ID!
    upc: String
    mpn: String
    partnumber: String
    isbn: String
    screendisplaysize: String
    maxscreenresolution: String
    processor: String
    ram: String
    memoryspeed: String
    harddrive: String
    graphiccoprocessor: String
    chipsetbrand: String
    carddescription: String
    wirelesstype: String
    numberofusb2port: String
    numberofusb3port: String
    avgbatterylife: String
    series: String
    operatingsystem: String
    processorbrand: String
    processorcount: String
    computermemorytype: String
    flashmemorysize: String
    hardriveinterface: String
    harddriverotationalspeed: String
    batteries: String
    itemdimension: String
    productdimension: String
    opticalzoom: String
    publisher: String
    size: String

}
type ProductMasterDetails {
    seqid:ID!
    title:String
    description:String  
    asin:String
    brandname:String
    categoryvalue:String
    country:String
    image1:String
    image2:String
    image3:String
    image4:String
    }
    type _Total {
        total:Int,
    }
      type _hasMore {
        seqid:Int,
      }
      type ProductResponse {
        items:[ProductMasterDetails],
        total(keyword:String!,type:String!,promoflag:[String!],relevantProduct:String):_Total,
        hasMore(limit:Int,indexFrom:Int,keyword:String!,type:String!,promoflag:[String!],relevantProduct:String):_hasMore
      }

      type Query{
        product(_id:ID!,asin: String!,type: String!,country:String,panel:String): ProductMasterDetails
        productByPromo(promoTag: String!): [ProductMasterDetails]!
        products( page:Int!,indexFrom:Int , limit:Int ,type:String ,text :String ,brand: [String!],size:[String!] , color:String   ,priceMin:Int ,priceMax:Int,keyword:String,country:String,panel:String,promoflag:[String!],relevantProduct:String ): ProductResponse!
      }
`