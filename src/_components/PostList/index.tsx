"use client";

import { FADE_IN_UP } from "@/_constants/framer";
import { Post } from "@/_types";
import { motion } from "motion/react";
import Link from "next/link";

export default function PostList({
  index,
  post,
  isFirstPostOfYear,
}: {
  index: number;
  post: Post;
  isFirstPostOfYear: boolean;
}) {
  const { slug, createdYear, createdDate, title } = post;

  return (
    <motion.li
      key={slug}
      className="hover:text-gray cursor-pointer"
      {...FADE_IN_UP}
      transition={{ delay: 0.1 * index }}
    >
      <Link href={`/post/${slug}`}>
        <div className="flex justify-between">
          <div className="flex gap-10">
            <p
              className={`text-gray ${
                isFirstPostOfYear ? "visible" : "invisible"
              }`}
            >
              {createdYear}
            </p>
            <p>{title}</p>
          </div>

          <p className="text-gray">{createdDate}</p>
        </div>
      </Link>
    </motion.li>
  );
}
