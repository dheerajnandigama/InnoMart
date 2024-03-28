import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Landing } from '../Landing/Landing';
import { useEffect, useState } from 'react';

export function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();

  const [opencart,setOpenCart] = useState(false);

  useEffect(()=>{
    console.log(opencart)
  },[opencart])

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 310, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 250, breakpoint: 'sm', collapsed:{desktop:opencart} }}
      padding="md"
    >
      <AppShell.Header>
        <Header setOpenCart={setOpenCart} opencart={opencart}/>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar/>
      </AppShell.Navbar>
      <AppShell.Aside p="md">Cart</AppShell.Aside>
      <AppShell.Main>
        <Landing/>
      </AppShell.Main>
    </AppShell>
  );
}