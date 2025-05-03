
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ForBusinesses = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const fadeElements = section.querySelectorAll(".fade-in-scroll");
      fadeElements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      if (section) {
        const fadeElements = section.querySelectorAll(".fade-in-scroll");
        fadeElements.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <section id="for-businesses" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title fade-in-scroll">
          Turn Customer Love Into <span className="gradient-text">Business Growth.</span>
        </h2>
        <p className="section-subtitle fade-in-scroll">
          Uplaud helps businesses collect authentic reviews and transform satisfied customers into your most effective marketing channel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 fade-in-scroll">
              Powerful tools for <span className="gradient-text">sustainable growth</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start fade-in-scroll">
                <div className="bg-uplaud-purple/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-uplaud-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Authentic WhatsApp Reviews</h4>
                  <p className="text-gray-600">Collect genuine feedback via the platform your customers already use and trust.</p>
                </div>
              </div>
              
              <div className="flex items-start fade-in-scroll">
                <div className="bg-uplaud-purple/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-uplaud-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Referral Generation</h4>
                  <p className="text-gray-600">Convert satisfied customers into brand advocates with automated referral prompts.</p>
                </div>
              </div>
              
              <div className="flex items-start fade-in-scroll">
                <div className="bg-uplaud-purple/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-uplaud-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">AI-Powered Insights</h4>
                  <p className="text-gray-600">Uncover trends and actionable recommendations from your customer feedback.</p>
                </div>
              </div>
              
              <div className="flex items-start fade-in-scroll">
                <div className="bg-uplaud-purple/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-uplaud-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Customizable Rewards</h4>
                  <p className="text-gray-600">Design a loyalty program that aligns with your brand and resonates with your customers.</p>
                </div>
              </div>
              
              <div className="mt-8 fade-in-scroll">
                <Button className="bg-uplaud-purple hover:bg-uplaud-dark-purple text-white">
                  Start Growing Your Business
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden fade-in-scroll">
              <div className="bg-uplaud-purple p-4">
                <h3 className="text-white font-bold text-lg">Business Dashboard</h3>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold text-xl">Performance Overview</h4>
                  <div className="bg-gray-100 rounded-lg px-3 py-1">
                    <span className="text-sm text-gray-500">Last 30 days</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Reviews Collected</p>
                    <div className="flex items-end">
                      <p className="text-2xl font-bold mr-2">248</p>
                      <p className="text-xs text-uplaud-green flex items-center">
                        <span className="mr-1">↑</span>
                        12%
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Avg. Rating</p>
                    <div className="flex items-end">
                      <p className="text-2xl font-bold mr-2">4.8</p>
                      <p className="text-xs text-uplaud-green flex items-center">
                        <span className="mr-1">↑</span>
                        0.3
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Referrals Generated</p>
                    <div className="flex items-end">
                      <p className="text-2xl font-bold mr-2">72</p>
                      <p className="text-xs text-uplaud-green flex items-center">
                        <span className="mr-1">↑</span>
                        18%
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">New Customers</p>
                    <div className="flex items-end">
                      <p className="text-2xl font-bold mr-2">23</p>
                      <p className="text-xs text-uplaud-green flex items-center">
                        <span className="mr-1">↑</span>
                        5
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-bold text-lg mb-4">Recent Reviews</h4>
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <div className="bg-uplaud-purple/10 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                          <span className="font-bold text-uplaud-purple">JD</span>
                        </div>
                        <div>
                          <p className="font-medium">John D.</p>
                          <div className="flex">
                            <span className="text-yellow-400">★★★★★</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">"Great service! Will definitely recommend to friends."</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <div className="bg-uplaud-purple/10 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                          <span className="font-bold text-uplaud-purple">SM</span>
                        </div>
                        <div>
                          <p className="font-medium">Sarah M.</p>
                          <div className="flex">
                            <span className="text-yellow-400">★★★★</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">"Quality product and fast shipping. Very satisfied!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;
