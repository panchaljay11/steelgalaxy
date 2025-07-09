import React from 'react';

const Help = () => {
  return (
    <div>
      <main className="bg-gray-200 text-black py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Help</h1>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Contact Support</h2>
            <p className="text-gray-800 text-sm sm:text-base">
              For additional help, please reach out to our support team at{' '}
              <a href="mailto:export@steelgalaxy.in" className="text-blue-600 underline">export@steelgalaxy.in</a>{' '}
              or call us at{' '}
              <a href="tel:+917096346228" className="text-blue-600">+917096346228</a>,{' '}
              <a href="tel:+918120627011" className="text-blue-600">+918120627011</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Troubleshooting</h2>
            <ul className="list-disc list-inside text-gray-800 text-sm sm:text-base space-y-2">
              <li><strong>Common Issues:</strong></li>
            </ul>
            <p className="text-gray-800 text-sm sm:text-base mt-2">
              If you're experiencing issues, please contact us at{' '}
              <a href="mailto:export@steelgalaxy.in" className="text-blue-600 underline">export@steelgalaxy.in</a>{' '}
              or call{' '}
              <a href="tel:+917096346228" className="text-blue-600">+917096346228</a>,{' '}
              <a href="tel:+918120627011" className="text-blue-600">+918120627011</a> for solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">Live Chat</h2>
            <ul className="list-disc list-inside text-gray-800 text-sm sm:text-base space-y-2">
              <li><strong>Live Chat:</strong></li>
            </ul>
            <p className="text-gray-800 text-sm sm:text-base mt-2">
              Our live chat support is available from 9 AM to 7 PM, Monday to Saturday. WhatsApp us at{' '}
              <a href="tel:+917096346228" className="text-blue-600">+917096346228</a>,{' '}
              <a href="tel:+918120627011" className="text-blue-600">+918120627011</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Help;
