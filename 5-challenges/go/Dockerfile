FROM golang:latest

WORKDIR /src/

COPY code /src/

RUN go build hello.go

ENTRYPOINT [ "./hello" ]



