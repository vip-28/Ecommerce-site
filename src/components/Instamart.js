import { useState, useEffect, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { darkMode, lightMode } from "../utils/ThemeContext";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  setNotVisible,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { mainTheme } = useOutletContext();

  const { dark } = useContext(darkMode);
  const { light } = useContext(lightMode);
  let theme = light;

  if (mainTheme === "dark") {
    theme = dark;
  } else {
    theme = light;
  }

  return (
    <div
      className={`border-solid ${theme.border} border-2 p-2 m-2 font ${theme.text}`}
    >
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
          <button
            onClick={() => {
              setIsVisible();
            }}
          >
            SHOW
          </button>
        )}
      </div>

      {isVisible && <h2>{description}</h2>}
    </div>
  );
};

const QuickGym = () => {
  const { mainTheme } = useOutletContext();

  const { dark } = useContext(darkMode);
  const { light } = useContext(lightMode);
  let theme = light;
  if (mainTheme === "dark") {
    theme = dark;
  } else {
    theme = light;
  }
  const [visibleSection, setVisibleSection] = useState();

  return (
    <div className={`p-56 ${theme.text}`}>
      <h1 className="text-3xl font-bold">Info </h1>
      <div>
        <Section
          title={"About QuickGym"}
          description={
            "QuickGym is a modern fitness service that offers flexible and affordable gym memberships for people of all fitness levels. With a network of high-quality gyms and fitness centers, QuickGym provides access to state-of-the-art equipment, professional trainers, and various workout programs tailored to individual needs. Our user-friendly mobile application and website allow customers to easily browse available gym locations, book personal training sessions, and track their fitness progress. QuickGym's mission is to make fitness accessible and convenient, helping members stay committed to their health and wellness goals."
          }
          isVisible={visibleSection === "about"}
          setIsVisible={() => setVisibleSection("about")}
          setNotVisible={() => setVisibleSection("")}
        />
      </div>
      <div>
        <Section
          title={"Membership Details"}
          description={`Flexible Membership Plans: QuickGym offers various membership options, including daily, monthly, and annual plans, to suit different needs and budgets.\n\nState-of-the-Art Facilities: Our partnered gyms provide top-quality equipment, spacious workout areas, and specialized fitness zones, ensuring an optimal workout experience.\n\nPersonal Training Services: Certified trainers are available for personalized coaching, helping members achieve their fitness goals effectively.\n\nGroup Classes and Activities: QuickGym members have access to a variety of group fitness classes, such as yoga, HIIT, strength training, and more.\n\nConvenient Access: Members can use the QuickGym app to locate nearby fitness centers, book sessions, and manage their memberships seamlessly.\n\nHealth and Wellness Focus: We emphasize holistic well-being by providing nutrition advice, recovery programs, and wellness challenges.`}
          isVisible={visibleSection === "detail"}
          setIsVisible={() => setVisibleSection("detail")}
          setNotVisible={() => setVisibleSection("")}
        />
      </div>
      <div>
        <Section
          title={"Help & Support"}
          description={
            "Need assistance? QuickGym offers multiple support channels, including live chat, email support, and a dedicated helpline. Our customer support team is available to help with membership inquiries, technical issues, and general fitness guidance. Visit our app or website's support section to get in touch."
          }
          isVisible={visibleSection === "help"}
          setIsVisible={() => setVisibleSection("help")}
          setNotVisible={() => setVisibleSection("")}
        />
      </div>
      <div>
        <Section
          title={"Gym Partners & Trainers"}
          description={`QuickGym collaborates with top fitness centers and certified trainers to provide a premium gym experience. Our partnerships ensure members receive the best training and workout facilities available. Trainers interested in partnering with QuickGym can apply via our website, undergo a qualification review, and become part of our network of fitness professionals.`}
          isVisible={visibleSection === "supply"}
          setIsVisible={() => setVisibleSection("supply")}
          setNotVisible={() => setVisibleSection("")}
        />
      </div>
      <div>
        <Section
          title={"Team QuickGym"}
          description={`The QuickGym team consists of dedicated fitness enthusiasts, expert trainers, and technology specialists working together to create an accessible and convenient fitness ecosystem. Our development team ensures a seamless user experience on our app and website, while our trainers and customer support staff help members stay on track with their fitness goals. At QuickGym, we believe in promoting a healthy lifestyle through innovation and dedication.`}
          isVisible={visibleSection === "team"}
          setIsVisible={() => setVisibleSection("team")}
          setNotVisible={() => setVisibleSection("")}
        />
      </div>
    </div>
  );
};

export default QuickGym;
