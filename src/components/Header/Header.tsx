import { Autocomplete, Group, Burger, rem, TextInput, ActionIcon, useMantineTheme, TextInputProps, Anchor, Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Text } from '@mantine/core';
import { IconArrowRight, IconSearch, IconShoppingCart } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import { IconBuildingStore } from '@tabler/icons-react';
import classes from './Header.module.css';
import { useEffect, useState } from 'react';

export function Header({ setOpenCart, openCart }: any) {

    const [opened, { toggle }] = useDisclosure(false);

    const theme = useMantineTheme();


    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <IconBuildingStore size={45} style={{ color: 'white' }} />
                    <Text fw={600} style={{ fontSize: '40px' }} c="white">InnoMart</Text>
                </Group>

                <Group>
                    <TextInput
                        style={{ width: '500px' }}
                        radius="sm"
                        size="md"
                        placeholder="Search products"
                        leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                        rightSection={
                            <ActionIcon size={32} color="#0B3797" radius="md" variant="filled">
                                <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                            </ActionIcon>
                        }
                    />

                </Group>
                <Group>
                    <Drawer size="sm" position="right" opened={opened} onClose={toggle} title="Cart">
                        {/* Drawer content */}
                    </Drawer>
                    <Button leftSection={<IconShoppingCart size={25} />} size="lg" color="#0B3797" onClick={toggle}>
                        Cart
                    </Button>
                </Group>
            </div>
        </header>
    );
}