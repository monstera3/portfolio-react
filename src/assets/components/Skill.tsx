import { LeftBar } from './LeftBar';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { SkillCard } from './SkillCard';

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
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <SkillCard />
              </Grid>
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
