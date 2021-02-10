import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainroutes";
import { useDispatch, useSelector } from "react-redux";
import NavItem from "./NavItem";
import { signOut } from "../../redux/auth/authActions";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import { Button } from "@material-ui/core";

const Navigation = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch();
    const onHandleLogout = () => {
        dispatch(signOut());
    };
    return (
        <>
            <ul className='list right'>
                {mainRoutes.map((route) => (
                    <NavItem {...route} isAuth={isAuth} key={route.path}>
                        {/* <NavLink
                            to={route.path}
                            exact={route.exact}
                            className='link'
                            activeClassName='activeLink'>
                            {route.name.toUpperCase()}
                        </NavLink> */}
                    </NavItem>
                ))}
                {isAuth && (
                    <Button variant="contained" color="secondary" onClick={onHandleLogout}>LogOut
                        {/* <button onClick={onHandleLogout}>LogOut</button> */}
                    </Button>)}
            </ul>
            {/* <button onClick={onHandleLogout}>LogOut</button> */}
            {/* <Suspense fallback={<h2>...loading</h2>}> */}
            <Suspense fallback={<></>}>
                <Switch>
                    {mainRoutes.map((route) =>
                        route.isPrivate ? (<PrivateRoute {...route} isAuth={isAuth} key={route.path} />)
                            : (<PublicRoute {...route} isAuth={isAuth} key={route.path} />)
                    )}
                </Switch>
            </Suspense>
        </>
    );
};

export default Navigation;



























// =====================================================================
// import React, { Suspense } from "react";
// import { Switch, Route, NavLink } from "react-router-dom";
// import { mainRoutes } from "../../routes/mainroutes";
// import { useDispatch } from "react-redux";
// // import Button from '@material-ui/core/Button';
// // import { signOut } from "../../redux/actions/authActions";
// import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, Box, Button, Container, Toolbar, Typography } from '@material-ui/core';
// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));

// const Navigation = () => {
//     const classes = useStyles();
//     const dispatch = useDispatch();
//     // const onHandleLogout = () => {
//     //     dispatch(signOut());
//     // };
//     return (
//         <>
//             <AppBar position='fixed' color="red">
//                 <Container fixed className={classes.root} >
//                     <Typography variant='h4'>Unreal Phonebook</Typography>
//                     <Toolbar className={classes.root} >
//                         <ul className={classes.root} >
//                             {mainRoutes.map(({ path, name, exact }) => (
//                                 <li key={path} >
//                                     <   Box className={classes.root} mr='90'>
//                                         <Button color="primary" variant="outlined">
//                                             <NavLink
//                                                 to={path}
//                                                 exact={exact}
//                                                 className='link'
//                                                 activeClassName='activeLink'>
//                                                 {name.toUpperCase()}
//                                             </NavLink>
//                                         </Button>
//                                     </Box>
//                                 </li>
//                             ))}
//                         </ul>
//                         {/* <button onClick={onHandleLogout}>Logout</button> */}
//                         <Suspense fallback={<h2>...loading</h2>}>
//                             <Switch>
//                                 {mainRoutes.map(({ path, exact, component }) => (
//                                     <Route path={path} exact={exact} component={component} key={path} />
//                                 ))}
//                             </Switch>
//                         </Suspense>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </>
//     );
// };

// export default Navigation;

// =======================================================