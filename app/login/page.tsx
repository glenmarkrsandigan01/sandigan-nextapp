"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateLogin(email: string, password: string) {
  const errors: Record<string, string> = {};

  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!password.trim()) {
    errors.password = "Password is required.";
  } else if (password.length < 8) {
    errors.password = "Password must be 8 characters or more.";
  }

  return errors;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateLogin(email, password);
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      setMessage("Login successful. Welcome back!");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-xl rounded-3xl bg-white/90 p-10 shadow-[0_20px_120px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:bg-zinc-900/95 sm:p-12">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Account access</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Sign in to your account</h1>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Use your email to sign in and continue to the Sandigan experience.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <label className="block text-sm font-medium">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-sky-400 dark:focus:ring-sky-900/30"
              placeholder="you@example.com"
            />
            {errors.email ? <p className="mt-2 text-sm text-rose-600">{errors.email}</p> : null}
          </label>

          <label className="block text-sm font-medium">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-sky-400 dark:focus:ring-sky-900/30"
              placeholder="Enter your password"
            />
            {errors.password ? <p className="mt-2 text-sm text-rose-600">{errors.password}</p> : null}
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Sign in
          </button>
        </form>

        {message ? (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-700/40 dark:bg-emerald-950/40 dark:text-emerald-200">
            {message}
          </div>
        ) : null}

        <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          New here?{' '}
          <Link className="font-semibold text-sky-600 hover:text-sky-500" href="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
