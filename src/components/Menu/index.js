import React from 'react';
import Logo from '../../img/Logo.png';
import './Menu.css';
import ButtonLink from '../components';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Gélicaflix logo"/>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                esse aqui é o children
            </ButtonLink>   
        </nav>
    )
}

export default Menu;
