"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Pagination from "../../components/Pagination/Pagination";

function Pages({ params }) {
  const [items, setItems] = useState(null);
  const [page, setPage] = useState(+params.number);
  const [pages, setPages] = useState();

  const pathName = usePathname();

  async function generateStaticParams() {
    const res = await fetch(
      `https://taxivoshod.ru/testapi/?w=list&page=${page}`
    );
    const data = await res.json();
    setItems(data.items);
    setPage(data.page);
    setPages(data.pages);
  }

  useEffect(() => {
    generateStaticParams();
  }, [page, pathName]);

  const pagesLength = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <>
      <div className="page">
        <h2 style={{ color: "rgb(58, 72, 192)" }} className="page__header">
          {page === 1 ? "Первая страница" : "Вторая страница"}
        </h2>
        <ul className="page__list">
          {items ? (
            items.map((item) => {
              return (
                <Link
                  className="page__list-item"
                  key={item.id}
                  href={`/?page=${page}/?post=${item.id}`}
                  as={`/page/${page}/post/${item.id}`}
                  passHref
                >
                  <p>{item.name}</p>
                  <button>Посмотреть</button>
                </Link>
              );
            })
          ) : (
            <div className="error">
              <h2>Загрузка ...</h2>
            </div>
          )}
        </ul>
      </div>
      {items ? (
        <Pagination
          page={page}
          setPage={setPage}
          Link={Link}
          pagesLength={pagesLength}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Pages;
