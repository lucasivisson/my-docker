### Use golang:1.15 as base image for building the application
FROM golang:1.15 as builder

### Set working directory
WORKDIR /src/

### Copy actual source code for building the application
COPY code .

### CGO has to be disabled cross platform builds
### Otherwise the application won't be able to start
ENV CGO_ENABLED=0

### Build the Go app for a linux OS
### 'scratch' and 'alpine' both are Linux distributions
RUN GOOS=linux go build hello.go

# ENTRYPOINT [ "./hello" ]


## Stage 2 ###

### Define the running image
FROM scratch

### Alternatively to 'FROM scratch', use 'alpine':
# FROM alpine:3.13.1

### Set working directory
WORKDIR /src/

### Copy built binary application from 'builder' image
COPY --from=builder /src .

### Run the binary application
CMD ["./hello"]