import { LeftBar } from './LeftBar';
import styled from 'styled-components';
import sample3Img from '../images/sample3.jpg'

export const Profile = () => {

  return(
    <>
      <ContainerStyle>
      <LeftBar />
      <div className="contentStyle">
        <h1 className="headTitle">Profile</h1>
        <div className="profileBox">
          <img src={sample3Img} alt=""/>
          <div className="boxText">
            <p>杉村菜都美</p>
            <p>大学卒業後、営業、CADオペレーターを経て <br/>
              2022年 2月よりWebデザイン、プログラミングを学び始めました。 <br/>
              現在はフロントエンドを中心に勉強しています。</p>
          </div>
        </div>
        <h2 className="headLine ">経歴</h2>

      </div>
      </ContainerStyle>
    </>
  );
}
const ContainerStyle = styled.div`
  display:flex;
  
 .profileBox{
   display: flex;
   img{
     width: 18rem;
     border-radius: 1%;
   }
   .boxText{
     margin-left: 8%;
     p{
       margin: 3vh 0;
     }
   }
 }
`;
