#!/bin/bash

# 檢查是否提供了 commit 訊息
if [ -z "$1" ]; then
  echo "錯誤: 請提供 commit 訊息"
  echo "用法: ./git-push.sh \"你的 commit 訊息\""
  exit 1
fi

# 執行 git add 所有變更
git add .

# 執行 git commit
git commit -m "$1"

# 執行 git push
git push

# 顯示成功訊息
echo "✅ 已成功執行 git add、commit 和 push 操作"
echo "Commit 訊息: \"$1\""