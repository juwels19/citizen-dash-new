"use client";

import { getUser } from "@/actions/auth";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function UserWelcome() {
  const { data: user } = useSWR("/user", getUser);
  console.log(user);

  return <p>This is a client component to get the user: {user?.name}</p>;
}
