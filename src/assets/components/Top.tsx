import styled from 'styled-components';

export const Top = () => {

  return(
    <ContainerStyle>
      <div className="logoStyle">
        <h2>Natsumi Sugimura</h2>
        <ul>
          <li><a href="https://www.google.com">Work</a></li>
          <li><a href="https://www.google.com">Skill</a></li>
          <li><a href="https://www.google.com">Profile</a></li>
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
    text-align: center;

    li{
      list-style: none;
    }
  }
  .contentStyle{
    width: 70%;
  }
`;
