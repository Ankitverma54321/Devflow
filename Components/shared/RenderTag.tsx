// "use client";

import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge
        className="subtle-medium background-light800_dark400 
      text-light400_light500 rounded-md px-4 py-2 uppercase border-black dark:border-white"
      >
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700 mt-2">
          {totalQuestions}
        </p>
      )}
    </Link>
  );
};

export default RenderTag;
