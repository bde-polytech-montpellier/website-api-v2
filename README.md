# Website API v2

## Description

Reworked API for the website. This API is written in TypeScript and uses the [NestJS](https://github.com/nestjs/nest) framework.

## Stack

- [NestJS](https://nestjs.com)
- [Prisma](https://www.prisma.io)
- [Docker](https://www.docker.com)
- [Jest](https://jestjs.io/)
- [PostgreSQL](https://www.postgresql.org)

## Installation

```bash
npm install
```

## Running the app

First, launch the database with docker-compose:

```bash
docker-compose up -d
```

Then, run the migrations:

```bash
npx prisma migrate dev
```

Finally, start the NestJS server:

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Documentation

One the app is running, you can access the Swagger at the `/specs` route

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
