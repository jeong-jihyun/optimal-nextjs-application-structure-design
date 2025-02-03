"use client";

import clsx from "clsx";
import React, { useEffect } from "react";
import { Tab } from "../../ui/tab";

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export function RandomPostTab({ path }: { path: string }) {
  const [posts, setPosts] = React.useState<null | {
    text: string;
    slug: string;
  }>(null);

  useEffect(() => {
    const randomId = String(randomNumber(3, 100));
    setPosts({
      text: `포스트 ${randomId}`,
      slug: randomId,
    });
  }, []);
  return (
    <div
      className={clsx("inline-flex transition", {
        "opacity-0": !posts,
        "opacity-100": posts,
      })}
    >
      {posts ? (
        <Tab path={path} item={{ text: posts.text, slug: posts.slug }} />
      ) : null}
    </div>
  );
}
