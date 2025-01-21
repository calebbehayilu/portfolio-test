import React from "react";

function Services() {
  return (
    <section id="services" className="py-16 ">
      <div className="container w-1/2 mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">My Services</h2>
        <hr className="w-1/4 border-b border-gray-400 mb-6" />

        <p className="text-lg mb-10">
          I offer a wide range of services to help you achieve your goals.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="  p-6">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <hr className="mr-4 border-b border-gray-400 mb-2" />
            <p>
              I specialize in building high-quality, responsive websites and web
              applications using modern technologies.
            </p>
          </div>

          <div className="  p-6">
            <h3 className="text-xl font-semibold mb-4">App Development</h3>
            <hr className="mr-4 border-b border-gray-400 mb-2" />

            <p>
              I create user-centered designs that are both beautiful and
              functional.
            </p>
          </div>

          <div className=" p-6">
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <hr className="mr-4 border-b border-gray-400 mb-2" />

            <p>
              I help businesses improve their online visibility and attract more
              organic traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
