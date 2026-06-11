import SimpleFooter from "@/component/SimpleFooter";

export const metadata = {
  title: "Privacy Policy | BabyCare",
  description: "Read how BabyCare collects, uses, and protects your information.",
};

const policySections = [
  {
    title: "Information We Collect",
    body: "When you contact BabyCare, we may collect your name, phone number, email address, location, child care requirements, preferred shift timing, and any message you choose to share with us.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to respond to enquiries, understand your babysitting needs, arrange suitable service details, improve our customer support, and keep basic records of communication.",
  },
  {
    title: "Sharing Of Information",
    body: "We do not sell your personal information. We may share necessary details only with our internal team or trusted service staff when it is required to provide the babysitting service you requested.",
  },
  {
    title: "Data Safety",
    body: "We take reasonable steps to keep your information safe and avoid unauthorized access. Please avoid sending sensitive personal documents unless our team specifically asks for them through an official communication channel.",
  },
  {
    title: "Cookies And Website Use",
    body: "Our website may use basic tools such as cookies or analytics to understand page visits and improve the website experience. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Your Choices",
    body: "You may contact us to ask about your personal information, request corrections, or ask us to stop using your details for follow-up communication where applicable.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff5f8_0%,#ffffff_72%)] px-6 py-4 md:px-12 md:py-8">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border-[32px] border-[#fff0f7]" />
        <div className="pointer-events-none absolute -right-20 bottom-16 h-56 w-56 rounded-full bg-[#fff0f7]" />

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <span className="mb-4 inline-block rounded-full bg-[#fff0f7] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e91e8c]">
              BabyCare Privacy
            </span>
            <h1
              className="font-black leading-tight text-[#1a1f5e]"
              style={{
                fontSize: "clamp(2.2rem, 4.8vw, 4rem)",
                fontFamily: "var(--font-nunito, Nunito, sans-serif)",
              }}
            >
              Privacy Policy
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-8 text-gray-600 md:text-lg">
              This Privacy Policy explains how BabyCare collects, uses, and protects the details
              you share with us through our website, phone, email, or direct enquiry.
            </p>
          </div>

          <div className="mt-8 rounded-[30px] border border-pink-100 bg-white p-6 shadow-[0_24px_70px_rgba(233,30,140,0.08)] md:p-10">
            <div className="mt-8 grid gap-6">
              {policySections.map((section) => (
                <section key={section.title} className="rounded-2xl bg-[#fff9fb] p-5">
                  <h2 className="text-xl font-black text-[#1a1f5e]">{section.title}</h2>
                  <p className="mt-3 text-[1rem] font-semibold leading-8 text-gray-600">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <section className="mt-8 rounded-2xl bg-[#1a1f5e] p-6 text-white">
              <h2 className="text-xl font-black">Contact Us</h2>
              <p className="mt-3 font-semibold leading-8 text-white/85">
                For privacy-related questions, contact BabyCare at +91 9884502033 or email us at
                rsaravanakumar02@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
