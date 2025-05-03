
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-uplaud-purple/5 to-transparent z-0"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span>Real Reviews.</span>
              <br />
              <span>Real People.</span>
              <br />
              <span className="gradient-text">Real Growth.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Uplaud turns every happy customer into a powerful referral — straight from WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-uplaud-purple hover:bg-uplaud-dark-purple text-white text-lg px-6">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-uplaud-purple text-uplaud-purple hover:bg-uplaud-purple/10 text-lg px-6">
                See How It Works
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="relative mx-auto max-w-md">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-uplaud-purple p-4 flex items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-white text-sm ml-4">WhatsApp</span>
                </div>
                <div className="p-4">
                  <div className="flex items-start mb-4">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Hi! How was your experience with our product?</p>
                      <p className="text-xs text-gray-500 mt-1">Uplaud Business</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-end mb-4">
                    <div className="bg-uplaud-purple/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Absolutely loved it! The quality exceeded my expectations.</p>
                      <p className="text-xs text-gray-500 mt-1">Customer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Great to hear! Would you recommend us to others?</p>
                      <p className="text-xs text-gray-500 mt-1">Uplaud Business</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-end mb-4">
                    <div className="bg-uplaud-purple/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Definitely! Let me know how I can help.</p>
                      <p className="text-xs text-gray-500 mt-1">Customer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">You just earned 100 points! Share this link with friends to earn more.</p>
                      <p className="text-xs text-uplaud-purple underline mt-1">uplaud.com/refer/john</p>
                      <p className="text-xs text-gray-500 mt-1">Uplaud Business</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-uplaud-green rounded-full p-4 shadow-lg animate-bounce">
                <span className="text-white font-bold text-xl">+100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
