import {
  Card,
  Group,
  Switch,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { ReactNode } from 'react';

export const LabelInputCard = ({
  title,
  description,
  data,
  children,
}: {
  title: string;
  description: string;
  data: {
    title: string;
    description: string;
    placeholder: string;
    min: number;
    max: number;
    ref: React.RefObject<HTMLInputElement> | undefined;
  }[];
  children: ReactNode;
}) => {
  const { colorScheme: theme } = useMantineColorScheme();
  //   const cardStyle = {
  //     backgroundColor:
  //       theme === 'dark' ? theme.dark[7] : theme.white,
  //   };

  //   const itemStyle = {
  //     paddingTop: theme.spacing.sm,
  //     marginTop: theme.spacing.sm,
  //     borderTop: `${rem(1)} solid ${
  //       theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
  //     }`,
  //   };

  //   const switchStyle = {
  //     cursor: 'pointer',
  //   };

  return (
    <Card withBorder radius='md' p='xl'>
      {children}
      <Text fz='lg' style={{ lineHeight: 1, fontWeight: 500 }}>
        {title}
      </Text>
      <Text fz='xs' c='dimmed' mt={3} mb='xl'>
        {description}
      </Text>
      {data.map((item) => (
        <Group position='apart' noWrap spacing='xl' key={item.title}>
          <div>
            <Text>{item.title}</Text>
            <Text size='xs' color='dimmed'>
              {item.description}
            </Text>
          </div>
          <Switch
            onLabel='ON'
            offLabel='OFF'
            sx={{ cursor: 'pointer' }}
            size='lg'
          />
        </Group>
      ))}
    </Card>
  );
};
