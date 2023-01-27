import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const LinkContainer = styled.div`
   
  position: sticky;
  top: 50%;
  
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32%;
  }
`;


export const LinkDiv = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;


export const ListItem = styled.li`
 
margin-bottom: 1rem;
 
}
`
// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;



export const Container2 = styled.div`
  display: grid;
  grid-template-columns: 2rem 1rem ;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;

  position: sticky;
  top: 4rem;
  
  
  

`;


export const HeaderTitle = styled.h2`
  font-weight: 400;
  font-size: 25px;

  width: max-content;
  max-width: 85%;
  
  padding-top 5px;
  margin-bottom: 15px;
  

`;


export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
margin-right:2rem;
&:hover {
    
    transform: scale(1.3);
    cursor: pointer;
    
  }
`;


export const Div1 = styled.div`
grid-area: 1 / 2 / 3 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
 
`;


export const Div3 = styled.div` 
  display:flex;
  flex-direction: column;
  
  grid-area: 1 / 1 / 2 / 2;
  
  
`;


