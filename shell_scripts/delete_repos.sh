#!/bin/bash

# CSV file with repositories to delete
input_file="repos_list.csv"

# Loop through each repository name in the CSV
while IFS= read -r repo_name
do
    # Delete repository using GitHub CLI
    echo "Deleting repository: $repo_name"
    gh repo delete $repo_name --yes
done < <(tail -n +2 $input_file)  # Skip the CSV header

echo "Deletion completed."
