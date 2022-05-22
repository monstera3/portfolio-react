import sample1 from '../images/sample1.png'

export const Top = () => {

  const containerStyle = {
    width:"1200px",
    margin: "0 auto",
    display:"flex"

  };
  const logoStyle = {
    color:"red",
    display:"flex",
    width: "30%",
  };
  const contentStyle = {
    width: "70%",
  }


  return(
    <div style={containerStyle}>
      <div style={logoStyle}>
        <img src={sample1} alt="sample1"/>
        <p>sugimura natsumi</p>
      </div>
      <div style={contentStyle}>
        <p>sugimura natsumi</p>
      </div>

    </div>
  );
}
