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
            sh 'sh "npm -v"'
          }
        }
        stage('') {
          steps {
            sh 'sh "docker -v"'
          }
        }
      }
    }
    stage('Build container') {
      steps {
        sh 'sh "docker build -t aakash2707/node_es:v15.0"'
      }
    }
  }
}