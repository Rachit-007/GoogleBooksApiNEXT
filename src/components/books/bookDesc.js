import React from "react";
import { Rating } from "react-simple-star-rating";
import useBookDescription from "../../talons/useBookDescription";
import { MdArrowBackIos } from "react-icons/md";

const BookDescription = ({ book }) => {
  const { desc, showDesc, router } = useBookDescription();

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden mt-6 ">
        <div className="container px-5 py-14 mx-auto max-sm:py-4 max-sm:mt-10">
          <div className="lg:max-w-6xl mx-auto flex flex-wrap relative">
            <button
              onClick={() => {
                router.back();
              }}
              className="absolute -left-3 -top-14 inline-flex h-10 w-20 items-center justify-center rounded-full bg-blue-500 "
            >
              <MdArrowBackIos className="pl-1 text-white" />
              <span className="text-white">Back</span>
            </button>
            {book.imageLinks ? (
              <img
                alt="ecommerce"
                className="w-80 h-96 object-cover object-center rounded "
                src={book.imageLinks.thumbnail}
              />
            ) : (
              <h1>No Image Available</h1>
            )}
            <div className="lg:w-2/3  lg:pl-10 lg:mt-0 max-sm:mt-10">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {book.publisher ? book.publisher : "Not Published Yet"}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {book.title}
              </h1>
              <div className="flex mb-4">
                <Rating initialValue={book.averageRating} readonly size={20} />
                <span className="text-gray-600 mt-1 mx-3">
                  {book.ratingsCount ? book.ratingsCount : "No"} Reviews
                </span>
              </div>
              {book.description ? (
                book.description.length > 1000 ? (
                  !desc ? (
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: book.description.slice(0, 1000) + "...",
                        }}
                      />
                      <button
                        className="text-blue-600 mt-4 underline underline-offset-4"
                        onClick={() => showDesc(true)}
                      >
                        Read More
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: book.description,
                        }}
                      />

                      <button
                        onClick={() => showDesc(false)}
                        className="text-blue-600 mt-4 underline underline-offset-4"
                      >
                        Read less
                      </button>
                    </div>
                  )
                ) : (
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: book.description,
                      }}
                    />

                    <button
                      onClick={() => showDesc(false)}
                      className="text-blue-600 mt-4 underline underline-offset-4"
                    >
                      Read less
                    </button>
                  </div>
                )
              ) : (
                <h1>No description Available</h1>
              )}
              <div className="mt-7">
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Page Count</span>
                  <span className="ml-auto text-gray-900">
                    {book.pageCount ? book.pageCount : "Not Available"}
                  </span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Published On</span>
                  <span className="ml-auto text-gray-900">
                    {book.publishedDate ? book.publishedDate : "Not Available"}
                  </span>
                </div>
                <div className="flex border-t justify-between border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Authors</span>
                  <span className="ml-10 text-gray-900">
                    {book.authors && book.authors.join(",")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDescription;
