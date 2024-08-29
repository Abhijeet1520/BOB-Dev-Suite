#!/usr/bin/env node
import { cliVersion } from "../constants/urls";
import { logger } from "../core/helpers/logger";
import { twCreate } from "../create/command";
import { Command } from "commander";

const main = async () => {
  const program = new Command();

  console.info(`z
                                                                                                                                    
    //   ) )                                                                      //   ) )                                                           
   //___/ /                ( )     //      ___   /        ___         __         //___/ /     ( )   __  ___     ___        ___       ( )       __    
  / __  (      //   / /   / /     //     //   ) /       //   ) )   //   ) )     / __  (      / /     / /      //   ) )   //   ) )   / /     //   ) ) 
 //    ) )    //   / /   / /     //     //   / /       //   / /   //   / /     //    ) )    / /     / /      //         //   / /   / /     //   / /  
//____/ /    ((___( (   / /     //     ((___/ /       ((___/ /   //   / /     //____/ /    / /     / /      ((____     ((___/ /   / /     //   / /   

                                                                                               
`);
  console.info(`\n 💎 bobdevsdk v${cliVersion} 💎\n`);

  program
    .name("bobdevsdk")
    .description("BOB Dev SDK command line interface")
    .version(cliVersion, "-v, --version");

  program
    .command("create [projectPath]")
    .description("Spin up a new project with BOB-Dev-SDK")
    .option(
      "--use-npm",
      "Explicitly tell the CLI to bootstrap the app using npm"
    )
    .option(
      "--use-pnpm",
      "Explicitly tell the CLI to bootstrap the app using pnpm"
    )
    .action(async (path, options) => {
      await twCreate(path, options);
    });

  await program.parseAsync();
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    logger.error(err);
    process.exit(1);
  });
