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

            stage('SCM') {
                checkout scm
              }
              stage('SonarQube Analysis') {
                def scannerHome = tool 'SonarScanner';
                withSonarQubeEnv() {
                  bat "${scannerHome}/bin/sonar-scanner"
                }
              }

    }

}