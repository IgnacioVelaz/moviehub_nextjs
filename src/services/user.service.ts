import { getSession } from "@auth0/nextjs-auth0";
import { UserFromDatabaseType } from "@/interfaces/UserFromDatabaseInterface";
import { PrismaClient } from "../../prisma/generated/mongodb_client";

type CreatedUser = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  name: string;
};

async function createUser(
  email: string,
  name: string,
  prisma: PrismaClient,
): Promise<CreatedUser | null | string> {
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
    return "error";
  }
}

export async function getUserByEmail(): Promise<UserFromDatabaseType | string> {
  const session = await getSession();
  const userFromSession = session && session.user;

  if (!userFromSession) return "User session not available";

  const { email, name } = userFromSession;
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
      if (createdUser && typeof createdUser !== "string")
        return {
          props: { user: createdUser },
        };
    }
  } catch (error) {
    console.log(error);
    return "An error occurred";
  }

  return "An error occurred";
}
