import * as React from 'react';
import '../../assets/jss/scss/Search.scss';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            top: 100,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: 'white',
            '&:hover': {
                backgroundColor: 'pink',
            },

            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            }
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            left: '95%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black'
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    })
)

const Search: React.FC = () => {
    const classes = useStyles();
    return (
        <div className="Search" data-testid="Search">
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon/>
                </div>
                <InputBase
                    placeholder="Search service"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{'aria-label': 'search'}}
                />
            </div>
        </div>
    );
}

export default Search;
