"use client";

import { useEffect, useState } from "react";
import Modal from "../../../../../components/Modal";
import Link from "next/link";
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
        <Modal>
          <div className="post">
            <div className="post-back"></div>

            <div className="post-modal">
              <Link href={`/page/${params.number}`}>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <h3 className="post-modal__title">{item.name}</h3>
              <p className="post-modal__text">{item.text}</p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default Post;
