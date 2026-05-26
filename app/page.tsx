export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Student Loan Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Optimize Your Student Loan Payoff
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Input your loans, income trajectory, and tax situation. Get a personalized repayment strategy that saves you thousands — not just a generic calculator.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to explore.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Income-based projections", "Tax deduction analysis", "Avalanche vs. snowball", "Forgiveness eligibility", "Refinancing scenarios"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited loan scenarios",
              "Income growth modeling",
              "Tax benefit calculator",
              "PSLF & IDR eligibility check",
              "Refinancing comparison",
              "Monthly payoff dashboard"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is this different from a basic loan calculator?</h3>
            <p className="text-[#8b949e] text-sm">Most calculators only show a fixed payoff timeline. We model your income growth over time, factor in tax deductions on interest, and compare multiple strategies — avalanche, snowball, income-driven, and refinancing — so you can see the true cost of each path.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does it work for federal and private loans?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can add any mix of federal (Direct, PLUS, Perkins) and private loans. Federal loans also get checked for PSLF eligibility and income-driven repayment options automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my financial data secure?</h3>
            <p className="text-[#8b949e] text-sm">All data is encrypted in transit and at rest. We never sell your information or share it with third parties. You can delete your account and all associated data at any time.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Student Debt Payoff Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
