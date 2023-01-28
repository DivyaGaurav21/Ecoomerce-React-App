import React from 'react'
import './Footer.css'

// _____________Importing react icons___________//
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'


// ___________________Main Footer Component___________//
const Footer = () => {
    return (
        <footer>
            <a href="/" className='footer__logo'>Meal Hub</a>

            <ul className="permalinks">
                <li><a href="/">Home</a></li>
                <li><a href="https://divyagaurav21.github.io/my-portfolio/">Developer</a></li>
                <li><a href="/cart">Your Cart</a></li>
                <li><a href="/">Service</a></li>
                <li><a href="#https://divyagaurav21.github.io/my-portfolio/">Portfolio</a></li>
                <li><a href="/">Sell Your Food</a></li>
                <li><a href="https://divyagaurav21.github.io/my-portfolio/">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/gaurav.divya.7528" target='_blank' rel='noreferrer'><BsFacebook /></a>
                <a href="https://www.instagram.com/gaurav.divya.7528/" target='_blank' rel='noreferrer'><GrInstagram /></a>
                <a href="https://twitter.com/i/flow/login" target='_blank' rel='noreferrer'><AiFillTwitterCircle /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy;Divya Gaurav : All right reserved.</small>
            </div>
        </footer>
    )
}

export default Footer