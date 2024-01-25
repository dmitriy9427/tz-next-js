"use client";

import { usePathname } from "next/navigation";

function Modal({ children, onClose }) {
  const pathName = usePathname();

  console.log(pathName);

  if (pathName === `/`) return null;

  return (
    <div onClick={onClose} className="modal">
      {children}
    </div>
  );
}

export default Modal;
