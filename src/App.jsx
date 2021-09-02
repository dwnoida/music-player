import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import Header from "./Header";

function App() {
  const [isloading, setLoading] = useState(true);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const [upperText, setUpperText] = useState("Label 1");
  const [lowerText, setLowerText] = useState("Label 2");

  return (
    <div>
      <Header />
      <div className="Container">
        <div className="Box">
          <input
            name="uppertext"
            placeholder="Uppertext"
            value={upperText}
            onChange={(e) => {
              setUpperText(e.target.value);
            }}
          />
          <input
            name="uppertext"
            placeholder="Lowertext"
            value={lowerText}
            onChange={(e) => {
              setLowerText(e.target.value);
            }}
          />

          <button className="ripple">Submit</button>

          {/* https://source.unsplash.com/random */}
          <div className="image-container">
            <img
              className="memeImg"
              src="https://source.unsplash.com/random"
              onLoad={stopLoading}
            />
            <h3 className="text-overlay upper-text">{upperText}</h3>
            <h3 className="text-overlay lower-text">{lowerText}</h3>
            <div className="image-overlay">
              <div
                className="icons"
                onClick={() => {
                  document.getElementsByClassName("memeImg")[0].src =
                    "https://source.unsplash.com/random?time=" +
                    new Date().getTime();
                  startLoading();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#fff"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                </svg>
                <h5>Refresh</h5>
              </div>
              {/* <div className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#fff"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z" />
                </svg>
                <h5>Download</h5>
                <a
                  id="download"
                  download="myImage.png"
                  href=""
                  onClick={() => {
                    html2canvas(
                      document.getElementsByClassName("image-container")[0]
                    ).then((canvas) => {
                      document.getElementById("download").href =
                        canvas.toDataURL("image/png");
                      // document.getElementById("download").click();
                    });
                  }}
                >
                  Download to myImage.png
                </a>
              </div> */}
            </div>
            {isloading && (
              <div className="loader-container">
                <div class="loader"></div>
                <h5>Loading...</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
