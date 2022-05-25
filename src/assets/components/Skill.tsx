import { LeftBar } from './LeftBar';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { SkillCard } from './SkillCard';
import React from 'react';
import javascriptImg  from '../images/javascript.svg';
import sassImg from '../images/sass.svg'
import htmlImg from '../images/html5.svg'
import reactImg from '../images/react.svg'
import cssImg from '../images/css3.svg'

export type SkillType = {
  image: any,
  title: string,
}
const skills: SkillType[] = [
  {
    image: reactImg,
    title: 'React',
  },
  {
    image:javascriptImg,
    title:'JavaScript',
  },
  {
    image:cssImg,
    title:'CSS3',
  },
  {
    image:htmlImg,
    title:'HTML5',
  },
  {
    image:sassImg,
    title:'Sass',
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
          <Grid container spacing={2} maxWidth="md" m="auto">
            {skills.map((skill) =>(
              <Grid item xs={2}>
                <SkillCard skill={skill}/>
              </Grid>
            ))}
          </Grid>
          <h2 className="headTitle">デザイン</h2>
            <Grid container spacing={2} maxWidth="md" m="auto">
            {skills.map((skill) =>(
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <SkillCard skill={skill}/>
              </Grid>
            ))}
            </Grid>
          </div>
      </ContainerStyle>

    </>
  );
}
const ContainerStyle = styled.div`
  display:flex;
 
`;
