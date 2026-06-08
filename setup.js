#!/usr/bin/env node
/**
 * OctoFit Tracker Setup Script
 * Automates npm installations, git add, commit, and push
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectRoot = __dirname;
const frontendDir = path.join(projectRoot, 'octofit-tracker', 'frontend');
const backendDir = path.join(projectRoot, 'octofit-tracker', 'backend');

console.log('🚀 Starting OctoFit Tracker Setup...\n');

const commands = [
  {
    name: 'Frontend Dependencies',
    command: 'npm install --prefix octofit-tracker/frontend',
    verify: () => fs.existsSync(path.join(frontendDir, 'package-lock.json')),
    verifyMessage: 'Frontend package-lock.json created'
  },
  {
    name: 'Backend Dependencies',
    command: 'npm install --prefix octofit-tracker/backend',
    verify: () => fs.existsSync(path.join(backendDir, 'package-lock.json')),
    verifyMessage: 'Backend package-lock.json created'
  },
  {
    name: 'Add Files to Git',
    command: 'git add .',
    verify: () => true,
    verifyMessage: 'Files staged'
  },
  {
    name: 'Commit Changes',
    command: `git commit -m "Initialize OctoFit Tracker multi-tier application - Create React 19 frontend with Vite on port 5173 - Create Express + TypeScript backend on port 8000 - Configure MongoDB connection on port 27017 - Add Mongoose for data access - Add Bootstrap for styling - Add React Router for navigation"`,
    verify: () => true,
    verifyMessage: 'Changes committed'
  },
  {
    name: 'Push to Branch',
    command: 'git push origin build-octofit-app',
    verify: () => true,
    verifyMessage: 'Branch pushed'
  }
];

let successCount = 0;
let failureCount = 0;

for (const step of commands) {
  console.log(`\n📦 Step: ${step.name}`);
  console.log(`   Command: ${step.command}`);
  
  try {
    execSync(step.command, { 
      cwd: projectRoot,
      stdio: 'inherit'
    });
    
    if (step.verify()) {
      console.log(`   ✅ ${step.verifyMessage}`);
      successCount++;
    } else {
      console.log(`   ⚠️  Verification warning`);
      successCount++;
    }
  } catch (error) {
    console.error(`   ❌ Failed: ${error.message}`);
    failureCount++;
  }
}

console.log(`\n${'='.repeat(50)}`);
console.log(`📊 Setup Complete!`);
console.log(`   ✅ Successful: ${successCount}/${commands.length}`);
console.log(`   ❌ Failed: ${failureCount}/${commands.length}`);
console.log(`${'='.repeat(50)}\n`);

if (failureCount === 0) {
  console.log('✨ All steps completed successfully!');
  console.log('\n📋 Next Steps:');
  console.log('  1. Verify frontend: npm run dev --prefix octofit-tracker/frontend');
  console.log('  2. Verify backend: npm run dev --prefix octofit-tracker/backend');
  console.log('  3. Ensure MongoDB is running on port 27017');
  process.exit(0);
} else {
  console.log('⚠️  Some steps failed. Please check the output above.');
  process.exit(1);
}
