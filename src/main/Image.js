function Image() {
  return (
    <div
      style={{
        width: "100%",
        height: "1500px",
        backgroundSize: "cover",
        backgroundImage: `url(${require("./1.png")})`,
      }}
    ></div>
  );
}
export default Image;
