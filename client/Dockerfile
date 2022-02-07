FROM node:16.13-alpine3.14

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3000

CMD ["npm", "run", "dev"]