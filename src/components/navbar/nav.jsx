
import { Button } from '@material-ui/core'
import { BsSearch, BsFillPersonFill } from 'react-icons/bs'
import { MdKeyboardVoice, MdSettings } from 'react-icons/md'
import { SiNintendogamecube } from 'react-icons/si'

import useStyles from './styles'

const Nav = () => {
    const classes = useStyles()
    return (
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
    )
}

export default Nav
