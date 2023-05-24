## cd nginx 후 docker build -f Dockerfile . 하면 이미지 생성됨

FROM node:16 AS builder
WORKDIR "/usr/src/app"
COPY ./package.json ./usr/src/app/package.json
RUN yarn install
COPY ./ ./
RUN yarn build

## builder 스테이지
FROM nginx
RUN rm -rf ./etc/nginx/conf.d
#COPY ./nginx ./etc/nginx
COPY ./default.conf ./etc/nginx/conf.d/default.conf
COPY ./html/50x.html ./usr/share/nginx/html

# 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=builder ./usr/src/app/build ./usr/share/nginx/html

# 80포트 오픈하고 nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]