import TextInput from 'ui/forms/TextInput';
import { Button } from 'ui/buttons';
import { auth } from 'lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Login from './styled';
import { useRouter } from 'next/dist/client/router';

function UserLogin({ ...props }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  async function handleClick(e) {
    e.preventDefault();
    const isUser = await signInWithEmailAndPassword(auth, email, password);
    if (isUser) {
      router.push('/add-item');
    }
  }
  return (
    <>
      <Login {...props} onSubmit={(e) => handleClick(e)}>
        <TextInput label="Email" onChange={(e) => setEmail(e.currentTarget.value)} id="emailAddress" placeholder="janedoe@home.com" {...props} />
        <TextInput label="Password" onChange={(e) => setPassword(e.currentTarget.value)} type="password" id="emailAddress" placeholder="use a secure password" {...props} />
        <Button bgcolor="#ed4747" color="white" noBoxShadow {...props} type="submit">
          LOGIN
        </Button>
      </Login>
    </>
  );
}

export default UserLogin;
