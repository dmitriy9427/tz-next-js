"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Modal from "../../../../../components/Modal";
import Link from "next/link";

function Post({ params }) {
  const [item, setitem] = useState();

  const pathName = usePathname();

  const fetchDataItem = async () => {
    const res = await fetch(
      `https://taxivoshod.ru/testapi/?w=item&id=${params.id}`
    );
    const result = await res.json();
    setitem(result);
  };

  useEffect(() => {
    fetchDataItem();
  }, []);

  if (pathName === `/page/${params.number}`) return null;

  return (
    <>
      {item && (
        <Modal>
          <div className="post">
            <Link href={`/page/${params.number}`} />
            <div className="post-modal">
              <h3 className="post-modal__title">{item.name}</h3>
              <p className="post-modal__text">{item.text}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Post;
