"use client";

import { Button } from "@/Components/ui/Button";
import Link from "next/link";
import LocalSearchbar from "@/Components/shared/search/LocalSearchbar";
import { HomePageFilters } from "@/constants/filter";
import { Filter } from "@/Components/shared/Filter";
import HomeFilters from "@/Components/home/HomeFilters";

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
    </>
  );
}
