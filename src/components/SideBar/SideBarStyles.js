import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
    width: 15%;
 
    height: 100%;

    
    position: sticky;
    top: 40%;
   
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