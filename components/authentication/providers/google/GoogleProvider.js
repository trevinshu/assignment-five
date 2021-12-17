import Image from 'next/image';
import { ProviderButton } from 'ui/buttons';
import google from './google.png';
import { auth } from 'lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'lib/hooks/useAuth';

function GoogleProvider({ children, ...props }) {
  const router = useRouter();
  const user = useAuth();
  const [isValidUser, setIsValidUser] = useState(null);
  const provider = new GoogleAuthProvider();

  //request a sign in with pop window pass the provider
  async function requestLogin() {
    setIsValidUser(await signInWithPopup(auth, provider));
  }

  function handleClick() {
    //sign in with google
    requestLogin();
  }

  if (isValidUser) {
    router.push('/add-item');
  }

  return (
    <ProviderButton onClick={handleClick} {...props}>
      <div>
        <Image src={google} layout="fixed" width={24} height={24} quality={30} />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
