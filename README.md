# GitHub Bulk Repository Deletion Tool

This tool, `gh-bulk-repo-delete`, is a command-line application designed to help users bulk delete GitHub repositories with ease. It leverages the GitHub CLI (`gh`) and automates the process of deleting repositories listed in a CSV file.

## Features

- Bulk deletion of GitHub repositories
- Interactive prompt to confirm repository deletions
- CSV export of existing repositories for reference

## Installation

To install the tool locally, first clone the repository and then run:

```bash
npm install
npm link
```

This will create a global command `gh-bulk-repo-delete`, which you can run from anywhere.

## Usage

To run the application, simply execute:

```bash
gh-bulk-repo-delete
```

The application will prompt you to confirm the deletion of repositories listed in a CSV file.

## Scripts

This project includes additional shell scripts to manage repositories. The scripts are located in the `gh-bulk-repo-delete/shell_scripts` directory.

### Available Scripts

- `delete_repos.sh`: This script reads a list of repository names from a CSV file and bulk deletes them using the GitHub CLI.
- `export_repos.sh`: This script exports a list of your GitHub repositories to a CSV file for reference or modification.

### How to Use the Scripts

1. **Exporting repositories to a CSV file**:
   Run the following command to export your repositories:

   ```bash
   ./shell_scripts/export_repos.sh
   ```

   This will generate a file named `repos_list.csv` containing the details of your repositories.

2. **Deleting repositories from the CSV file**:
   First, modify the `repos_list.csv` file to include only the repositories you want to delete. Then run:

   ```bash
   ./shell_scripts/delete_repos.sh
   ```

   This will bulk delete the repositories listed in the CSV file.

### Note

You must have the GitHub CLI (`gh`) installed and authenticated to use the scripts. For more details on installing and setting up the GitHub CLI, refer to the official documentation: https://cli.github.com/manual/

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
