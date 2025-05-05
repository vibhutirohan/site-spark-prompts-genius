import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
const Hero = () => {
  return <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className=""></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              <span className="">Real Reviews.</span>
              <br />
              <span>Real People.</span>
              <br />
              <span className="gradient-text">Real Growth.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Uplaud turns every happy customer into a powerful referral — straight from WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="text-lg px-6 font-normal bg-[#5EEAD4] hover:bg-[#5EEAD4]/80 text-[#111827]">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-6">
                Try it!
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="relative mx-auto max-w-md">
              {/* WhatsApp Chat Window */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                {/* WhatsApp Header */}
                <div className="bg-[#128C7E] p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-uplaud-purple">
                    <span className="font-bold text-slate-50">U</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Uplaud AI</p>
                    <p className="text-white/70 text-xs">online</p>
                  </div>
                </div>
                
                {/* Chat Background */}
                <div className="p-3 bg-[#E5DDD5] bg-opacity-50 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABjSURBVEhLY2AY3sDd3Z2dm5v7JxCfBGIJqCxxAIg/AfFCIHbCpgGvBKkA5AJsrmHAJkEOALkIm2sYMCVIBSAXY3MNA7oEqQDkYpB+RlyKQRKkgEGQTQggpF4DraBRMPQAADEcR5GOguSiAAAAAElFTkSuQmCC')] h-[450px] overflow-y-auto flex flex-col space-y-3">
                  {/* Date Header */}
                  <div className="flex justify-center">
                    <div className="bg-white py-1 px-4 rounded-full shadow-sm">
                      <span className="text-gray-500 text-xs">5/1/2023</span>
                    </div>
                  </div>
                  
                  {/* System Message */}
                  <div className="flex justify-center">
                    <div className="bg-[#e1ffc7] bg-opacity-80 py-2 px-4 rounded-md max-w-[85%]">
                      <p className="text-xs text-gray-600 text-center">
                        This business uses a secure service from Meta to manage this chat. Click to learn more.
                      </p>
                    </div>
                  </div>
                  
                  {/* Today Marker */}
                  <div className="flex justify-center">
                    <div className="bg-white py-1 px-4 rounded-full shadow-sm">
                      <span className="text-gray-500 text-xs">TODAY</span>
                    </div>
                  </div>
                  
                  {/* Customer Review Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] py-2 px-3 rounded-lg max-w-[85%] shadow-sm relative">
                      <p className="text-sm">I highly recommend Trailblazer Travels for all travel and sports ticketing. I used their services and here is my experience: I booked my IPL tickets + hotel +travel package with them, and it was superb! I was taken care of at every step of the way and got great seats for the match. Also got a great price from them, and they are very professional. You should definitely try them!</p>
                      <div className="flex justify-between items-center mt-1">
                        <div></div>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-1">8:31 PM</span>
                          <CheckCheck className="h-4 w-4 text-[#53bdeb]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Unread Messages Marker */}
                  <div className="flex justify-center">
                    <div className="bg-[#ffc8c8] py-1 px-4 rounded-full shadow-sm">
                      <span className="text-gray-700 text-xs">2 UNREAD MESSAGES</span>
                    </div>
                  </div>
                  
                  {/* Uplaud Message 1 */}
                  <div className="flex justify-start">
                    <div className="bg-white py-2 px-3 rounded-lg max-w-[85%] shadow-sm">
                      <p className="text-sm">Thanks for your review for Fanatic Sports!</p>
                      <p className="text-sm mt-2">Here is your review:</p>
                      <p className="text-sm mt-2">I highly recommend Fanatic Sports for all travel and sports ticketing. I booked my IPL tickets + hotel +travel package with them, and it was superb! I was taken care of at every step of the way and got great seats for the match. Also got a great price from them, and they are very professional. You should definitely try them!</p>
                      <p className="text-sm mt-3 font-medium">Uplaud Score (Star rating) : <br />5/5</p>
                      <div className="flex justify-between items-center mt-1">
                        <div></div>
                        <span className="text-xs text-gray-500">8:32 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Uplaud Message 2 */}
                  <div className="flex justify-start">
                    <div className="bg-white py-2 px-3 rounded-lg max-w-[85%] shadow-sm">
                      <p className="text-sm">We created this short blurb for you 👆, Share this review with your friend who may need it!</p>
                      <div className="flex justify-between items-center mt-1">
                        <div></div>
                        <span className="text-xs text-gray-500">8:32 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Uplaud Message 3 */}
                  <div className="flex justify-start">
                    <div className="bg-white py-2 px-3 rounded-lg max-w-[85%] shadow-sm">
                      <p className="text-sm">Do your good deed for the day—Tap below to share your review with your friends 👋</p>
                      <div className="mt-2">
                        <a href="#" className="text-blue-600 underline">https://go.uplaud.ai/RTXYBX</a>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div></div>
                        <span className="text-xs text-gray-500">8:32 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-[#5EEAD4] rounded-full p-4 shadow-lg animate-bounce">
                <span className="text-[#111827] font-bold text-xl">+100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;