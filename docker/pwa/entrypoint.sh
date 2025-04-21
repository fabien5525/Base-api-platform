#!/bin/sh

set -e

# Installer les dépendances si node_modules est vide
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Lancer Next.js
echo "Starting app on port $PORT"
exec npm run dev