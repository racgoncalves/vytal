import React from 'react';

export const getUser = async (email, password) => {
    try {
        const res = await fetch(
            'http://ec2-54-233-173-244.sa-east-1.compute.amazonaws.com:8083/usuario/login/' + email + '/' + password,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            }
        );
    
        const result = await res.json();
        return [res, result];

    } catch (error) {
        console.error(error);
    }


}

