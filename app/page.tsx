import Link from "next/link";

const featureItems = [
  {
    title: "Fast setup",
    description: "A clean landing page plus ready-to-use login and signup screens.",
  },
  {
    title: "Client-side validation",
    description: "Email, password, and confirmation checks so users know what to fix instantly.",
  },
  {
    title: "Responsive UI",
    description: "Designed with Tailwind classes for mobile and desktop layouts.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-8 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl shadow-zinc-200/40 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-sky-600">Sandigan</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Build modern auth flows with clean, validated UI.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
              Create a landing experience, then let users sign in or register with confidence using immediate form validation.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-2xl border border-sky-600 px-6 py-3 text-sm font-semibold text-sky-600 transition hover:bg-sky-50 dark:hover:bg-zinc-800"
            >
              Signup
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {featureItems.map((item) => (
            <article key={item.title} className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-sm shadow-zinc-200/50 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90 dark:shadow-zinc-950/40">
              <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl shadow-zinc-200/40 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90 dark:shadow-zinc-950/40">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Start now</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
                Learn how form validation helps reduce friction.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
                Input validation catches mistakes early, improves user confidence, and makes authentication flows feel polished.
              </p>
            </div>
            <div className="rounded-3xl bg-sky-50 p-6 text-sm text-sky-950 dark:bg-sky-950/15 dark:text-sky-100">
              <p className="font-semibold">Validation rules included:</p>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                <li>Required email with proper format</li>
                <li>Password length checks</li>
                <li>Confirm password matching for signup</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
