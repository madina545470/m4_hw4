import React, { useState, useEffect } from 'react';

const Users = ({ onSubmit }) => {
    useEffect(() => {
        const name = prompt('Введите ваше имя:');
        const lastname = prompt('Введите вашу фамилию:');

        onSubmit({ name, lastname });
    }, [onSubmit]);

    return null; // Ничего не отображаем
};

export default Users;
