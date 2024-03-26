"use server";

import { createUser, getUserByAuthId } from "@/db/queries/auth";
import { createSupabaseServerClient } from "@/db/supabase/server";
import { SignInForm, SignUpForm } from "@/lib/zod-schemas/auth";

export async function getUser() {
  const authUser = await getAuthUser();

  if (!authUser) return null;

  return await getUserByAuthId(authUser.id);
}

export async function getAuthUser() {
  const supabase = createSupabaseServerClient();
  return (await supabase.auth.getUser()).data.user;
}

export async function signOutUser() {
  const supabase = createSupabaseServerClient();

  const { error } = await supabase.auth.signOut();

  return { success: !!error, errorMessage: error?.message };
}

export async function signInUser(signInForm: SignInForm) {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: signInForm.email,
    password: signInForm.password,
  });

  const user = data.user;
  const session = data.session;

  return { user, session, errorMessage: error?.message };
}

export async function signUpUser(signUpForm: SignUpForm) {
  const supabase = createSupabaseServerClient();

  // First create the user for auth
  const { data, error } = await supabase.auth.signUp({
    email: signUpForm.email,
    password: signUpForm.password,
  });

  const user = data.user;

  if (error || !user) {
    return {
      user,
      session: data.session,
      errorMessage: error?.message,
    };
  }

  // Once we have the data and no error, save the user in the public schema
  await createUser({
    authId: user.id,
    name: signUpForm.name,
    email: signUpForm.email,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  });

  return {
    user,
    session: data.session,
    errorMessage: null,
  };
}
