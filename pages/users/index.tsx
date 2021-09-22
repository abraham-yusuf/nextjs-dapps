import Layout from "../../components/Layout";

interface UserProps {
    dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
    const {dataUsers} = props;

    console.log(dataUsers);
    return(
        <Layout pageTitle="User Page">
            <h1>User Pages</h1>
            {dataUsers.map(user => {
                return (
                    <>
                     <p>{user.name}</p>
                     <br/>{user.email}
                    </>
                )
            })}
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return{
        props: {
            dataUsers,
        },
    };
}