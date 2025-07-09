import React from 'react';

const Term = () => {
  return (
    <div>
      <main className="bg-gray-200 text-black py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Terms and Conditions</h1>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Introduction</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              Welcome to Steel Galaxy. These terms and conditions outline the rules and regulations for the use of Steel Galaxy’s Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Acceptance of Terms</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Steel Galaxy’s website if you do not accept all of the terms and conditions stated on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Changes to Terms</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              Steel Galaxy reserves the right to update or change our terms and conditions at any time. You should check this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">User Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-800 text-sm sm:text-base space-y-1">
              <li>Users must not misuse this website.</li>
              <li>Users must not use the website for any illegal activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Intellectual Property</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              The content on this website, including text, images, logos, and other materials, is the property of Steel Galaxy.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Disclaimers and Limitation of Liability</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              The information on this website is provided on an “as is” basis. Steel Galaxy makes no warranties, may it be expressed or implied.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Governing Law</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              These terms and conditions are governed by the laws of India/Gujarat.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Contact Information</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              If you have any questions about these Terms, please contact us at <a href="mailto:export@steelgalaxy.in" className="text-blue-600 underline">export@steelgalaxy.in</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Term;
