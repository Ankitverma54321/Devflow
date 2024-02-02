import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const theme = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer" },
];
export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const hotQuestions = [
  {
    _id: "1",
    title: "How do I use Express as a custom server in NextJs?",
  },
  {
    _id: "2",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side",
  },
  {
    _id: "3",
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: "4",
    title: "Async/Await Function Not Handling Errors Properly",
  },
  {
    _id: "5",
    title: "How to Perfectly Center a Div with Tailwind CSS?",
  },
];

export const popularTags = [
  { _id: "1", name: "javaScript", totalQuestions: 14 },
  { _id: "2", name: "Next.js", totalQuestions: 10 },
  { _id: "3", name: "React", totalQuestions: 25 },
  { _id: "4", name: "Machine Learning", totalQuestions: 15 },
  { _id: "5", name: "goLang", totalQuestions: 5 },
];
