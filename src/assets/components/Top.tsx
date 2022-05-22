
export const Top = () => {

  const containerStyle = {
    width:"1200px",
    margin: "0 auto",
    display:"flex",

  };
  const logoStyle = {
    color:"red",
    width: "30%",
  };
  const contentStyle = {
    width: "70%",
  }


  return(
    <div style={containerStyle}>
      <div style={logoStyle}>
        <p>Natsumi Sugimura</p>
        <ul >
          <li>Work</li>
          <li>Skill</li>
          <li>Profile</li>
        </ul>
      </div>
      <div style={contentStyle}>
        <p>sugimura natsumi</p>
      </div>

    </div>
  );
}
