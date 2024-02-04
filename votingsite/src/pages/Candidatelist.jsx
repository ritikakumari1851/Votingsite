import React from "react";
import Dashnav from "../components/Dashnav";
import { useState } from "react";
import { useEffect } from "react";
export default function Candidatelist() {
  const [candidateData, setCandidateData] = useState(null);
  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        // Replace the URL with your actual backend URL
        const response = await fetch("http://localhost:3000/get-candidate", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",

            // Add any headers required for authentication or other purposes
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCandidateData(data.candidate); // Assuming the data object has a 'candidate' property
        } else {
          console.error("Error fetching candidate data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching candidate data:", error);
      }
    };

    fetchCandidateData();
  }, []);

  return (
    <div className=" bg-black">
      <p className=" text-3xl text-center font-serif pt-3">CANDIDATE LIST</p>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-9">
            <div class="candidates-listing-item">
              <div class="list-grid-item mt-4 p-2">
                <div class="row">
                  <div class="col-md-9">
                    <div class="candidates-img float-left mr-4">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                        class="img-fluid d-block rounded"
                      />
                    </div>
                    <div class="candidates-list-desc job-single-meta  pt-2">
                      <h5 class="mb-2 f-19">
                        <p class="text-dark">
                          {candidateData
                            ? candidateData.full_name
                            : "Loading..."}
                        </p>
                      </h5>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-4">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-account mr-1"></i>Web Developer
                          </p>
                        </li>

                        <li class="list-inline-item mr-4">
                          <p class="f-15 mb-0">
                            <a href="" class="text-muted">
                              <i class="mdi mdi-map-marker mr-1"></i>Scenic Way
                              Atlanta.
                            </a>
                          </p>
                        </li>

                        <li class="list-inline-item">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-currency-usd mr-1"></i>$700 -
                            $900/month
                          </p>
                        </li>
                      </ul>
                      <p class="text-muted mt-1 mb-0">
                        Skills : HTML, CSS, JavaScript, Wordpress, PHP, jQueary.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="candidates-list-fav-btn text-right">
                      <div class="fav-icon">
                        <i class="mdi mdi-heart f-20"></i>
                      </div>
                      <div class="candidates-listing-btn mt-4">
                        <a href="#" class="btn btn-outline btn-sm">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-11 offset-lg-1">
                    <div class="candidates-item-desc">
                      <hr />
                      <p class="text-muted mb-2 f-14">
                        Aenean leo ligula porttitor eu consequat eleifend ac
                        enim. Aliquam lorem ante, dapibus in viverra quis
                        feugiat a tellus Phasellus viverra nulla ut metus varius
                        laoreet Quisque rutrum Maecenas tempus tellus eget
                        condimentum pulvinar hendrerit id.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-grid-item mt-4 p-2">
                <div class="row">
                  <div class="col-md-9">
                    <div class="candidates-img float-left mr-4">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt=""
                        class="img-fluid d-block rounded"
                      />
                    </div>
                    <div class="candidates-list-desc job-single-meta  pt-2">
                      <h5 class="mb-2 f-19">
                        <a href="#" class="text-dark">
                          Jack Hallock
                        </a>
                      </h5>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-4">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-account mr-1"></i>Graphic Designer
                          </p>
                        </li>

                        <li class="list-inline-item mr-4">
                          <p class="f-15 mb-0">
                            <a href="" class="text-muted">
                              <i class="mdi mdi-map-marker mr-1"></i>Parrill
                              Chicago
                            </a>
                          </p>
                        </li>

                        <li class="list-inline-item">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-currency-usd mr-1"></i>$500 -
                            $600/month
                          </p>
                        </li>
                      </ul>
                      <p class="text-muted mt-1 mb-0">
                        Skills : HTML, CSS, JavaScript, Wordpress, PHP, jQueary.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="candidates-list-fav-btn text-right">
                      <div class="fav-icon">
                        <i class="mdi mdi-heart f-20"></i>
                      </div>
                      <div class="candidates-listing-btn mt-4">
                        <a href="#" class="btn btn-outline btn-sm">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-11 offset-lg-1">
                    <div class="candidates-item-desc">
                      <hr />
                      <p class="text-muted mb-2 f-14">
                        Aenean leo ligula porttitor eu consequat eleifend ac
                        enim. Aliquam lorem ante, dapibus in viverra quis
                        feugiat a tellus Phasellus viverra nulla ut metus varius
                        laoreet Quisque rutrum Maecenas tempus tellus eget
                        condimentum pulvinar hendrerit id.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-grid-item mt-4 p-2">
                <div class="row">
                  <div class="col-md-9">
                    <div class="candidates-img float-left mr-4">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        alt=""
                        class="img-fluid d-block rounded"
                      />
                    </div>
                    <div class="candidates-list-desc job-single-meta  pt-2">
                      <h5 class="mb-2 f-19">
                        <a href="#" class="text-dark">
                          Rodney Wells
                        </a>
                      </h5>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-4">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-account mr-1"></i>Web Developer
                          </p>
                        </li>

                        <li class="list-inline-item mr-4">
                          <p class="f-15 mb-0">
                            <a href="" class="text-muted">
                              <i class="mdi mdi-map-marker mr-1"></i>Avenue
                              Wayne
                            </a>
                          </p>
                        </li>

                        <li class="list-inline-item">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-currency-usd mr-1"></i>$1000 -
                            $1200/month
                          </p>
                        </li>
                      </ul>
                      <p class="text-muted mt-1 mb-0">
                        Skills : HTML, CSS, JavaScript, Wordpress, PHP, jQueary.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="candidates-list-fav-btn text-right">
                      <div class="fav-icon">
                        <i class="mdi mdi-heart f-20"></i>
                      </div>
                      <div class="candidates-listing-btn mt-4">
                        <a href="#" class="btn btn-outline btn-sm">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-11 offset-lg-1">
                    <div class="candidates-item-desc">
                      <hr />
                      <p class="text-muted mb-2 f-14">
                        Aenean leo ligula porttitor eu consequat eleifend ac
                        enim. Aliquam lorem ante, dapibus in viverra quis
                        feugiat a tellus Phasellus viverra nulla ut metus varius
                        laoreet Quisque rutrum Maecenas tempus tellus eget
                        condimentum pulvinar hendrerit id.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-grid-item mt-4 p-2">
                <div class="row">
                  <div class="col-md-9">
                    <div class="candidates-img float-left mr-4">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                        alt=""
                        class="img-fluid d-block rounded"
                      />
                    </div>
                    <div class="candidates-list-desc job-single-meta  pt-2">
                      <h5 class="mb-2 f-19">
                        <a href="#" class="text-dark">
                          Ruth Miles
                        </a>
                      </h5>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-4">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-account mr-1"></i>PHP Developer
                          </p>
                        </li>

                        <li class="list-inline-item mr-4">
                          <p class="f-15 mb-0">
                            <a href="" class="text-muted">
                              <i class="mdi mdi-map-marker mr-1"></i>Melm
                              Providence
                            </a>
                          </p>
                        </li>

                        <li class="list-inline-item">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-currency-usd mr-1"></i>$750 -
                            $900/month
                          </p>
                        </li>
                      </ul>
                      <p class="text-muted mt-1 mb-0">
                        Skills : HTML, CSS, JavaScript, Wordpress, PHP, jQueary.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="candidates-list-fav-btn text-right">
                      <div class="fav-icon">
                        <i class="mdi mdi-heart f-20"></i>
                      </div>
                      <div class="candidates-listing-btn mt-4">
                        <a href="#" class="btn btn-outline btn-sm">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-11 offset-lg-1">
                    <div class="candidates-item-desc">
                      <hr />
                      <p class="text-muted mb-2 f-14">
                        Aenean leo ligula porttitor eu consequat eleifend ac
                        enim. Aliquam lorem ante, dapibus in viverra quis
                        feugiat a tellus Phasellus viverra nulla ut metus varius
                        laoreet Quisque rutrum Maecenas tempus tellus eget
                        condimentum pulvinar hendrerit id.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-grid-item mt-4 p-2">
                <div class="row">
                  <div class="col-md-9">
                    <div class="candidates-img float-left mr-4">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                        alt=""
                        class="img-fluid d-block rounded"
                      />
                    </div>
                    <div class="candidates-list-desc job-single-meta  pt-2">
                      <h5 class="mb-2 f-19">
                        <a href="#" class="text-dark">
                          Frank Tower
                        </a>
                      </h5>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-4">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-account mr-1"></i>Web Designer
                          </p>
                        </li>

                        <li class="list-inline-item mr-4">
                          <p class="f-15 mb-0">
                            <a href="" class="text-muted">
                              <i class="mdi mdi-map-marker mr-1"></i>Overlook
                              Hartford
                            </a>
                          </p>
                        </li>

                        <li class="list-inline-item">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-currency-usd mr-1"></i>$600 -
                            $850/month
                          </p>
                        </li>
                      </ul>
                      <p class="text-muted mt-1 mb-0">
                        Skills : HTML, CSS, JavaScript, Wordpress, PHP, jQueary.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="candidates-list-fav-btn text-right">
                      <div class="fav-icon">
                        <i class="mdi mdi-heart f-20"></i>
                      </div>
                      <div class="candidates-listing-btn mt-4">
                        <a href="#" class="btn btn-outline btn-sm">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-11 offset-lg-1">
                    <div class="candidates-item-desc">
                      <hr />
                      <p class="text-muted mb-2 f-14">
                        Aenean leo ligula porttitor eu consequat eleifend ac
                        enim. Aliquam lorem ante, dapibus in viverra quis
                        feugiat a tellus Phasellus viverra nulla ut metus varius
                        laoreet Quisque rutrum Maecenas tempus tellus eget
                        condimentum pulvinar hendrerit id.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-grid-item mt-4 p-2">
                <div class="row">
                  <div class="col-md-9">
                    <div class="candidates-img float-left mr-4">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt=""
                        class="img-fluid d-block rounded"
                      />
                    </div>
                    <div class="candidates-list-desc job-single-meta  pt-2">
                      <h5 class="mb-2 f-19">
                        <a href="#" class="text-dark">
                          Jerry Real
                        </a>
                      </h5>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-4">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-account mr-1"></i>PHP Developer
                          </p>
                        </li>

                        <li class="list-inline-item mr-4">
                          <p class="f-15 mb-0">
                            <a href="" class="text-muted">
                              <i class="mdi mdi-map-marker mr-1"></i> Werninger
                              Houston
                            </a>
                          </p>
                        </li>

                        <li class="list-inline-item">
                          <p class="text-muted f-15 mb-0">
                            <i class="mdi mdi-currency-usd mr-1"></i>$800 -
                            $950/month
                          </p>
                        </li>
                      </ul>
                      <p class="text-muted mt-1 mb-0">
                        Skills : HTML, CSS, JavaScript, Wordpress, PHP, jQueary.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="candidates-list-fav-btn text-right">
                      <div class="fav-icon">
                        <i class="mdi mdi-heart f-20"></i>
                      </div>
                      <div class="candidates-listing-btn mt-4">
                        <a href="#" class="btn btn-outline btn-sm">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-11 offset-lg-1">
                    <div class="candidates-item-desc">
                      <hr />
                      <p class="text-muted mb-2 f-14">
                        Aenean leo ligula porttitor eu consequat eleifend ac
                        enim. Aliquam lorem ante, dapibus in viverra quis
                        feugiat a tellus Phasellus viverra nulla ut metus varius
                        laoreet Quisque rutrum Maecenas tempus tellus eget
                        condimentum pulvinar hendrerit id.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
