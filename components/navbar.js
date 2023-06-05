import React from 'react'
import Image from 'next/image'
import Logo from '../public/examplelogo.png'
import styles from '../styles/Home.module.scss'


const navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navbar}>
                    <div className={styles.brand}>
                        <Image src={Logo}>
                            
                        </Image>
                    </div>
                    <div className={styles.navs}>
                        <a href="#">Homepage</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className={styles.userNavs}>
                            <i className="fa fa-user"></i>
                            <i className="fa fa-shopping-bag"></i>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default navbar
