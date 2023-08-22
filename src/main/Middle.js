function Middle() {
  return (
    <div
      style={{ backgroundColor: "grey", padding: "15px", marginTop: "-9px" }}
    >
      <div className="d-flex justify-content-center">
        <h1 style={{ color: "white" }}>Welcome To Sweet Corner </h1>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <input type="text" placeholder="Search For Products" />
        <input
          type="button"
          value="search Product"
          style={{ backgroundColor: "#fd7e14" }}
        />
      </div>
    </div>
  );
}
export default Middle;
