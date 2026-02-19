"use client";


export default function TopImage() {


  return (
    <section
      className="relative bg-black py-20 overflow-hidden"
    >
      <div className="w-full overflow-hidden">
        <div
          className="w-full overflow-hidden"
        >
          <img
            src="/service.jpg"
            alt="Project"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
