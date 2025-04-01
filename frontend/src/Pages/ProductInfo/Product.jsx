const ProductInfo1 = () => {
  return (
    <div style={styles.container}>
      <div style={styles.infoContainer}>
        <h2 style={styles.heading}>Soiled Garment Cabinets</h2>
        <p style={styles.description}>
          Soiled garment cabinets are designed with leveler legs, a flap at the
          top for disposal of soiled garments, and a latched door for
          collection. Units are electro-polished 304 stainless steel and may be
          provided with a sloping roof.
        </p>
        <div style={styles.iconContainer}>
          <div style={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={styles.iconImage}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v18m9-9H3"
              />
            </svg>
            <span>Thickness 18G - 24G</span>
          </div>
          <div style={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={styles.iconImage}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Suitable for Clean Rooms</span>
          </div>
          <div style={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={styles.iconImage}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m10 12V4M5 20h14"
              />
            </svg>
            <span>Models 85818 85804</span>
          </div>
        </div>
        <table style={styles.specTable}>
          <thead>
            <tr>
              <th>Top</th>
              <th>Size in mm (LxWxH)</th>
              <th>Size in Inch (LxWxH)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flat</td>
              <td>650x540x1950</td>
              <td>26x21x77</td>
            </tr>
            <tr>
              <td>Sloped</td>
              <td>650x540x2150</td>
              <td>26x21x85</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="https://via.placeholder.com/200"
          alt="Product"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#a1d7f2",
    maxWidth: "800px",
    margin: "0 auto",
  },
  infoContainer: {
    flex: 1,
    paddingRight: "20px",
  },
  heading: {
    color: "#00458a",
    marginTop: "0",
  },
  description: {
    color: "#555",
    marginBottom: "20px",
  },
  iconContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  icon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#00458a",
    fontSize: "14px",
    textAlign: "center",
  },
  iconImage: {
    width: "40px",
    height: "40px",
    marginBottom: "5px",
  },
  specTable: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  specTableTh: {
    backgroundColor: "#00458a",
    color: "#fff",
    padding: "10px",
  },
  specTableTd: {
    border: "1px solid #00458a",
    padding: "10px",
    textAlign: "center",
    color: "#00458a",
  },
  imageContainer: {
    marginLeft: "20px",
    maxWidth: "200px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
};

export default ProductInfo1;
