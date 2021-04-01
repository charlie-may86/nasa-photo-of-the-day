import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.div`
  p {
    color: ${(pr) => pr.theme.paragraphColor};
  }
`;

export default function Photo({ photo, info }) {
  return (
    <div className="photo">
      <div className="photoDiv">
        <img src={photo} alt="" />
      </div>
      <StyledParagraph>
        <p>{info}</p>
      </StyledParagraph>
    </div>
  );
}

