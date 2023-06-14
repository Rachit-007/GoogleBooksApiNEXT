import { useRouter } from "next/router";
import React, { useState } from "react";

const useBookDescription = () => {
  const router = useRouter();
  const [desc, showDesc] = useState(false);

  return { desc, showDesc, router };
};

export default useBookDescription;
