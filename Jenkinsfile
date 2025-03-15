pipeline {
  agent any

  environment {
    AWS_ACCESS_KEY_ID = credentials('aws-access-key')
    AWS_SECRET_ACCESS_KEY = credentials('aws-secret-key')
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/NikhilPalliCode/weather-dashboard.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build Angular App') {
      steps {
        sh 'npm run build:ssr'
      }
    }

    stage('Deploy to S3') {
      steps {
        sh '''
          aws s3 sync dist/weather-dashboard/browser s3://weather-dashboard-nikchan --delete
        '''
      }
    }
  }

  post {
    success {
      echo 'Pipeline succeeded!'
    }
    failure {
      echo 'Pipeline failed!'
    }
  }
}