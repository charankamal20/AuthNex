"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

async function Register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }
  const {email, password, name} = validatedFields.data;
  const hashedPass = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if(existingUser) {
    return {error: "Email already in use!"};
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPass,
    },
  })

  // TOdo Send verification token

  return { success: "User Created!" };
}

export default Register;
