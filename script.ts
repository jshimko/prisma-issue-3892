import { PrismaClient, UserCreateInput } from '@prisma/client';
import faker from 'faker';

const USERS_TO_CREATE = 20000;

const prisma = new PrismaClient();

async function main() {
  // reset db (optional)
  await prisma.user.deleteMany({});

  // generate data
  const users: UserCreateInput[] = [];

  for (let i = USERS_TO_CREATE; i > 0; i--) {
    users.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    });
  }

  // insert generated data
  await prisma.$transaction(
    users.map((data) => prisma.user.create({ data }))
  );

  // confirm data
  const usersCreated = await prisma.user.count();
  console.log('UsersCreated created: ', usersCreated);
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
