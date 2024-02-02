"use client";

import { Button } from "@/Components/ui/Button";
import Link from "next/link";
import LocalSearchbar from "@/Components/shared/search/LocalSearchbar";
import { HomePageFilters } from "@/constants/filter";
import { Filter } from "@/Components/shared/Filter";
import HomeFilters from "@/Components/home/HomeFilters";
import NoResults from "@/Components/shared/NoResults";
import QustionCard from "@/Components/cards/QustionCard";

const questions = [
  {
    _id: 1,
    title: "cascading deletes in sqlalchemy ?",
    tags: [
      {
        _id: "1",
        name: "python",
      },
      { _id: "2", name: "Database" },
    ],
    author: {
      _id: "1",
      name: "Ankit",
      picture: "url/to/an/ankit/picture.jpg",
    },
    upvotes: 10,
    views: 100000,
    answers: [],
    createdAt: new Date("2020-09-01T12:00:00.000Z"),
  },
  {
    _id: 2,
    title: "why is api request in javascript failing?",
    tags: [
      {
        _id: "3",
        name: "Api",
      },
      { _id: "4", name: "JavaScript" },
    ],
    author: {
      _id: "2",
      name: "Vishal",
      picture: "url/to/vishal/picture.jpg",
    },
    upvotes: 15,
    views: 150,
    answers: [],
    createdAt: new Date("2021-09-01T11:00:00.000Z"),
  },
];

// Now the 'questions' array adheres to the 'QuestionProps' type.

export default function Home() {
  return (
    <>
      <div
        className="flex w-full flex-clo-reverse justify-between
       gap-4 sm:flex-row sm:items-center"
      >
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button
            className="primary-gradient min-h-[46px]
          px-4 py-3 text-light-900"
          >
            Ask a Question
          </Button>
        </Link>
      </div>
      <div
        className="mt-11 flex justify-between gap-5
      max-sm:flex-col sm:items-center"
      >
        <LocalSearchbar
          route="/"
          iconPosition="right"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QustionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResults
            title="There's no Qustion to show"
            description="Be the first to break the silence! Ask a Qustion and kickstart the discussion. our query could be the next big thing others learn from. get involved"
            link="/ask-question"
            linkTitle="Ask a Qustion"
          />
        )}
      </div>
    </>
  );
}
