import React from "react";
import styles from "./QrCode.module.css";
import qrCodeImage from "./image-qr-code.png";

function QrCode() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={qrCodeImage} alt="" className={styles.image} />
          <div className={styles.text}>
            <h2>Improve your front-end skills by building projects</h2>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCode;
