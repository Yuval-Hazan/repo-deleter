#!/bin/bash

# File to store repositories list
output_file="repos_list.csv"

# Retrieve all repositories and output only the repository names to CSV
echo "Repository Name" > $output_file
gh repo list --limit 1000 --json name --jq '.[].name' >> $output_file

echo "Repositories have been exported to $output_file"
