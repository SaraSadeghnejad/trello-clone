import React, { ReactNode } from "react";
interface ListWrapperProps {
  children: ReactNode;
}
const ListWrapper = ({ children }: ListWrapperProps) => {
  return <li className="shrink-0 list-none h-full w-[272px] select-none">{children}</li>;
};

export default ListWrapper;
