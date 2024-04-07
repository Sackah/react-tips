import { User } from "../../../utils/users";

interface TableProps {
    users: User[];
}

const Table = (props: TableProps) => {
    return (
        <table className="table text-center">
            <thead>
                <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Message</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.role}</td>
                        <td>{user.email}</td>
                        <td>{user.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
