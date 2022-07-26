import { forwardRef } from 'react';
import { ChevronRight, ExternalLink } from 'tabler-icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';

export const UserButton = forwardRef(
  ({ image, name, email, icon, ...others }, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <ChevronRight size={16} />}
      </Group>
    </UnstyledButton>
  )
);

export function UserMenu() {
  return (
    <Group position="center">
      <Menu
        withArrow
        placement="center"
        style={{ width: '100%'}}
        control={
          <UserButton
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            name="Harriette Spoonlicker"
            email="hspoonlicker@outlook.com"
          />
        }
      >
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>

        <Menu.Item
          icon={<ExternalLink size={14} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu>
    </Group>
  );
}