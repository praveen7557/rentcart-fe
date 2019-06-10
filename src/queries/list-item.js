import gql from 'graphql-tag';

export const getCities = gql`
query getCities {
  cities {
    id,
    name
  }
}
`;

export const getCategories = gql`
query getCategories {
  categories {
    id,
    name
  }
}`;

export const getSubCategories = gql`
query getSubCategories($id: String) {
  subCategories(id: $id) {
    id,
    name
  }
}
`;


export const getAreas = gql`
query getAreas($id: String) {
  areas(id: $id) {
    id,
    name
  }
}`;

export const createItem = gql`
mutation CreateItem ($name: String!,$description: String!, $images:[String], $category: String, $currentPrice: Int, $price: Int, $address: String, $location: GraphQLJSONObject, $caution: Int, $area: String, $city: String){
  createItem(name: $name, description: $description, images:$images, category: $category, currentPrice: $currentPrice, price: $price, address: $address, location: $location, caution: $caution, area: $area, city: $city){
    id,
    name
  }
}`;