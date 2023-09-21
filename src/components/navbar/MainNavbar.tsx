import {
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  rem,
  Autocomplete,
  Image,
  Box,
} from '@mantine/core';

import { useHistory } from 'react-router-dom';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';

const HEADER_HEIGHT = rem(60);

interface MainNavbarProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

const MainNavbar = ({ links }: MainNavbarProps) => {
  const history = useHistory();
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger='hover'
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              onClick={(event) => {
                event.preventDefault();
                history.push(link.link);
              }}
              style={{
                display: 'block',
                lineHeight: 1,
                padding: `${rem(8)} ${rem(12)}`,
                borderRadius: '4px',
                textDecoration: 'none',
                color: 'inherit',
                fontSize: rem(14),
                fontWeight: 500,
              }}
            >
              <Center>
                <span style={{ marginRight: rem(5) }}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        onClick={(event) => {
          event.preventDefault();
          history.push(link.link);
        }}
        style={{
          display: 'block',
          lineHeight: 1,
          padding: `${rem(8)} ${rem(12)}`,
          borderRadius: '4px',
          textDecoration: 'none',
          color: 'inherit',
          fontSize: rem(14),
          fontWeight: 500,
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT}>
      <Container
        fluid
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: HEADER_HEIGHT,
          maxWidth: '80rem',
        }}
      >
        <Group>
          <Group>
            <Box
              onClick={() => history.push('/')}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={`${process.env.PUBLIC_URL}/ecomarketcap-logo.svg`}
                height={48}
                style={{
                  position: 'relative',
                  top: '-6px',
                }}
              />
            </Box>
          </Group>
          <Group
            spacing={5}
            style={{
              display: 'flex',
            }}
          >
            {items}
          </Group>
        </Group>
        <Group
          spacing={5}
          style={{
            display: 'flex',
          }}
        >
          <Autocomplete
            sx={(theme) => ({
              display: 'flex',
              justifyContent: 'space-between',
              [theme.fn.smallerThan('xs')]: {
                display: 'none',
              },
            })}
            placeholder='Search'
            icon={<IconSearch size='1rem' stroke={1.5} />}
            data={[]}
          />
          <Button radius='xl' h={30} variant='subtle'>
            Log In
          </Button>
          <Button radius='xl' h={30}>
            Create free account
          </Button>
        </Group>
      </Container>
    </Header>
  );
};

export default MainNavbar;
