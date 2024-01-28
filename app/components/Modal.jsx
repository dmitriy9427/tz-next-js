"use client";

import { useEffect } from "react";
import Link from "next/link";

function Modal({ name, text, number }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="modal">
      <div className="post">
        <div className="post-back"></div>

        <div className="post-modal">
          <Link href={`/page/${number}`}>
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
          <h3 className="post-modal__title">{name}</h3>
          <p className="post-modal__text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
