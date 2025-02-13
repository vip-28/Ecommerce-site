const ShippingAndDelivery = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 text-orange-500">
        <h1 className="text-4xl font-bold text-center mb-6">Shipping & Delivery</h1>
  
        {/* Digital Membership Delivery */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Digital Membership Delivery</h2>
          <p className="text-gray-700">
            Once you complete your purchase, your gym membership details will be delivered instantly to your registered email. 
            You will receive a confirmation email with your membership ID and login credentials for accessing our gym facilities and online resources.
          </p>
        </section>
  
        {/* Physical Products Shipping */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Physical Product Shipping</h2>
          <p className="text-gray-700">
            If you have purchased any physical items such as gym merchandise, supplements, or accessories, we will process your order within 24-48 hours.
            Shipping times vary based on your location and chosen delivery method.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-3">
            <li>Standard Shipping (5-7 business days)</li>
            <li>Express Shipping (2-3 business days)</li>
            <li>Overnight Shipping (1 business day)</li>
          </ul>
        </section>
  
        {/* Estimated Delivery Times */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Estimated Delivery Times</h2>
          <p className="text-gray-700">
            Delivery times depend on your Internet Connection and the shipping option selected at checkout, Usually it doesnt take more then 2 working days to get the Order but if no response comes then you can contact us
          </p>
          
        </section>
  
        {/* Order Tracking */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Order Tracking</h2>
          <p className="text-gray-700">
            Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package in real time.
          </p>
        </section>
  
        {/* FAQs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">How do I receive my digital membership?</h3>
              <p className="text-gray-700 mt-2">
                Your membership details will be sent instantly to your email after purchase. If you don’t receive it within 5 minutes, please check your spam folder or contact support.
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">Can I change my shipping address after placing an order?</h3>
              <p className="text-gray-700 mt-2">
                We process orders quickly, but if you need to update your shipping address, please contact us immediately at vipul.work28@gmail.com
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">What should I do if I haven’t received my order?</h3>
              <p className="text-gray-700 mt-2">
                If your order hasn’t arrived within the estimated delivery time, please track your shipment or reach out to us for assistance.
              </p>
            </div>
          </div>
        </section>
  
        {/* Contact Support */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Need Help?</h2>
          <p className="text-gray-700">
            If you have any questions or concerns regarding your order, feel free to contact our support team at:
          </p>
          <p className="mt-2 font-semibold">Email: vipul.work28@gmail.com</p>
          <p className="font-semibold">Phone: 8959955193</p>
        </section>
      </div>
    );
  };
  
  export default ShippingAndDelivery;
  