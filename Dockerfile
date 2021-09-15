FROM node as builder

# Only download packages if they changed
COPY docs /home/app/docs/docs
COPY internals  /home/app/internals
COPY server  /home/app/server
COPY package.json  /home/app/package.json
COPY yarn.lock  /home/app/yarn.lock
COPY .eslintrc.js  /home/app/.eslintrc.js
COPY .nvmrc  /home/app/.nvmrc
COPY .prettierrc  /home/app/.prettierrc
COPY .prettierignore /home/app/.prettierignore
COPY .stylelintrc /home/app/.stylelintrc
COPY .travis.yml /home/app/.travis.yml
COPY appveyor.yml /home/app/appveyor.yml
COPY babel.config.js /home/app/babel.config.js
RUN cd /home/app && yarn

WORKDIR /home/app

COPY app app

RUN yarn build

FROM nginx:1.16-alpine as production

COPY --from=builder /home/app/build /usr/share/nginx/html

ADD ./DockerConfFiles/api.conf /etc/nginx/conf.d/default.template

CMD ["/bin/sh",  "-c", "nginx -g 'daemon off;'"]