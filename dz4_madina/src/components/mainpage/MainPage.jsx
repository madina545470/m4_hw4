import React from 'react';

const MainPage = ({ user }) => {
    return <h1>Добро пожаловать {user.name} {user.lastname}, мы ждали именно тебя!</h1>;
};

export default MainPage;
