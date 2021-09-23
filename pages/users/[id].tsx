import Layout from "../../components/Layout";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailProps {
    user: User;
}
export default function UsersDetail(props: UserDetailProps) {
    //const router = useRouter();
    //const { id } = router.query;
    const {user} = props;
    return (
        <Layout pageTitle="User Details">
            <h1>User Detail pages</h1>
            <ul className="listmenu">
            <li className="itemmenu">Name: {user.name}</li>
            <li className="itemmenu">Email: {user.email}</li>
            <li className="itemmenu">Phone: {user.phone}</li>
            <li className="itemmenu">Webiste: {user.website}</li>
            </ul>
        </Layout>
    );
}

export async function getStaticPaths() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
	const dataUsers = await res.json();

	const paths = dataUsers.map((user: User) => ({
	     params: {
	    	id: `${user.id}`,
	    },
	}));
	return {
		paths,
        fallback: false,
	};
}

interface GetStaticProps {
    params: {
        id: string;
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const {id} = context.params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const user = await res.json();

	return {
        props: {
            user,
        }
    }
}