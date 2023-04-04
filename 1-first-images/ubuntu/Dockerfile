FROM ubuntu:latest

ENTRYPOINT ["echo", "Hello"]
# O entrypoint executa o comando de forma fixa quando o container inicia

CMD ["World"]
# O cmd executa o comando de forma opcional quando o container inicia(pois se o usuario por um comando apos o run, ele vai substituir esse CMD pelo comando do terminal).
# Caso eu utilize o entrypoint e o cmd, tudo que eu colocar no cmd vai ir como parametro no entrypoint, por isso n é necessário dar outro echo.