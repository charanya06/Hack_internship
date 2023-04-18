import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img 12.jpg";
import img13 from "../assets/img13.jpg";
// import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import dwnldicon from "../assets/dwnldIcon.jpg";

const handleImageDownload = async (imageSrc) => {
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement("a");
  link.href = imageURL;
  link.download = "hack_images";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const LibraryPage = () => {
  return (
    <div clasName="m-5">
      <br />
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <img
              src={img1}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img1)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div>
              <img
                src={img2}
                class="card-img-top"
                alt="..."
                width={250}
                height={250}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img2)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img3}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img3)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img4}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img4)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img5}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img5)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img6}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img6)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img7}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img7)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img8}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img8)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img9}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img9)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img10}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img10)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img16}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img16)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img17}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img17)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img13}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img13)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img11}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img11)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img15}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img15)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img12}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img12)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img9}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img9)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img17}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img17)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img18}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img18)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img19}
              class="card-img-top"
              alt="..."
              width={250}
              height={250}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img19)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img20}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img20)}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src={img21}
              class="card-img-top"
              alt="..."
              width={250}
              height={320}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <img
                src={dwnldicon}
                alt=".."
                width={30}
                height={30}
                onClick={() => handleImageDownload(img21)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
