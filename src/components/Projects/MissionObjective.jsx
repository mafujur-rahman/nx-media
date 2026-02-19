import React from "react";

const MissionObjective = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl">
            <img
              src="/industry-1.jpg"
              alt="Mission Image 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl">
            <img
              src="/industry-2.jpg"
              alt="Mission Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Full Width Image */}
        <div className="w-full h-[350px] md:h-[500px] overflow-hidden rounded-2xl">
          <img
            src="/service.jpg"
            alt="Objective Image"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default MissionObjective;
