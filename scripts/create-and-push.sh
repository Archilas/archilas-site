#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
if gh auth status >/dev/null 2>&1; then
  if ! git remote get-url origin >/dev/null 2>&1; then
    gh repo create Archilas/archilas-site --public --source=. --remote=origin --push --description "Archilas marketing site"
  else
    git push -u origin main
  fi
else
  git remote get-url origin >/dev/null 2>&1 || git remote add origin git@github.com:Archilas/archilas-site.git
  git push -u origin main
fi
