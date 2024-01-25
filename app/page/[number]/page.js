"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "../../components/Pagination/Pagination";

function Pages({ params }) {
  const [items, setItems] = useState(null);
  const [page, setPage] = useState(+params.number);
  const [pages, setPages] = useState();

  async function fetchdata() {
    const res = await fetch(
      `https://taxivoshod.ru/testapi/?w=list&page=${page}`
    );
    const data = await res.json();
    setItems(data.items);
    setPage(data.page);
    setPages(data.pages);
  }

  useEffect(() => {
    fetchdata();
  }, [page]);

  const pagesLength = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <>
      <div className="page">
        <h2 className="page__header">
          {page === 1 ? "Первая" : "Вторая"} страница
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
              <p>"Попробуйте перезагрузить страницу или зайдите позже ..."</p>
            </div>
          )}
        </ul>
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
      </div>
    </>
  );
}

export default Pages;
