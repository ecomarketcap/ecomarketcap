import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from '@mantine/core';
import notFounfImage from '../assets/image.11cd6c19.svg';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  return (
    <Container
      style={{
        paddingTop: rem(80),
        paddingBottom: rem(80),
      }}
    >
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
      >
        <Image
          src={notFounfImage}
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
            Something is not right...
          </Title>
          <Text color='dimmed' size='lg'>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant='outline'
            size='md'
            mt='xl'
            radius='xl'
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
          src={notFounfImage}
          style={{
            display: 'block',
          }}
        />
      </SimpleGrid>
    </Container>
  );
};

export default NotFound;
