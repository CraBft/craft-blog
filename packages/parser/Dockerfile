FROM ubuntu:latest

COPY * ./tmp
RUN apt update -y
RUN apt upgrade -y
RUN apt install curl -y

ENTRYPOINT ["bash"]