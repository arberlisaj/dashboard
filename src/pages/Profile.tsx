import Button from '@/components/Button';
import useAuthStore from '@/store';

const Profile = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <h1>Wassup dawg</h1>
      <Button className="bg-red-600 text-white" handleClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
