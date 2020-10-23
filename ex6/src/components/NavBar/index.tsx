import React from 'react';

interface NavBarProps {
  window?: () => Window;
}

const NavBar = (props:NavBarProps) => {
  return (
    <header>
        <h1>Atividade C1 - Dominando os INCRÍVEIS TS, GraphQL e Relay</h1>
    </header>
  )
}

export default NavBar;