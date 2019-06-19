import gql from 'graphql-tag';

export const getItems = gql`
query {
  items {
    id,
    name,
    images,
    area {
      id,name
    },
    city {
      id,name
    },
    price
  }
}`;