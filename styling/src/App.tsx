import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  // & + & {
  //   background: lime; // <Thing> next to <Thing>
  // }

  // &.something {
  //   background: orange; // <Thing> tagged with an additional CSS class ".something"
  // }

  // .something-else & {
  //   border: 1px solid; // <Thing> inside another element labeled ".something-else"
  // }
`

/*
  styled.div.attrs(() => ({ tabIndex: 0 }))` //나랑 동일선에 있는 애들에게 스타일을 주고싶을 때 사용


  &:hover //자기자신
  & ~ & //같은 부모를 가진 모든 두번째 요소
  & + & //같은 부모를 가진 두번째 요소
  &.something //나 자신 중 something을 가지고 있는 애
  .something-else & 
*/
const App = () => {

  return(
    <>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
    </>
  )

}

export default App;
