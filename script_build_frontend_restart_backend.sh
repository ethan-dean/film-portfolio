#!/bin/bash

# TODO: Add a git pull at the top here

# Navigate to the frontend directory and run the build command
cd /root/services/frontend || { echo "Failed to navigate to frontend directory"; exit 1; }
echo "Running npm build in frontend..."
npm run build || { echo "npm build failed"; exit 1; }

# Navigate to the backend directory
cd ../backend || { echo "Failed to navigate to backend directory"; exit 1; }

# Remove existing files in backend/src/client/dist
echo "Removing old files in backend/src/client/dist..."
rm -rf ./src/client/dist || { echo "Failed to remove old files"; exit 1; }

# Copy the build files from frontend/dist to backend/src/client/dist
echo "Copying files from frontend/dist to backend/src/client/dist..."
cp -r ../frontend/dist ./src/client || { echo "File copy failed"; exit 1; }

# Killing existing backend if it exists
echo "Killing existing backend if exists..."
pkill -f node || { echo "found nothing to kill"; }

# Run the backend start command
echo "Starting the backend..."
npm run start || { echo "npm start failed"; exit 1; }

