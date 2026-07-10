#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build                 # build fails => script aborts => no swap
rsync -a --delete --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r dist/ /srv/website-live/
curl -sf -o /dev/null http://127.0.0.1:8080/ \
  || { echo "DEPLOY WARN: health check failed" >&2; exit 1; }
echo "deployed $(date -u +%H:%M:%SZ)"
