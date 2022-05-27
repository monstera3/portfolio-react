import styled from 'styled-components';
import sample2Img from '../images/sample2.png';
import React from 'react';



export const Work = () => {

  return(
      <ContainerStyle>
          <h1 className="headTitle">Work</h1>
          <div className="workBox">
            <img src={sample2Img} alt=""/>
            <div className="boxText">
              <p>美術館・展示会の口コミサービス</p>
             <h3>Ato</h3>
              <p>説明文</p>
            </div>
          </div>
      </ContainerStyle>
  );
}

const ContainerStyle = styled.div`
  .workBox{
    display: flex;
    background-color: white;
    img{
      width: 20rem;
      border-radius: 10%;
    }
    .boxText{
      background-color: lightsteelblue;
      margin-left: 10%;
      p{
        margin: 3vh 0;
      }
    }
  }
`;



