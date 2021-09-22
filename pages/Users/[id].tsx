import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function UsersDetail() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout pageTitle="User Details">
            <h1>User Detail pages</h1>
            <p>
                {' '}
                {id}
                {' '}
            </p>
        </Layout>
    );
}