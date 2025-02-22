#!/bin/bash

git add .

echo "commit message: "

read MSG

git commit -m "$MSG"

git push origin new-branch
