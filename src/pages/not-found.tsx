import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="site-shell flex items-center justify-center px-6">
      <div className="glass-panel max-w-xl rounded-[2rem] p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">404</p>
        <h1 className="mt-4 font-heading text-5xl font-bold tracking-[-0.05em] text-slate-900 md:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          This page drifted off the hiring map. Let's bring you back to the main site.
        </p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-[linear-gradient(135deg,#5c8986_0%,#7ea5a0_52%,#d1bc92_100%)] px-8 py-3 text-white shadow-[0_16px_48px_rgba(92,137,134,0.24)] transition-transform hover:-translate-y-1">
          Go Home
        </Link>
      </div>
    </div>
  );
}
