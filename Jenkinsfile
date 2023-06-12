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
//                 bat "npm install"
//                 bat "npm run build"
                bat "docker rm -f react-nginx-app"
                bat "docker-compose -f docker-compose-jenkins-prod.yml up --build"
                bat "docker image tag react-app-master-react-nginx-app seleniumsua/react-app-master-react-nginx-app"
                bat "docker push seleniumsua/react-app-master-react-nginx-app"
            }
        }

        stage('SonarQube analysis') {
         steps {
             withSonarQubeEnv(credentialsId: 'sonar-react', installationName:'Sonar10.0') {
                bat "sonar-scanner.bat -Dsonar.projectKey=react-jenkins -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.token=sqp_4c5cd3452c62a3b0f4441bf6d4c539e59d18aa19"
                }
            }
        }
    }
}