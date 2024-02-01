import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    _id: 1,
    title: "How do I use Express as a custom server in NextJs?",
  },
  {
    _id: 2,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side",
  },
  {
    _id: 3,
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: 4,
    title: "Async/Await Function Not Handling Errors Properly",
  },
  {
    _id: 5,
    title: "How to Perfectly Center a Div with Tailwind CSS?",
  },
];

const popularTags = [
  { _id: 1, name: "javaScript", totalQuestions: 14 },
  { _id: 2, name: "Next.js", totalQuestions: 10 },
  { _id: 3, name: "React", totalQuestions: 25 },
  { _id: 4, name: "Machine Learning", totalQuestions: 15 },
  { _id: 5, name: "goLang", totalQuestions: 5 },
];

export const RightSidebar = () => {
  return (
    <section
      className="background-light900_dark200 light-border
    sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto
    border-1 p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden
    "
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
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
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
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
