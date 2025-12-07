import React from "react";

// Simple, modern Gym landing page starter
// - Built as a single React component
// - TailwindCSS-ready classes
// You can paste this into a new React/Next.js project and tweak content.

export default function GymLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Oxygen Gym Logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Oxygen Gym</p>
              <p className="text-xs text-slate-500">Gym & Fitness Club</p>
            </div>
          </div>

          <div className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#programs" className="hover:text-lime-400 transition-colors">Programs</a>
            <a href="#coaches" className="hover:text-lime-400 transition-colors">Coaches</a>
            <a href="#pricing" className="hover:text-lime-400 transition-colors">Pricing</a>
            <a href="#join" className="hover:text-lime-400 transition-colors">Join Online</a>
            <a href="#branches" className="hover:text-lime-400 transition-colors">Branches</a>
            <a href="#contact" className="hover:text-lime-400 transition-colors">Contact</a>
          </div>

          <a
            href="#pricing"
            className="rounded-2xl bg-lime-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-md hover:shadow-lg transition-shadow"
          >
            Join Now
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        <section className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">
              #1 COMMUNITY-DRIVEN GYM
            </p>
            <div className="mt-3 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Oxygen Gym Logo"
                className="h-10 w-10 rounded-xl object-cover"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">Oxygen Gym - KG Halli & Lingarajapuram</p>
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build a <span className="text-lime-400">stronger</span> body.
              <br />
              Build an <span className="text-lime-400">unstoppable</span> mind.
            </h1>
            <p className="mt-5 max-w-xl text-sm text-slate-400 sm:text-base">
              Gym access from 6:00 AM to 11:59 PM (Mon - Sat), science-backed programs, and world-class coaches under one roof.
              Whether you&apos;re a complete beginner or a seasoned lifter, we&apos;ll help you
              hit your next PR.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="rounded-2xl bg-lime-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-lg hover:shadow-xl transition-shadow"
              >
                Join Now
              </a>
              <a
                href="#programs"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 hover:text-lime-400"
              >
                View Programs →
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-8 text-xs text-slate-400">
              <div>
                <p className="text-2xl font-black text-slate-50">6 AM - 11:59 PM</p>
                <p>Gym hours (Mon - Sat)</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-50">30+</p>
                <p>Group classes every week</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-50">4.9★</p>
                <p>Average member rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-lime-400/10 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-2xl">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <p className="font-semibold uppercase tracking-[0.2em]">Today&apos;s Session</p>
                <p>Coach Maya</p>
              </div>

              <div className="mt-5 space-y-4 text-xs">
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Strength</p>
                    <p className="text-sm font-semibold">Push Day Power</p>
                  </div>
                  <p className="text-[0.7rem] text-slate-400">60 min</p>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Conditioning</p>
                    <p className="text-sm font-semibold">HIIT Finisher</p>
                  </div>
                  <p className="text-[0.7rem] text-slate-400">15 min</p>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Recovery</p>
                    <p className="text-sm font-semibold">Mobility & Stretch</p>
                  </div>
                  <p className="text-[0.7rem] text-slate-400">10 min</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-lime-400/40 bg-slate-950 px-4 py-3 text-[0.7rem] text-slate-300">
                <p className="font-semibold text-lime-300">New here?</p>
                <p className="mt-1">
                  Book a free 1:1 assessment and get a custom program built for your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="mt-20">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">Programs</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Pick your path</h2>
            </div>
            <p className="max-w-md text-xs text-slate-400 sm:text-sm">
              Mix and match flexible memberships with goal-specific programs. Start with one focus and
              evolve as your training does.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[{
              title: "Strength & Muscle",
              description: "Progressive overload based plans designed to build lean muscle and raw strength.",
              tag: "Popular"
            }, {
              title: "Fat Loss & Conditioning",
              description: "High-energy hybrid sessions that torch calories while protecting muscle.",
              tag: "All Levels"
            }, {
              title: "Athletic Performance",
              description: "Speed, power and agility training for field, court and combat athletes.",
              tag: "Advanced"
            }].map((program) => (
              <div
                key={program.title}
                className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-5 shadow-lg"
              >
                <div className="flex items-center justify-between text-xs">
                  <p className="font-semibold uppercase tracking-[0.25em] text-slate-400">
                    {program.title}
                  </p>
                  <span className="rounded-full border border-lime-400/60 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-lime-300">
                    {program.tag}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-300">{program.description}</p>
                <button className="mt-5 w-fit rounded-full bg-slate-50 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-lime-400">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">Memberships</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Simple, transparent pricing</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Monthly Plan */}
            <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Monthly</p>
              <p className="mt-3 text-3xl font-black">₹1,500<span className="text-sm font-normal text-slate-400">/month</span></p>
              <p className="mt-2 text-xs text-slate-400">Full gym access, all equipment, community support.</p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li>• Access: 6am - 11:59pm (Mon - Sat)</li>
                <li>• Free intro session</li>
                <li>• Member WhatsApp support</li>
              </ul>
              <button className="mt-6 rounded-2xl border border-slate-600 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-100 hover:border-lime-400">
                Choose Monthly
              </button>
            </div>

            {/* 6 Month Plan */}
            <div className="flex flex-col rounded-3xl border border-lime-400 bg-slate-950 p-5 shadow-xl shadow-lime-500/20">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">Best Value</p>
              <p className="mt-3 text-3xl font-black">₹3,500<span className="text-sm font-normal text-slate-400">/6 months</span></p>
              <p className="mt-2 text-xs text-slate-300">Affordable mid-term plan with maximum savings.</p>
              <ul className="mt-4 space-y-2 text-xs text-slate-200">
                <li>• Access: 6am - 11:59pm (Mon - Sat)</li>
                <li>• Free assessment session</li>
                <li>• Progress tracking</li>
              </ul>
              <button className="mt-6 rounded-2xl bg-lime-400 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-lime-300">
                Choose 6 Months
              </button>
            </div>

            {/* Yearly Plan */}
            <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Yearly</p>
              <p className="mt-3 text-3xl font-black">₹5,000<span className="text-sm font-normal text-slate-400">/year</span></p>
              <p className="mt-2 text-xs text-slate-400">Best long‑term plan with full access benefits.</p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li>• Access: 6am - 11:59pm (Mon - Sat)</li>
                <li>• 1 Free diet plan</li>
                <li>• Priority support</li>
              </ul>
              <button className="mt-6 rounded-2xl border border-slate-600 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-100 hover:border-lime-400">
                Choose Yearly
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-4 md:flex-row md:items-center">
            <div className="text-xs text-slate-300">
              <div className="mb-2 flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Oxygen Gym Logo"
                  className="h-6 w-6 rounded-lg object-cover"
                />
                <p className="font-semibold uppercase tracking-[0.2em] text-lime-400">Pricing Table</p>
              </div>
              <p className="mt-2">Share this image with members for a quick overview of all membership options and discounts.</p>
            </div>
            <div className="mt-2 md:mt-0 md:ml-auto">
              <img
                src="/pricing-table-oxygen-gym.png"
                alt="Oxygen Gym membership pricing table"
                className="w-full max-w-xs rounded-2xl border border-slate-700 bg-slate-950"
              />
            </div>
          </div>

          <p className="mt-4 text-[0.7rem] text-slate-400">
            * Students get <span className="font-semibold text-lime-300">10% discount</span> on any plan with a valid student ID card. Couples get <span className="font-semibold text-lime-300">10% discount</span> on the total bill.
          </p>
        </section>

        {/* Branch-wise Yearly Pricing */}
        <section id="branches" className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">Yearly Memberships</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Branch-wise Annual Pricing</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* KG Halli Yearly Pricing */}
            <div className="flex flex-col rounded-3xl border border-lime-400 bg-slate-950 p-5 shadow-lg shadow-lime-500/20">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">KG Halli Branch</p>
              <p className="mt-3 text-3xl font-black">₹5,000<span className="text-sm font-normal text-slate-400">/year</span></p>
              <p className="mt-2 text-xs text-slate-400">Full access to the KG Halli facility for 12 months.</p>
              <ul className="mt-4 space-y-2 text-xs text-slate-200">
                <li>• Unlimited gym access</li>
                <li>• Free induction & goal-setting session</li>
                <li>• Access to group classes</li>
                <li>• Member community support</li>
              </ul>
              <button className="mt-6 rounded-2xl bg-lime-400 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-lime-300">
                Choose KG Halli
              </button>
            </div>

            {/* Lingarajapuram Yearly Pricing */}
            <div className="flex flex-col rounded-3xl border border-lime-400 bg-slate-950 p-5 shadow-lg shadow-lime-500/20">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">Lingarajapuram Branch</p>
              <p className="mt-3 text-sm text-slate-200">
                1st floor 7A, 12th cross, 1st Cross Rd, next to Siddhartha PU college, Lingarajapuram, Bengaluru, Karnataka 560084
              </p>
              <p className="mt-2 text-xs text-slate-400">Open 6am - 11:59pm (Mon - Sat)</p>
              <p className="mt-2 text-xs text-slate-300">📞 063610 55799</p>
              <a
                href="https://www.google.com/maps?q=no48/2+Ezikel+Industrial+area+Next+to+Metro+plywood+Square+Nagwara+Main+Road+KG+halli+Bangalore+560045"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-fit text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-lime-300 hover:text-lime-200"
              >
                View on Map →
              </a>
            </div>

            <div className="flex flex-col rounded-3xl border border-lime-400 bg-slate-950 p-5 shadow-lg shadow-lime-500/10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">Lingarajapuram Branch</p>
              <p className="mt-3 text-sm text-slate-200">
                1st floor 7A, 12th cross, 1st Cross Rd, next to Siddhartha PU college, Lingarajapuram, Bengaluru, Karnataka 560084
              </p>
              <p className="mt-2 text-xs text-slate-400">Open 6am - 11:59pm (Mon - Sat)</p>
              <p className="mt-2 text-xs text-slate-300">📞 +91 6360367717</p>
              <a
                href="https://www.google.com/maps?q=1st+floor+7A,+12th+cross,+1st+Cross+Rd,+next+to+Siddhartha+PU+college,+Lingarajapuram,+Bengaluru,+Karnataka+560084"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-fit text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-lime-300 hover:text-lime-200"
              >
                View on Map →
              </a>
            </div>

            <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em\] text-slate-400">Coming Soon</p>
              <p className="mt-3 text-sm text-slate-200">North Bangalore</p>
              <p className="mt-2 text-xs text-slate-400">
                New Oxygen Gym locations are planned in key neighbourhoods. Want us in your area?
              </p>
              <p className="mt-2 text-xs text-slate-500">Follow us on Instagram for branch announcements.</p>
            </div>

            <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Franchise / Partnership</p>
              <p className="mt-3 text-sm text-slate-200">Open an Oxygen Gym</p>
              <p className="mt-2 text-xs text-slate-400">
                Interested in bringing Oxygen Gym to your area? Reach out and let&apos;s talk expansion.
              </p>
              <a
                href="#contact"
                className="mt-4 w-fit text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-lime-300 hover:text-lime-200"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </section>

        {/* Branch Gallery */}
        <section id="gallery" className="mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">Gallery</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Inside Oxygen Gym</h2>
            </div>
            <p className="max-w-md text-xs text-slate-400 sm:text-sm">
              A quick look at our KG Halli and Lingarajapuram branches. Replace these images with your real photos.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* KG Halli gallery */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">KG Halli Branch</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <img src="/gallery/kg-halli-1.jpg" alt="Oxygen Gym KG Halli - gym floor" className="h-32 w-full rounded-2xl object-cover" />
                <img src="/gallery/kg-halli-2.jpg" alt="Oxygen Gym KG Halli - weights area" className="h-32 w-full rounded-2xl object-cover" />
                <img src="/gallery/kg-halli-3.jpg" alt="Oxygen Gym KG Halli - cardio zone" className="h-32 w-full rounded-2xl object-cover" />
                <img src="/gallery/kg-halli-4.jpg" alt="Oxygen Gym KG Halli - reception" className="h-32 w-full rounded-2xl object-cover" />
              </div>
            </div>

            {/* Lingarajapuram gallery */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">Lingarajapuram Branch</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <img src="/gallery/lingarajapuram-1.jpg" alt="Oxygen Gym Lingarajapuram - gym floor" className="h-32 w-full rounded-2xl object-cover" />
                <img src="/gallery/lingarajapuram-2.jpg" alt="Oxygen Gym Lingarajapuram - weights area" className="h-32 w-full rounded-2xl object-cover" />
                <img src="/gallery/lingarajapuram-3.jpg" alt="Oxygen Gym Lingarajapuram - cardio zone" className="h-32 w-full rounded-2xl object-cover" />
                <img src="/gallery/lingarajapuram-4.jpg" alt="Oxygen Gym Lingarajapuram - reception" className="h-32 w-full rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Branch Enquiry Section */}
        <section id="branch-enquiry" className="mt-20 border-t border-slate-800 pt-10">
          <div className="grid gap-8 md:grid-cols-2">
            {/* KG Halli Enquiry */}
            <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/40 p-5 text-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">KG Halli Branch Enquiry</p>
              <p className="text-sm text-slate-300">Send an enquiry or chat directly with our KG Halli team.</p>
              <a
                href="https://wa.me/916360367717?text=Hi%20I%20want%20to%20know%20about%20membership%20at%20Oxygen%20Gym%20-%20KG%20Halli%20Branch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-[0.7rem] font-semibold text-white shadow-md hover:bg-green-400"
              >
                <span className="text-lg">💬</span>
                <span>WhatsApp KG Halli</span>
              </a>

              <form
                className="space-y-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! We received your enquiry for Oxygen Gym - KG Halli Branch.');
                }}
              >
                <div className="space-y-1">
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none ring-lime-400/0 focus:ring-2"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Active mobile number"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none ring-lime-400/0 focus:ring-2"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Plan
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none ring-lime-400/0 focus:ring-2"
                    required
                  >
                    <option>Monthly - ₹1,500</option>
                    <option>6 Months - ₹3,500</option>
                    <option>Yearly - ₹5,000</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-2xl bg-lime-400 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-lime-300"
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* Lingarajapuram Enquiry */}
            <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/40 p-5 text-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">Lingarajapuram Branch Enquiry</p>
              <p className="text-sm text-slate-300">Enquire or chat with our Lingarajapuram branch team.</p>
              <a
                href="https://wa.me/916361055799?text=Hi%20I%20want%20to%20know%20about%20membership%20at%20Oxygen%20Gym%20-%20Lingarajapuram%20Branch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-[0.7rem] font-semibold text-white shadow-md hover:bg-green-400"
              >
                <span className="text-lg">💬</span>
                <span>WhatsApp Lingarajapuram</span>
              </a>

              <form
                className="space-y-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! We received your enquiry for Oxygen Gym - Lingarajapuram Branch.');
                }}
              >
                <div className="space-y-1">
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none ring-lime-400/0 focus:ring-2"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Active mobile number"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none ring-lime-400/0 focus:ring-2"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Plan
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none ring-lime-400/0 focus:ring-2"
                    required
                  >
                    <option>Monthly - ₹1,500</option>
                    <option>6 Months - ₹3,500</option>
                    <option>Yearly - ₹5,000</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-2xl bg-lime-400 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-lime-300"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section id="contact" className="mt-20 border-t border-slate-800 pt-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">Visit</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Book a free gym tour</h2>
              <p className="mt-3 text-sm text-slate-400">
                Come see the space, meet a coach and get all your questions answered in person.
              </p>
              <div className="mt-4 text-xs text-slate-400">
                <p className="font-semibold text-slate-200">Oxygen Gym - KG Halli Branch</p>
                <p>no48/2 Ezikel Industrial area Next to Metro plywood Square Nagwara Main Road KG halli Bangalore 560045</p>
                <p className="mt-1">Open 6am - 11:59pm (Mon - Sat)</p>
                <p className="mt-1">📞 +91 6360367717</p>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800">
                <iframe
                  title="Oxygen Gym - KG Halli Branch Location"
                  src="https://www.google.com/maps?q=no48/2+Ezikel+Industrial+area+Next+to+Metro+plywood+Square+Nagwara+Main+Road+KG+halli+Bangalore+560045&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <form className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/40 p-5 text-xs">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none ring-lime-400/0 focus:ring-2"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="WhatsApp / mobile"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none ring-lime-400/0 focus:ring-2"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Goal
                </label>
                <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none ring-lime-400/0 focus:ring-2">
                  <option>Build muscle</option>
                  <option>Lose fat</option>
                  <option>Get stronger</option>
                  <option>General fitness</option>
                  <option>Athletic performance</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Preferred time
                </label>
                <div className="grid gap-2 sm:grid-cols-3">
                  {["Morning", "Afternoon", "Evening"].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-[0.7rem] font-medium text-slate-200 hover:border-lime-400"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-3 w-full rounded-2xl bg-lime-400 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-lime-300"
              >
                Request a Tour
              </button>
              <p className="text-[0.65rem] text-slate-500">
                By submitting, you agree to be contacted via phone or WhatsApp about your membership options.
              </p>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-800 py-6 text-[0.7rem] text-slate-500">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Oxygen Gym Logo"
                className="h-8 w-8 rounded-lg object-cover"
              />
              <div className="space-y-1">
              <p>© {new Date().getFullYear()} Oxygen Gym. All rights reserved.</p>
              <p className="text-[0.65rem]">
                KG Halli: +91 6360367717 · Lingarajapuram: 063610 55799
              </p>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-lime-400">Instagram</a>
              <a href="#" className="hover:text-lime-400">YouTube</a>
              <a href="#" className="hover:text-lime-400">FAQ</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Call / WhatsApp Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between gap-2 bg-slate-900/95 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.6)] md:hidden">
        <button
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.location.href = 'tel:+916360367717';
            }
          }}
          className="flex-1 rounded-full bg-lime-400 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-950"
        >
          Call Now
        </button>
        <a
          href="https://wa.me/916360367717?text=Hi%20I%20am%20interested%20in%20Oxygen%20Gym"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-green-500 px-3 py-2 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
