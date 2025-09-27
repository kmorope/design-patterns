#!/usr/bin/env node

/**
 * Design Patterns Exercises Runner
 * Este script facilita la ejecución del menú interactivo
 */

const { spawn } = require("child_process");
const path = require("path");

console.log("🚀 Iniciando Design Patterns Exercises...\n");

const child = spawn("npm", ["start"], {
  cwd: __dirname,
  stdio: "inherit",
});

child.on("close", (code) => {
  if (code !== 0) {
    console.log(`\n❌ El proceso terminó con código ${code}`);
  }
});

child.on("error", (error) => {
  console.error(`❌ Error: ${error.message}`);
});
