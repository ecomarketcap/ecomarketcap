import React from 'react';
import { Paper, Text, Col, Grid } from '@mantine/core';

const About: React.FC = () => {
  return (
    <Grid gutter='md' sx={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <Col sx={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
        <Paper shadow='xs' sx={{ marginBottom: 20, padding: 'md' }}>
          <Text
            align='center'
            sx={{
              fontWeight: 'bold',
              fontSize: 24,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            About Us
          </Text>
          <Text>
            We are a group of passionate developers dedicated to creating the
            best user experiences. We believe in clean, efficient, and
            user-friendly design.
          </Text>
        </Paper>
      </Col>
    </Grid>
  );
};

export default About;
