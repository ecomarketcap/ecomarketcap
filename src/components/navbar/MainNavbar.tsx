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
} from '@mantine/core';

import { useHistory } from 'react-router-dom';
import { IconMenu2, IconSearch } from '@tabler/icons-react';

interface MainNavbarProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

const MainNavbar = ({ links }: MainNavbarProps) => {
  const history = useHistory();
  const items = links.map((item, key) => {
    // const menuItems = link.links?.map((item) => (
    //   <Menu.Item key={item.link}>{item.label}</Menu.Item>
    // ));

    // if (menuItems) {
    //   return (
    //     <Menu
    //       key={link.label}
    //       trigger="hover"
    //       transitionProps={{ exitDuration: 0 }}
    //       withinPortal
    //     >
    //       <Menu.Target>
    //         <a
    //           href={link.link}
    //           onClick={(event) => {
    //             event.preventDefault();
    //             history.push(link.link);
    //           }}
    //           style={{
    //             display: "block",
    //             lineHeight: 1,
    //             padding: `${rem(8)} ${rem(12)}`,
    //             borderRadius: "4px",
    //             textDecoration: "none",
    //             color: "inherit",
    //             fontSize: rem(14),
    //             fontWeight: 500,
    //           }}
    //         >
    //           <Center>
    //             <span style={{ marginRight: rem(5) }}>{link.label}</span>
    //             <IconChevronDown size={rem(12)} stroke={1.5} />
    //           </Center>
    //         </a>
    //       </Menu.Target>
    //       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    //     </Menu>
    //   );
    // }

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
      <Container size="xl" h="100%" py={12}>
        <Flex
          align="center"
          justify={{ base: 'space-between' }}
          h="100%"
          gap="xl"
        >
          <Box
            onClick={() => history.push('/')}
            style={{ cursor: 'pointer', flexShrink: 0 }}
          >
            <Image
              src={`${process.env.PUBLIC_URL}/logo-small.svg`}
              height={36}
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

          <Box display={{ base: 'none', sm: 'flex' }} style={{ flexShrink: 0 }}>
            <Menu>
              <Menu.Target>
                <Avatar radius="xl" size={36} />
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
