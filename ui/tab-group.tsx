"use client";

import { Tab } from "./tab";

export type Item = {
  text: string;
  slug?: string;
  segment?: string;
  paralleRoutesKey?: string;
};

export const TabGroup = ({
  path,
  paralleRoutesKey,
  items,
}: {
  path: string;
  paralleRoutesKey?: string;
  items: Item[];
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item) => (
        <Tab
          key={path + item.slug}
          item={item}
          path={path}
          paralleRoutesKey={paralleRoutesKey}
        />
      ))}
    </div>
  );
};
