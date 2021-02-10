import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import style from './ContactList.module.css';
import './ContactList.css';
import { deleteContact, getContacts } from '../../redux/operations';
import { filterContactsByName } from '../../redux/selectors';


import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
// import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ContactList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const contacts = useSelector(filterContactsByName);

    useEffect(() => {
        dispatch(getContacts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ondeleteContact = id => dispatch(deleteContact(id));

    return (
        <TransitionGroup component='ul' style={{ marginLeft: '0px' }} >
            {contacts.map(({ id, name, number }) => (
                < CSSTransition key={id} timeout={400} classNames={style} >
                    <li style={{ margin: '10px auto', width: '400px' }} key={id} className={style.item}>
                        <p >
                            {name}: {number}
                        </p>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                            type="button"
                            onClick={() => ondeleteContact(id)}
                        >
                            Delete
                        </Button>
                        {/* <button
                            type="button"
                            onClick={() => ondeleteContact(id)}
                            className={style.button}
                        >
                            Delete
                        </button> */}
                    </li>
                </CSSTransition>
            ))
            }
        </TransitionGroup >
    );
}

export default ContactList;
