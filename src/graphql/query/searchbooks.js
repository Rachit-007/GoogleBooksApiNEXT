import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query getBooks($input: searchBook!) {
    books(input: $input) {
      id
      volumeInfo {
        title
        authors
        publisher
        description
        averageRating
        ratingsCount
        imageLinks {
          thumbnail
        }
      }
      saleInfo {
        buyLink
        saleability
      }
    }
  }
`;
