FROM golang:1.15 as builder

WORKDIR /src/

COPY code .

ENV CGO_ENABLED=0

RUN GOOS=linux go build hello.go

# ENTRYPOINT [ "./hello" ]


FROM scratch

WORKDIR /src/

COPY --from=builder /src .

CMD ["./hello"]