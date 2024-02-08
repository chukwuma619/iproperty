"use server";
import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, {
    message:
      "Weak password! Please ensure it has at least 6 characters, one uppercase letter, one lowercase letter, and one digit.",
  }),
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
});

export type State =
  | {
      errors: {
        email?: string[] | undefined;
        password?: string[] | undefined;
        name?: string[] | undefined;
      };
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    }
  | undefined;

export async function signUpUser(prevState: State, formData: FormData) {
  const validatedFields = UserSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password, name } = validatedFields.data;

  return { message: "Unable to process ur request now" };
}

export type LoginState =
  | {
      errors: {
        email?: string[] | undefined;
        password?: string[] | undefined;
      };
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    }
  | undefined;

const LoginSchema = UserSchema.omit({ name: true });
export async function signInUser(prevState: LoginState, formData: FormData) {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  return { message: "Unable to process ur request now" };
}

export async function signOutUser() {}
