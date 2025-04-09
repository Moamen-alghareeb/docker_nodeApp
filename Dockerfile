FROM node
WORKDIR /app
COPY pacjage.json .
RUN npm install
COPY server.js .
EXPOSE 3000
CMD ["node","server.js"]
