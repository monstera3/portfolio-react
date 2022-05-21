import sample1 from '../images/sample1.png'

export const Header = () => {

  const containerStyle = {
    width:"1000px",
    margin: "0 auto"
  };
  const logoStyle = {
    color:"red",
    display:"flex"
  };

  return(
    <div style={containerStyle}>
      <div style={logoStyle}>
        <img src={sample1} alt="sample1"/>
        <p>sugimura natsumi</p>
      </div>

    </div>
  );
}
