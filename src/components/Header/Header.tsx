import { Autocomplete, Group, Burger, rem, TextInput, ActionIcon, useMantineTheme, TextInputProps, Anchor, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Text } from '@mantine/core';
import { IconArrowRight, IconSearch, IconShoppingCart } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import { IconBuildingStore } from '@tabler/icons-react';
import classes from './Header.module.css';
import { useEffect, useState } from 'react';

const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

export function Header(props: TextInputProps) {

    const [opened, { toggle }] = useDisclosure(false);

    const theme = useMantineTheme();

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <IconBuildingStore size={45} style={{ color: 'white' }} />
                    <Text fw={900} size="xl" c="white">InnoMart</Text>
                </Group>

                <Group>
                    <TextInput
                        radius="sm"
                        size="md"
                        placeholder="Search products"
                        rightSectionWidth={180}
                        leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                        rightSection={
                            <ActionIcon size={32} color="#0B3797" radius="md"  variant="filled">
                                <IconArrowRight style={{width: rem(18), height: rem(18) }} stroke={1.5} />
                            </ActionIcon>
                        }
                        {...props}
                    />

                </Group>
                <Group>
                    <Button leftSection={<IconShoppingCart size={25} />} size="lg" color="#0B3797">
                        Cart
                    </Button>
                </Group>
            </div>
        </header>
    );
}