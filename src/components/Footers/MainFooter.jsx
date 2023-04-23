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
    <Paper padding='md' shadow='xs'>
      <Container>
        <Grid justify='between'>
          <Grid.Col span={6}>
            <Grid>
              <Grid.Col span={4} justify='around'>
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
              <Grid.Col span={4} justify='around'>
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
