import React, { useRef, useEffect } from "react";
const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }, {
      threshold: 0.1
    });
    const section = sectionRef.current;
    if (section) {
      const fadeElements = section.querySelectorAll(".fade-in-scroll");
      fadeElements.forEach(element => {
        observer.observe(element);
      });
    }
    return () => {
      if (section) {
        const fadeElements = section.querySelectorAll(".fade-in-scroll");
        fadeElements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, []);
  return <section id="how-it-works" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title fade-in-scroll">How It Works</h2>
        <p className="section-subtitle fade-in-scroll">
          Uplaud seamlessly integrates with your customer journey to collect reviews and generate referrals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-md p-8 relative fade-in-scroll">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-uplaud-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <div className="text-center mt-4">
              <div className="bg-uplaud-purple/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-uplaud-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Invite</h3>
              <p className="text-gray-600">Send review requests to your customers via WhatsApp- or any other channel, after their purchase or service experience.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 relative fade-in-scroll">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-uplaud-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <div className="text-center mt-4">
              <div className="bg-uplaud-purple/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-uplaud-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Feedback</h3>
              <p className="text-gray-600">Customers share their experience through a conversational WhatsApp flow that feels natural and engaging. Collect reviews via text, or voice notes- in over 50 languages.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 relative fade-in-scroll">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-uplaud-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <div className="text-center mt-4">
              <div className="bg-uplaud-purple/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-uplaud-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Growth</h3>
              <p className="text-gray-600">We convert reviews to one click referrals. Delight customers, reward loyalty, and grow 3X faster.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 fade-in-scroll">
            The Uplaud platform handles everything from sending review requests to managing rewards and tracking performance.
          </p>
        </div>
      </div>
    </section>;
};
export default HowItWorks;