import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Debt Payoff Optimizer",
  description: "Optimize student loan payments with income projections. Analyze loan terms, income trajectory, and tax implications to find your best repayment strategy."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b46f9701-3f55-4225-9cf4-70cf2f6531c6"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
