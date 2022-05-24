import { Paper } from '@mui/material';
import React from 'react';
import javascriptImg  from '../images/javascript.svg';
import styled from 'styled-components';
import sampleImg from '../images/sample1.png';




type SkillType = {
  image: any,
  title: string,
}
const skills: SkillType[] = [
  {
    image: {sampleImg},
    title: 'title1',
  },
  {
    image:'javascriptImg',
    title:'title2',
  }
];





export const SkillCard = () => {

  return(
    //TODO 画像とタイトルを入れたい
    <SkillCardStyle>
      <Paper variant="outlined" className="skillPaper">
          <img src={javascriptImg} alt=""/>
          <p>title</p>
      </Paper>
    </SkillCardStyle>
  );
}

const SkillCardStyle = styled.div`
  .skillPaper{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 1rem 0;
  }
  img{
    width: 60px;
  }
  p{
    margin-top: 1rem;
  }
`;
