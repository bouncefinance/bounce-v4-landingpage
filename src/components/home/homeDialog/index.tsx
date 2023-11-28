import { useEffect, useState } from 'react';
import Dialog from './dialog';
const Page = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  const handleOpen = () => {
    setOpen(false);
  };
  return <Dialog open={open} onClose={handleOpen} />;
};
export default Page;
