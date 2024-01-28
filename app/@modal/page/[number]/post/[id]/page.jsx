"use client";

import { useEffect, useState } from "react";
import Modal from "../../../../../components/Modal";
import { usePathname } from "next/navigation";

function Post({ params }) {
  const [item, setitem] = useState();

  const fetchDataItem = async () => {
    const res = await fetch(
      `https://taxivoshod.ru/testapi/?w=item&id=${params.id}`
    );
    const result = await res.json();
    setitem(result);
  };

  const pathName = usePathname();

  useEffect(() => {
    fetchDataItem();
  }, []);

  return (
    <>
      {item && pathName === `/page/${params.number}/post/${params.id}` ? (
        <Modal number={params.number} name={item.name} text={item.text} />
      ) : (
        ""
      )}
    </>
  );
}

export default Post;
