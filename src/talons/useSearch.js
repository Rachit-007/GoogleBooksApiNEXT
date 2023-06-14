import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useSearch = () => {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  const onSearch = (data) => {
    if (data.search) {
      router.push({ query: { search: data.search, index: 1 } });
    }
  };

  useEffect(() => {
    if (router.query) {
      setValue("search", router.query.search);
    }
  }, []);

  return { register, handleSubmit, onSearch };
};

export default useSearch;
