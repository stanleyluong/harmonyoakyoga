#!/usr/bin/env node

/**
 * Environment Variables Test Script
 * 
 * This script checks if all required environment variables are properly configured
 * for the Harmony Oak Studio website deployment.
 */

const chalk = require('chalk')

// Required environment variables
const requiredEnvVars = [
  {
    name: 'NEXT_PUBLIC_SITE_URL',
    description: 'Site URL for SEO and canonical links',
    example: 'https://your-app.amplifyapp.com'
  },
  {
    name: 'NEXT_PUBLIC_FORMSPREE_FORM_ID',
    description: 'Formspree form ID for contact form',
    example: 'xpzgkqyw'
  },
  {
    name: 'NEXT_PUBLIC_CALENDLY_URL',
    description: 'Calendly URL for booking integration',
    example: 'https://calendly.com/yourusername'
  }
]

console.log(chalk.blue.bold('\n🔍 Environment Variables Check\n'))

let allValid = true

requiredEnvVars.forEach(envVar => {
  const value = process.env[envVar.name]
  
  if (!value) {
    console.log(chalk.red(`❌ ${envVar.name}`))
    console.log(chalk.gray(`   Missing: ${envVar.description}`))
    console.log(chalk.gray(`   Example: ${envVar.example}\n`))
    allValid = false
  } else if (value.includes('YOUR_') || value.includes('yourusername')) {
    console.log(chalk.yellow(`⚠️  ${envVar.name}`))
    console.log(chalk.gray(`   Placeholder value detected: ${value}`))
    console.log(chalk.gray(`   Please update with actual value\n`))
    allValid = false
  } else {
    console.log(chalk.green(`✅ ${envVar.name}`))
    console.log(chalk.gray(`   Value: ${value}\n`))
  }
})

// Additional checks
console.log(chalk.blue.bold('🔧 Additional Checks\n'))

// Check if .env.local exists
const fs = require('fs')
const path = require('path')

const envLocalPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envLocalPath)) {
  console.log(chalk.green('✅ .env.local file exists'))
} else {
  console.log(chalk.yellow('⚠️  .env.local file not found'))
  console.log(chalk.gray('   Copy .env.example to .env.local and fill in values'))
}

// Check build configuration
const amplifyYmlPath = path.join(process.cwd(), 'amplify.yml')
if (fs.existsSync(amplifyYmlPath)) {
  console.log(chalk.green('✅ amplify.yml build configuration exists'))
} else {
  console.log(chalk.red('❌ amplify.yml build configuration missing'))
  allValid = false
}

console.log('\n' + chalk.blue.bold('📋 Summary\n'))

if (allValid) {
  console.log(chalk.green.bold('🎉 All environment variables are properly configured!'))
  console.log(chalk.gray('Your site is ready for deployment to AWS Amplify.\n'))
} else {
  console.log(chalk.red.bold('❌ Some environment variables need attention'))
  console.log(chalk.gray('Please fix the issues above before deploying.\n'))
  console.log(chalk.blue('💡 Tips:'))
  console.log(chalk.gray('• Copy .env.example to .env.local'))
  console.log(chalk.gray('• Fill in your actual Formspree and Calendly values'))
  console.log(chalk.gray('• Set the same values in AWS Amplify console\n'))
}

process.exit(allValid ? 0 : 1)