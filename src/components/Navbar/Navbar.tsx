import { useEffect, useState } from 'react';
import { Group, ScrollArea } from '@mantine/core';
import { Text } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconMacro,
  IconArmchair2,
  IconBasket,
  IconCar,
  IconCherry,
  IconDeviceMobile,
  IconDeviceWatch,
  IconDeviceWatchStats,
  IconDevices,
  IconDiamond,
  IconFlipFlops,
  IconHomeDollar,
  IconLamp,
  IconMan,
  IconMasksTheater,
  IconMotorbike,
  IconPerfume,
  IconShirt,
  IconShoe,
  IconSunglasses,
  IconWoman,
  IconCategory,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';

const IconMap:any={
    smartphones:{
        name: 'Smart Phones',
        icon: <IconDeviceMobile/>,
    },
    laptops:{
        name: 'Laptops',
        icon: <IconDevices/>,
    },
    fragrances:{
        name: 'Fragrances',
        icon: <IconPerfume/>,
    },
    skincare:{
        name: 'Skin Care',
        icon: <IconMasksTheater/>,
    },
    groceries:{
        name: 'Groceries',
        icon: <IconCherry/>,
    },
    "home-decoration":{
        name: 'Home Decoration',
        icon: <IconHomeDollar/>,
    },
    furniture:{
        name: 'Furniture',
        icon: <IconArmchair2/>,
    },
    tops:{
        name: 'Tops',
        icon: <IconShirt/>,
    },
    "womens-dresses":{
        name: 'Womens Dresses',
        icon: <IconWoman/>,
    },
    "womens-shoes":{
        name: 'Womens Shoes',
        icon: <IconShoe/>,
    },
    "mens-shirts":{
        name: 'Mens Shirts',
        icon: <IconMan/>,
    },
    "mens-shoes":{
        name: 'Mens Shoes',
        icon: <IconFlipFlops/>,
    },
    "mens-watches":{
        name: 'Mens Watches',
        icon: <IconDeviceWatch/>,
    },
    "womens-watches":{
        name: 'Womens Watches',
        icon: <IconDeviceWatchStats/>,
    },
    "womens-bags":{
        name: 'Womens Bags',
        icon: <IconBasket/>,
    },
    "womens-jewellery":{
        name: 'Womens jewellery',
        icon: <IconDiamond/>,
    },
    sunglasses:{
        name: 'Sunglasses',
        icon: <IconSunglasses/>,
    },
    automotive:{
        name: 'Automotive',
        icon: <IconCar/>,
    },
    motorcycle:{
        name: 'Motorcycle',
        icon: <IconMotorbike/>,
    },
    lighting:{
        name: 'Lighting',
        icon: <IconLamp/>
    }

}


export function Navbar() {

  const [active, setActive] = useState('Billing');

  const [cat, setCat] = useState([])

  useEffect(() => {

      fetch('https://dummyjson.com/products/categories')
          .then(res => res.json())
          .then((data) => setCat(data));


  },[])

  const links = cat.map((item) => (
    <a
      className={classes.link}
      data-active={item === active || undefined}
      href={item}
      key={item}
      onClick={(event) => {
        event.preventDefault();
        setActive(item);
      }}
    >
         {IconMap[`${item}`].icon}

      <span style={{marginLeft:'10px', fontSize:'15px'}}>{IconMap[`${item}`].name}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
        <Text fw={500} tt="uppercase" ta="center" size="sm" c="white">Categories</Text>
        <IconCategory style={{ color: 'white' }} />
        </Group>
        <ScrollArea h={"80%"}>
        {links}
        </ScrollArea>
      </div>
    </nav>
  );
}