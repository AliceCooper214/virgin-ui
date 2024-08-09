import { join, dirname } from "path";
import * as glob from "glob";
import fs from "fs/promises";
import chalk from "chalk";
import { spawn } from "child_process";
import handlebars from "handlebars";
import fetch from "node-fetch";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * abc-xyz => AbcXyz
 * @param {string} str
 */
const varCase = (str) =>
  str
    .replace(/-[a-z]/g, (m) => m[1].toUpperCase())
    .replace(/^.{1}/, (m) => m.toUpperCase());
/**
 * abc-xyz => AbcXyz
 * @param {string} str
 */
const lowCase = (str) =>
  str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^-/, "");

(async () => {
  const component = process.argv[2];

  const dirName = lowCase(component);
  const componentName = varCase(component);

  spawn("mkdir", ["-p", join(process.cwd(), `src/${dirName}`)]);

  const tplFiles = glob.sync(join(__dirname, "template/*.hbs"), {
    windowsPathsNoEscape: true,
  });

  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, "utf-8");
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName,
    });

    const newPath = join(
      filePath
        .replace("scripts\\template", `src\\${dirName}`)
        .replace("component", dirName)
        .replace("Component", componentName)
        .replace(".hbs", "")
    );

    await fs.writeFile(newPath, result);

    console.log(chalk.green(`write ${newPath} success`));
  });

  const response = await fetch(
    `https://unpkg.com/antd@4.19.5/es/${dirName}/style/index.css`
  );
  const body = await response.text();

  const scssFile = join(process.cwd(), `src/${dirName}/index.scss`);
  await fs.writeFile(scssFile, body);
  console.log(chalk.green(`update ${scssFile} success`));
})();
