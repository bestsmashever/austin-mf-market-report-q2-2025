'use client'

export default function InvestmentThesis() {
  return (
    <section className="mb-12">
      <h3 className="section-title">Investment Thesis - Supply-Demand Imbalance</h3>
      
      <ul className="text-lg leading-relaxed mb-7 text-gray-700 pl-5 space-y-5">
        <li>
          <strong>Rent & Occupancy:</strong> Austin's rental market has clearly stabilized. 
          Occupancy rose from 93.0% in Q1 to 93.9% in Q2, while average effective rents held 
          essentially flat ($1,461 → $1,453). Importantly, Class A rents showed resilience with 
          only a -1.8% YoY decline, signaling that demand for higher-end units remains strong. 
          This quarter marks the first indication that rent declines have bottomed and the market 
          is setting a foundation for recovery.
        </li>
        <li>
          <strong>Demand:</strong> Absorption continues to outpace supply at record levels. 
          In the first half of 2025, Austin absorbed over 12,000 units, exceeding new deliveries 
          by nearly 3,000 units. Nationally, Austin ranked #2 in absorption as a % of inventory 
          and #5 in total units absorbed. This builds on 2024's extraordinary absorption of 28,841 
          units, proving that Austin can digest new supply while still tightening occupancy.
        </li>
        <li>
          <strong>Construction Pipeline:</strong> The pipeline is shrinking rapidly, setting up 
          a classic supply squeeze. Units under construction fell from 20,575 in Q1 to 18,029 in Q2, 
          down 65% from peak and far below the 10-year average of ~27,000. With just 680 starts 
          in Q2 (a 91% drop from 2022's peak), future deliveries are collapsing — only 3,526 units 
          scheduled for 2027. At today's absorption rate (~24,000 units annualized), Austin could 
          clear its entire pipeline in under 10 months, creating powerful tailwinds for rent growth.
        </li>
        <li>
          <strong>Affordability:</strong> Austin remains one of the most affordable large metros 
          in the U.S., giving it structural rent growth headroom. The metro's rent-to-income ratio 
          is just 16.8% on a median household income of ~$104K, compared to 20–25% in other 
          Sunbelt markets and 30–40% in coastal cities. Even after the recent moderation, effective 
          rents remain 17% above pre-pandemic averages, showing that Austin has pricing power to 
          support long-term growth without breaching affordability.
        </li>
        <li>
          <strong>For-Sale Housing Pressure:</strong> The cost of homeownership has become increasingly 
          prohibitive, reinforcing renter demand. Austin's median home price climbed to $443,010 in Q2 
          (up from $425,333 in Q1), and with interest rates elevated, monthly mortgage payments are 
          now 45% higher than average rents — and that excludes taxes, insurance, and maintenance. 
          This widening rent-own gap ensures that many households remain locked in the rental pool, 
          extending multifamily demand tailwinds well into the next cycle.
        </li>
      </ul>
      
      <h4 className="text-primary-500 text-2xl font-bold my-10 uppercase tracking-wide">
        Supply Cliff Opportunity
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="fundamental-item">
          <h4>Pipeline Contraction</h4>
          <ul className="pl-5 m-0">
            <li>Construction starts collapsed <strong>91% from 2022 peak</strong> (24,712 → 680 units in Q2 2025)</li>
            <li>Only <strong>3,526 units scheduled for 2027 delivery</strong></li>
            <li>Near-term supply scarcity despite strong absorption trends</li>
          </ul>
        </div>
        <div className="fundamental-item">
          <h4>Historical Recovery Pattern</h4>
          <ul className="pl-5 m-0">
            <li>Previous rent cycles show <strong>6-8 quarter recovery periods</strong></li>
            <li>Current effective rents 15% below peak but 17% above pre-pandemic levels</li>
            <li>Market normalization rather than fundamental deterioration</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
