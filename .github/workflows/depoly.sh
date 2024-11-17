#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd ./dist

git init
git add -A
git commit -m 'deploy'

cd -