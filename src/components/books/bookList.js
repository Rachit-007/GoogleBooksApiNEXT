import Link from "next/link";
import React from "react";

export const BookList = ({ books, id, saleInfo }) => {
  let sale = saleInfo.saleability == "FOR_SALE" ? "FOR SALE" : "NOT FOR SALE";

  return (
    <>
      <div className="relative w-72 mx-2 my-7 max-h-100 p-3 overflow-hidden flex-col justify-between items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div
          className={`absolute top-10 right-10 w-full text-center shadow-black shadow-md h-8 text-sm flex items-center justify-center transform rotate-45  -translate-y-1/2 translate-x-1/2 text-white font-bold whitespace-nowrap ${
            sale === "FOR SALE" ? `bg-green-500` : `bg-red-600`
          }`}
        >
          <span>{sale}</span>
        </div>
        <div className="mx-auto flex justify-center">
          {books.imageLinks ? (
            <img
              className="rounded-t-lg h-72 "
              src={books.imageLinks.thumbnail}
            />
          ) : (
            <h1 className="rounded-t-lg h-72 items-center ">
              Image Unavailable
            </h1>
          )}
        </div>
        <div className="p-5 flex-1 h-100">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-16 overflow-hidden text-ellipsis">
              {books.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[70px] overflow-hidden">
            {books.description}...
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/book/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Learn More
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          {sale === "FOR SALE" ? (
            <a href={saleInfo.buyLink} target="_blank">
              <div className="flex items-center">
                <span className="text-sm text-gray-400 font-bold">
                  GET IT ON
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="30px"
                  height="30px"
                >
                  <path
                    fill="#01579b"
                    d="M8,40.884V7.116c0-1.622,1.752-2.639,3.161-1.835l29.547,16.881c1.42,0.811,1.42,2.858,0,3.669 L11.161,42.718C9.753,43.523,8,42.506,8,40.884z"
                  />
                  <polygon
                    fill="#00e5ff"
                    points="36,28.522 36,10 18,10 18,38.81"
                  />
                  <polygon
                    fill="#00b0ff"
                    points="18,38.81 18,10 13,10 13,41.667"
                  />
                  <polygon
                    fill="#fff"
                    points="33,17.71 30.509,16.21 28,17.71 28,10 33,10"
                  />
                </svg>
              </div>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
