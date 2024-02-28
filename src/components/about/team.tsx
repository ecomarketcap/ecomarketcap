import React from 'react';
import {
  Grid,
  Col,
  Container,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import TeamMembersInfo from './TeamMemberInfo';

const teamMembers = [
  {
    name: 'Martin Steef Stefko',
    email: '',
    role: 'Lead Developer',
    avatarSrc: 'https://api.multiavatar.com/steef.svg',
    linkedIn: 'https://de.linkedin.com/in/martin-steef-stefko-310a5a83',
    github: 'https://github.com/MartinSteefStefko',
  },
  {
    name: 'Sona Sturmova',
    email: '',
    role: 'React Developer',
    avatarSrc: 'https://api.multiavatar.com/sona.svg',
    linkedIn:
      'https://cz.linkedin.com/in/so%C5%88a-%C5%A1turmov%C3%A1-7b557aaa',
    github: 'https://github.com/sonaStu',
  },
  {
    name: 'Dmitriy Yakovlev',
    email: '',
    role: 'React Developer',
    avatarSrc: 'https://api.multiavatar.com/drago.svg',
    linkedIn: 'https://www.linkedin.com/in/dmitryakovlev',
    github: 'https://github.com/dmitryakovlev',
  },
  {
    name: 'You',
    email: 'youremail@protonmail.com',
    role: 'Next Dev Ninja',
    avatarSrc: 'https://api.multiavatar.com/you.svg',
    linkedIn: '',
    github: '',
  },
];
const useStyles = createStyles((theme) => ({
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

const Team = () => {
  const { classes } = useStyles();
  return (
    <Container
      size={900}
      style={{ paddingTop: '10rem', paddingBottom: '4rem' }}
    >
      <Text mb="lg" className={classes.supTitle}>
        Team
      </Text>
      <Title className={classes.title} order={2}>
        <span className={classes.highlight}>We</span>are Ecomarketcap
      </Title>
      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          We are open-source lovers. Do you feel that too? Let's join us!
        </Text>
      </Container>
      <Grid gutter="md" justify="center" mt={30}>
        {teamMembers.map((member, index) => (
          <Col key={index} xs={12} sm={3} md={3} lg={3} miw={'215px'}>
            <TeamMembersInfo
              name={member.name}
              email={member.email}
              role={member.role}
              avatarSrc={member.avatarSrc}
              linkedIn={member.linkedIn}
              github={member.github}
            />
          </Col>
        ))}
      </Grid>
    </Container>
  );
};
export default Team;
