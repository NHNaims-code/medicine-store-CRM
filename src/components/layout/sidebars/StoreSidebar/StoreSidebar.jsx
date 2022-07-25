import React from 'react';
import { Navbar, Group, Code, ScrollArea, createStyles } from '@mantine/core';
import {
  Notes,
  CalendarStats,
  Gauge,
  PresentationAnalytics,
  FileAnalytics,
  Adjustments,
  Lock,
  Menu,
  ExternalLink,
} from 'tabler-icons-react';
// import { UserButton } from '../UserButton/UserButton';
// import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { LinksGroup } from './LinksGroup';
import LogoColored from '../../../../svg/LogoColored';
import { Demo, UserButton, UserMenu } from './UserButton';


const mockdata = [
  { label: 'Dashboard', icon: Gauge, link: '/store/dashboard' },
  {
    label: 'Store',
    icon: Notes,
    initiallyOpened: true,
    links: [
      { label: 'Medicines', link: '/store/medicines' },
      { label: 'Sales', link: '/store/sales' },
      { label: 'Purchase', link: '/store/purchase' },
      { label: 'Expired', link: '/store/expired' },
    ],
  },
  {
    label: 'Releases',
    icon: CalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: PresentationAnalytics, link: '/store/analytics' },
  { label: 'Contracts', icon: FileAnalytics, link: '/store/contacts' },
  { label: 'Settings', icon: Adjustments, link: '/store/settings' },
  {
    label: 'Security',
    icon: Lock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function StoreSidebar() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={"100vh"} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <LogoColored width={120} />
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
      
      <UserMenu/>
    
      </Navbar.Section>
    </Navbar>
  );
}

export default StoreSidebar;