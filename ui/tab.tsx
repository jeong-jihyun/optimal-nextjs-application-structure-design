"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { Item } from "./tab-group";
import Link from "next/link";
import clsx from "clsx";

interface TabProps {
  path: string;
  paralleRoutesKey?: string;
  item: Item;
}

export const Tab = ({ path, paralleRoutesKey, item }: TabProps) => {
  const segment = useSelectedLayoutSegment(paralleRoutesKey);
  const href = item.slug ? path + "/" + item.slug : path;
  const isActive =
    (!item.slug && segment == null) ||
    segment === item.segment ||
    segment === item.slug;

  return (
    <Link
      href={href}
      className={clsx("rounded-lg px-3 py-1 text-sm font-medium", {
        "bg-gray-50 text-gray-400 hover:bg-gray-500 hover:text-white": isActive,
        "bg-vercel-blue text-gray-800": isActive,
      })}
    >
      {item.text}
    </Link>
  );
};
