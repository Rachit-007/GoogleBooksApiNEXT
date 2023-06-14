import { BookList } from "../components/books/bookList";
import { Search } from "../components/seacrh/search";
import client from "../graphql/client";
import { GET_BOOKS } from "../graphql/query/searchbooks";
import { Pagination, Stack } from "@mui/material";
import useHome from "../talons/useHome";
import { ScrollToTop } from "../components/scrollToTop/scrollToTop";
import { Filter } from "../components/filter/filter";
import { getSession } from "next-auth/react";

export default function Home(props) {
  const { router, handleChange } = useHome();

  return (
    <>
      <Search />
      {props.books ? (
        <>
          <div className="max-w-4xl mx-auto mt-5">
            <Filter />
          </div>
          <div className="flex flex-wrap max-w-6xl mx-auto justify-center">
            {props.books.map((book) => (
              <BookList
                books={book.volumeInfo}
                saleInfo={book.saleInfo}
                id={book.id}
                key={book.id}
              />
            ))}
          </div>
          <div className="max-w-6xl m-auto flex justify-center my-10">
            <div>
              <Stack spacing={2}>
                <Pagination
                  count={parseInt(router.query.index) + 10}
                  page={parseInt(router.query.index)}
                  color="primary"
                  onChange={handleChange}
                />
              </Stack>
            </div>
          </div>
          <ScrollToTop />
        </>
      ) : (
        <h1 className="text-center text-2xl mt-10 font-bold">{props.msg}</h1>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  let { query } = context;

  const session = await getSession(context);

  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  if (query.search) {
    try {
      if (query.filter) {
        const { data } = await client.query({
          query: GET_BOOKS,
          variables: {
            input: {
              search: query.search,
              index:
                parseInt(query.index) === 1 ? 1 : parseInt(query.index) * 10,
              filter: query.filter,
            },
          },
        });
        return {
          props: {
            books: data.books,
          },
        };
      } else {
        const { data } = await client.query({
          query: GET_BOOKS,
          variables: {
            input: {
              search: query.search,
              index:
                parseInt(query.index) === 1 ? 1 : parseInt(query.index) * 10,
            },
          },
        });
        return {
          props: {
            books: data.books,
          },
        };
      }
    } catch (err) {
      console.log(err);
      return {
        props: { msg: "No Book Found" },
      };
    }
  } else {
    return {
      props: { msg: "Find Your Favourite Books Here !!!" },
    };
  }
}
