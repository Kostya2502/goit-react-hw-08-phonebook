import React from 'react';
// import ContactForm from "./contactForm/ContactForm";
// import ContactList from "./contactList/ContactList";
// import Filter from "./filter/Filter";
// import { CSSTransition } from 'react-transition-group';
// import style from './App.module.css';
// import { useSelector } from "react-redux";
// import { allContacts, contactsFilter, isLoading } from '../redux/selectors';
// import LoaderSpinner from './loader/LoaderSpinner'
import Navigation from './nav/Nav';
// import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const App = () => {
    // const value = useSelector(contactsFilter);
    // const contacts = useSelector(allContacts);
    // const loader = useSelector(isLoading);

    return (
        <>
            {/* <AppBar position='fixed'> */}
            {/* <Container fixed> */}
            {/* <Typography variant='h4'>Unreal Phonebook</Typography> */}
            {/* <Toolbar> */}
            {/* <Navigation /> */}
            {/* </Toolbar> */}
            {/* </Container> */}
            {/* </AppBar> */}
            <Navigation />
            {/* <CSSTransition in={true} classNames={style} appear={true} timeout={1000} unmountOnExit>
                <h1>Phonebook</h1>
            </CSSTransition>
            <ContactForm />
            <h2>Contacts</h2>
            {(value.length > 0 || contacts.length > 1) && <Filter />}
            {loader && <LoaderSpinner />}
            <ContactList /> */}
        </>
    );
}

export default App;
