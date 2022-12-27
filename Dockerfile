FROM nginx

WORKDIR /usr/share/nutriamar-web

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

COPY public/img ./dist/public/img

RUN rm -r /usr/share/nginx/html/*

RUN cp -a dist/. /usr/share/nginx/html
