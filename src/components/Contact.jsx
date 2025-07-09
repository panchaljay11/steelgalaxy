import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: '',
    productInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_xicz7zd',
        'template_3ukelvv',
        formData,
        'ZFYHcDAI4d7NG44VJ'
      );

      console.log("Sending welcome email to:", formData.email);

      await emailjs.send(
        'service_xicz7zd',
        'template_f4xi6ze',
        {
          to_name: formData.name,
          to_email: formData.email
        },
        'ZFYHcDAI4d7NG44VJ'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        message: '',
        productInterest: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const productCategories = ['Bolts', 'Screws', 'Nuts', 'Washers', 'Rivets', 'Anchors','Stud & Rods'];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your steel product requirements? Get in touch with our expert team.
          </p>
        </div>

        {/* ✅ Fixed Responsive Grid Layout for iPad Pro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Get In Touch</h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <ContactInfo icon={<Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />} title="Email" lines={["export@steelgalaxy.in"]} />
                <ContactInfo icon={<Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />} title="Phone" lines={["+91 7096346228", "+91 8128627011"]} />
                <ContactInfo icon={<MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />} title="Address" lines={["7/2, Vijaynagar Society,Kalynpura, Kalol – 382721,Gandhinagar, Gujarat, India"]} />
                <ContactInfo icon={<Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />} title="Business Hours" lines={["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"]} />
                <ContactInfo icon={<Globe className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />} title="Global Reach" lines={["Exporting to 50+ countries", "24/7 Customer Support"]} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 xl:col-span-2">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[{ id: 'name', label: 'Full Name *', placeholder: 'Your full name', required: true },
                    { id: 'email', label: 'Email Address *', placeholder: 'your.email@company.com', required: true },
                    { id: 'company', label: 'Company Name *', placeholder: 'Your company name',required: true  },
                  ].map(({ id, label, placeholder, required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm sm:text-base font-medium  text-slate-700 mb-1 sm:mb-2">{label}</label>
                      <input
                        type="text"
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={handleInputChange}
                        required={required}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg transition-colors duration-200 text-sm sm:text-base "
                        placeholder={placeholder} 
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="country" className="block text-sm sm:text-base font-medium text-slate-700 mb-1 sm:mb-2">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your country"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg  transition-colors duration-200 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm sm:text-base font-medium text-slate-700 mb-1 sm:mb-2">
                    Product Interest *
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500  transition-colors duration-200 text-sm sm:text-base"
                  >
                    <option value="">Select a category</option>
                    {productCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-slate-700 mb-1 sm:mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg  transition-colors duration-200 text-sm sm:text-base resize-vertical"
                    placeholder="Please provide details about your requirements, quantities, specifications, and any other relevant information..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm sm:text-base">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-500 text-red-800 px-4 py-3 rounded-lg text-sm sm:text-base">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, lines }) => (
  <div className="flex items-start space-x-3 sm:space-x-4">
    <div className="p-2 sm:p-3 rounded-lg bg-slate-100">{icon}</div>
    <div>
      <h4 className="text-sm sm:text-base font-semibold text-slate-900">{title}</h4>
      {lines.map((line, i) => (
        <p key={i} className="text-xs sm:text-sm text-slate-600">{line}</p>
      ))}
    </div>
  </div>
);

export default Contact;
