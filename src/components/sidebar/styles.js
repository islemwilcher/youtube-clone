import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    sidebar: {
        width: '20%',
        backgroundColor: 'whitesmoke',
        height: '100vh',
        paddingLeft: '10px',
        position: 'fixed',
        zIndex: '20',
    },
[theme.breakpoints.down('sm')]: {

},
}));