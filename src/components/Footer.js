import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  const { copyright } = props;

  return (
    <footer className="footer">
      <p>Photo copyright and courtsey of {copyright ? copyright : "unkown"}</p>
    </footer>
  );
};

export default Footer;
