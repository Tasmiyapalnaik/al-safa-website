function Navbar() {
  return (
    <nav

      style={{
        background: "#fff8f3",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #f0dede",
      }}
    >
     <h2
  style={{
    color: "#8B6B4A",
    fontFamily: "Cormorant Garamond",
    fontSize: "32px",
    margin: 0,
  }}
>
  AL SAFA
</h2>

      <div>
        <a href="#home" style={{ margin: "0 15px" }}>Home</a>
        <a href="#collection" style={{ margin: "0 15px" }}>Collection</a>
        <a href="#about" style={{ margin: "0 15px" }}>About</a>
        <a href="#contact" style={{ margin: "0 15px" }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;