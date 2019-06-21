def shellScriptToinstallHelm = '''
                                directory_path=$(pwd)
                                helm_file_name=helm
                                helm_file_count=$(find $directory_path -name $helm_file_name | wc -l)
                                
                                if [ $helm_file_count -gt 0 ]; then
                                    echo "helm found in /usr/local/bin! Skipping installation"
                                else
                                    echo "helm not found!! Installing helm"
                                    curl -o helm.tar.gz https://storage.googleapis.com/kubernetes-helm/helm-v2.13.1-linux-amd64.tar.gz
                                    tar -zxvf helm.tar.gz
                                    chmod +x linux-amd64/helm
                                    mv linux-amd64/helm .
                                fi
                                
                                virtualenv helmv
                                source helmv/bin/activate
                                pip install --upgrade awscli

                                kube_config_path=$(pwd)/kube-config
                                aws eks update-kubeconfig --name=analytics-test-eric --kubeconfig=${kube_config_path} --region=us-west-2
                                export KUBECONFIG=${kube_config_path}
                             '''

// def shellScriptToinstallkubectl = '''
//                                     curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.15.0/bin/linux/amd64/kubectl
//                                     chmod +x ./kubectl
//                                     sudo mv ./kubectl /usr/local/bin/kubectl
//                                   '''

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
            // sh shellScriptToinstallkubectl
            sh shellScriptToinstallHelm

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