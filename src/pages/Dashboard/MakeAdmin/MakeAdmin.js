import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                setSuccess(true)
                setEmail('')
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make A Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '40%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant='standard'
                />
                <Button type="submit" variant='contained'>Make a Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin successfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;