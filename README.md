# 리액트 스터디

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

프로젝트 폴더에서 실행

### `yarn start`

개발자 모드로 실행
[http://localhost:3000](http://localhost:3000) 로 접속

수정 시 자동 리로드 됨

### `npx json-server ./data.json --port 4000`

프록시 4000번, json-server로 서버 띄움

### `yarn test`

테스트 실행 -> jest

### `yarn build`

빌드하기

### `docker-compose -f docker-compose-dev.yml up --build`

도커 컴포즈 개발자 용 사용 -> docker-compose-dev

### `docker rm -f react-app`

docker compose 실행하기 전 해당 container name을 지워줌

### `docker-compose -f docker-compose-prod.yml up --build`

docker-compose-prod를 프로젝트 cmd 에서 실행할 경우 -> docker-compose-prod
Dockerfile.prod 에서 cmd 'nginx -g daemonoff' ->foreground 실행

### `docker-compose -f docker-compose-jenkins-prod.yml up --build`

docker-compose-prod를 jenkins, argocd 연동일 경우 -> docker-compose-jenkins-prod
cmd 'nginx' -> background 실행

### `url창에 http://localhost:3000/ 입력하여 접속`

