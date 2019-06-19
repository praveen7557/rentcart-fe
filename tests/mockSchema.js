import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './mockResolvers';

export const schema = `
scalar GraphQLJSONObject

type Query {
  category(id: String!): Category,
  city(id: String!): City,
  item(id: String!): Item,
  cities: [City],
  categories: [Category],
  subCategories(id: String): [Category],
  areas(id:String): [Area]
}

type Mutation {
  createCategory(name: String!, parent: String): Category
  createCity(name: String!, lat: Float!, long: Float!): City
  createArea(name: String!, city: String!): Area
  createItem (name: String!,description: String!, images:[String], category: String, currentPrice: Int, price: Int, address: String, location: GraphQLJSONObject, caution: Int, area: String, city: String): Item
} 

type Category {
  id: String,
  name: String,
  parent: Category
}

type City {
  id: String,
  name: String,
  lat: Float,
  long: Float,
}

type Area {
  id: String,
  name: String,
  city: City
}

type Item {
  id: String
  name: String!,
  description: String!,
  images:[String], 
  category: Category, 
  currentPrice: Int, 
  price: Int, 
  address: String, 
  location: Location, 
  caution: Int, 
  area: Area, 
  city: City
}

type Location {
  lat: Float,
  long: Float
}
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
});