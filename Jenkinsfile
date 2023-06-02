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

        stage('SonarQube analysis') {
         steps {
             withSonarQubeEnv(credentialsId: 'sonar-react', installationName:'Sonar10.0') {
                bat "sonar-scanner.bat -Dsonar.projectKey=react-jenkins -Dsonar.sources=. -Dsonar.h
                ost.url=http://localhost:9000 -Dsonar.token=sqp_4c5cd3452c62a3b0f4441bf6d4c539e59d18aa19"
                }
            }
        }
    }
}