import { IoPersonCircleSharp } from 'react-icons/io5';
import { LoginStatus } from './styles';
import { useAuth } from 'lib/hooks/useAuth';
import { auth } from 'lib/firebase';
import { signOut } from '@firebase/auth';
import { useRouter } from 'next/dist/client/router';
function UserLoginStatus({ size, color, status, ...props }) {
  const user = useAuth();
  const router = useRouter();
  function handleClick() {
    //sign the user out
    signOut(auth).then(() => {
      router.push('/');
    });
  }
  if (user) {
    return (
      <LoginStatus bgcolor="#d6fecd" onClick={handleClick}>
        <IoPersonCircleSharp size={size || '1.75rem'} />
        <figcaption>
          <p>Status</p>
          <p>logout</p>
        </figcaption>
      </LoginStatus>
    );
  }

  return (
    <LoginStatus>
      <IoPersonCircleSharp size={size || '1.75rem'} />
      <figcaption>
        <p>Status</p>
        <p>please login</p>
      </figcaption>
    </LoginStatus>
  );
}

export default UserLoginStatus;
