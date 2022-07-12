import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import scratch from "../assets/ScratchApp.jpg";
import scrolloDeck from "../assets/ScrolloDeck.gif";
import weatherTracker from "../assets/WeatherTracker.png";
import workdayTracker from "../assets/WorkdayTracker.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Scratch",
      description:
        "FullStack App that uses JQuery and dog rescue group API to show users available dogs to adopt.",
      imgUrl: scratch,
    },
    {
      title: "ScrolloDeck",
      description:
        "FullStack App that uses SERN stack to allow users to randomize traditional games created in the database and allows users to add to the database as well.",
      imgUrl: scrolloDeck,
    },
    {
      title: "Weather Tracker App",
      description:
        "Based on location user inputs, this app will show the weather.",
      imgUrl: weatherTracker,
    },
    {
      title: "Workday Tracker",
      description:
        "This app allows the user to add in events or notes for every hour of the work day",
      imgUrl: workdayTracker,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here is a collection of my projects! Please peruse at your
                    leisure.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Another project here?</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>And Another project here?</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
