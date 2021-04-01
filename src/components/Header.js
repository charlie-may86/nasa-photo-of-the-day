import React from "react";
import styled from "styled-components";
import '../'

// const Header = (props) => {
//   const { date, title } = props;

//   return (
//     <header className="header">
//       <h1>NASA Photo of the Day {date}</h1>
//       <h2>{title}</h2>
//     </header>
//   );
// };

// export default Header;

const StyledHeader = styled.header`
  h1 {
    color: ${(pr) => pr.theme.primaryColor};

  }

  h2 {
    color: ${(pr) => pr.theme.secondaryColor};
  }
`;

export default function Header({ date, title }) {
  return (
    <StyledHeader>
      <h1>NASA Photo of the Day {date}</h1>
      <h2>{title}</h2>
    </StyledHeader>
  );
}
