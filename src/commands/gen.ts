import { Command, Flags } from "@oclif/core";
import path from "path";

import templates from "../lib/templates.data";
import choices from "../lib/choices.type";

const inquirer = require("inquirer");
const ncp = require("ncp").ncp;

ncp.limit = 16;

export default class Gen extends Command {
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Gen);

    this.log(path.join("..", "..", "templates", "next-js"));

    inquirer
      .prompt({
        name: "template",
        type: "list",
        message: "Select a template from the list below: ",
        choices: [
          "Next.js w/ Chakra UI",
          "Next.js w/ Chakra UI + Typescript",
          "React.js w/ Chakra UI",
          "React.js w/ Chakra + Typescript",
        ],
      })
      .then((answer: any) => {
        let ans: choices = answer.template;

        ncp(
          path.join(__dirname, "..", "..", "templates", templates[ans]),
          path.join(__dirname, "..", "..", "output"),
          function (err: any) {
            if (err) {
              console.log(err);
            } else {
              console.log("done sire!");
            }
          }
        );
      });
  }
}
