import Layout from "../components/Layout";
import styles from "../../styles/Users.module.css";

export default function Blog(props) {
    const {dataBlog} = props;
    return (
        <Layout pageTitle="Blog">
            <h1 className="title">Blog pages</h1>
            {dataBlog.map(blog => {
                return (
                    <div key={blog.id} className={styles.blogcard}>
                        <p>{blog.title}</p>
                        <p>{blog.body}</p>
                    </div>
                )
            })}
        </Layout>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const dataBlog = await res.json();
    return {
        props: {
            dataBlog,
        },
    };
}