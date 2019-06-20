import gql from "graphql-tag";

export const getItem = gql`
query GetItem($id:String!){
  item(id: $id){
    name,
    id,
    images,
    price,
    city{
      id,
      name
    },
    category{
      id,
      name
    },
    area{
      id,
      name
    },
    location{
      lat
    }
  }
}`;