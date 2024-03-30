"use client";

import { getUser } from "@/actions/auth";
import useSWR from "swr";

export default function UserWelcome() {
  const { data: user } = useSWR("/user", getUser);

  return <p>This is a client component to get the user to be a cool guy:  {user?.name}</p>;
}
