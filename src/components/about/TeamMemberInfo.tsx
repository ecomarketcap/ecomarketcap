import { Avatar, Text, ActionIcon, Box, Paper } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const TeamMembersInfo = ({
  name,
  email,
  role,
  avatarSrc,
  linkedIn,
  github,
}: {
  name: string;
  email: string;
  role: string;
  avatarSrc: string;
  linkedIn: string;
  github: string;
}) => {
  return (
    <Paper
      radius='md'
      style={{ backgroundColor: 'lightyellow' }}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      })}
      p='lg'
      bg='var(--mantine-color-body)'
    >
      <Avatar src={avatarSrc} size={150} radius={120} mx='auto' />
      <Text ta='center' fz='lg' fw={500} mt='md'>
        {name}
      </Text>
      <Text ta='center' c='dimmed' fz='sm'>
        {role}
      </Text>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}
      >
        <a href={github} target='_blank' rel='noreferrer'>
          <ActionIcon size='lg' style={{ cursor: 'pointer' }}>
            <IconBrandGithub size='1.5rem' stroke={1.5} />
          </ActionIcon>
        </a>
        <a href={linkedIn} target='_blank' rel='noreferrer'>
          <ActionIcon size='lg' style={{ cursor: 'pointer' }}>
            <IconBrandLinkedin size='1.5rem' stroke={1.5} />
          </ActionIcon>
        </a>
      </div>
    </Paper>
  );
};

export default TeamMembersInfo;
