'use client';

import { callApi } from '@/lib';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Page = () => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const router = useRouter();

  const submit = async () => {
    setIsPending(true);

    const formData = {
      name: 'Ola',
      lastName: 'Bermuda',
      sex: 'rather not say',
    };

    const { data, error } = await callApi('', { ...formData });

    if (data) {
      toast.success('Account created successfully');
      router.push('/sign-in');
    }

    if (error) {
      toast.error('Something went wrong, please try again');
      console.error(error);
    }
  };

  useEffect(() => {
    submit();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <button onClick={() => setIsPending(!isPending)}></button>
    </div>
  );
};

export default Page;
