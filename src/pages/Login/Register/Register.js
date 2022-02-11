import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(field, value, newLoginData)
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="h5" gutterBottom component="div">Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="User Name"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="outlined" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="outlined" />
                        <TextField
                            sx={{ width: '75%', m: 3 }}
                            id="outlined-basic"
                            label="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="Password"
                            variant="outlined" />
                        <TextField
                            sx={{ width: '75%', m: 3 }}
                            id="outlined-basic"
                            label="Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="Password"
                            variant="outlined" />
                        <br />
                        <Button variant="contained" type="submit">Register</Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'>
                            <Button variant="text">Already register? Please Login</Button>
                        </NavLink>

                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">user create successful</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
            </Grid>

        </Container >
    );
};

export default Register;