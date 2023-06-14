import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import BookDescription from "../../components/books/bookDesc";
import client from "../../graphql/client";
import { GET_SINGLE_BOOK } from "../../graphql/query/getSingleBook";

const Book = ({ book }) => {
  return <>{book && <BookDescription book={book} />}</>;
};

export default Book;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  let id = context.params.id;

  try {
    let { data } = await client.query({
      query: GET_SINGLE_BOOK,
      variables: { bookId: id },
    });
    return {
      props: {
        book: data.book.volumeInfo,
      },
    };
  } catch (err) {
    return {
      props: {
        book: "Details Unvailable",
      },
    };
  }
};
