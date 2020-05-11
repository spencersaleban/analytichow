import * as React from 'react';
import Header from "../../components/Header/Header";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Mutation} from "@apollo/react-components";
import ADD_APP from '../../graphql/mutations/addApp'
import query from '../../graphql/queries/getApps'
import {Query} from 'react-apollo';
import {graphql} from 'react-apollo'
import {Dimmer, Loader, Segment} from 'semantic-ui-react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 50,


    },
    paper: {
        padding: theme.spacing(1),
        marginLeft: 40,
        fontFamily: 'Halvetica',
        fontWeight: 200,
        color: 'white',
        background: '#1f1515'
    },
    add: {
        background: '#161515',
        color: 'white',
        position: 'relative',
        left: 480,
    },
    icon: {
        marginRight: theme.spacing(2),
        color: '#EDDDA8',
    },
    dailog: {
        background: '#1f1515'
    }
}));

const Setup: React.FC = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [apps, setApps] = React.useState('');
    const [value, setValue] = React.useState('');
    const [name, setName] = React.useState('');
    const [input, setInput] = React.useState({
        name: "",
        type: "source",
        user: 1234
    });


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAdd = (event, addApp) => {
        event.preventDefault()
        addApp({
            variables: {
                name: input.name,
                type: input.type,
                user: input.user
            },
        })
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = name => event => {
        event.persist();
        console.log(2, event.target.value)
        setInput({...input, [name]: event.target.value})
    };


    return (

        <Query
            query={query}
        >
            {({loading, error, data}) => {
                if (loading) return (
                    <Segment>
                        <Dimmer active>
                            <Loader/>
                        </Dimmer>
                    </Segment>
                );


                console.log(data)

                return (


                    <Mutation mutation={ADD_APP}>
                        {(addApp, {error}) => (


                            <div className="Setup" data-testid="Setup">
                                <div className="Header"><Header/></div>
                                <div className={classes.root}>
                                    <Button variant="contained" className={classes.add} disableElevation>
                                        <AddCircleOutlineIcon className={classes.icon} onClick={handleClickOpen}/> ADD
                                        SERVICE
                                    </Button>
                                    <div>

                                        <Dialog className={classes.dailog} open={open} onClose={handleClose}
                                                aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Add</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    To add service, please enter the website of the service.
                                                </DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="website"
                                                    type="text"
                                                    fullWidth
                                                    name="name"
                                                    onChange={handleChange('name')}

                                                />

                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} color="primary">
                                                    Cancel
                                                </Button>
                                                <Button onClick={(event) => {
                                                    handleAdd(event, addApp)
                                                }} color="primary">
                                                    Add
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                    <Grid container spacing={1}>

                                        {data.apps.map(app =>
                                            <Grid container item xs={12} spacing={3} key={app.id}>
                                                <Grid item xs={4}>
                                                    <Paper className={classes.paper}>{app.name}</Paper>
                                                </Grid>
                                            </Grid>
                                        )}
                                    </Grid>
                                </div>

                            </div>
                        )
                        }
                    </Mutation>
                )
            }}
        </Query>
    )
}

export default Setup
