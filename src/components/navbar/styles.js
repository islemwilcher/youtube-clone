import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    nav : {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 10px 10px auto',
        width: '70%',
    },
    input : {
        width: '400px',
        padding: '8px',
    },
    btn : {
        padding: '5px',
        fontSize: '25px',
        color: 'black'
    },
    btns : {
        padding: '0px 10px',
        fontSize: '20px',
        color: 'black'
    },
    btnv : {
        padding: '10px',
        fontSize: '25px',
        borderRadius: '50%',
        color: 'black'
    },
    swipe: {
        margin: '10px 10px 10px auto',
        width: '70%',

    },
    title: {
        backgroundColor: '#969292',
        borderRadius: '30px',
        padding: '5px 10px',
        marginLeft: '10px',
        width: 'auto',
    },
    
[theme.breakpoints.down('sm')]: {

},
}));