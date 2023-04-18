import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const ContributePage = () => {
  const [name, setName] = useState("");
  const [emailId, setEmailid] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [image, setImage] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmailid(e.target.value);
  };

  const handleChangeImageTitle = (e) => {
    setImageTitle(e.target.value);
  };

  const handleChangeSubscribeEmail = (e) => {
    setSubscriberEmail(e.target.value);
  };

  const handleImageUpload = (e) => {
    let file = e.target.files[0];

    var reader = new FileReader();

    reader.onload = function () {
      let base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      setImage("data:image/png;base64," + base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/userDetails", {
        name: name,
        emailId: emailId,
        imageTitle: imageTitle,
        image: image,
      })
      .then((response) => {
        // handle success
        console.log(response);
        setName("");
        setEmailid("");
        setImageTitle("");
        setImage("");
        swal({
          title: "User Details Submitted Successfully!",
          icon: "success",
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        swal({
          title: "Something went wrong. Please try again",
          icon: "warning",
        });
      });
  };

  const handleOnSubscribe = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/subscriberDetails", {
        emailId: subscriberEmail,
      })
      .then((response) => {
        // handle success
        console.log(response);
        setSubscriberEmail("");
        swal({
          title: "User Subscribed Successfully!",
          icon: "success",
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        swal({
          title: "Something went wrong. Please try again",
          icon: "warning",
        });
      });
  };

  return (
    <div>
      <section class="py-5">
        <div class="container">
          <h1 class="mb-4">Contribute Your Images</h1>
          <form onSubmit={handleOnClick}>
            <div class="form-group">
              <label for="name">Name*:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                value={name}
                onChange={handleChangeName}
                required
              /><br/>
            </div>
            <div class="form-group">
              <label for="email">Email address*:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                value={emailId}
                onChange={handleChangeEmail}
                required
              /><br/>
            </div>
            <div class="form-group">
              <label for="name">Image title*:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                value={imageTitle}
                onChange={handleChangeImageTitle}
                required
              /><br/>
            </div>
            <div class="form-group">
              <label for="file">Select an image to upload*:</label><br/>
              <input
                type="file"
                class="form-control-file"
                id="file"
                name="file"
                // accept=".png|.jpeg|.jpg"
                required
                onChange={handleImageUpload}
              />
            </div><br/>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
      <footer class="bg-dark text-white py-3">
      <div class="container" />
      <div class="row" />
      <div class="col-md-6">
        <p>&copy; HACK 2021</p>
      </div>
      <div class="col-md-6 text-right" />
      <p>Subscribe to our newsletter:</p>
      <form onSubmit={handleOnSubscribe}>
        <div class="input-group">
          <input
            type="email"
            class="form-control"
            placeholder="Email address"
            name="email"
            value={subscriberEmail}
            onChange={handleChangeSubscribeEmail}
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </form>
      </footer>
    </div>
  );
};

export default ContributePage;
