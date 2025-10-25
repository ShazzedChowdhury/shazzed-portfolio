import React from 'react';

const EducationSection = () => {
    return (
      //   <section className="p-5 max-w-7xl mx-auto">
      //     <h2 className="text-3xl font-bold mb-8">Education & Courses</h2>

      //     <div className="grid md:grid-cols-2 gap-8">
      //       {/* Education Column */}
      //       <div className="border-l-4 border-blue-500 pl-5">
      //         <h3 className="text-xl font-semibold mb-2">
      //           Bachelor of Business Administration (BBA)
      //         </h3>
      //         <p className="text-base-content/80">
      //           Studying BBA (Bachelor of Business Administration) in the
      //           Management Department at
      //           <span className="font-semibold">
      //             {" "}
      //             National University, Bangladesh
      //           </span>
      //         </p>
      //       </div>

      //       {/* Course Column */}
      //       <div className="border-l-4 border-green-500 pl-5">
      //         <h3 className="text-xl font-semibold mb-2">
      //           Complete Web Development
      //         </h3>
      //         <p className="text-base-content/80">
      //           Completed the{" "}
      //           <span className="font-semibold">Complete Web Development</span>{" "}
      //           course with Programming Hero, covering HTML, CSS, JavaScript,
      //           React, Node.js, Express.js, MongoDB, and full-stack project
      //           development.
      //         </p>
      //       </div>
      //     </div>
      //   </section>
      <section className="p-5 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education & Courses</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="border-l-4 border-blue-500 pl-5 bg-gradient-to-r from-blue-200/30 to-transparent">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Business Administration (BBA)
            </h3>
            <p className="text-base-content/80">
              Studying BBA (Bachelor of Business Administration) in the
              Management Department at
              <span className="font-semibold">
                {" "}
                National University, Bangladesh
              </span>
            </p>
          </div>

          {/* Course Column */}
          <div className="border-l-4 border-green-500 pl-5 bg-gradient-to-r from-green-200/30 to-transparent">
            <h3 className="text-xl font-semibold mb-2">
              Complete Web Development
            </h3>
            <p className="text-base-content/80">
              Completed the{" "}
              <span className="font-semibold">Complete Web Development</span>{" "}
              course with Programming Hero, covering HTML, CSS, JavaScript,
              React, Node.js, Express.js, MongoDB, and full-stack project
              development.
            </p>
          </div>
        </div>
      </section>
    );
};

export default EducationSection;