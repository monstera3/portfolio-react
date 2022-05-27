import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import macbookpro16Img from '../images/macbookpro16.png';
import React from 'react';
import {VscLink} from 'react-icons/vsc'

export const WorkDetailAto = () => {

  return(
    <ContainerStyle>
      <Grid container spacing={0}>
        <Grid item xs={12} md={7}>
          <div className="boxText">
            <p>美術館・展示会の口コミサービス</p>
            <h2 className="workName"><a href={'/ato'}>Ato</a></h2>
            <ul>
              <li>制作期間：</li>
              <li>使用技術：</li>
              <li>機能：</li>
              <li>ソースコード：aaaaa</li>
              <li>URL：</li>
            </ul>
            <a href="https://zenn.dev/" className="linkButton">ato サイト<VscLink size="20px"/></a>

          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={macbookpro16Img} alt=""/>

        </Grid>
      </Grid>
    </ContainerStyle>
  );
}

const ContainerStyle = styled.div`
  .boxText{
    padding: 5%;
    background-color: white;
    .workName{
      a{
        color: #4EBCD4;
        font-size: 34px;
      }
    }
    .linkButton{
      background-color: #4EBCD4;
      border-radius: 3px;
      padding: 10px 30px;
      color: white;
    }
  }
`;
