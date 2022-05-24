import { LeftBar } from './LeftBar';
import styled from 'styled-components';
import { Grid } from '@mui/material';

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
          <Grid container spacing={2} maxWidth="md" m="auto">
          <Grid item xs={12} sm={6} md={6} lg={6}>
              a
          </Grid>
          </Grid>
        </div>
      </ContainerStyle>

    </>
  );
}
const ContainerStyle = styled.div`
  display:flex;
 
`;
