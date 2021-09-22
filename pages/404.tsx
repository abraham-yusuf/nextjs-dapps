import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404 () {
    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, []);
    return(
        <div>
            <h1 className="title-not-found">Oppsss...</h1>
            <h1 className="title-not-found">Halaman Yang Anda Cari Tidak Dapat Ditemukan.</h1>
        </div>
    );
}