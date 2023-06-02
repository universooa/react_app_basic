pipeline{
    agent any

    environment {
        BRANCH='main'
    }

    stages {
        stage('Git Clone'){
            steps {
                git branch: BRANCH,
                credentialsId: 'sualee',
                url:'https://github.com/universooa/react_app_basic.git'
            }
        }

        stage('Npm Build'){
            steps {
                bat "npm install"
                bat "npm run build"
            }
        }

        stage('sonarqube') {
         steps {
             withSonarQubeEnv(credentialsId: 'sonar-react', installationName:'Sonar10.0') {

             }
         }

    }

}