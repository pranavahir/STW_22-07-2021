const ProductResolver = require('./productsResolvers')
module.exports = resolvers = {
    Query:{
        product:(_,args) => ProductResolver.product(args),
        productByPromo:(_,args) => ProductResolver.productByPromo(args),
        products:(_,args) => ProductResolver.products(args)
    }
}