pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(poll: true, url: 'https://github.com/Akash2707/jenkins_demo')
      }
    }
    stage('Download kubectl and Helm') {
      steps {
        sh shellScriptToinstallkubectl
        sh shellScriptToinstallHelm
      }
    }
  }
}