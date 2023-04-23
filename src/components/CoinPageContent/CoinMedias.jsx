import React, { useContext } from 'react';

import styled from 'styled-components';

// import { ThemeContext } from "../ThemeToggler/ThemeContext";
import { lightTheme, darkTheme } from '../../themes/Theme';
import { useMantineTheme } from '@mantine/styles';

/**
 * Styles
 */
const Li = styled.li`
  padding: 0.5rem;
  font-size: 0.9rem;
  list-style-type: square;
  list-style-position: inside;
`;
const SpanOrigin = styled.span`
  margin-left: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
`;

/************************************
 *
 * CoinMedias page
 *
 * @ integrate cointelegraph widget
 *
 * ******************************** */
export default function CoinMedias(props) {
  const { theme } = useMantineTheme();

  const colorStyle =
    theme === 'light'
      ? {
          paddingLeft: '0.5rem',
          backgroundColor: `${lightTheme.container}`,
          color: `${lightTheme.content}`,
        }
      : {
          paddingLeft: '0.5rem',
          backgroundColor: `${darkTheme.container}`,
          color: `${darkTheme.content}`,
        };

  return (
    <section className='row pt-3' style={colorStyle}>
      <ul>
        <SpanOrigin> Last From Twitter :</SpanOrigin>
        {props.coinTwitter.map((res) => {
          return (
            <Li key={res.status_id}>
              <a href={res.status_link} style={colorStyle}>
                {res.status}
              </a>
            </Li>
          );
        })}
      </ul>
    </section>
  );
}
