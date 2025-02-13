const ContactUs = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 text-orange-500">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
    
  
        {/* Contact Form */}
       
        {/* Contact Details */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700">
            If you prefer to reach out directly, here are our contact details:
          </p>
          <div className="mt-4 space-y-2">
            <p>
              📧 <span className="font-semibold">Email:</span>{" "}
              vipul.work28@gmail.com
            </p>
            <p>
              📞 <span className="font-semibold">Phone:</span> 8959955193
            </p>
            <p>
              📍 <span className="font-semibold">Address:</span> 308, B, Sagar Premium Towers phase 2 Kolar Road Bhopal, MP
            </p>
          </div>
        </section>
  
        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">What are your customer support hours?</h3>
              <p className="text-gray-700 mt-2">
                Our support team is available Monday to Friday, 9 AM - 6 PM (EST).
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">Can I visit your gym location?</h3>
              <p className="text-gray-700 mt-2">
                Yes! You can visit gyms in their Opening hours and enquire with them too.
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">How soon will I get a response?</h3>
              <p className="text-gray-700 mt-2">
                We typically respond within 24 hours. Urgent inquiries can be directed to our phone support.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ContactUs;
  