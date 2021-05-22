import React from 'react';
import { ContainerBanner, Details, Img, Title, Description } from './styles';

import img13 from '../../../assets/images/13.png';

export default function Banner() {
    return (
        <ContainerBanner>
            <Details>
                <Title>Pague seus amigos</Title>
                <Description>
                    Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças.
                </Description>
            </Details>
            <Img source={img13} />
        </ContainerBanner>
    )
}