import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    nav : {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 20px',
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
        padding: '0px',
        fontSize: '20px',
        color: 'black'
    },
    btnv : {
        padding: '10px',
        fontSize: '25px',
        borderRadius: '50%',
        color: 'black'
    },
    
[theme.breakpoints.down('sm')]: {

},
}));