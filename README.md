# Reprodution repo for Prisma issue 3892

More info: <https://github.com/prisma/prisma/issues/3892>

```sh
git clone git@github.com:jshimko/prisma-issue-3892.git
cd prisma-issue-3892

# install deps
yarn

# start postgres
docker-compose up -d

# run migrations
yarn migrate:up

# run seed script (generates 20k users and inserts with prisma.$transaction)
yarn dev
```
