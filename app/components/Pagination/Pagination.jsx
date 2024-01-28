import "./Pagination.css";
import Link from "next/link";

function Pagination({ page, setPage, pagesLength }) {
  return (
    <div className="pagination">
      {page <= 1 ? (
        ""
      ) : (
        <Link
          className="pagination__button"
          href="/page/1"
          onClick={() => setPage((prev) => prev - 1)}
        >
          Назад
        </Link>
      )}
      <ul className="pagination-list">
        {pagesLength !== 0
          ? pagesLength.map((num) => {
              return (
                <Link
                  key={num}
                  className="pagination-list__item pagination-list__item-link"
                  href={`/page/${num}`}
                >
                  {num}
                </Link>
              );
            })
          : ""}
      </ul>
      {page > 1 ? (
        ""
      ) : (
        <Link
          className="pagination__button"
          href="/page/2"
          onClick={() => setPage(page + 1)}
        >
          Вперед
        </Link>
      )}
    </div>
  );
}

export default Pagination;
