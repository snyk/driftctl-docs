#!/usr/bin/env bash

set -euo pipefail

VERSION=$(curl -s https://api.github.com/repos/snyk/driftctl/releases/latest | grep tag_name | cut -d '"' -f 4 | sed 's/v//')
MINOR_VERSION="$(echo "$VERSION" | sed 's/\.[[:digit:]]\+$//g')"

echo "Running script for version $VERSION (minor: $MINOR_VERSION)"

# Check if the version already exist
if cat versions.json | grep -q "$VERSION" &>/dev/null; then
  echo "Skipping new version $VERSION since it already exists"
  exit 0
fi

# Check if the version is a patch release
if cat versions.json | grep "$MINOR_VERSION" -q &>/dev/null; then
  echo "Skipping new version $VERSION since it's a patch release"
  exit 0
fi

# Create the version
npm run versioning $VERSION

git add . && git commit -m "release: create version $VERSION"
