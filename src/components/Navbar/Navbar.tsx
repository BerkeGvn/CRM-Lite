import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from '@mantine/core';
import { TbHome2, TbUsers, TbTopologyStar } from 'react-icons/tb';

const NavData = [
  { label: 'Dashboard', url: '/', icon: <TbHome2 size={22} /> },
  { label: 'Contacts', url: '/contacts', icon: <TbUsers size={22} /> },
  { label: 'Orders', url: '/orders', icon: <TbTopologyStar size={22} /> },
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const links = NavData.map((link, index) => (
    <NavLink
      key={link.label}
      active={index === active}
      label={link.label}
      onClick={() => {
        setActive(index);
        navigate(link.url);
      }}
      color="cyan"
      leftSection={link.icon}
      fz="xl"
      fw={500}
    />
  ));
  return <>{links}</>;
}
