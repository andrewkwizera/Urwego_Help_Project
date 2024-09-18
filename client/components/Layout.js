import React from "react"
import Head from "next/head"
import Link from "next/link"
import Router from "next/router"
import NProgress from "nprogress"

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();
const Layout = props =>{
    const head = () => (
        <React.Fragment>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link>
        </React.Fragment>
        
    )
    const nav = () => (
        <ul className="nav justify-content-center nav-tabs bg-light">
            <li className="nav-item">
                <Link href="/" className="nav-link text-dark">Home</Link>
                </li>
                <li className="nav-item">
                <Link href="/account" className="nav-link text-dark">Create Account</Link>
                </li>
                <li className="nav-item">
                <Link href="/deposit" className="nav-link text-dark">Deposit</Link>
                </li>
                <li className="nav-item">
                <Link href="/withdraw" className="nav-link text-dark">Withdraw</Link>
                </li>
        </ul>
    );
    return <React.Fragment>{head()} {nav()} <div className="container pt-5 pb-5">{props.children}</div></React.Fragment>;
};

export default Layout;