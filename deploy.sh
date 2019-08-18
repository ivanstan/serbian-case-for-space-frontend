#!/usr/bin/env bash
set -e

export DEPLOY_PATH=/home/spacehub/projects/sumeiklima.org
export HOST=spacehub.rs
export USER=spacehub
export PORT=2233
export ARTIFACT_NAME=artifact-`date '+%Y%m%d%H%M%S'`.tar.gz;

print "yarn build"
yarn build
