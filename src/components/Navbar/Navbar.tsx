import { useState } from 'react';
import { NavLink } from '@mantine/core';
import { TbHome2 } from 'react-icons/tb';

const NavData = [
  { label: 'Dashboard', icon: <TbHome2 /> },
  { label: 'Contacts', icon: <TbHome2 /> },
  { label: 'Orders', icon: <TbHome2 /> },
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
    />
  ));
  return <>{links}</>;
}
