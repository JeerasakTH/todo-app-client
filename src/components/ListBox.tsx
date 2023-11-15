import React from "react";
import List from "./List";

type Props = {};

const ListBox = (props: Props) => {
  return (
    <div className="row-span-2 flex flex-col items-center gap-4 px-16 pt-6">
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default ListBox;
