
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { BsSearch, BsFillPersonFill } from 'react-icons/bs'
import { MdKeyboardVoice, MdSettings } from 'react-icons/md'
import { SiNintendogamecube } from 'react-icons/si'

import useStyles from './styles'

const Nav = () => {
    const classes = useStyles()
    const navStyle = {
        textDecoration: 'none',
        color: 'black',
        backgroundColor: '#a39f9e',
        padding: '10px',
        borderRadius: '30px',
    };
    return (
        <>
        <div className={classes.nav}>
            <div className={classes.left}>
                <div className={classes.top}>
                    <input className={classes.input} placeholder='SEARCH' />
                    <Button className={classes.btn}  variant='outlined' >
                        <BsSearch />
                    </Button>
                    <Button className={classes.btn} >
                        <MdKeyboardVoice />
                    </Button>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.top}>
                    
                    <Button className={classes.btn} >
                        <SiNintendogamecube />
                    </Button>
                    <Button className={classes.btn}   >
                        <MdSettings />
                    </Button>
                    <Button className={classes.btns}  variant='outlined' >
                        <BsFillPersonFill />
                        Sign in
                    </Button>
                </div>
            </div>
        </div>
        <div className={classes.bottom} >
            <ul className={classes.ul}>
                <Link style={navStyle} ><li>All</li></Link>
                <Link style={navStyle} ><li>Live</li></Link>
                <Link style={navStyle} ><li>Misuc</li></Link>
                <Link style={navStyle} ><li>History</li></Link>
                <Link style={navStyle} ><li>Television series</li></Link>
                <Link style={navStyle} ><li>box</li></Link>
                <Link style={navStyle} ><li>tech</li></Link>
                <Link style={navStyle} ><li>BBC</li></Link>
                <Link style={navStyle} ><li>Laughter</li></Link>
                <Link style={navStyle} ><li>Cartoon</li></Link>
                <Link style={navStyle} ><li>Cars</li></Link>
                <Link style={navStyle} ><li>Football</li></Link>
                <Link style={navStyle} ><li>Sports</li></Link>
                <Link style={navStyle} ><li>Media</li></Link>
                <Link style={navStyle} ><li>USA</li></Link>
                <Link style={navStyle} ><li>Recently uploaded</li></Link>
            </ul>
        </div>
        </>
    )
}

export default Nav
