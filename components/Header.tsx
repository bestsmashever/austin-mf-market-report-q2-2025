export default function Header() {
  return (
    <div className="text-center mb-16 py-12 border-b-3 border-primary-500 bg-primary-500 text-white -mx-5 -mt-5 relative">
      <h1 className="text-5xl md:text-6xl font-bold mb-5 text-white tracking-wide">
        Austin Multifamily Opportunity
      </h1>
      <div className="text-sm text-white font-normal mt-2 italic">
        Prepared by{' '}
        <a 
          href="https://www.presidiumre.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white underline hover:no-underline hover:opacity-80 transition-opacity duration-300"
        >
          Presidium
        </a>
      </div>
    </div>
  )
}
