def shellScriptToinstallkubectl = '''
                                    curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.15.0/bin/linux/amd64/kubectl
                                    chmod +x ./kubectl
                                  '''
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
            sh 'scripts/installhelm.sh'
          }
        }
    stage('Build helm chart') {
      steps {
        sh "./helm init"
        sh "./helm install ."
      }
    }
  }
}