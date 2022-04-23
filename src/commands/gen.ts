import { Command } from "@oclif/core";

import * as path from "path";
import { cwd } from "process";
import * as gradient from "gradient-string";
import * as shell from "shelljs";
import * as inquirer from "inquirer";
import * as ncp from "ncp";

import templates from "../lib/templates.data";
import choices from "../lib/choices.type";
import questions from "../lib/questions";

export default class Gen extends Command {
  static description = "command used to generate the desired framework files";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    inquirer.prompt(questions).then((answers: any) => {
      let dir: string = answers.dir;
      let template: choices = answers.template;
      let dirPath = path.join(cwd(), dir);

      ncp(
        path.join("src", "templates", templates[template]),
        dir,
        function (err: any) {
          if (err) {
            console.log(err);
          } else {
            shell.cd(dirPath);
            shell.exec("yarn");
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
