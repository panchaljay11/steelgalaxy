import React from 'react';

const Policy = () => {
  return (
    <div>
      <main className="bg-gray-200 text-black py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Privacy Policy</h1>

          {[
            {
              title: 'Introduction',
              text: 'Steel Galaxy is committed to protecting your privacy. This privacy policy explains how we collect, use, and share your personal information.'
            },
            {
              title: 'Information Collection',
              text: 'We collect information that you provide directly to us, such as when you create an account, fill out a form, or contact us.'
            },
            {
              title: 'Use of Information',
              text: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and for marketing purposes.'
            },
            {
              title: 'Data Sharing',
              text: 'We do not share your personal information with third parties except as described in this privacy policy.'
            },
            {
              title: 'Data Security',
              text: 'We take reasonable measures to help protect personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.'
            },
            {
              title: 'User Rights',
              text: <>You have the right to access, update, and delete your personal information. To exercise these rights, please contact us at <a href="mailto:export@steelgalaxy.in" className="text-blue-600 underline">export@steelgalaxy.in</a>.</>
            },
            {
              title: 'Cookies',
              text: 'We use cookies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.'
            },
            {
              title: 'Changes to Privacy Policy',
              text: 'We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on our website.'
            },
            {
              title: 'Contact Information',
              text: <>If you have any questions about this privacy policy, please contact us at <a href="mailto:export@steelgalaxy.in" className="text-blue-600 underline">export@steelgalaxy.in</a>.</>
            },
          ].map((section, index) => (
            <section key={index}>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">{section.title}</h2>
              <p className="text-gray-800 text-sm sm:text-base">{section.text}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Policy;
