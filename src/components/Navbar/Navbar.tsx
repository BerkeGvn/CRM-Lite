import { useState } from 'react';
import { NavLink } from '@mantine/core';
import { TbHome2, TbUsers, TbTopologyStar } from 'react-icons/tb';

const NavData = [
  { label: 'Dashboard', icon: <TbHome2 size={22} /> },
  { label: 'Contacts', icon: <TbUsers size={22} /> },
  { label: 'Orders', icon: <TbTopologyStar size={22} /> },
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const links = NavData.map((link, index) => (
    <NavLink
      href="#"
      key={link.label}
      active={index === active}
      label={link.label}
      onClick={() => setActive(index)}
      color="cyan"
      leftSection={link.icon}
      fz="xl"
      fw={500}
    />
  ));
  return <>{links}</>;
}
