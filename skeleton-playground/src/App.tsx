import React , {useState, useEffect} from 'react';
import styled from '@emotion/styled/macro'
import Skeleton from './components/Skeleton';


const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`
//Container =>Card form 하나
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 /5%) 0px 4px 16px 0px;
  border-radius: 4px;
`
//Image Wrapper 필요성
const ImageWrapper = styled.div`
  width: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`
const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`
const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 24px;
`;

const Placeholder: React.FC = () => (
  <Container>
    <ImageWrapper>
      <Skeleton width={320} height={220} />
    </ImageWrapper>
    <Info>
      <Skeleton width={150} height={29} rounded />
      <div style ={{height: '8px'}} /> 
      <Skeleton width={200} height={19} rounded />
    </Info>
  </Container>
)

const Item: React.FC = () => {
  return(
    <Container>
      <ImageWrapper>
        <Image src ="https://avatars.githubusercontent.com/u/87194565?s=40&v=4" />
      </ImageWrapper>
      <Info>
        <Title>Skeleton</Title>
        <Description>스켈레톤 테스트----------으ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</Description>
      </Info>
    </Container>
  )
}
function App() {

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
    
    return clearTimeout();
  }, [])


  return (
    <Base>
      {loading ? Array.from({length: 25}).map((_, idx) => (
        <Placeholder key ={idx}/>
      )):Array.from({length: 25}).map((_, idx) => (
        <Item key ={idx}/>
      )) }
    </Base>
  );
}

export default App;
