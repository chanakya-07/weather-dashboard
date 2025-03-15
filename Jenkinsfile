pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/NikhilPalliCode/weather-dashboard.git'
      }
    }

    stage('Build Angular App') {
      steps {
        sh 'npm install'
        sh 'npm run build -- --configuration=production'
      }
    }

    stage('Deploy to Vercel') {
      steps {
        sh 'echo "Deploying to Vercel..."'
        // Add Vercel deployment commands here (if needed)
      }
    }
  }
}