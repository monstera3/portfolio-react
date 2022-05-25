import { Paper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { SkillType } from './Skill';

export const SkillCard = (props:{skill:SkillType}) => {

  return(
    <SkillCardStyle>
      <Paper variant="outlined" className="skillPaper">
          <img src={props.skill.image} alt=""/>
          <p>{props.skill.title}</p>
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
    height: 60px;
  }
  p{
    margin-top: 1rem;
  }
`;
