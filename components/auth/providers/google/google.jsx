import { ProviderButton } from 'components/ui/buttons';
import google from './google.png';
import Image from 'next/image';
function GoogleProvider({ label, ...props }) {
  return (
    <ProviderButton>
      <div>
        <Image src={google} layout="fixed" width="24" height="24" alt="" quality={1} />
      </div>
      {label}
    </ProviderButton>
  );
}

export default GoogleProvider;
