#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd ./dist

# 如果是发布到自定义域名
echo 'hauecs.wiki' > CNAME

git init
git add -A
git commit -m 'deploy'

cd -