import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LockOpenIcon from '@material-ui/icons/LockOpen';

class LoginFormView extends Component {

    render() {
        const { onSetUser, getUser } = this.props;

        return(
            <form noValidate>
                <Grid container>
                    <Grid item xs={3}>
                        <TextField
                            margin="normal"
                            id="id-basic"
                            label="Username"
                            variant="standard"
                            onChange={ (event) => onSetUser('username', event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            margin="normal"
                            id="pw-basic"
                            label="Password"
                            variant="standard"
                            onChange={ (event) => onSetUser('password', event.target.value)}
                        />
                    </Grid>

                </Grid>
                <Grid>
                    <Button
                        variant='contained'
                        color={'primary'}
                        startIcon={<LockOpenIcon />}
                        onClick={() => getUser()}
                        // onClick={() => this.props.history.push('/boards')}
                    >Login</Button>
                </Grid>

            </form>
        )
    }
}

export default LoginFormView;