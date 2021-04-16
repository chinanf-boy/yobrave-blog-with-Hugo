#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

echo "\033[0;32mafter hugo\033[0m"

# upload source
git add . && git commit -m "$msg" && git push

echo "\033[0;32mgo to public task\033[0m"

# Go To Public folder
cd public
git pull
# Add changes to git.
git add .
git commit -m "$msg"

echo "\033[0;32m git push ...\033[0m"

# Push source and build repos.
# open proxy to github
echo "\033[0;32m git push to github...\033[0m"
git config --global http.proxy 'socks5://127.0.0.1:1080' && git config --global https.proxy 'socks5://127.0.0.1:1080'
git push origin master
# close proxy
git config --global --unset http.proxy && git config --global --unset https.proxy 
echo "\033[0;32m git push to coding...\033[0m"
git push coding master -f


# Come Back up to the Project Root
cd ..