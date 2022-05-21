import sample1 from '../images/sample1.png'

export const Header = () => {

  const containerStyle = {
    width:"1000px",
    color:"red",
  };

  return(
    <div>
      <div style={containerStyle}>
        <img src={sample1} alt="sample1"/>
        <p>sugimura natsumi</p>
      </div>

    </div>
  );
}
