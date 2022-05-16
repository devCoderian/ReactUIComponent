import React, { useMemo } from 'react'

import styled from '@emotion/styled/macro';
import { keyframes, css } from '@emotion/react';

//Skeleton으로 전달받을 Prop 정해주기
interface Props {
    width?: number;
    height?: number;
    circle?: boolean;
    rounded?: boolean;
    count?: number; //글자갯수
    unit?: string; //px, %
    animation?: boolean;
    color?: string;
    style?: React.CSSProperties;
}

//emotionjs 생성 방법
const plusKeyframe = keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0.3;
    }
    100%{
        opacity: 1;
    }
`
const plusAnimation = css`
    animation: ${plusKeyframe} 1.5s ease-in-out inifinite;
`
const Base = styled.span<Props>`
    ${({ color }) => color && `background-color: ${color}`};
    ${({ rounded }) => rounded && 'border-radius:8px'};
    ${({ circle }) => circle && 'border-radius: 50%'};
    ${({ width, height }) => (width || height) && 'display: block'};
    ${({ animation }) => animation && plusAnimation };
    width: ${({width, unit}) => width && unit && `${width}${unit}`};
    height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
    opacity: 0;
`;

const Skeleton: React.FC<Props>= ({
                                    animation = true,
                                    width,
                                    height,
                                    circle,
                                    rounded,
                                    count,
                                    color='#F4F4F4', 
                                    unit='px', 
                                    style
                                }) => {

  //count => 4라면 ----
  const content = useMemo(()=> [...Array({length: count})].map(() => '-').join(''), [count]);
  return (
    <Base
    style = {style}
    width = {width}
    height= {height}
    circle = {circle}
    rounded = {rounded}
    color={color}
    unit={unit}
    animation={animation} 
    >
        <Content>{content}</Content>
    </Base>
  )
}

export default Skeleton