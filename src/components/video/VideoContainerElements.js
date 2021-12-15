import styled from "styled-components";

export const VideoSection = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;

export const BoxBG = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBG = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const VideoContant = styled.div`
  display: flex;
  position: absolute;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  z-index: 3;
  flex-direction: column;
`;

export const VideoH = styled.h1`
  /* position: absolute; */
  display: flex;
  font-size: 5rem;
  color: whitesmoke;
`;
export const VideoP = styled.div`
  display: flex;
  font-size: 2rem;
  color: whitesmoke;
`;
