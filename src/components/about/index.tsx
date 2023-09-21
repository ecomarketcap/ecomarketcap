import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
  rem,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import {
  IconApi,
  IconBrandReact,
  IconBook,
  IconBrandGithub,
} from '@tabler/icons-react';

const data = [
  {
    image: <IconApi size='sm' color='lightyellow' />,
    title: '2 API sources',
    description:
      'We are combining the data from CoinGecko and CoinPaprika for the best user experience.',
  },
  {
    image: <IconBrandReact size='sm' color='lightyellow' />,
    title: 'Written in React',
    description: 'We use React, Typescript and Mantine as our frontend stack.',
  },
  {
    image: <IconBook size='sm' color='lightyellow' />,
    title: 'Learnable',
    description: `Ever wanted to learn how to create the frontend with the latest tech stack? You can do it on this app's code!`,
  },
  {
    image: <IconBrandGithub size='sm' color='lightyellow' />,
    title: 'Open source',
    description:
      'You can download, build on or contribute to this code. Check us on Github or contact us on Discord or Linked In!',
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '10rem',
    paddingBottom: '4rem',
  },
  item: {
    display: 'flex',
  },
  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },
  itemTitle: {
    marginBottom: theme.spacing.xs,
  },
  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.blue[6],
    letterSpacing: rem(0.5),
  },
  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },
  highlight: {
    backgroundColor: 'lightyellow',
    padding: rem(5),
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color:
      theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark,
  },
}));

const FeatureCards = () => {
  const { classes } = useStyles();
  const [cols, setCols] = useState(1);

  useEffect(() => {
    const updateCols = () => {
      setCols(window.innerWidth <= 768 ? 1 : 2);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const items = data.map((item) => (
    <div className={classes.item} key={item.title}>
      <ThemeIcon
        variant='gradient'
        className={classes.itemIcon}
        size={60}
        radius='md'
        gradient={{ from: 'indigo', to: 'rgba(44, 176, 242, 1)', deg: 129 }}
      >
        {item.image}
      </ThemeIcon>

      <div>
        <Text fw={700} fz='lg' className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c='dimmed'>{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>About us</Text>
      <Title className={classes.title} order={2}>
        Ecomarketcap is <span className={classes.highlight}>not</span> just a
        cryptocurrency tracker
      </Title>
      <Container size={660} p={0}>
        <Text c='dimmed' className={classes.description}>
          It's an open source project powered by community from all over the
          world!
        </Text>
      </Container>
      <SimpleGrid cols={cols} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
};
export default FeatureCards;
