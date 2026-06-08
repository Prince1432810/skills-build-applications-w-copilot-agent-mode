#!/bin/bash

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install --prefix octofit-tracker/frontend

# Install backend dependencies
echo "Installing backend dependencies..."
npm install --prefix octofit-tracker/backend

# Add all files to git
echo "Adding files to git..."
git add .

# Commit
echo "Committing changes..."
git commit -m "Initialize OctoFit Tracker multi-tier application

- Create React 19 frontend with Vite on port 5173
- Create Express + TypeScript backend on port 8000
- Configure MongoDB connection on port 27017
- Add Mongoose for data access
- Add Bootstrap for styling
- Add React Router for navigation"

# Push to build-octofit-app
echo "Pushing to build-octofit-app branch..."
git push origin build-octofit-app

echo "Done!"
