pipeline {
  agent any

  environment {
    DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
  }

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

    stage('Build Docker Image') {
      steps {
        script {
          docker.build("nikhilpallicode/weather-dashboard:latest")
        }
      }
    }

    stage('Push Docker Image') {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            docker.image("nikhilpallicode/weather-dashboard:latest").push()
          }
        }
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