import React from 'react';

const ErrorPage = ({ user }) => {
    return <h1>Тебе сюда нельзя - {user.name} {user.lastname}</h1>;
};

export default ErrorPage;
