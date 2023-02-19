import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";

// type NotFoundProps = {};

const NotFound: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return <></>;
};
export default NotFound;
