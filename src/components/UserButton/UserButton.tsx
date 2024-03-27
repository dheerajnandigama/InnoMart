import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';

export function UserButton() {
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="md" fw={500} c="white">
            Paul Lee
          </Text>

          <Text c="white" size="xs">
            paul.lee@innocaption.com
          </Text>
        </div>

        <IconChevronRight style={{ color: 'white', width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}