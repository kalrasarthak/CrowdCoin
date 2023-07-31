import React, { useEffect } from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";

const Layout = (props) => {
  useEffect(() => {
    // Set the background color of the body element
    document.body.style.backgroundColor = "#cccee3";
  }, []);

  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
