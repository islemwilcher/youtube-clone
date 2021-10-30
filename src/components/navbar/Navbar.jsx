
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { BsSearch, BsFillPersonFill } from 'react-icons/bs'
import { MdKeyboardVoice, MdSettings } from 'react-icons/md'
import { SiNintendogamecube } from 'react-icons/si'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    };
    return (
        <div className={classes.allthenav}>
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
        <div >
        <Swiper className={classes.swipe}
            spaceBetween={0}
            slidesPerView={15}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
            >
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>All</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>series</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>football</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>Media</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>News</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>Music</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>world</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>Live</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>Laughter</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>Kids</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>Cartoon</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>Cars</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>Comedy</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>songs</SwiperSlide></Link>
            <Link style={navStyle} to="#"><SwiperSlide className={classes.title}>USA</SwiperSlide></Link>
        </Swiper>
        </div>
        </div>
    )
}

export default Navbar
