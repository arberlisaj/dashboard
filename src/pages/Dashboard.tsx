import UsersTable from '@/components/UsersTable';
import useUsers from '@/hooks/useUsers';

const Dashboard = () => {
  const { user } = useUsers('/1');
  const { users } = useUsers();

  return (
    <div>
      <h1>Fetch a single user</h1>
      <h1>{user?.name}</h1>
      <h1>Fetch all users and display them in a table</h1>
      <UsersTable users={users} />
    </div>
  );
};

export default Dashboard;
