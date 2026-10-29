import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Nunito, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import WhatsAppButton from "../component/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "BabyCare - The Best Play Area For Your Kids",
  description: "We care your baby. Professional baby care services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "z3p41awuhr");
          `}
        </Script>

        {/* Google tag (gtag.js) - GA4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3H5VQTXY0C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3H5VQTXY0C');
          `}
        </Script>

        {/* Google Ads tag (AW-11036071324) */}
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            gtag('config', 'AW-11036071324');
          `}
        </Script>

        {/* Google Ads call conversion snippet - Call (9884502033) */}
        <Script id="google-ads-call-conversion" strategy="afterInteractive">
          {`
            gtag('config', 'AW-11036071324/tuHvCL3Jjq4dEJyrtI4p', {
              'phone_conversion_number': '9884502033'
            });
          `}
        </Script>

        {/* Google Ads click-to-call conversion snippet */}
        <Script id="google-ads-click-to-call" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-11036071324/5S8ACLjKjq4dEJyrtI4p',
                'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>

        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}