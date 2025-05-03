
import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-uplaud-purple text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Customer Feedback Into Growth?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join businesses that are already using Uplaud to gather authentic reviews and turn happy customers into powerful referrals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-uplaud-purple hover:bg-gray-100 text-lg px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Request Demo
            </Button>
          </div>
          <p className="mt-6 opacity-75 text-sm">
            No credit card required. Free plan available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
