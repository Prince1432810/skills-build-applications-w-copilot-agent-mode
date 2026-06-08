# Manual Setup Instructions for OctoFit Tracker

Due to a system-level infrastructure issue, you need to run these commands manually in the terminal.

## Step-by-Step Setup

### Step 1: Install Frontend Dependencies
Open a terminal in the workspace and run:
```bash
npm install --prefix octofit-tracker/frontend
```

**Expected output**: Installation completes successfully with package-lock.json created
**Verification**: Check that `octofit-tracker/frontend/package-lock.json` exists

**Packages installed**:
- react@^19.0.0
- react-dom@^19.0.0
- react-router-dom@^6.0.0
- bootstrap@^5.3.0
- vite@^5.0.0
- @vitejs/plugin-react@^4.2.0
- @types/react@^19.0.0
- @types/react-dom@^19.0.0

---

### Step 2: Install Backend Dependencies
```bash
npm install --prefix octofit-tracker/backend
```

**Expected output**: Installation completes successfully with package-lock.json created
**Verification**: Check that `octofit-tracker/backend/package-lock.json` exists

**Packages installed**:
- express@^4.18.0
- mongoose@^8.0.0 (MongoDB data access)
- cors@^2.8.5
- dotenv@^16.0.0
- typescript@^5.0.0
- @types/express@^4.17.0
- @types/node@^20.0.0
- @types/cors@^2.8.0
- tsx@^4.0.0

---

### Step 3: Add All Files to Git
```bash
git add .
```

**Expected output**: No output means success. All modified/new files are staged.

---

### Step 4: Commit Changes
```bash
git commit -m "Initialize OctoFit Tracker multi-tier application - Create React 19 frontend with Vite on port 5173 - Create Express + TypeScript backend on port 8000 - Configure MongoDB connection on port 27017 - Add Mongoose for data access - Add Bootstrap for styling - Add React Router for navigation"
```

**Expected output**: Shows files changed, insertions made

---

### Step 5: Push to Branch
```bash
git push origin build-octofit-app
```

**Expected output**: Branch pushed successfully to remote

---

## Verification Checklist

After completing all steps, verify:

- ✅ `octofit-tracker/frontend/package-lock.json` exists
- ✅ `octofit-tracker/backend/package-lock.json` exists
- ✅ `git log` shows the new commit
- ✅ `git push` succeeded without errors
- ✅ GitHub shows the `build-octofit-app` branch with the new commits

## Quick Alternative

If you want to run all steps at once, execute the prepared setup script:
```bash
bash setup.sh
```

This will automatically:
1. Install frontend dependencies
2. Install backend dependencies
3. Add all files to git
4. Create the commit
5. Push to the branch

## Troubleshooting

If npm install fails:
- Ensure Node.js LTS is installed: `node --version`
- Ensure npm is installed: `npm --version`
- Clear npm cache if needed: `npm cache clean --force`
- Delete node_modules and package-lock.json, then retry: `rm -rf octofit-tracker/frontend/node_modules octofit-tracker/frontend/package-lock.json`

If git operations fail:
- Ensure you're in the workspace directory
- Check git status: `git status`
- Verify the branch exists: `git branch -a`
