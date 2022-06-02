import styled from "styled-components"

export const Flexbox = styled.div`
  display:flex;
  flex-direction:${({flexDirection})=> flexDirection || row}
   `;

export const AppStyled=styled.div`
background-color: aqua;
text-align:center;
  `;
  export const AppHeader=styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

export const AppLogo=styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
     
      animation: App-logo-spin infinite 20s linear;
    }
  }`;
