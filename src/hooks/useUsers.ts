import userService, { User } from '@/services/user-service';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

const useUsers = (userId?: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>(userId);
    request
      .then((res) => {
        if (Array.isArray(res.data)) {
          setUsers(res.data);
        }
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { users, user, error, isLoading, setUsers, setError };
};

export default useUsers;
