import {
  Menu,
  Header,
  Container,
  Group,
  Autocomplete,
  Image,
  Box,
  Flex,
  NavLink,
  Text,
  ActionIcon,
  Avatar,
  useMantineTheme,
  ColorScheme,
} from '@mantine/core';

import { useHistory } from 'react-router-dom';
import {
  IconMenu2,
  IconMoonStars,
  IconSearch,
  IconSun,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

type MainNavbarProps = {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
  colorScheme: ColorScheme;
  toggleColorScheme: (value?: ColorScheme) => void;
};

const MainNavbar = ({
  links,
  colorScheme,
  toggleColorScheme,
}: MainNavbarProps) => {
  const history = useHistory();
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  const dark = colorScheme === 'dark';
  const items = links.map((item, key) => {
    return (
      <NavLink
        key={key}
        label={item.label}
        onClick={(event) => {
          event.preventDefault();
          history.push(item.link);
        }}
        w="auto"
        h={36}
      />
    );
  });

  return (
    <Header height="61px" pos="sticky" top={0}>
      <Container size="xl" py={12}>
        <Flex align="center" justify={{ base: 'space-between' }} gap="xl">
          <Box
            mt={matches ? -12 : 0}
            onClick={() => history.push('/')}
            style={{ cursor: 'pointer', flexShrink: 0 }}
          >
            <Image
              src={
                matches
                  ? `${process.env.PUBLIC_URL}/ecomarketcap-logo.svg`
                  : `${process.env.PUBLIC_URL}/logo-small.svg`
              }
              height={matches ? 46 : 36}
            />
          </Box>

          <Group
            display={{ base: 'none', sm: 'flex' }}
            spacing="xs"
            style={{ flexGrow: 1, flexShrink: 0 }}
          >
            {items}
          </Group>
          <Autocomplete
            w={{ base: '100%', sm: 'auto' }}
            maw={{ base: '20rem' }}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={[]}
          />
          {/* <ActionIcon
            variant="outline"
            color='blue'
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            size='md'
          >
            {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
          </ActionIcon> */}
          <Box display={{ base: 'none', sm: 'flex' }} style={{ flexShrink: 0 }}>
            <Menu>
              <Menu.Target>
                <Avatar radius="xl" size={36} color="blue" />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>
                  <Text>Log In</Text>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                  <Text>Create account</Text>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Box>

          {/* MOBILE VIEW */}
          <Box
            display={{ base: 'block', sm: 'none' }}
            style={{ flexShrink: 0 }}
          >
            <Menu>
              <Menu.Target>
                <ActionIcon size={36} variant="filled" color="blue">
                  <IconMenu2 />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Menu</Menu.Label>
                {links.map((item, key) => (
                  <Menu.Item
                    key={key}
                    onClick={(event) => {
                      event.preventDefault();
                      history.push(item.link);
                    }}
                  >
                    <Text>{item.label}</Text>
                  </Menu.Item>
                ))}
                <Menu.Divider />
                <Menu.Label>Account</Menu.Label>
                <Menu.Item>
                  <Text>Log In</Text>
                </Menu.Item>
                <Menu.Item>
                  <Text>Create account</Text>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Header>
  );
};

export default MainNavbar;
