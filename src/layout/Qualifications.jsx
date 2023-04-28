import React, { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Qualification() {
  //gsap/ScrollTrigger effect
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      duration: 2,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        once: false,
        onEnter: () => {
          gsap.to(ref.current, {
            opacity: 1,
            duration: 2,
          });
        },
        onLeaveBack: () => {
          gsap.to(ref.current, {
            opacity: 0,
            duration: 2,
          });
        },
      },
    });
  }, []);

  return (
    <div id="qualification">
      <Container>
        <Container>
          <h1>Qualifications</h1>
        </Container>
        <div ref={ref}>
          <Accordion defaultActiveKey="0" flush className="shadow my-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordionHeader">
                Diploma of IT (Front End and Back End Web Development)
              </Accordion.Header>
              <Accordion.Body className="darkTheme">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordionHeader">
                Certificate IV of Design (Web Design)
              </Accordion.Header>
              <Accordion.Body className="darkTheme">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordionHeader">
                Master of Business (International Business)
              </Accordion.Header>
              <Accordion.Body className="darkTheme">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="accordionHeader">
                Bachelor of Art (English and International trade)
              </Accordion.Header>
              <Accordion.Body className="darkTheme">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default Qualification;
