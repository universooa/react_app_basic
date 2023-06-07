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

### `docker-compose -f docker-compose-prod.yml up --build`

docker compose 실행하기 전 해당 container name을 지워줌
도커 컴포즈 프로덕션 용 사용 -> docker-compose-prod

### `url창에 localhost를 입력하여 접속`

