import React from "react";
import Video from "../../components/video/video.mp4";
import {
  BoxBG,
  VideoBG,
  VideoContant,
  VideoH,
  VideoP,
  VideoSection,
} from "./VideoContainerElements";
import Typewriter from "typewriter-effect";
import { MainContainer } from "../MainSection/MainSection.styled";

const VideoContainer = () => {
  return (
    <MainContainer>
      <VideoSection>
        <BoxBG>
          <VideoBG autoPlay loop muted src={Video} type="video/mp4"></VideoBG>
        </BoxBG>
        <VideoContant>
          <VideoH>Daniel Alkalay</VideoH>
          <VideoP>
            <Typewriter
              options={{
                strings: ["Front-end developer", "a Chef", "a Human"],
                autoStart: true,
                loop: true,
                pauseFor: "1000ms",
              }}
            />
          </VideoP>
        </VideoContant>
      </VideoSection>
    </MainContainer>
  );
};

export default VideoContainer;
