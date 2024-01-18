import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className="px-4 m-auto w-11/12 xl:w-[1170px] ">{children}</div>
);

export default Container;
