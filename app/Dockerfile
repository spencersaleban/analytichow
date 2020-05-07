FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
<<<<<<< HEAD
#RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
EXPOSE 321
COPY --from=build-stage /app/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
=======
RUN npm run build
FROM nginx:1.15
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
>>>>>>> e2abde7ec9220f401f0fe936025f354e1c4e35e4
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
