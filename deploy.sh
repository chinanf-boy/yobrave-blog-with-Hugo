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

# open 
# echo "\033[0;32mOpen git proxy\033[0m"
# git config --global http.proxy 'socks5://192.168.13.100:10808' && git config --global https.proxy 'socks5://192.168.13.100:10808'

# upload source
git add . 
git commit -m "$msg"
# git push

echo "\033[0;32mgo to public task\033[0m"

# Go To Public folder
cd public
# Add changes to git.
git checkout master
git add .
git commit -m "$msg"

echo "\033[0;32m git push ...\033[0m"

# open proxy to github
echo "\033[0;32m git push to github...\033[0m"
# git push origin master -f
# close proxy
# echo "\033[0;32mClose git proxy\033[0m"
# git config --global --unset http.proxy && git config --global --unset https.proxy 


# Come Back up to the Project Root
cd ..