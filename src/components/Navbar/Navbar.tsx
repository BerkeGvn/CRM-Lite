import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from '@mantine/core';
import { TbHome2, TbUsers, TbTopologyStar } from 'react-icons/tb';

const NavData = [
  { label: 'Dashboard', url: '/', icon: <TbHome2 size={22} /> },
  { label: 'Contacts', url: '/contacts', icon: <TbUsers size={22} /> },
  { label: 'Orders', url: '/orders', icon: <TbTopologyStar size={22} /> },
];

export default function Navbar() {
  //using local storage to save the active link index becacuse NavLink is not from react-router
  const [active, setActive] = useState(() => {
    const savedIndex = localStorage.getItem('activeLinkIndex');
    return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('activeLinkIndex', active.toString());
  }, [active]);

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
