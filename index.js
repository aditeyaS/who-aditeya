#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";

const smLoading = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sectionLoading = (ms = 3000) => new Promise((r) => setTimeout(r, ms));


const clemsonColor = chalk.hex("#F56600");

const welcome = async () => {
    const title = chalkAnimation.rainbow("Aditeya Srivastava");
    await smLoading();
    title.stop();
    console.log(`
    I am a ${chalk.green("tech enthusiast")}, currently pursuing Master's in
    Computer Science at ${clemsonColor("Clemson University")}.
    I love developing software, and learning new things.
    `);
}

const showEducation = () => {
    console.log(`\n${clemsonColor("Clemosn University ")} - Clemson, SC, US`);
    console.log("Master of Science, Computer Science");
    console.log("May, 2024");
    console.log(`\n${chalk.blue("Dr. APJ Abdul Kalam Technical University")} - Lucknow, UP, IN`);
    console.log("Bachelor of Technology, Computer Science");
    console.log("May, 2021");
}

const showSkills = () => {
    console.log(`\n${chalk.bgBlue("Languages & Technologies")} Angular, React, Express, Android Development (Java), SpringBoot, React Native, Java, Python, C++, C, Javascript, Typescript, SQL, Node, Redux, HTML, CSS, Bootstrap, pandas, Tailwind CSS, R`)
    console.log(`\n${chalk.bgWhite("Others")} REST API, Git (Version Control), Amazon AWS, Agile software development, Data analysis`)
    console.log(`\n${chalk.bgRed("Tools")} Postman, VSCode, Azure DevOps, Atlassian Jira, Linux, Github, AWS`)
}

const showExperience = () => {
    console.log(`\n${chalk.bgMagenta("Clemosn University")} - Clemson, SC, US`);
    console.log("Graduate Teaching Assistant");
    console.log("Jan, 2023 - May, 2024");

    console.log(`\n${chalk.bgBlackBright("Deloitte")} - Bangalore, KA, IN`);
    console.log("Software Engineer");
    console.log("Jun, 2021 - Aug, 2022");

    console.log(`\n${chalk.bgBlackBright("Deloitte")} - Remote, IN`);
    console.log("Software Engineer Intern");
    console.log("Mar, 2021 - Jun, 2021");

    console.log(`\n${chalk.bgGreen("TeamERP (KIET)")} - Remote, IN`);
    console.log("Android & Front-end Intern");
    console.log("Jun, 2018 - Feb, 2021");
}

const showProjects = () => {
    console.log(`\nMyCoverLetter`);
    console.log("React, Express, Redux, Typescript");
    console.log(`${chalk.bgBlue("Github:")} https://github.com/aditeyaS/MyCoverLetter`);

    console.log(`\ntop20trending`);
    console.log("React, Express, Redux, Typescript");
    console.log(`${chalk.bgBlue("Github:")} https://github.com/aditeyaS/top20trending`);

    console.log(`\ncpsc-3720-scripts`);
    console.log("Python, Cypress");
    console.log(`${chalk.bgBlue("Github [Private]:")} https://github.com/aditeyaS/cpsc-3720-scripts`);
}

const byebye = () => {
    console.log("Now you know me.");
    console.log("Make sure to connect with me:");
    console.log(`${chalk.bgBlue("LinkedIn:")} https://www.linkedin.com/in/aditeyaaaa`);
    process.exit(1);
}

const section_question = async () => {
    const answers = await inquirer.prompt({
        name: "section_question",
        type: "list",
        message: "Know more about Aditeya's\n",
        choices: [
            "Education",
            "Skills",
            "Experience",
            "Projects",
            "Exit"
        ],
    });
    if (answers.section_question == "Exit") {
        const spinner = createSpinner("Exiting ...").start();
        await smLoading();
        spinner.stop();
        byebye();
    } else {
        const spinner = createSpinner(`Loading ${answers.section_question} ...`).start();
        await smLoading();
        spinner.stop();
        if (answers.section_question === "Education") {
            showEducation();
        } else if (answers.section_question === "Skills") {
            showSkills();
        } else if (answers.section_question === "Experience") {
            showExperience();
        } else {
            showProjects();
        }
    }
    console.log();
    await sectionLoading();
    section_question();
}

console.clear();
await welcome();
await section_question();
