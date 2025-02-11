import { useState } from "react";

const Footer = ()=>{
        const [openSection, setOpenSection] = useState(null);
        const toggleSection = (section) => {
          setOpenSection(openSection === section ? null : section);
        };


return (
           <div>
      {/* Header Section */}
      <div className="flex justify-center items-end h-44 bg-neutral-700">
        <p className="text-7xl font-ChakraPetch font-bold text-white">Get in Touch</p>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col justify-center items-center text-white bg-neutral-700 py-6 space-y-2">
      <div className="bg-gray-100  ">
        {[
          { title: "Privacy Policy", content: `Privacy Policy



Welcome! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services.

1. Information We Collect

We may collect the following types of information:

Personal Information: Name, email address, phone number, and payment details.

Usage Data: Information about your interactions with our website, including pages visited and actions taken.

Cookies and Tracking Technologies: To enhance user experience and analyze site traffic.

2. How We Use Your Information

To provide and improve our services.

To personalize your experience and deliver relevant content.

To process transactions and communicate with you.

To ensure security and prevent fraudulent activities.

3. Sharing Your Information

We do not sell or rent your personal information. However, we may share it with:

Service Providers: To facilitate services such as payment processing and analytics.

Legal Authorities: When required by law or to protect our rights.

4. Data Security

We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.

5. Your Rights

You may request access, modification, or deletion of your personal information by contacting us at vjaiswal.2810@gmail.com

` },
          { title: "About Us", content: `About Us

Welcome to QuickEats! We are your go-to platform for fast, reliable, and delicious food delivery. Our mission is to bring mouthwatering meals to your doorstep with just a few clicks. We partner with top restaurants and local eateries to ensure you always have access to a variety of cuisines, fresh and hot!

Why Choose QuickEats?

Speed & Efficiency: We prioritize quick deliveries so you never have to wait too long for your favorite food.

Wide Selection: From gourmet meals to street food, we have something for every craving.

Customer Satisfaction: Our dedicated support team ensures a smooth ordering experience.

Secure & Reliable: We take your security seriously, with safe payment options and reliable service.

For any inquiries, feel free to contact us with the help of below details` },
          { title: "Terms & Conditions", content: `Terms and Conditions

Effective Date: [Insert Date]

These Terms and Conditions govern your use of QuickEats website and services. By accessing our website, you agree to these terms.

1. Use of Services

You must be at least [age requirement] years old to use our services.

You agree not to engage in any unlawful activities through our platform.

2. Account Registration

You may need to create an account to access certain features.

You are responsible for maintaining the confidentiality of your account credentials.

3. Payments and Refunds

All payments must be made through our secure payment gateway.

Refund policies will be clearly stated on the service/product page.

4. Limitation of Liability

We are not responsible for any indirect, incidental, or consequential damages resulting from the use of our services.

5. Termination

We reserve the right to suspend or terminate your account if you violate these terms.

For any questions regarding these terms, please contact us at details given below

` }
        ].map((section) => (
          <div key={section.title} className="w-[200vh]">
            <button
              className="w-full bg-neutral-700 text-white text-lg font-semibold  text-left flex justify-between items-center"
              onClick={() => toggleSection(section.title)}
            >
              {section.title}
              <span>{openSection === section.title ? "▲" : "▼"}</span>
            </button>
            {openSection === section.title && (
              <div className="bg-white text-gray-700 p-5 border border-gray-300">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
        <p className="text-lg font-semibold">Vipul Jaiswal</p>
        <p className="text-lg">📧 vjaiswal.2810@gmail.com</p>
        <p className="text-lg">📍 SPT phase-2, Kolar Road, Bhopal, Madhya Pradesh, India</p>
        <p className="text-lg">📞 +91 89599 55193</p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center items-center gap-10 h-44 bg-neutral-700">
        <a href="https://www.instagram.com/vipul_jaiswal28/" target="_blank">
          <img className="h-12 invert" src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" alt="LinkedIn" />
        </a>
        <a href="https://www.linkedin.com/in/vipul-jaiswal-08636628b/" target="_blank">
          <img className="h-12 rounded-full" src="https://i.pinimg.com/originals/29/6b/a0/296ba00c8098dee633d2eab414cea364.png" alt="GitHub" />
        </a>
      </div>
      

      {/* Dropdown Sections */}
      
    </div>
    )
};
export default Footer;