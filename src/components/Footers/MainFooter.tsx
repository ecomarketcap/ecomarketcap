import React from 'react';
import { Container, Grid, Text, Paper } from '@mantine/core';

import reactLogo from '../../assets/logos/logo192.png';
import geckoLogo from '../../assets/logos/coingecko.svg';

/************************************
 *
 * Footer / logos
 *
 * ******************************** */
export default function CoinChart() {
  return (
    <Paper p='md' shadow='xs'>
      <Container>
        <Grid justify='between'>
          <Grid.Col span={6}>
            <Grid>
              <Grid.Col span={4} content='around'>
                <Text style={{ fontStyle: 'italic' }}>build with</Text>
              </Grid.Col>
              <Grid.Col span={8}>
                <img
                  style={{ marginBottom: '1rem' }}
                  src={reactLogo}
                  alt='react logo'
                  height='30px'
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>

          <Grid.Col span={6}>
            <Grid>
              <Grid.Col span={4} content='around'>
                <Text style={{ fontStyle: 'italic' }}>powered by</Text>
              </Grid.Col>
              <Grid.Col span={8}>
                <Text style={{ fontStyle: 'italic', padding: '0 1rem' }}>
                  &
                </Text>
                <Text component='a' href='https://www.coingecko.com'>
                  <img
                    style={{ marginBottom: '1rem' }}
                    src={geckoLogo}
                    alt='coingecko.com'
                    height='30px'
                  />
                </Text>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  );
}

// import {
//   createStyles,
//   Text,
//   Container,
//   ActionIcon,
//   Group,
//   rem,
// } from '@mantine/core';
// import {
//   IconBrandTwitter,
//   IconBrandYoutube,
//   IconBrandInstagram,
// } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';

// import React from 'react';
// import {
//   Text,
//   Container,
//   ActionIcon,
//   Group,
//   useMantineTheme,
// } from '@mantine/core';
// import {
//   IconBrandTwitter,
//   IconBrandYoutube,
//   IconBrandInstagram,
// } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';
// const FooterLink = ({ data }: any) => {
//   const theme = useMantineTheme();

//   const groups = data.map(
//     (group: {
//       links: {
//         link: string | undefined;
//         label:
//           | boolean
//           | React.ReactChild
//           | React.ReactFragment
//           | React.ReactPortal
//           | null
//           | undefined;
//       }[];
//       title: never;
//     }) => {
//       const links = group.links.map(
//         (
//           link: {
//             link: string | undefined;
//             label:
//               | boolean
//               | React.ReactChild
//               | React.ReactFragment
//               | React.ReactPortal
//               | null
//               | undefined;
//           },
//           index: React.Key | null | undefined
//         ) => (
//           <Text<'a'>
//             key={index}
//             className={`${
//               theme.colorScheme === 'dark'
//                 ? theme.colors.dark[1]
//                 : theme.colors.gray[6]
//             } ${theme.fontSizes.sm}`}
//             component='a'
//             href={link.link}
//             onClick={(event) => event.preventDefault()}
//           >
//             {link.label}
//           </Text>
//         )
//       );

//       return (
//         <div key={group?.title}>
//           <Text
//             size={theme.fontSizes.lg}
//             weight={700}
//             mb={`calc(${theme.spacing.xs} / 2)`}
//             className={theme.colorScheme === 'dark' ? theme.white : theme.black}
//           >
//             {group.title}
//           </Text>
//           {links}
//         </div>
//       );
//     }
//   );

//   return (
//     <footer>
//       <Container>
//         <div>
//           <MantineLogo size={30} />
//           <Text
//             size='xs'
//             color={
//               theme.colorScheme === 'dark'
//                 ? theme.colors.dark[1]
//                 : theme.colors.gray[6]
//             }
//           >
//             Build fully functional accessible web applications faster than ever
//           </Text>
//         </div>
//         <div>{groups}</div>
//       </Container>
//       <Container>
//         <Text
//           color={
//             theme.colorScheme === 'dark'
//               ? theme.colors.dark[1]
//               : theme.colors.gray[6]
//           }
//           size='sm'
//         >
//           © 2020 mantine.dev. All rights reserved.
//         </Text>

//         <Group spacing={0} position='right' noWrap>
//           <ActionIcon size='lg'>
//             <IconBrandTwitter size='1.05rem' stroke={1.5} />
//           </ActionIcon>
//           <ActionIcon size='lg'>
//             <IconBrandYoutube size='1.05rem' stroke={1.5} />
//           </ActionIcon>
//           <ActionIcon size='lg'>
//             <IconBrandInstagram size='1.05rem' stroke={1.5} />
//           </ActionIcon>
//         </Group>
//       </Container>
//     </footer>
//   );
// };

// export default FooterLink;
