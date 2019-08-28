#!/usr/bin/env bash
set -e

DEPLOY_PATH=/home/spacehub/projects/serbiancaseforspace.com
HOST=spacehub.rs
USER=spacehub
PORT=2233
ARTIFACT_NAME=artifact-$(date '+%Y%m%d%H%M%S').tar.gz

echo "yarn build"
yarn build

echo "create artifact"
tar -czf "${ARTIFACT_NAME}" -C build .

echo "upload artifact"
scp -r -P ${PORT} "${ARTIFACT_NAME}" ${USER}@${HOST}:/${DEPLOY_PATH}/
rm "${ARTIFACT_NAME}"

echo "deploy on server"
ssh ${USER}@${HOST} -p${PORT} "cd ${DEPLOY_PATH} && tar -xf ${ARTIFACT_NAME} && rm ${ARTIFACT_NAME}"

#REPOSITORY_URL=https://github.com/ivanstan/serbian-case-for-space-frontend
#REPOSITORY_NAME=$(basename "$(git rev-parse --show-toplevel)")
#CHECKOUT_DIR=/home/spacehub/repositories
#BRANCH=master
#ssh ${USER}@${HOST} -p${PORT} DEPLOY_PATH="$DEPLOY_PATH" REPOSITORY_NAME="$REPOSITORY_NAME" REPOSITORY_URL="$REPOSITORY_URL" BRANCH="$BRANCH" CHECKOUT_DIR="$CHECKOUT_DIR" 'bash -s' <<'ENDSSH'
#  PATH=$PATH:$HOME/.local/bin:$HOME/bin
#
#  if [ ! -d "$CHECKOUT_DIR/$REPOSITORY_NAME" ]; then
#    mkdir -p $CHECKOUT_DIR
#    cd $CHECKOUT_DIR
#    git clone "${REPOSITORY_URL}"
#  fi
#
#  cd ~/repositories/${REPOSITORY_NAME}
#  git checkout ${MASTER}
#  git pull
#
#  npm install yarn -g
#  yarn --prod
#  yarn build
#
##  echo ${REPOSITORY_URL}
#ENDSSH
