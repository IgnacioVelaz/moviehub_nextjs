import { IoMdLogOut } from "react-icons/io";

const LogoutBtn = () => (
  <div className="absolute left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100">
    <a href="/api/auth/logout" aria-label="logout">
      <IoMdLogOut />
    </a>
  </div>
);
export default LogoutBtn;
