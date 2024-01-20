import Link from "next/link";
import { FC, ReactNode } from "react";
import { IoCloseSharp } from "react-icons/io5";

type ModalProps = {
  children: ReactNode;
  closeLink: string;
};

const Modal: FC<ModalProps> = ({ children, closeLink }) => (
  <>
    <div className="fixed top-0 left-0 right-0 bottom-0  bg-gray-900 bg-opacity-50 z-20 max-h-screen" />
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1f1f1f]  p-12 z-20 rounded-md max-h-screen">
      <Link href={closeLink} className="absolute top-2 right-2 text-xl">
        <button type="button" aria-label="Close modal">
          <IoCloseSharp />
        </button>
      </Link>
      {children}
    </div>
  </>
);
export default Modal;
