import { gql } from "@apollo/client";

export const GET_SINGLE_BOOK = gql`
  query Book($bookId: String!) {
    book(id: $bookId) {
      id
      volumeInfo {
        title
        authors
        publisher
        description
        pageCount
        averageRating
        ratingsCount
        publishedDate
        imageLinks {
          thumbnail
        }
      }
    }
  }
`;
