import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    width: '30%',
    position: 'relative',
    },
    details: {
        display: 'block',
        margin: 'auto 0',
        paddingLeft: '15px',
        paddingBottom: '5px',
    },

[theme.breakpoints.down('sm')]: {

},
}));