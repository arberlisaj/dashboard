import { User } from '@/services/user-service';

const UsersTable = ({ users }: { users: User[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="text-center">{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
