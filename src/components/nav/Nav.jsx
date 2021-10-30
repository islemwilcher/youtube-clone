
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Content from '../content/Content'

import useStyles from './styles'

const Nav = () => {
    const classes = useStyles()
    return (
        <div className={classes.allnav}>
            <Sidebar />
            <div  className={classes.right}>
                <Navbar />
                <div className={classes.top}>
                    <Content />
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Nav
