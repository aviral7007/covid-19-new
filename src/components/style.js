import styled from 'styled-components'

export const Grid = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 0.2fr 1.5fr  0.5fr;
grid-template-areas:
  "nav nav nav nav"
  "sidebar main main main"
  "sidebar footer footer footer";
text-align: center;
grid-gap: 0.25rem;
color: white;

`;
export const Menu=styled.aside`
background:#004d4d ;
grid-area: sidebar;
padding: 0.25rem;
border-radius:2rem;
`;
export const Menucontainer=styled.div`
width: 60%;
background-color:#ceeaf0;
color:black ;
height: 20%;
margin: 60% 10%;
border-radius: 1rem;
display: flex;
flex-direction: column;
padding: 1rem;
a {
  color: white;
  text-decoration: none;
}
@media screen and (min-width: 320px) and (max-width: 1080px) {
  margin-bottom: 2rem;
}
`;

export const CovidTrakerContainer = styled.main`
background:  #ceeaf0;
  color: white;
  grid-area: main;
  padding: 0.50rem;
  border-radius: 2rem
  
`;

export const CovidTrakerInnerContainer = styled.div`
 text-align: center;
 font-size: 30px;
 `;

export const HeaderBar = styled.h3`
color:white;
font-size:30px;

`
export const Image = styled.img`
width:flex;
`
export const SearchBar = styled.input`
width: 40%;
padding: 15px 32px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  font-wait:600px;
  background:#ceeaf0;
  border-radius: 2rem
  

`
export const SearchButton = styled.button`
  background-color:#ceeaf0;
  border: 1rem;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 2rem

`
export const DataOuterContainer = styled.div`
 text-align: center;
 font-size: 30px;
 gap:2rem;
`

export const PrimaryInfromation = styled.div`
width: 70%;
 margin-left: 15%;
 margin-right: 38%;
 color:black;
`

export const Footercontainer = styled.footer`
background: #004d4d;
grid-area: footer;
padding: 0.25rem;
border-radius: 2rem
`;
export const Innerfootercontainer = styled.h3`
text-align:center;
font-size:20px;
color:white;
`

export const Button=styled.button`
background:#ceeaf0;
font-size:30px;
color:black;
border-radius:2rem;
`

export const Headercontainer = styled.header`
background: #004d4d;
  grid-area: nav;
  padding: 0.25rem;
  // border-radius: 2rem
`;

export const Innerheader=styled.h1`
color:white;
text-align:center;
`

export const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  height:100px;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center; 
  border-radius: 2rem 
  // gap:4rem;
`;

export const Content1 = styled.div`
  background: #004d4d;
  padding: 0.25rem;
  // margin:2rem;
  width: 100%;
  height: 100%;
  back
  // background-image: linear-gradient(to right, white 0%, skyblue 50%);
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0.2,0.2,0.2,0.2);
  transition: 0.5s;
  &:hover{
      box-shadow: 0 16px 16px 0 rgba(0.2,0.4,0.2,0.4);
      background:#083440;
  }
  border-radius: 2rem
`;

