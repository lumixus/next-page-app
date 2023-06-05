import React from 'react'
import Head from 'next/head'
import Navbar from '../../components/navbar'

const layout = ({children}) => {
    return (
        <>
        <Head>
        <title>NEXT APP</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>
        <Navbar>
        </Navbar>
        
            {children}

        </>
    )
}

export default layout;
