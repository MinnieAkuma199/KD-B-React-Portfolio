import { Col } from "react-bootstrap";

//not sure if the links are working correctly by doing this... where else would i put the actual link in?
export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {/* <link>{link}Deployed App </link>
          <link>{link}GitHub repo</link> */}
        </div>
      </div>
    </Col>
  );
};
