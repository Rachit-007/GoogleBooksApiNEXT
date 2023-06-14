import { useRouter } from "next/router";
import React from "react";

const useHome = () => {
  const router = useRouter();

  const handleChange = (event, value) => {
    console.log(value);
    if (router.query.filter) {
      router.push({
        query: {
          search: router.query.search,
          index: value,
          filter: router.query.filter,
        },
      });
    } else {
      router.push({ query: { search: router.query.search, index: value } });
    }
  };
  return { handleChange, router };
};

export default useHome;
