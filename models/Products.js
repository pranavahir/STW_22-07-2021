const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    seqid:{
        type:String
    },
    title:{
        type:String

    },
    description:{
        type:String

    },
    asin:{
        type:String

    },
    brandname:{
        type:String

    },
    categoryvalue:{
        type:String

    },
    country:{
        type:String

    },
    image1:{
        type:String

    },
    image2:{
        type:String

    },
    image3:{
        type:String

    },
    image4:{
        type:String

    }
})
/*
const product = mongoose.model("product", { 
    _id: String,
    initial_identifier: String,
    asin: String,
    additional_image_1: String,
    additional_image_2: String,
    additional_image_3: String,
    additional_image_4: String,
    all_categories: String,
    aspect_ratio: String,
    binding: String,
    brand: String,
    category: String,
    cpu_type: String,
    description: String,
    display_size: String,
    ean: String,
    features: String,
    item_dimensions_height: String,
    item_dimensions_length: String,
    item_dimensions_weight: String,
    item_dimensions_width: String,
    label: String,
    large_image: String,
    manufacturer: String,
    model: String,
    mpn: String,
    number_of_discs: String,
    number_of_issues: String,
    number_of_items: String,
    number_of_pages: String,
    operating_system: String,
    package_dimensions_height: String,
    package_dimensions_length: String,
    package_dimensions_weight: String,
    package_dimensions_width: String,
    package_quantity: String,
    part_num: String,
    processor_count: String,
    product_group: String,
    product_type_name: String,
    publisher: String,
    sku: String,
    subcategory: String,
    system_memory_size: String,
    system_memory_type: String,
    title: String,
    upc: String,
    buybox_new_landed_price: String,
    buybox_new_listing_price: String,
    buybox_new_shipping_price: String,
    list_price_currency_code: String,
    lowest_new_price: String,
    lowest_new_price_fba: String,
    lowest_new_price_merchant: String,
    total_new_sellers: String,
    total_new_sellers_fba: String,
    total_new_sellers_merchant: String,
    country: String
 });
 */
const Index = ProductSchema.index({asin:1})
module.exports = Product = mongoose.model('Product',ProductSchema)