const Product = require('../../../models/Products')
const mongoose = require('mongoose')

module.exports = {
    product: async(args) => {
        try {
            console.log(args)
           const products = await Product.findOne({asin:args.asin})
           console.log(products)
           if(products){
               return {
                   products,
                   asin:products.asin,
                    brandname:products.brand,
                    title:products.title,
                    image1:products.additional_image_1,
                    image2:products.additional_image_2,
                    image3:products.additional_image_3,
                    image4:products.additional_image_4,
                    country:products.country,
                    categoryvalue:products.category,
                    description:products.features
               }
           }
        } catch (error) {
            throw error
        }

    },
    productByPromo:async(args) => {
        try{

        }
        catch(error){
            throw error
        }
    },
    products:async(args) => {
        console.log(args)
        try{
            const resPerPage = 15;
            const page = args.page
            const products = await Product.find().skip(resPerPage * page - resPerPage).limit(resPerPage)
            if(products){
                return {
                    products,
                   asin:products.asin,
                    brandname:products.brand,
                    title:products.title,
                    image1:products.additional_image_1,
                    image2:products.additional_image_2,
                    image3:products.additional_image_3,
                    image4:products.additional_image_4,
                    country:products.country,
                    categoryvalue:products.category,
                    description:products.features 
                }
            }


        }
        catch(error){
            throw error
        }
    }
}