import { useEffect, useRef } from "react";
import styled from "styled-components";

const CustomCursor = () => {
  const mouseRef = useRef(null);

  const mouse = (e) => {
    if (mouseRef.current) {
      mouseRef.current.style.top = String(e.clientY + 1) + "px";
      mouseRef.current.style.left = String(e.clientX + 1) + "px";
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouse);
    return () => {
      window.removeEventListener("mousemove", mouse);
    };
  }, []);

  return (
    <Container ref={mouseRef}>
      <Content />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 10001;
  pointer-events: none;
`;

const Content = styled.div`
  width: 20px;
  height: 20px;
  background: orangered;
  border: 2px solid red;
  border-radius: 50%;
`;

export default CustomCursor;
