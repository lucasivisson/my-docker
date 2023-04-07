FROM node:latest

# ARG USER=lucas 
# ARG UID=1000 
# ARG GID=1000 
# # senha padrão para o usuário 
# ARG PW=#Malu2027

# # Opção1: Usando senha não criptografada/ especificando senha 
# RUN useradd -m ${USER} --uid=${UID} && echo "${USER}:${PW}" | \ 
#   chpasswd

# USER ${UID}:${GID} 
# WORKDIR /home/${USER}

# ARG USER_ID=${USER_ID:-$(id -u)}
# ARG GROUP_ID=${GROUP_ID:-$(id -g)}

# RUN addgroup --gid $GROUP_ID user
# RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user
# USER user

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

# ENTRYPOINT [ "--build-arg", "USER_ID=${id -u}", "--build-arg", "GROUP_ID=${id -g}" ]

