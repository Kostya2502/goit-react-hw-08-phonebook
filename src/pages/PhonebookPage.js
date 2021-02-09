import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import LoaderSpinner from '../components/loader/LoaderSpinner';
import { allContacts, contactsFilter, isLoading } from '../redux/selectors';
import style from '../components/App.module.css';

const PhonebookPage = () => {
    const value = useSelector(contactsFilter);
    const contacts = useSelector(allContacts);
    const loader = useSelector(isLoading);

    return (
        <>
            <CSSTransition in={true} classNames={style} appear={true} timeout={1000} unmountOnExit>
                <h1>Phonebook</h1>
            </CSSTransition>
            <ContactForm />
            <h2>Contacts</h2>
            { (value.length > 0 || contacts.length > 1) && <Filter />}
            { loader && <LoaderSpinner />}
            <ContactList />
        </>
    );
}

export default PhonebookPage;