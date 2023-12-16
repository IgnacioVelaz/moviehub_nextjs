import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

const UserIcon = async () => {
  const session = await getSession();

  if (session && session.user) {
    const { picture, nickname } = session.user;

    return (
      <Image
        src={picture}
        alt={nickname}
        className="rounded-full w-8"
        width={60}
        height={60}
      />
    );
  }

  return null;
};

export default UserIcon;
