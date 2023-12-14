import { getSession } from "@auth0/nextjs-auth0";

const UserIcon = async () => {
  const session = await getSession();

  if (session && session.user) {
    const { picture, nickname } = session.user;

    return <img src={picture} alt={nickname} className="rounded-full w-8" />;
  }

  return null;
};

export default UserIcon;
