const supportFlow = [
  {
    number: "01",
    title: "Support Across Chennai",
    description:
      "Tell us your care requirement from anywhere in Chennai. Our team will understand your needs and guide you personally.",
  },
  {
    number: "02",
    title: "Visit Our Office",
    description:
      "Meet our team at either of our two physical offices in Anna Nagar or Urapakkam for direct assistance.",
  },
  {
    number: "03",
    title: "Daycare Partnerships",
    description:
      "Daycare centres are welcome to partner with us. We help them build reliable childcare support for their families.",
  },
  {
    number: "04",
    title: "The Right Caregiver",
    description:
      "We connect every family or daycare centre with a suitable babysitter and continue supporting them after placement.",
  },
];

export default function SupportFlowSection() {
  return (
    <section
      aria-labelledby="support-flow-title"
      className="mt-10 bg-[linear-gradient(135deg,#fff8fb_0%,#ffffff_55%,#f7f8ff_100%)] px-5 py-7 shadow-[0_22px_65px_rgba(26,31,94,0.07)] md:px-9 md:py-10"
    >
      <div className="text-center">
       <span className="mb-4 inline-block rounded-full bg-[#fff0f7] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e91e8c]">
          How We Support You
        </span>
        <h3 id="support-flow-title" className="mt-2 text-2xl font-black text-[#1a1f5e] md:text-3xl">
          A clear path from enquiry to trusted care
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-6 text-gray-500 md:text-base">
          Family, daycare centre, or special-care requirement—we stay with you throughout the journey.
        </p>
      </div>

      <div className="relative mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div
          className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-gradient-to-r from-pink-200 via-[#e91e8c] to-pink-200 lg:block"
          aria-hidden="true"
        />

        {supportFlow.map((step, index) => (
          <article
            key={step.number}
            className="relative rounded-3xl border border-pink-100 bg-white p-5 shadow-[0_14px_35px_rgba(233,30,140,0.07)]"
          >
            <div className="relative z-10 flex items-center gap-3 lg:block">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#e91e8c] text-sm font-black text-white shadow-lg shadow-pink-200">
                {step.number}
              </span>
              <h4 className="font-black leading-tight text-[#1a1f5e] lg:mt-5 lg:text-lg">
                {step.title}
              </h4>
            </div>
            <p className="mt-4 text-sm font-semibold leading-6 text-gray-500">
              {step.description}
            </p>

            {index < supportFlow.length - 1 ? (
              <span
                className="absolute -bottom-4 left-1/2 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#fff0f7] text-lg font-black text-[#e91e8c] md:hidden"
                aria-hidden="true"
              >
                ↓
              </span>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-[#1a1f5e]">
        <span className="rounded-full border border-pink-100 bg-white px-5 py-2.5">Anna Nagar Office</span>
        <span className="rounded-full border border-pink-100 bg-white px-5 py-2.5">Urapakkam Office</span>
        <span className="rounded-full bg-[#1a1f5e] px-5 py-2.5 text-white">Support throughout Chennai</span>
      </div>
    </section>
  );
}
