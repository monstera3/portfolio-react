import styled from 'styled-components';

export const Top = () => {

  return(
    <ContainerStyle>
      <div className="logoStyle">
        <p>Natsumi Sugimura</p>
        <ul >
          <li>Work</li>
          <li>Skill</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="contentStyle">
        <p>sugimura natsumi</p>
      </div>

    </ContainerStyle>
  );
}

const ContainerStyle = styled.div`
  width:1200px;
  margin: 0 auto;
  display:flex;
  .logoStyle{
    color:red;
    width: 30%;
    li{
      list-style: none;
    }
  }
  .contentStyle{
    width: 70%;
  }
`;
