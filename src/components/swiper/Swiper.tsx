import * as React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const run = keyframes`
  0 {
    transform : translate3d(0,0,0);
  }
  100%{
    transform : translate3d(-300%,0,0);
  }
`;

const Content = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  transition: transform 600ms linear;
`;
const Item = styled.li`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item1 = styled(Item)`
  background-color: papayawhip;
  left: 100%;
`;
const Item2 = styled(Item)`
  background-color: cornflowerblue;
  left: 200%;
`;

export const Swiper = () => {
  const ele: any = React.useRef(null);
  let timer: any = null;
  let count: number = 0;

  const handleMove = () => {
    if (count < 3) {
      ele &&
        (ele.current.style.webkitTransform = `translate3d(-${count *
          100}%,0,0)`);
      count += 1;
    } else {
      ele.current.style.webkitTransform = `translate3d(0,0,0)`;
      count = 0;
    }
  };

  React.useEffect(() => {
    timer = setInterval(handleMove, 3000);
    return () => {
      clearInterval(timer);
      count = 0;
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Content ref={ele}>
          <Item>1</Item>
          <Item1>2</Item1>
          <Item2>3</Item2>
        </Content>
      </Wrapper>
    </>
  );
};
