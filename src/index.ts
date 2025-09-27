import chalk from "chalk";
import inquirer from "inquirer";
import { spawn } from "child_process";
import { promisify } from "util";
import { exec } from "child_process";
import * as path from "path";

const execAsync = promisify(exec);

interface Exercise {
  id: string;
  name: string;
  description: string;
  pattern: string;
  directory: string;
}

const exercises: Exercise[] = [
  {
    id: "1",
    name: "Builder Pattern",
    description: "Construcción de automóviles personalizados",
    pattern: "Builder",
    directory: "exercise1",
  },
  {
    id: "2",
    name: "Bridge Pattern",
    description: "Sistema de notificaciones multiplataforma",
    pattern: "Bridge",
    directory: "exercise2",
  },
  {
    id: "3",
    name: "Mediator Pattern",
    description: "Sistema de chat grupal",
    pattern: "Mediator",
    directory: "exercise3",
  },
];

class ExerciseRunner {
  private showHeader(): void {
    console.clear();
    console.log(
      chalk.cyan("╔══════════════════════════════════════════════════════╗")
    );
    console.log(
      chalk.cyan("║") +
        chalk.bold.white(
          "            DESIGN PATTERNS EXERCISES                "
        ) +
        chalk.cyan("║")
    );
    console.log(
      chalk.cyan("╚══════════════════════════════════════════════════════╝")
    );
    console.log();
  }

  private async buildAllExercises(): Promise<void> {
    console.log(chalk.yellow("🔨 Construyendo todos los ejercicios..."));
    console.log();

    for (const exercise of exercises) {
      try {
        console.log(chalk.blue(`  📁 Construyendo ${exercise.name}...`));

        const exercisePath = path.join(process.cwd(), exercise.directory);

        // Instalar dependencias
        await execAsync("npm install", { cwd: exercisePath });

        // Construir el proyecto
        await execAsync("npm run build", { cwd: exercisePath });

        console.log(
          chalk.green(`  ✅ ${exercise.name} construido exitosamente`)
        );
      } catch (error) {
        console.log(
          chalk.red(`  ❌ Error construyendo ${exercise.name}: ${error}`)
        );
      }
    }

    console.log();
    console.log(chalk.green("🎉 ¡Construcción completada!"));
    console.log();
  }

  private displayExercises(): void {
    console.log(chalk.bold.white("Ejercicios disponibles:"));
    console.log();

    exercises.forEach((exercise) => {
      console.log(chalk.cyan(`  ${exercise.id}. `) + chalk.bold(exercise.name));
      console.log(chalk.gray(`     Patrón: ${exercise.pattern}`));
      console.log(chalk.gray(`     ${exercise.description}`));
      console.log();
    });
  }

  private async runExercise(exerciseId: string): Promise<void> {
    const exercise = exercises.find((ex) => ex.id === exerciseId);

    if (!exercise) {
      console.log(chalk.red("❌ Ejercicio no encontrado"));
      return;
    }

    console.clear();
    console.log(chalk.cyan("═".repeat(60)));
    console.log(chalk.bold.white(`🚀 Ejecutando: ${exercise.name}`));
    console.log(chalk.gray(`Patrón: ${exercise.pattern}`));
    console.log(chalk.cyan("═".repeat(60)));
    console.log();

    const exercisePath = path.join(process.cwd(), exercise.directory);

    try {
      // Ejecutar el ejercicio
      const child = spawn("npm", ["start"], {
        cwd: exercisePath,
        stdio: "inherit",
      });

      await new Promise<void>((resolve, reject) => {
        child.on("close", (code) => {
          if (code === 0) {
            resolve();
          } else {
            reject(new Error(`El proceso terminó con código ${code}`));
          }
        });

        child.on("error", (error) => {
          reject(error);
        });
      });

      console.log();
      console.log(chalk.green("✅ Ejercicio completado"));
    } catch (error) {
      console.log();
      console.log(chalk.red(`❌ Error ejecutando el ejercicio: ${error}`));
    }

    console.log();
    console.log(chalk.yellow("Presiona Enter para continuar..."));
    await inquirer.prompt([
      {
        type: "input",
        name: "continue",
        message: "",
      },
    ]);
  }

  private async showMenu(): Promise<void> {
    while (true) {
      this.showHeader();
      this.displayExercises();

      const { choice } = await inquirer.prompt([
        {
          type: "list",
          name: "choice",
          message: chalk.bold("¿Qué ejercicio deseas ejecutar?"),
          choices: [
            ...exercises.map((exercise) => ({
              name: `${exercise.id}. ${exercise.name} (${exercise.pattern})`,
              value: exercise.id,
            })),
            new inquirer.Separator(),
            {
              name: chalk.red("🚪 Salir"),
              value: "exit",
            },
          ],
        },
      ]);

      if (choice === "exit") {
        console.log();
        process.exit(0);
      }

      await this.runExercise(choice);
    }
  }

  public async start(): Promise<void> {
    try {
      this.showHeader();
      await this.buildAllExercises();

      // Pequeña pausa antes de mostrar el menú
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await this.showMenu();
    } catch (error) {
      console.error(chalk.red("❌ Error iniciando la aplicación:"), error);
      process.exit(1);
    }
  }
}

// Ejecutar la aplicación
const runner = new ExerciseRunner();
runner.start().catch((error) => {
  console.error(chalk.red("💥 Error fatal:"), error);
  process.exit(1);
});
