import { Paper } from '@mui/material';
import React from 'react';
import javascriptImg  from '../images/javascript.svg';
import styled from 'styled-components';

export const SkillCard = () => {

  return(
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
