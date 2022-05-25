import { LeftBar } from './LeftBar';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { SkillCard } from './SkillCard';
import React from 'react';
import sampleImg from '../images/sample1.png';
import javascriptImg  from '../images/javascript.svg';





export type SkillType = {
  image: any,
  title: string,
}
const skills: SkillType[] = [
  {
    image: sampleImg,
    title: 'title1',
  },
  {
    image:javascriptImg,
    title:'title2',
  }
];




export const Skill = () => {

  return(
    <>
      <ContainerStyle>
        <LeftBar />
        <div className="contentStyle">
          <h1 className="headTitle">Skill</h1>
          Skill
          <h2 className="headTitle">フロントエンド</h2>
          <h2 className="headTitle">デザイン</h2>

          <div className="aaa">


            <Grid container spacing={2} maxWidth="md" m="auto">
            {skills.map((skill) =>(
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <SkillCard skill={skill}/>
              </Grid>
            ))}
            </Grid>
          </div>
        </div>
      </ContainerStyle>

    </>
  );
}
const ContainerStyle = styled.div`
  display:flex;
 
`;
