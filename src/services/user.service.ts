import { getSession } from "@auth0/nextjs-auth0";
import { PrismaClient as PrismaClientType } from "@prisma/client";
import { PrismaClient } from "../../prisma/generated/mongodb_client";

async function createUser(
  email: string,
  name: string,
  prisma: PrismaClientType,
) {
  try {
    if (!name || !email) {
      console.log("missing fields!");
      return null;
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getUserByEmail() {
  const session = await getSession();
  const userFromSession = session && session.user; // Rename user to avoid shadowing
  const { email, name }: any = userFromSession; // Use the renamed variable
  const prisma = new PrismaClient();

  try {
    const userFromDatabase = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        name: true,
        id: true,
        movies: {
          select: {
            name: true,
            poster_image: true,
            score: true,
            genres: {
              select: { name: true },
            },
          },
        },
      },
    });

    if (userFromDatabase) {
      return {
        props: { user: userFromDatabase },
      };
    }

    if (!userFromDatabase) {
      console.log("User not stored in the database!");
      const createdUser = await createUser(email, name, prisma);
      return {
        props: { user: createdUser },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: "An error occurred",
    };
  }

  return {
    props: { user: null },
  };
}
