import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { useHistory, useLocation } from 'react-router-dom';
import commingSoonImage from '../assets/time-management.svg';

const CommingSoon = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  return (
    <Container
      style={{
        paddingTop: '14rem',
        paddingBottom: '8rem',
      }}
    >
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
      >
        <Image
          src={commingSoonImage}
          style={{
            display: 'none',
          }}
        />
        <div>
          <Title
            style={{
              fontWeight: 900,
              fontSize: rem(34),
              marginBottom: rem(20),
              fontFamily: `Greycliff CF, sans-serif`,
            }}
          >
            Get Excited!
          </Title>
          <Text color='dimmed' size='lg'>
            {`${pathname.replace('/', '').toUpperCase()}`} page is comming soon
          </Text>
          <Button
            variant='outline'
            size='md'
            radius='xl'
            mt='xl'
            style={{
              width: '100%',
            }}
            onClick={(event) => {
              event.preventDefault();
              history.push('/');
            }}
          >
            Get back to home page
          </Button>
        </div>
        <Image
          src={commingSoonImage}
          style={{
            display: 'block',
          }}
        />
      </SimpleGrid>
    </Container>
  );
};

export default CommingSoon;
