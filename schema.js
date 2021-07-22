const {ApolloServer , gql} = require('apollo-server');


const typeDefs = gql`
    type Product {
        id: Int!
        title: String
        description: String
        type: _CategoryType
        brand: String
        collection: [String]
        category: String
        price: String
        sale: String
        discount: String
        picture:Int
        stock: Int
        new: String
        tags: [String]
        variants: [Variants]
        images:[Images]
        sortBy: _SortBy
      }

      type ProductMasterDetails {
        seqid:ID!
        sku:String
        title:String
        description:String  
        bullepoints:String
        brandid:Int
        categoryid:Int
        isvisible:Int
        isactive:Int
        warehouseid:Int
        metatagdescription:String
        seokeywords:String
        weight:Float
        height:Float
        width:Float
        length:Float
        fromcurrency:String
        asin:String
        brandname:String
        categoryvalue:String
        specifications: [specifications]
        variants(country:String!,panel:String!): [Variants]
        images:[Images]
        }

      type ProductDetails {
        id: ID!
        name: String!
        description: String!
        img_url: String!
        price: String!
        rating: String!
        createdAt: Int
        updatedAt: Int
        user_id: ID!
      }

      type brandmaster{
        brandid: ID!
        brandname: String!
      }


      type miscinfo{
        country: String
        phone: String
        address: String
        emailid: String
        currencysymbol: String
        currencyinletter: String
        facebookacct: String
        instagramacct: String
        twitteracct: String
        googleacct: String
        panel: String
        isright: String
        gstortax: String
        paymentforbusiness: String
        paymentnonbusiness: String
        domain: String
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

     type Currency {
      currency : String
      name : String
      symbol : String
      value : Int
    }
    
    type Instagram {
      type:String
      img:String
    }

    type Brand {
      brand:[String]
    }

    type Color {
      colors:[String]
    }

    type Size {
      size : [String]
    }

    enum _SortBy {
      HighToLow,
      LowToHigh,
      Newest,
      AscOrder,
      DescOrder,
    }

    enum _CategoryType {
      electronics,
      vegetables,
      furniture,
      jewellery,
      fashion,
      beauty,
      flower,
      tools,
      watch,
      metro,
      shoes,
      bags,
      kids,
      game,
      gym,
      pets,
      portfolio,
      goggles,
      videoslider,
      marijuana,
      nursery,
      christmas,
      marketplace,
      light,
      all
      
    }

    type ProductResponse {
      items(limit:Int,indexFrom:Int,keyword:String!,type:String!,promoflag:[String!],relevantProduct:String):[ProductMasterDetails],
      total(keyword:String!,type:String!,promoflag:[String!],relevantProduct:String):_Total,
      hasMore(limit:Int,indexFrom:Int,keyword:String!,type:String!,promoflag:[String!],relevantProduct:String):_hasMore
    }

    type _Total {
      total:Int,
    }

    type _hasMore {
      seqid:Int,
    }
    

    type Blog {
      type:String,
      img:String,
      link:String,
      title:String,
      desc:String,
      date:String,
      shortDesc:String,
      longDesc:String
    }

    input ReferenceNumber {
      id:Int,
      prefix:String,
      noofdigits:Int,
      seed:Int,
      table:String,
      updatedAt:String
    }
    
    input OrderDetail{
      orderdetailid: Int!,
      orderdate:String,
      productimage:String,
      productsku:String,
      producttitle:String,
      quantity:Int,
      totalprice:Float,
      customerid:String,
      customername:String,
      paymentmethod:String,
      paymentdate:String,
      trackingnumber:String,
      orderstatus:String,
      CreatedAt:String,
      UpdatedAt:String,
      address1:String,
      address2:String,
      city:String,
      state:String,
      country:String,
      pin:String,
      phone:String,
      emailid:String,
      gst:String,
      gstname:String
    }

    

    input abandonedcart{
      orderdate:String,
      productimage:String,
      productsku:String,
      producttitle:String,
      quantity:Int,
      totalprice:Float,
      customerid:String,
      customername:String,
      paymentmethod:String,
      paymentdate:String,
      trackingnumber:String,
      orderstatus:String,
      CreatedAt:String,
      UpdatedAt:String,
      address1:String,
      address2:String,
      city:String,
      state:String,
      country:String,
      pin:String,
      phone:String,
      emailid:String,
      gst:String,
      gstname:String
    }

    input Customerinfo{
      customerredid:String
      customername:String
      customerlastname:String
      phonenumber:String
      address1:String
      address2:String
      city:String
      state:String
      country:String
      emailid:String
      googleid:String
      facebookid:String
      createdAt:String
      updatedAt:String
      pincode:String
    }


    type CustomerinfoOut{
      customerredid:String
      customername:String
      customerlastname:String
      phonenumber:String
      address1:String
      address2:String
      city:String
      state:String
      country:String
      emailid:String
      googleid:String
      facebookid:String
      createdAt:String
      updatedAt:String
      pincode:String
    }
    type OrderDetailOut{
      orderdetailid: Int!,
      orderdate:String,
      productimage:String,
      productsku:String,
      producttitle:String,
      quantity:Int,
      totalprice:Float,
      customerid:String,
      customername:String,
      paymentmethod:String,
      paymentdate:String,
      trackingnumber:String,
      orderstatus:String,
      CreatedAt:String,
      UpdatedAt:String,
      address1:String,
      address2:String,
      city:String,
      state:String,
      country:String,
      pin:String,
      phone:String,
      emailid:String,
      gst:String,
      gstname:String
    }

    type abandonedcartOut{
      orderdetailid: Int!,
      orderdate:String,
      productimage:String,
      productsku:String,
      producttitle:String,
      quantity:Int,
      totalprice:Float,
      customerid:String,
      customername:String,
      paymentmethod:String,
      paymentdate:String,
      trackingnumber:String,
      orderstatus:String,
      CreatedAt:String,
      UpdatedAt:String,
      address1:String,
      address2:String,
      city:String,
      state:String,
      country:String,
      pin:String,
      phone:String,
      emailid:String,
      gst:String,
      gstname:String
    }
    

    type ReferenceNumberOut {
      id:Int,
      prefix:String,
      noofdigits:Int,
      seed:Int,
      table:String,
      updatedAt:String
    }
    
    
     type Query {
        product(asin: String!,type: String!,country:String,panel:String): ProductMasterDetails


        productByPromo(promoTag: String!): [ProductMasterDetails]!


        products( indexFrom:Int , limit:Int ,type:String ,text :String ,brand: [String!],size:[String!] , color:String   ,priceMin:Int ,priceMax:Int,keyword:String,country:String,panel:String,promoflag:[String!],relevantProduct:String ): ProductResponse!
        
        productByType(type:String):[Product]
        productByCategory(category:String):[Product]
        instagram(type:String):[Instagram]
        blog(type:String):[Blog]
        getBrands(type:String):Brand!
        getColors(type:String):Color!
        getSize(type:String):Size!
        newProducts(type:String):[Product]
        getProducts(limit:Int):[Product]
        getCurrency:[Currency]
        productsById(id: Int!): [ProductMasterDetails]!
        OrderDetailByCustomerId(CustomerId:String):[OrderDetailOut]!
        MiscinfoByDomain(domain:String):miscinfo!
        CustomerByUID(uid:String):CustomerinfoOut!

      }
  
      type Mutation {
        createReferenceNumber(refObj : ReferenceNumber!):ReferenceNumberOut!
        CreateOrderDetail(order : OrderDetail!):OrderDetailOut!
        Createabandonedcart(abandonedcart : abandonedcart!):abandonedcartOut!
        CreateCustomerDetail(Customer : Customerinfo!):CustomerinfoOut!
        UpdateCustomerDetail(Customer : Customerinfo!):CustomerinfoOut!
        
      }
`;



module.exports = typeDefs