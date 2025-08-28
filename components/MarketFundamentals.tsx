export default function MarketFundamentals() {
  return (
    <section className="mb-12">
      <h3 className="section-title">Market Fundamentals</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="metric-card enhanced">
          <div className="metric-value">33.3%</div>
          <div className="metric-label">POPULATION GROWTH</div>
          <div className="metric-context">2015-2025 | #1 Nationally</div>
          
          <div className="metric-details">
            <ul className="clean-list">
              <li><strong>13,620 new young adults (20-34)</strong> added YoY, representing core renter demographic</li>
              <li>Austin forecasted to reach <strong>3M population by 2033</strong></li>
              <li>Continued strong in-migration from gateway markets experiencing net outflows</li>
            </ul>
          </div>
        </div>
        
        <div className="metric-card enhanced">
          <div className="metric-value">48%</div>
          <div className="metric-label">EMPLOYMENT GROWTH</div>
          <div className="metric-context">10-year | Leading All Major US Cities</div>
          
          <div className="metric-details">
            <ul className="clean-list">
              <li>Robust employment base led by <strong>tech, government, and professional services</strong></li>
              <li>Major employers: <strong>UT System (19,514), Dell (18,371), Apple (10,004), Amazon (8,294)</strong></li>
              <li>Employment stability across economic cycles</li>
            </ul>
          </div>
        </div>
        
        <div className="metric-card enhanced">
          <div className="metric-value">$104,066</div>
          <div className="metric-label">MEDIAN HOUSEHOLD INCOME</div>
          <div className="metric-context">25% Above National Average</div>
          
          <div className="metric-details">
            <ul className="clean-list">
              <li>Austin maintains <strong>lowest rent-to-income ratio</strong> among major US metros at <strong>16.8%</strong></li>
              <li><strong>42% renter population</strong> provides substantial addressable market for multifamily investment strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
