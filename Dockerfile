FROM node:18
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=7860
EXPOSE 7860
CMD ["node", "index.js"]
