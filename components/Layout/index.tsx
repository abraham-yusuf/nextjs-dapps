import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import style from './Layout.module.css';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const {children, pageTitle} = props;
    return(
        <>
        <Head>
        <title>
            Blockchain Studio ID |
            {' '}
            {pageTitle}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learning Improving Envolving And Building Blockchain Studio ID" />
        </Head>
        <div className={style.container}>
            <Header />
            <div className={style.content}>{children}</div>
            <Footer />
        </div>
        </>
    );
}