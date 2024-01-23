import Link from "next/link";
import { FC, ReactNode } from "react";
import { IoCloseSharp } from "react-icons/io5";

type ModalProps = {
  children: ReactNode;
  closeLink: string;
};

const Modal: FC<ModalProps> = ({ children, closeLink }) => (
  <>
    <Link href={closeLink}>
      <div className="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm" />
    </Link>
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1f1f1f] p-12 z-50 rounded-md max-h-screen">
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
