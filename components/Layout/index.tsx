import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import style from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}
export default function Layout(props: LayoutProps) {
    const {children} = props;
    return(
        <div className={style.container}>
            <Header />
            <div className={style.content}>{children}</div>
            <Footer />
        </div>
    );
}