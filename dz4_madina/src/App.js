import React, { useState, useEffect } from 'react';
import MainPage from './components/mainpage/MainPage';
import ErrorPage from './components/errorPage/ErrorPage';

const App = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const name = prompt('Введите ваше имя:');
        const lastname = prompt('Введите вашу фамилию:');

        handleUserSubmit({ name, lastname });
    }, []);

    const handleUserSubmit = ({ name, lastname }) => {
        if (name === 'John' && lastname === 'Johns') {
            setUser({ name, lastname });
            setError(false);
        } else {
            setUser({ name, lastname });
            setError(true);
        }
    };

    return (
        <div>
            {user && !error && <MainPage user={user} />}
            {user && error && <ErrorPage user={user} />}
        </div>
    );
};

export default App;
