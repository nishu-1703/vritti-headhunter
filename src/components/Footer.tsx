import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="relative pb-8 pt-10">
      <div className="content-frame">
        <div className="glass-panel overflow-hidden rounded-[2.25rem] p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-heading text-2xl font-bold tracking-[-0.04em] text-slate-900">
                Vritti HeadHunters
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Connecting exceptional talent with visionary companies.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Company
              </h4>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <Link href="/about" className="block transition-colors hover:text-slate-900">
                  About
                </Link>
                <Link href="/services" className="block transition-colors hover:text-slate-900">
                  Services
                </Link>
                <Link href="/contact" className="block transition-colors hover:text-slate-900">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Contact
              </h4>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p>ceo@vheadhunt.com</p>
              </div>
            </div>
          </div>

          <div className="divider-line my-8" />

          <p className="text-center text-sm text-slate-500">
            Copyright {new Date().getFullYear()} Vritti HeadHunters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
