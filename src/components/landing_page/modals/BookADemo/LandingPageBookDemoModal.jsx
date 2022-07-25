import { Modal, useMantineTheme } from '@mantine/core';
import { LandingPageBookDemoForm } from '../../forms/BookADemo/LandingPageBookDemoForm';

function LandingPageBookDemoModal({open=false, setOpen}) {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={open}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      onClose={()=> {setOpen(false)}}
      title="Book a Demo"
    >
      {/* Modal content */}
      <LandingPageBookDemoForm/>
    </Modal>
  );
}

export default LandingPageBookDemoModal;