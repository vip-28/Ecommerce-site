import { useState } from "react";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  setNotVisible,
}) => {
  // const[isVisible, setIsVisible]=useState(false);

  return (
    <div className="border-solid  border-white border-2 p-2 m-2 font">
      <div className="flex justify-between">
        <h1>{title}</h1>

        {isVisible ? (
          <button
            onClick={() => {
              setNotVisible();
            }}
          >
            HIDE
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setIsVisible();
              }}
            >
              SHOW
            </button>
          </>
        )}
      </div>

      {isVisible && <h2>{description}</h2>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState();

  return (
    <div className="p-24">
      <h1>Info</h1>
      <Section
        title={"About Instamart"}
        description={
          " Instamart is a modern grocery delivery service designed to provide customers with the convenience of shopping for groceries and household items from the comfort of their homes. By leveraging advanced technology and a vast network of local stores, Instamart ensures quick and efficient delivery, often within just a few hours of placing an order. One of the standout features of Instamart is its user-friendly mobile application and website. These platforms offer an intuitive interface where customers can easily browse through a wide range of products, including fresh produce, dairy, meat, pantry staples, and household essentials. The app also provides personalized recommendations based on past purchases and preferences, enhancing the shopping experience. Instamart's operations are supported by a robust logistical framework. The company partners with local grocery stores and employs a fleet of delivery personnel who are strategically located to optimize delivery times. This decentralized approach not only speeds up the delivery process but also supports local businesses by driving sales through the Instamart platform. Moreover, Instamart places a strong emphasis on the quality and freshness of its products. Many items are handpicked by trained shoppers to ensure they meet high standards. This attention to detail helps build trust with customers, who can rely on Instamart for their weekly grocery needs without compromising on quality."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
        setNotVisible={() => setVisibleSection("")}
      />
      <Section
        title={"Details"}
        description={`Convenient Online Platform: Instamart's user-friendly mobile app and website allow customers to easily browse and order a wide range of products, including fresh produce, dairy, meat, pantry staples, and household essentials.

Fast and Flexible Delivery: Instamart offers same-day delivery and flexible scheduling options, ensuring groceries are delivered within hours. The strategic location of delivery personnel and partnerships with local stores enable quick and efficient service.

High-Quality Products: Trained shoppers handpick products to ensure freshness and quality. This meticulous attention to detail builds customer trust and satisfaction.

Support for Local Businesses: By partnering with local grocery stores, Instamart drives sales and supports the local economy, providing customers with fresh, high-quality products sourced locally.

Sustainability Initiatives: Instamart prioritizes environmental responsibility by using eco-friendly packaging and optimizing delivery routes to reduce carbon emissions, appealing to eco-conscious consumers.

Personalized Shopping Experience: The platform offers personalized recommendations based on past purchases and preferences, enhancing the shopping experience and making it more efficient.

Responsive Customer Support: Instamart's dedicated customer support team is available to assist with any issues or inquiries, ensuring a smooth and satisfactory shopping experience.`
        }
        isVisible={visibleSection === "detail"}
        setIsVisible={() => setVisibleSection("detail")}
        setNotVisible={() => setVisibleSection("")}
      />

      <Section
        title={"Help"}
        description={"Through the Mobile App or Website Customer Support Section: Most apps and websites have a dedicated section for customer support or help. Look for options like Help, Support, or Contact Us. Live Chat: Some platforms offer a live chat feature where you can get immediate assistance from a support agent. Email Support: There might be an option to send an email directly through the app or website. Look for an email address or a form to fill out. Direct Contact Methods Email: If available, use the official support email address provided by Instamart. This information is often found in the app, on their website, or in your order confirmation emails. Phone: Call their customer service hotline. The phone number should be listed in the app or on their website under the contact or help section. Social Media: Reach out to Instamart through their social media profiles on platforms like Twitter, Facebook, or Instagram. Many companies respond quickly to inquiries made through social media. Steps to Find Contact Information: Open the Instamart App or Website: Navigate to the main menu or footer. Locate the Help or Support Section: This is usually found in the main menu (three lines or dots icon) or at the bottom of the webpage. Choose Your Preferred Contact Method: Select from live chat, email, phone, or a help form."
        }
        isVisible={visibleSection === "help"}
        setIsVisible={() => setVisibleSection("help")}
        setNotVisible={() => setVisibleSection("")}
      />
      <Section
        title={"Suppliers and Distributers"}
        description={
`  Instamart’s partnerships with local grocery stores form the backbone of its supply chain. By collaborating with these stores, Instamart ensures that customers have access to fresh produce, dairy products, meats, and other essential grocery items.
          The efficiency of Instamart’s distribution network is pivotal to its quick and reliable delivery service. Central warehouses play a key role in storing and sorting products before they are dispatched to local delivery hubs. These warehouses implement rigorous quality control processes to ensure that only the best products reach customers. 
        Suppliers and distributors interested in partnering with Instamart can apply through the company’s website. The application process involves providing business details, undergoing a quality check, and entering into an agreement outlining terms and conditions. Key requirements include adhering to Instamart’s quality standards, providing a consistent supply of products, and having efficient logistics and delivery capabilities.
          `        }
        isVisible={visibleSection === "supply"}
        setIsVisible={() => setVisibleSection("supply")}
        setNotVisible={() => setVisibleSection("")}
      />
      <Section
        title={"Team Instamart"}
        description={`
          Instamart has rapidly become a household name in the online grocery delivery market, and at the core of this success is its dynamic and dedicated team. The team at Instamart is composed of diverse and skilled professionals who work tirelessly to ensure that customers receive high-quality products quickly and efficiently. From innovative tech developers to meticulous shoppers, and from strategic operations managers to responsive customer service representatives, each team member plays a vital role in maintaining Instamart’s reputation for excellence.
          The technology and development team at Instamart is the backbone of its seamless online platform. Skilled developers and IT professionals work on designing and maintaining the user-friendly mobile app and website that customers rely on for their shopping needs.
          Efficiency and reliability in delivery are made possible by the operations and logistics team. This group of experts manages the intricate supply chain that connects local grocery stores, central warehouses, and distribution hubs. 
          Quality assurance is a cornerstone of Instamart’s service, and this responsibility lies with the dedicated shoppers and quality assurance team. Trained shoppers meticulously select products, especially fresh produce, dairy, and meats, to ensure they meet the highest standards. 
          `
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
        setNotVisible={() => setVisibleSection("")}
      />
    </div>
  );
};

export default Instamart;
