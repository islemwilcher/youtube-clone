import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    allthenav: {
        backgroundColor: 'whitesmoke',
        margin: '0 0 0 auto',
        position: 'fixed',
        zIndex: '20',
        width: '80%',
    },
    nav : {
        display: 'flex',
        justifyContent: 'space-between',
        
        
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
        width: '100%',
    },
    title: {
        backgroundColor: '#969292',
        borderRadius: '30px',
        padding: '5px',
        marginLeft: '10px',
        cursor: 'pointer',
    },
    
[theme.breakpoints.down('sm')]: {

},
}));