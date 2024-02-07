import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "./RenderTag";
import { hotQuestions, popularTags } from "@/constants";

export const RightSidebar = () => {
  return (
    <section
      className="background-light900_dark200 light-border
    sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto
    border-1 p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden
    "
    >
      <div className="background-light700_dark200 px-4 py-4 rounded-lg">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[15px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 background-light700_dark200 px-4 py-4 rounded-lg">
        <h3 className="h3-bold text-dark200_light900 ">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4 ">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};
