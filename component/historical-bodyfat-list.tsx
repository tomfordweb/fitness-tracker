import { getSession, useSession } from "next-auth/react";
import React from "react";
import MustBeSignedIn from "./must-be-signed-in";

export default () => {
  const { data: session } = useSession()

  if (!session) {
    return <MustBeSignedIn />
  }

  return (
    <p>historical stuff</p>
  )

}
