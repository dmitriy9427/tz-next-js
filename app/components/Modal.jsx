"use client";

import { useEffect } from "react";

function Modal({ children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return <div className="modal">{children}</div>;
}

export default Modal;
