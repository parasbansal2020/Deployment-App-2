pipeline {
  agent any

  environment {
    IMAGE_NAME = "bansalparas/demo-app"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main',
                    url: 'https://github.com/parasbansal2020/Deployment-App.git'
      }
    }

    stage('Build Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME:latest .'
      }
    }

    stage('Push Image') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'USER',
          passwordVariable: 'PASS'
        )]) {
          sh '''
          docker login -u $USER -p $PASS
          docker push $IMAGE_NAME:latest
          '''
        }
      }
    }

    stage('Deploy to KIND') {
      steps {
        sh '''
        kubectl apply -f deployment.yaml
        kubectl apply -f service.yaml
        '''
      }
    }
  }
}
