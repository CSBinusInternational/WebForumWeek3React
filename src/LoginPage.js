import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography, Link} from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export default function loginPage() {

    const paperStyle = {padding: 20, height: '60vh', width: 300, margin: '20px auto', backgroundColor: '#19c7e4'}
    const avatarStyle = {backgroundColor: 'orange'}
    const textFieldStyle = {marginTop: 20, marginBottom: 20}
    const btnStyle = {marginTop: 10}

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>

                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOpenIcon/>
                    </Avatar>

                    <h1>
                        Sign in
                    </h1>
                </Grid>      

                <TextField style={textFieldStyle} label='Username' placeholder='Enter Username' variant='outlined' fullWidth required/>

                <TextField style={textFieldStyle} label='Password' placeholder='Enter Password' variant='outlined' type='password' fullWidth required/>

                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>}
                    label="Remember Me"
                />

                <Button style={btnStyle} type='Submit' color='primary' variant='contained' fullWidth>
                    Sign In
                </Button>

                <Typography>
                    <Link href="#">
                        Forgot Password
                    </Link>
                </Typography>

                <Typography> Don't have an account?
                    <Link href="#">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>  
    )
}
 