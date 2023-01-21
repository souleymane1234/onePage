import React, { useState } from "react";
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

function Billing() {
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [bienvenue, seBienvenue] = useState("");
  const [titre1, setTitre1] = useState("");
  const [description1, setDescription1] = useState("");
  const [titre2, setTitre2] = useState("");
  const [description2, setDescription2] = useState("");

  const handleImage = (e) => {
    console.warn(e.target.files);
    setImage(e.target.files[0]);
    console.log("img1", image);
  };
  const handleImage1 = (e) => {
    console.warn(e.target.files);
    setImage1(e.target.files[0]);
    console.log("img1", image1);
  };
  const handleImage2 = (e) => {
    console.warn(e.target.files);
    setImage2(e.target.files[0]);
    console.log("img2", image2);
  };

  const createUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Accept-Encoding", "gzip, deflate");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");

    const urlencoded = new URLSearchParams();
    urlencoded.append("nom", nom);
    urlencoded.append("email", email);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    fetch("https://pleasant-shirt-bass.cyclic.app/api/onepage", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Nom de l'entreprise"
              variant="standard"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="email"
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="file"
              label="Image de couverture"
              variant="standard"
              onChange={handleImage}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Mot de bienvenue"
              variant="standard"
              value={bienvenue}
              onChange={(e) => seBienvenue(e.target.value)}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="file"
              label="Image de la première presentation"
              variant="standard"
              onChange={handleImage1}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Titre de la première presentation"
              variant="standard"
              value={titre1}
              onChange={(e) => setTitre1(e.target.value)}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Description de la première presentation"
              variant="standard"
              value={description1}
              onChange={(e) => setDescription1(e.target.value)}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="file"
              label="Image de la deuxième presentation"
              variant="standard"
              onChange={handleImage2}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Titre de la deuxième presentation"
              variant="standard"
              value={titre2}
              onChange={(e) => setTitre2(e.target.value)}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Description de la deuxième presentation"
              variant="standard"
              value={description2}
              onChange={(e) => setDescription2(e.target.value)}
              fullWidth
            />
          </MDBox>
          <MDBox display="flex" alignItems="center" ml={-1}>
            {/* <Checkbox /> */}
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
            >
              &nbsp;&nbsp;I agree the&nbsp;
            </MDTypography>
            <MDTypography
              component="a"
              href="#"
              variant="button"
              fontWeight="bold"
              color="info"
              textGradient
            >
              Terms and Conditions
            </MDTypography>
          </MDBox>
          <MDBox mt={4} mb={1}>
            <MDButton variant="gradient" color="info" onClick={createUser} fullWidth>
              sign in
            </MDButton>
          </MDBox>
          <MDBox mt={3} mb={1} textAlign="center">
            <MDTypography variant="button" color="text">
              Already have an account?{" "}
              <MDTypography
                // component={Link}
                to="/authentication/sign-in"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign In
              </MDTypography>
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
