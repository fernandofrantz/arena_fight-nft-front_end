import { StyledBurger } from "./styles";
import RightNav from '../RightNav/RightNav';
import React, { useState } from 'react';

const Burger = () => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <RightNav open={open}/>
      </>
    )
  }
  
  export default Burger