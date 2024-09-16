import React from 'react'
import style from "./footer_new.module.css"
import { Container } from '../../pages/customer_journey/plan_details/journey'
import nav_logo from "../../components/navbar.jsx/images/nav_logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Footer_new = () => {
  return (
    <>
<div className={style.footer_bg}>
    <Container>
        <footer>
            <div className={style.footer_top}>
                <div className={style.logo}>
                    <img src={nav_logo} alt="" />
                </div>
                <div className={style.center_text}>
                    <p><span style = {{color:"#FF4500"}}>Feel Hunger!</span> Order Your Like Food</p>
                </div>
                <div className={style.btn}>
                    <button>Order Now</button>
                </div>
            </div>
            <div className={style.footer_bottom}>
                <div className={style.address}>
                    <p>Address</p>
                    <p>
                        <span><FaLocationDot style = {{color:"#000000"}}/></span>
                        570 8th Ave,New York, NY 10018 United States
                    </p>
                    <p>
                        <span><FaPhone  style = {{color:"#000000"}}/></span>
                        1234567890
                    </p>
                    <p>
                        <span><IoMdMail  style = {{color:"#000000"}}/></span>
                        test@gmail.com
                    </p>
                </div>
                <div className={style.hours}>
                    <p>Opening Hours</p>
                    <p>Monday-Friday: 8am-12am</p>
                    <p>saturday-Sunday: 8am-2am</p>
                </div>
                <div className={style.links}>
                    <p>Quick Links</p>
                    <Link to = "/">Home</Link>
                    <Link to = "/about-us">About Us</Link>
<Link to = "/contact-us">Contact US</Link>
<Link to = "/menu">Menu</Link>
<Link to = "/faq">Faq</Link>
                </div>
            </div>
        </footer>
    </Container>
</div>
    </>
  )
}