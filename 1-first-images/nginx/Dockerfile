# O dockerfile é uma forma de pegar uma imagem ja existente e configurar ela pra então criar uma nova imagem com mais recursos e configurada do jeito que vc quiser.

FROM nginx:latest
# Diz de qual imagem ele vai pegar como base para poder fazer essa nossa outra imagem

USER lucas
# define qual usuario vai ser o usuário de dentro do container, porém esse usuário ja deve existir dentro da imagem ( se vc n definir o USER, o padrão é root )

WORKDIR /app
# Indica qual a pasta ele vai trabalhar dentro do container, nesse caso ele vai criar uma pasta app e vai guardar os dados nessa pasta

RUN apt-get update && \
  apt-get install vim -y
# Roda os comandos que eu desejo dentro do container

COPY html/ /usr/share/nginx/html
# Copia o conteúdo de dentro da pasta html do meu localhost para a pasta /usr/share/nginx/html do meu container
