import { Command, Flags } from "@oclif/core";
import path from "path";
import gradient from "gradient-string";

import templates from "../lib/templates.data";
import choices from "../lib/choices.type";
import questions from "../lib/questions";

const inquirer = require("inquirer");
const ncp = require("ncp").ncp;

ncp.limit = 16;

export default class Gen extends Command {
  static description = "command used to generate the desired framework files";

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

    inquirer.prompt(questions).then((answers: any) => {
      let dir: string = answers.dir;
      let template: choices = answers.template;

      ncp(
        path.join(__dirname, "..", "..", "templates", templates[template]),
        path.join(__dirname, dir),
        function (err: any) {
          if (err) {
            console.log(err);
          } else {
            console.log(
              gradient.morning(
                "Files generated successfully n installed the modules! Happy hacking!"
              )
            );
          }
        }
      );
    });
  }
}
