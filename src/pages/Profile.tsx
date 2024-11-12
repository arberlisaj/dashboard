import Button from '@/components/Button';
import useAuthStore from '@/store';

const Profile = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <h1>Wassup dawg</h1>
      <Button handleClick={() => logout()}>GTFO</Button>
    </div>
  );
};

export default Profile;
