import { useSession } from "next-auth/react";
import React, { FC } from "react";

const Auth: FC = ({ children }) => {
  const { data: session, status } = useSession({ required: true });
  console.log(session);

  const isUser = !!session?.user;
  if (isUser) {
    return <>{children}</>;
  }
  return <div>Loading...</div>;
};

export default Auth;
