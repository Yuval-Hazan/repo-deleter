#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import { execa } from 'execa';

// Function to get repository list using GitHub CLI
async function getRepos() {
    try {
        const { stdout } = await execa('gh', ['repo', 'list', '--limit', '1000', '--json', 'name', '--jq', '.[].name']);
        return stdout.trim().split('\n');
    } catch (error) {
        console.error(chalk.red('Error fetching repositories:'), error);
        process.exit(1);
    }
}

// Function to prompt user for each repository and delete if confirmed
async function deleteRepos(repos) {
    for (const repo of repos) {
        const { confirmDelete } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmDelete',
                message: `Do you want to delete repository '${chalk.yellow(repo)}'?`,
                default: false
            }
        ]);

        if (confirmDelete) {
            try {
                console.log(chalk.red(`Deleting repository: ${repo}`));
                await execa('gh', ['repo', 'delete', repo, '--yes']);
                console.log(chalk.green(`Successfully deleted: ${repo}`));
            } catch (error) {
                console.error(chalk.red(`Failed to delete: ${repo}`), error);
            }
        }
    }

    console.log(chalk.green('Process completed.'));
}

// Main function
async function main() {
    console.log(chalk.blue('Fetching repositories...'));

    const repos = await getRepos();

    if (repos.length === 0) {
        console.log(chalk.red('No repositories found.'));
        return;
    }

    await deleteRepos(repos);
}

main();
