import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
}));
export default function TopBar({ title }) {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}