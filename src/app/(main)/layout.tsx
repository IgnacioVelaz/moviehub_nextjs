import { ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const layout = ({ children }: layoutProps) => (
  <div className="p-4">
    <h1>Navigation</h1>
    {children}
  </div>
);

export default layout;
