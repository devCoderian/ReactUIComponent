import React, { useState, useEffect} from 'react'
import styled from "@emotion/styled/macro";
import { css } from '@emotion/react';
import {RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
const Base = styled.div``;

const Container = styled.div`
position: relative;
`;

const ArrowButton = styled.button<{ pos: 'left' | 'right'}>`
  position: absolute;
  top: 45%;
  z-index: 1;
  padding: 8px 12px;
  font-size: 48px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border: none;
  margin: 0;
  cursor: pointer;
  ${({ pos }) => pos === 'left' ? 
          css`
            left: 0;
          ` : 
          css`
            right: 0;
          `};

    @media screen and (max-width: 200px) {
        display: none;
    }
`;
//200이하부터는 display:none 처리
const CarouselList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
overflow: hidden;
`;

const CarouselListItem = styled.li<{ activeIndex: number}>`
width: 100%;
  flex: 0 0 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 200ms ease;
  > img {
    width: 100%;
    height: fit-content;
  }
`;

const NavButton = styled.button<{ isActive?: boolean }>`
width: 4px;
height: 4px;
background-color: #000;
opacity: ${({ isActive }) => isActive ? 0.3 : 0.1};
`;

const NavItem = styled.li`
display: inline-block;
`;

const Nav = styled.ul`
list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${NavItem} + ${NavItem} {
    margin-left: 4px;
  }
`;


const banners = ['https://via.placeholder.com/200/92c952', 'https://via.placeholder.com/200/771796','https://via.placeholder.com/200/ccc', 'https://via.placeholder.com/200/24f355'];

const Carousel:React.FC = () => {

    const handleNext = () => {
        setActiveIndex(prev => (prev+1) % banners.length);
    }

    const handelPrev = () => {
        setActiveIndex(prev => (prev-1 + banners.length) % banners.length);
    }

    //timeout
    const [activeIndex, setActiveIndex] = useState<number>(0);
    //클릭 시 자동 캐러셀 방지를 위해
    const [isFocused, setIsFocused] = useState<boolean>(false);
     
    const goTo = (idx: number) => {
        setActiveIndex(idx);
    }

    const handleMouseEnter = () => {
        setIsFocused(true)
    };
    const handleMouseOut = () => {
        setIsFocused(false)
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
    
        if (!isFocused) {
          intervalId = setInterval(handleNext, 1000);
        }
        return () => {
          clearInterval(intervalId);
        };
      }, [isFocused]);
    
  return (
    <Base onMouseEnter={handleMouseEnter} onMouseLeave ={handleMouseOut}>
        <Container>
            <ArrowButton pos="left" onClick ={handelPrev}>
                <RiArrowDropLeftLine />
            </ArrowButton>
            <CarouselList>
                {
                    banners.map((banner, idx) =>(
                        <CarouselListItem activeIndex = {activeIndex} key ={idx}>
                            {/* <div>{idx} {activeIndex}</div> */}
                            <img src = {banner} />
                        </CarouselListItem>
                    ))
                }
            </CarouselList>
            <ArrowButton pos="right" onClick ={handleNext}>
                <RiArrowDropRightLine />
            </ArrowButton>
        </Container>
        <Nav>
            {
                Array.from({length: banners.length}).map((_, idx) => (
                    <NavItem key ={idx} onClick ={() => goTo(idx)}>
                        {/* activeIndex와 해당 Index가 같을 때 활성화 된다. */}
                        <NavButton isActive={activeIndex === idx}/>
                    </NavItem>
                ))
            }
        </Nav>
    </Base>
  )
}

export default Carousel