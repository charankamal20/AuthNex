"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

async function Register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  return { success: "Email sent!" };
}

export default Register;
