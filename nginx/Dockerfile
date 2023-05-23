## cd nginx 후 docker build -f Dockerfile . 하면 이미지 생성됨
FROM nginx:latest

COPY default.conf /usr/share/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]