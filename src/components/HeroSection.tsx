'use client';

export default function SearchBar() {
  return (
    <div className="bg-[#ffb700] p-[3.2] rounded-md shadow-md -mt-5 w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-1 ">
        <div className="relative flex-1">
          
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24">
          <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25m0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18m22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0m-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0m-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25m0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75z"></path>    
          </svg>
          <input type="text" placeholder="Where are you going?" className="flex-1 px-10 py-4 pt-4 pb-3 rounded w-full" />
        </div>
         <div className="relative flex-1">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24">
          <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5M7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0M18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6M5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06M12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5"></path>
          </svg>
          <input type="text" placeholder="check-in-date -- check-out-date" className="flex-1 px-10 py-10 pt-4 pb-3 rounded w-full" />        
          </div>
           <div className="relative flex-1">
          
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24">
          <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0M3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0"></path>          </svg>
          <input type="number" placeholder="Guests" className="flex-1 px-10 py-10 pt-4 pb-3 rounded mx-0  w-full" />        
          </div>

        
        
          <button className="bg-blue-600 text-white  px-5 py-3 rounded ">Search</button>
      </div>
    </div>
  );
}