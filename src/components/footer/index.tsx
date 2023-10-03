import {
  Text,
  Container,
  ActionIcon,
  Group,
  Box,
  rem,
  NavLink,
  Image,
} from '@mantine/core';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';

type FooterLinksProps = {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
};

function MainFooter({ data }: FooterLinksProps) {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <NavLink
        component='a'
        key={index}
        label={link.label}
        href={link.link}
        target='_blank'
        sx={(theme) => ({
          display: 'block',
          fontSize: theme.fontSizes.sm,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[1]
              : theme.colors.gray[6],
          paddingTop: rem(3),
          paddingBottom: rem(3),
          paddingLeft: 0,
          '&:hover': {
            textDecoration: 'underline',
          },
        })}
      />
    ));

    return (
      <Box key={group.title} sx={{ width: rem(160) }}>
        <Text
          sx={(theme) => ({
            fontSize: theme.fontSizes.lg,
            fontWeight: 700,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            marginBottom: `calc(${theme.spacing.xs} / 2)`,
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          })}
        >
          {group.title}
        </Text>
        {links}
      </Box>
    );
  });

  return (
    <Box
      sx={(theme) => ({
        marginTop: rem(120),
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[5]
            : theme.colors.gray[2]
        }`,
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      })}
    >
      <Container
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '80rem',

          [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
          },
        })}
      >
        <Box
          sx={(theme) => ({
            maxWidth: rem(200),

            [theme.fn.smallerThan('sm')]: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          })}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/ecomarketcap-logo.svg`}
            height={50}
          />
          <Text
            size='xs'
            color='dimmed'
            sx={(theme) => ({
              marginTop: rem(10),
              [theme.fn.smallerThan('sm')]: {
                marginTop: theme.spacing.xs,
                textAlign: 'center',
              },
            })}
          >
            Only very special cryptocurrencies.
          </Text>
        </Box>
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexWrap: 'wrap',

            [theme.fn.smallerThan('sm')]: {
              display: 'none',
            },
          })}
        >
          {groups}
        </Box>
      </Container>
      <Container
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: theme.spacing.xl,
          paddingTop: theme.spacing.xl,
          paddingBottom: theme.spacing.xl,
          maxWidth: '80rem',
          borderTop: `1px solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[4]
              : theme.colors.gray[2]
          }`,
          [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
          },
        })}
      >
        <Text color='dimmed' size='sm'>
          © 2023 strongfaculty.dev All rights reserved.
        </Text>

        <Group
          spacing={0}
          sx={(theme) => ({
            [theme.fn.smallerThan('md')]: {
              marginRight: 0,
            },
            [theme.fn.largerThan('md')]: {
              marginRight: '3.9rem',
            },
          })}
          position='right'
          mr='10fdm'
          noWrap
        >
          <a href="https://discord.gg/mcTAKzgr" style={{ textDecoration: 'none' }} target="_blank">
            <ActionIcon size='lg'>
              <IconBrandDiscord size='1.05rem' stroke={1.5} />
            </ActionIcon>
          </a>
                  
          <a href="https://github.com/MartinSteefStefko/ecomarketcap" style={{ textDecoration: 'none' }} target="_blank">
            <ActionIcon size='lg'>
              <IconBrandGithub size='1.05rem' stroke={1.5} />
            </ActionIcon>
          </a>
                  
          <a href="https://www.linkedin.com/company/ecomarketcap/" style={{ textDecoration: 'none' }} target="_blank">
            <ActionIcon size='lg'>
              <IconBrandLinkedin size='1.05rem' stroke={1.5} />
            </ActionIcon>
          </a>        
        </Group>
      </Container>
    </Box>
  );
}
export default MainFooter;
