import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Publication = ({ heading, username, length, specfic }) => {

    return (

   <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
          <div>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
          <a href= "https://ieeexplore.ieee.org/abstract/document/9210338"> 1. N. S. Borson, M. R. Kabir, Z. Zamal and R. M.
                    Rahman,“Correlation analysis of demographic
                    factors on low birth weight and prediction
                    modeling using machine learning techniques",
                    Fourth World Conference on Smart Trends in
                    Systems,Security and Sustainability (WorldS4), pp.
                    169-173, London, United Kingdom,2020.
          </a>
              <br></br>
              <br></br>
          <a href="http://www.tiutic.org/pdf/vol-III/Vol3_Article%201.pdf">2. M. R. Kabir, N. S. Borson, S. Momen and M. S.
                    Hossain, “Forecasting sea level rise using
                    machine learning techniques", TIU Transaction
                    on Intelligent Computing, vol. 3, India, 2019.
          </a>
              </div>
      </Container>
    </Jumbotron>
    );
}

export default Publication;
