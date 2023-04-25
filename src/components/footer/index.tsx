// import React from 'react';
// import { Container, Grid, Text, Paper } from '@mantine/core';

// import reactLogo from '../../assets/logos/logo192.png';
// import geckoLogo from '../../assets/logos/coingecko.svg';

// /************************************
//  *
//  * Footer / logos
//  *
//  * ******************************** */
// export default function CoinChart() {
//   return (
//     <Paper p='md' shadow='xs'>
//       <Container>
//         <Grid justify='between'>
//           <Grid.Col span={6}>
//             <Grid>
//               <Grid.Col span={4} content='around'>
//                 <Text style={{ fontStyle: 'italic' }}>build with</Text>
//               </Grid.Col>
//               <Grid.Col span={8}>
//                 <img
//                   style={{ marginBottom: '1rem' }}
//                   src={reactLogo}
//                   alt='react logo'
//                   height='30px'
//                 />
//               </Grid.Col>
//             </Grid>
//           </Grid.Col>

//           <Grid.Col span={6}>
//             <Grid>
//               <Grid.Col span={4} content='around'>
//                 <Text style={{ fontStyle: 'italic' }}>powered by</Text>
//               </Grid.Col>
//               <Grid.Col span={8}>
//                 <Text style={{ fontStyle: 'italic', padding: '0 1rem' }}>
//                   &
//                 </Text>
//                 <Text component='a' href='https://www.coingecko.com'>
//                   <img
//                     style={{ marginBottom: '1rem' }}
//                     src={geckoLogo}
//                     alt='coingecko.com'
//                     height='30px'
//                   />
//                 </Text>
//               </Grid.Col>
//             </Grid>
//           </Grid.Col>
//         </Grid>
//       </Container>
//     </Paper>
//   );
// }

import { Text, Container, ActionIcon, Group, Box, rem } from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

function MainFooter({ data }: FooterLinksProps) {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        component='a'
        href={link.link}
        onClick={(event) => event.preventDefault()}
        sx={(theme) => ({
          display: 'block',
          fontSize: theme.fontSizes.sm,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[1]
              : theme.colors.gray[6],
          paddingTop: rem(3),
          paddingBottom: rem(3),
          '&:hover': {
            textDecoration: 'underline',
          },
        })}
      >
        {link.label}
      </Text>
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
          <MantineLogo size={30} />
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
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group
          spacing={0}
          sx={(theme) => ({
            [theme.fn.smallerThan('sm')]: {
              marginTop: theme.spacing.xs,
            },
          })}
          position='right'
          noWrap
        >
          <ActionIcon size='lg'>
            <IconBrandTwitter size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandYoutube size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandInstagram size='1.05rem' stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Box>
  );
}
export default MainFooter;
