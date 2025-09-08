#!/usr/bin/env node

/**
 * Deployment Verification Script
 * 
 * This script verifies that the Harmony Oak Studio website is properly
 * configured and ready for AWS Amplify deployment.
 */

const fs = require('fs')
const path = require('path')

console.log('🔍 Verifying Deployment Configuration...\n')

let allChecks = true

// Check 1: Build configuration files
const requiredFiles = [
  { file: 'amplify.yml', description: 'AWS Amplify build configuration' },
  { file: 'next.config.mjs', description: 'Next.js configuration' },
  { file: 'package.json', description: 'Package configuration' },
  { file: '.env.example', description: 'Environment variables example' }
]

console.log('📁 Required Files:')
requiredFiles.forEach(({ file, description }) => {
  if (fs.existsSync(path.join(process.cwd(), file))) {
    console.log(`✅ ${file} - ${description}`)
  } else {
    console.log(`❌ ${file} - ${description}`)
    allChecks = false
  }
})

// Check 2: Build output
console.log('\n🏗️  Build Output:')
const outDir = path.join(process.cwd(), 'out')
if (fs.existsSync(outDir)) {
  const files = fs.readdirSync(outDir)
  if (files.includes('index.html')) {
    console.log('✅ Static build output exists')
    console.log(`   Found ${files.length} files/directories in out/`)
  } else {
    console.log('❌ index.html not found in build output')
    allChecks = false
  }
} else {
  console.log('❌ Build output directory (out/) not found')
  console.log('   Run "npm run build" first')
  allChecks = false
}

// Check 3: Package.json scripts
console.log('\n📜 Package Scripts:')
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const requiredScripts = ['build', 'test:env', 'deploy:check']

requiredScripts.forEach(script => {
  if (packageJson.scripts[script]) {
    console.log(`✅ ${script} script available`)
  } else {
    console.log(`❌ ${script} script missing`)
    allChecks = false
  }
})

// Check 4: Next.js configuration
console.log('\n⚙️  Next.js Configuration:')
try {
  const nextConfigPath = path.join(process.cwd(), 'next.config.mjs')
  const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8')
  
  if (nextConfigContent.includes("output: 'export'")) {
    console.log('✅ Static export configured')
  } else {
    console.log('❌ Static export not configured')
    allChecks = false
  }
  
  if (nextConfigContent.includes('NEXT_PUBLIC_FORMSPREE_FORM_ID')) {
    console.log('✅ Formspree environment variable configured')
  } else {
    console.log('❌ Formspree environment variable not configured')
    allChecks = false
  }
  
  if (nextConfigContent.includes('NEXT_PUBLIC_CALENDLY_URL')) {
    console.log('✅ Calendly environment variable configured')
  } else {
    console.log('❌ Calendly environment variable not configured')
    allChecks = false
  }
} catch (error) {
  console.log('❌ Error reading next.config.mjs')
  allChecks = false
}

// Check 5: Documentation
console.log('\n📚 Documentation:')
const docFiles = ['DEPLOYMENT.md', 'DEPLOYMENT_CHECKLIST.md']
docFiles.forEach(file => {
  if (fs.existsSync(path.join(process.cwd(), file))) {
    console.log(`✅ ${file} available`)
  } else {
    console.log(`❌ ${file} missing`)
    allChecks = false
  }
})

// Summary
console.log('\n' + '='.repeat(50))
if (allChecks) {
  console.log('🎉 All deployment checks passed!')
  console.log('\n✨ Your site is ready for AWS Amplify deployment!')
  console.log('\nNext steps:')
  console.log('1. Set up Formspree and Calendly accounts')
  console.log('2. Copy .env.example to .env.local and fill in values')
  console.log('3. Run "npm run test:env" to verify environment variables')
  console.log('4. Follow DEPLOYMENT.md for AWS Amplify setup')
} else {
  console.log('❌ Some deployment checks failed')
  console.log('\nPlease fix the issues above before deploying.')
}

console.log('\n📖 For detailed instructions, see:')
console.log('• DEPLOYMENT.md - Complete deployment guide')
console.log('• DEPLOYMENT_CHECKLIST.md - Step-by-step checklist')

process.exit(allChecks ? 0 : 1)