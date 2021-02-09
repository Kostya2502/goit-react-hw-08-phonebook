import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ isAuth, path, name, exact, isPrivate, restricted }) => {
    return (
        <>
            {!isPrivate && !restricted && (
                <li className='listItem' key={path}>
                    <Button variant="contained" color="primary" size="large" >
                        <NavLink style={{ color: 'white' }}
                            to={path}
                            exact={exact}
                            className='link'
                            activeClassName='activeLink'>
                            {name.toUpperCase()}
                        </NavLink>
                    </Button>
                </li>
            )}

            {isAuth && isPrivate && !restricted && (
                <li className='listItem' key={path}>
                    <Button variant="contained" color="primary" size="large" >
                        <NavLink style={{ color: 'white' }}
                            to={path}
                            exact={exact}
                            className='link'
                            activeClassName='activeLink'>
                            {name.toUpperCase()}
                        </NavLink>
                    </Button>
                </li>
            )}

            {!isAuth && !isPrivate && restricted && (
                <li className='listItem' key={path}>
                    <Button variant="contained" color="primary" size="large" >
                        <NavLink style={{ color: 'white' }}
                            to={path}
                            exact={exact}
                            className='link'
                            activeClassName='activeLink'>
                            {name.toUpperCase()}
                        </NavLink>
                    </Button>
                </li>
            )}
        </>
    );
}

export default NavItem;