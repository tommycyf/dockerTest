# AWS Docker Image
FROM amazon/aws-lambda-nodejs:12

WORKDIR /usr/local/app

# Port
EXPOSE 8000

COPY index.js ./

CMD [ "/usr/local/app/index.handler" ]