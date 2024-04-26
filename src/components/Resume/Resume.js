import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

function Resume({ menu, changeMenu }) {
  useEffect(() => {
    changeMenu(1);
  }, [changeMenu]);

  return (
    <div className="resume">
      <div className="resume__header">
        <h1 className="myname">Okikiola Omotosho</h1>
        <p className="mystack">Mobile Engineer</p>
      </div>

      {/* <div className="resume__description">
        <p className="word">
          I'm a Mobile Engineer, I build websites using React and mobile apps
          using React Native, I love bringing out ideas to live with my coding
          skills, I develop websites with good UI and responsiveness that will
          make the browsers proud. Higly skilled in implementing core frontend
          devevelopment tasks including API integration, Proficient in liasing
          with team members and remote client to effectively conduct requirement
          gathering and optimize solution as per client requirements.
        </p>
      </div> */}

      <div className="skills">
        <div className="section__header">
          <p className="section__type">Skills</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          HTML, CSS/SASS, Javascript/Typescript, CI/CD, React, React Native, SwiftUI.
        </div>
      </div>
      <div className="skills">
        <div className="section__header">
          <p className="section__type familiar">TOOLS I HAVE WORKED WITH</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
           Redux, Context API, SWR, Firebase, Styled Component, Expo, SocketIO,
          Firebase, Jest, Flipper, Amplitude & Mixpanel for Analytics
        </div>
      </div>

      <div className="Experience">
        <div className="section__header">
          <p className="section__type">Experience</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">

        <div className="job">
            <p className="job__title">
            KLOZA, <span>MOBILE ENGINEER(contract)</span>
            </p>
            <p className="job__duration">JANUARY 2024 - MARCH 2024</p>
            <p className="about__job">
              ● Implemented a feed screen where users can see posts (Video, Photo and Text) 
              create by other users. <br />
              ● Added some social features where users can create posts(Video, Text and Photo) and can comment, like a specific post<br />
              ● Implemented a chat feature for user to users to chat with real time message status and <span>push notification </span> alerts <br />
              ● I implemented a searching feature where a users can search for other users to follow<br />
              ● Deployed to both Appstore(IOS) and Playstore(Android)<br />
            </p>
          </div>
          <div className="job">
            <p className="job__title">
              FEATHER AFRICA, <span>MOBILE ENGINEER</span>
            </p>
            <p className="job__duration">JANUARY 2022 - FEBRUARY 2024</p>
            <p className="about__job">
              ● Developed and maintained a mobile application for a fintech
              company, providing users with secure access to their financial
              accounts and transactions. <br />
              ● Implemented robust security features, such as biometric
              authentication and encryption, to protect sensitive financial data
              and ensure compliance with industry regulations. <br />
              ● Collaborated with the backend developer to integrate APIs
              enabling users to view account balances, transaction history, and
              perform transactions. <br />
              ● Implemented features for peer-to-peer payments, bill payments,
              and fund transfers, ensuring seamless and secure financial
              transactions within the app. <br />
              ● Implement a searching feature where a user can search for an
              agent around to get cash while they transfer the cash through the
              mobile application. <br />● Ensured the user application is well
              connected to the agent agent application and users can search for
              agent in real time, Also used <span> Google Map API</span> to show the users
              locations in real time <br />
              ● Utilized <span> Firebase </span> and expo push notification for <span> Push
              notifications </span>, Making users and agent get an instant notification
              of their transaction status. <br />
              ● Conducted thorough testing, including UI/UX testing, security
              testing, and performance testing, to identify and resolve issues,
              ensuring a stable and reliable fintech application. <br />
              ● Regularly reviewed and optimized the application performance,
              addressing any latency issues or bottlenecks to provide a smooth
              and responsive user experience. <br />
              ● Provided technical support to customers and resolved issues
              promptly, ensuring a positive user experience and building trust
              in the fintech platform. <br />
            </p>
          </div>

          <div className="job">
            <p className="job__title">
              MUNCH UK, <span>MOBILE DEVELOPER</span>
            </p>
            <p className="job__duration">JULY 2022 - SEPTEMBER 2022</p>
            <p className="about__job">
              ● Developed and maintained a mobile application for a restaurant,
              featuring real-time order tracking using <span> Socket.IO </span> technology,
              allowing customers to monitor the progress of their orders. <br />
              ● Implemented Socket.IO technology to establish bidirectional
              communication between the user application and the server,
              enabling instant updates on order status, real-time order tracking
              and delivery information. <br />
              ● Designed a user-friendly and intuitive interface with a strong
              focus on high-quality mobile UI experiences that provided
              customers with a seamless ordering experience, including menu
              browsing, customization, and order placement. <br />
              ● Collaborated with backend developers to integrate Socket.IO for
              live order updates and synchronize order information with both the
              driver application and the user application. <br />
              ● Facilitated communication between the restaurant application,
              the driver application, and the user application, ensuring orders
              were assigned to drivers, tracked in real-time, and delivered
              efficiently. <br />
              ● Created a driver application that allowed delivery personnel to
              receive and manage orders, navigate to the delivery location, and
              provide timely updates on order status to both the restaurant and
              the customer. <br />
              ● Implemented geolocation services using <span>Google Map API </span> and
              <span> Socket.IO</span> to provide real-time tracking of drivers, ensuring
              accurate delivery estimates and order status updates for
              customers. <br />
              ● Added analytics using <span> MixPanel</span> to track and monitor users
              actions on the application so as to control user retention rates
              and monitor convertions. <br />
              ● Implemented the payment process on both the user application and
              a scheduled payout plan on the driver application using <span>Stripe</span>.{" "}
              <br />
              ● Conducted thorough testing to ensure seamless functionality and
              performance of both ther user and driver mobile applications,
              addressing any issues with order synchronization, <span> Socket.IO </span>
              communication, and user experience. <br />
              ● Utilized <span> Firebase </span> and <span> expo </span> push notification for push
              notifications, keeping customers, drivers and the restaurant
              informed about order status changes instantly and the order
              delivery details. <br />
            </p>
          </div>


          <div className="job">
            <p className="job__title">
              IKARELY, <span>FRONTEND DEVELOPER(contract)</span>
            </p>
            <p className="job__duration">MARCH 2020 - NOVEMBER 2021</p>
            <p className="about__job">
            ● Developed and maintained the frontend of a healthcare web application aimed at connecting patients with partnered healthcare professionals, ensuring a seamless and user-friendly experience. <br />
            ● Collaborated with the Product designer to design the UX & UI of the projects in Figma. <br />
            ● Collaborated with backend developers to integrate frontend components seamlessly with the application's server, ensuring efficient data transfer and
              synchronization. <br />
            </p>
          </div>
        </div>
      </div>

      <div className="Education">
        <div className="section__header">
          <p className="section__type">Education</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body education">
          Bsc. Electrical and Electronics Engineering at Obafemi Awolowo
          University <span className="education__year">2018 - Till Date</span>
        </div>
      </div>

      <div className="Projects">
        <div className="section__header">
          <p className="section__type">Projects</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          Links to my works can be found on{" "}
          <Link to="/work">okikiola.dev/work</Link>
        </div>
      </div>
    </div>
  );
}

export default Resume;
