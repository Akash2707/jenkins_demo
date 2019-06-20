pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(poll: true, url: 'https://github.com/Akash2707/jenkins_demo')
      }
    }
    stage('Verify tools') {
      parallel {
        stage('Verify tools') {
          steps {
            sh "npm -v"
            sh "docker -v"
          }
        }
      }
    }
    stage('Build helm chart') {
      steps {
        sh "helm init"
        sh "helm install ."
      }
    }
  }
}