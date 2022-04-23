const questions = [
  {
    name: "dir",
    message: "enter your desired directory",
    default: ".",
  },
  {
    name: "template",
    type: "list",
    message: "Select a template from the list below: ",
    choices: [
      "Next.js w/ Chakra UI",
      "Next.js w/ Chakra UI + Typescript",
      "React.js w/ Chakra UI",
      "React.js w/ Chakra + Typescript",
    ],
  },
  {
    name: "manager",
    type: "list",
    default: "yarn",
    message: "select your preferred pkg manager",
    choices: ["yarn", "npm"],
  },
];

export default questions;
