import { Cat } from "./models/Cat";
import { Product } from "./models/Product";
export const resolvers = {
  Query: {
    hello: () => "hi",
    cats: () => Cat.find(),
    products: () => Product.find({category:"Electronics"})
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    }
  }
};
