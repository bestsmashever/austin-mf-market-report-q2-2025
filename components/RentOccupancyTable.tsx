export default function RentOccupancyTable() {
  return (
    <section className="mb-12">
      <h3 className="section-title">Effective Rent & Occupancy Trends by Property Class</h3>
      
      {/* New Clean Table Design */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Table Header */}
                 <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
           <div className="grid grid-cols-4 gap-0">
             <div className="p-4 font-bold text-left">Property Class</div>
             <div className="p-4 font-bold text-center">Q1 2025</div>
             <div className="p-4 font-bold text-center">Q2 2025</div>
             <div className="p-4 font-bold text-center">QoQ Change</div>
           </div>
           <div className="grid grid-cols-4 gap-0 border-t border-primary-500">
             <div className="p-2"></div>
             <div className="grid grid-cols-2 gap-0 p-2">
               <div className="text-center text-sm opacity-90">Rent</div>
               <div className="text-center text-sm opacity-90">Occupancy</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-2">
               <div className="text-center text-sm opacity-90">Rent</div>
               <div className="text-center text-sm opacity-90">Occupancy</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-2">
               <div className="text-center text-sm opacity-90">Rent</div>
               <div className="text-center text-sm opacity-90">Occupancy</div>
             </div>
           </div>
         </div>

                 {/* Table Body */}
         <div className="divide-y divide-gray-100">
           {/* Class A Row */}
           <div className="grid grid-cols-4 gap-0 hover:bg-gray-50 transition-colors">
             <div className="p-4 font-semibold text-primary-700 bg-gray-50">Class A</div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center font-medium">$2,028</div>
               <div className="text-center text-sm text-gray-600">93.10%</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center font-medium">$2,034</div>
               <div className="text-center text-sm text-gray-600">93.80%</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center text-green-600 font-semibold">+$6</div>
               <div className="text-center text-green-600 font-semibold">+0.70%</div>
             </div>
           </div>

           {/* Class B Row */}
           <div className="grid grid-cols-4 gap-0 hover:bg-gray-50 transition-colors">
             <div className="p-4 font-semibold text-primary-700 bg-gray-50">Class B</div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center font-medium">$1,398</div>
               <div className="text-center text-sm text-gray-600">92.40%</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center font-medium">$1,393</div>
               <div className="text-center text-sm text-gray-600">93.20%</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center text-red-600 font-semibold">-$5</div>
               <div className="text-center text-green-600 font-semibold">+0.80%</div>
             </div>
           </div>

           {/* Class C Row */}
           <div className="grid grid-cols-4 gap-0 hover:bg-gray-50 transition-colors">
             <div className="p-4 font-semibold text-primary-700 bg-gray-50">Class C</div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center font-medium">$1,249</div>
               <div className="text-center text-sm text-gray-600">93.00%</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center font-medium">$1,205</div>
               <div className="text-center text-sm text-gray-600">93.90%</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center text-red-600 font-semibold">-$44</div>
               <div className="text-center text-green-600 font-semibold">+0.90%</div>
             </div>
           </div>

           {/* Austin Total Row */}
           <div className="grid grid-cols-4 gap-0 bg-primary-50 border-t-2 border-primary-200">
             <div className="p-4 font-bold text-primary-800">Austin Total</div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center font-bold">$1,461</div>
               <div className="text-center text-sm font-medium text-primary-700">94.00%</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center font-bold">$1,453</div>
               <div className="text-center text-sm font-medium text-primary-700">95.10%</div>
             </div>
             <div className="grid grid-cols-2 gap-0 p-4">
               <div className="text-center text-red-600 font-bold">-$8</div>
               <div className="text-center text-green-600 font-bold">+1.10%</div>
             </div>
           </div>
         </div>
      </div>

      {/* Key Observations Section */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-primary-700 mb-4 flex items-center">
          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
          Key Observations
        </h4>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-green-600 font-bold mr-2">•</span>
            <span className="text-gray-700"><strong>Occupancy:</strong> Rose from 93.0% → 93.9%</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span className="text-gray-700"><strong>Rents:</strong> Flat/slightly down overall, but Class A rents more resilient in Q2</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary-600 font-bold mr-2">•</span>
            <span className="text-gray-700">Overall <strong>occupancy improvement of 1.10%</strong> across Austin demonstrates strong demand fundamentals</span>
          </div>
        </div>
      </div>
    </section>
  )
}
