import useUsers from '@/hooks/useUsers';

const UsersTable = () => {
  const { users, isLoading, error } = useUsers();
  if (error) return <p>Oops! Something went wrong!</p>;
  else if (isLoading) return <p>Loading...</p>;
  else
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
