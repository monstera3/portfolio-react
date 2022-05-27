import styled from 'styled-components';
import sample2Img from '../images/sample2.png';
import React from 'react';
import Grid from '@mui/material/Grid';


export const Work = () => {

  return(
      <ContainerStyle>
          <h1 className="headTitle">Work</h1>
        <Grid container spacing={0}>
          <Grid item xs={12} md={7}>
            <a href={'/ato'}><img src={sample2Img} alt=""/></a>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="boxText">
              <p>美術館・展示会の口コミサービス</p>
              <a href={'/ato'}><h3>Ato</h3></a>
              <p>説明文</p>
            </div>
          </Grid>
        </Grid>
      </ContainerStyle>
  );
}

const ContainerStyle = styled.div`
  img{
    height: 200px;
    margin-left: 20%;
  }
  .abc{
    background-color: lightskyblue;
  }
  .boxText {
    background-color: white;
  }
`;



