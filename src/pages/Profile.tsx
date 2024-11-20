import { Button } from '@/components/ui/button';
import useAuthStore from '@/store';

const Profile = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <h1>Hello dawg!</h1>
      <Button variant="destructive" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
