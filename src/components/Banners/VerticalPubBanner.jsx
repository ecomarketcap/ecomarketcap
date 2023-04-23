import React from 'react';

import styled from 'styled-components';

//import { BannerOptionDiv, BannerContentDiv } from "../../themes/GlobalStyled";
//import { useClose } from "./useClose";
import BannerCloser from './BannerCloser';
import livewebinar from '../../assets/Webpnet-livewebinar.png';
import IoTacademy from '../../assets/Webpnet-IoTacademy.png';

/**
 * Style
 */
const BannerContent = styled.div`
  padding-top: 10rem;
  margin-left: -1rem;
  max-width: 90%;
  min-height: 80vh;
`;

const BannerOption = styled.div`
  padding-top: 10rem;
  margin-left: -1rem;
  min-height: 80vh;
`;

/************************************
 *
 * Pub banner => closable with useClose and BannerClose
 *
 * display horizontal pub in the header of main pages
 *
 * ******************************** */
export default function PubBannerMainPage(props) {
  const divBannerClass = 'd-flex flex-column justify-content-between  ';

  return (
    <>
      {props.showBanner ? (
        <aside>
          <BannerContent className={divBannerClass}>
            <img src={livewebinar} alt='livewebinar' />
            <img src={IoTacademy} alt='IoTacademy' />
            <img src={livewebinar} alt='livewebinar' />
          </BannerContent>
          <BannerOption>
            <BannerCloser closePub={props.closeBanner} />
          </BannerOption>
        </aside>
      ) : null}
    </>
  );
}
