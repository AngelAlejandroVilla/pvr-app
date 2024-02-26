<template>
  <MenuPrincipal />
  <!-- AQUI VA EL CARRUSEL -->
        <!-- Hero Start -->
            <Carrusel :selector="'home'" :slides="slides" :delay="delay" />
        <!-- Hero End -->

        <section class="section">
        <Filtros/>
          <div class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title mb-4 pb-2 text-center">
                            <span class="badge rounded-pill bg-soft-primary">Process</span>
                            <h4 class="title mt-3 mb-4">How it work</h4>
                            <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card border-0 text-center features feature-primary feature-clean rounded p-4">
                            <div class="icons text-center mx-auto">
                                <i class="uil uil-map-marker-plus rounded h3 mb-0"></i>
                            </div>

                            <div class="card-body p-0 mt-4">
                                <a href="javascript:void(0)" class="title h5 text-dark">Map Search</a>
                                <p class="text-muted mt-3 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                <div class="mt-2">
                                    <a href="javascript:void(0)" class="text-primary">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card border-0 text-center features feature-primary feature-clean rounded p-4">
                            <div class="icons text-center mx-auto">
                                <i class="uil uil-estate rounded h3 mb-0"></i>
                            </div>

                            <div class="card-body p-0 mt-4">
                                <a href="javascript:void(0)" class="title h5 text-dark">Property Lookup</a>
                                <p class="text-muted mt-3 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                <div class="mt-2">
                                    <a href="javascript:void(0)" class="text-primary">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card border-0 text-center features feature-primary feature-clean rounded p-4">
                            <div class="icons text-center mx-auto">
                                <i class="uil uil-house-user rounded h3 mb-0"></i>
                            </div>

                            <div class="card-body p-0 mt-4">
                                <a href="javascript:void(0)" class="title h5 text-dark">Buy / Sell Property</a>
                                <p class="text-muted mt-3 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                <div class="mt-2">
                                    <a href="javascript:void(0)" class="text-primary">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title mb-4 pb-2 text-center">
                            <span class="badge rounded-pill bg-soft-primary">Featured Items</span>
                            <h4 class="title mt-3 mb-4">Latest Property</h4>
                            <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->

                <div class="row">
                    <div>
                        <CustomCard
                        imageSrc="./assets/images/real/property/1.jpg"
                        link="property-detail.html"
                        address="10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
                        area="8000sqf"
                        beds="4 Beds"
                        baths="4 Baths"
                        price="$5000"
                        rating="5.0"
                        reviews="30"
                        />
                    </div><!--end col-->
                    
                    <div>
                        <CustomCard
                        imageSrc="./assets/images/real/property/2.jpg"
                        link="property-detail.html"
                        address="10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
                        area="8000sqf"
                        beds="4 Beds"
                        baths="4 Baths"
                        price="$5000"
                        rating="5.0"
                        reviews="30"
                        />
                    </div><!--end col--><!--end col-->
                    
                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card shop-list border-0 shadow position-relative overflow-hidden">
                            <div class="shop-image position-relative overflow-hidden shadow">
                                <img src="./assets/images/real/property/3.jpg" class="img-fluid" alt="">
                                <ul class="list-unstyled shop-icons">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-estate"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-heart"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-camera"></i></a></li>
                                </ul>
                            </div>
                            <div class="card-body content p-4">
                                <a href="property-detail.html" class="text-dark product-name h6">3723 SANDBAR DR, Addis, LA 70710, USA</a>
                                <ul class="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center">
                                    <li class="d-flex align-items-center me-3">
                                        <i class="uil uil-compress-arrows fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">8000sqf</span>
                                    </li>
    
                                    <li class="d-flex align-items-center me-3">
                                        <i class="uil uil-bed-double fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">4 Beds</span>
                                    </li>
    
                                    <li class="d-flex align-items-center">
                                        <i class="uil uil-bath fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">4 Baths</span>
                                    </li>
                                </ul>
                                <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                    <li class="list-inline-item mb-0">
                                        <span class="text-muted">Price</span>
                                        <p class="fw-semibold mb-0">$5000</p>
                                    </li>
                                    <li class="list-inline-item mb-0 text-muted">
                                        <span class="text-muted">Rating</span>
                                        <ul class="fw-semibold text-warning list-unstyled mb-0">
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0 text-dark">5.0(30)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div><!--end items-->
                    </div><!--end col-->
                    
                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card shop-list border-0 shadow position-relative overflow-hidden">
                            <div class="shop-image position-relative overflow-hidden shadow">
                                <img src="./assets/images/real/property/4.jpg" class="img-fluid" alt="">
                                <ul class="list-unstyled shop-icons">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-estate"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-heart"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-camera"></i></a></li>
                                </ul>
                            </div>
                            <div class="card-body content p-4">
                                <a href="property-detail.html" class="text-dark product-name h6">Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA</a>
                                <ul class="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center">
                                    <li class="d-flex align-items-center me-3">
                                        <i class="uil uil-compress-arrows fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">8000sqf</span>
                                    </li>
    
                                    <li class="d-flex align-items-center me-3">
                                        <i class="uil uil-bed-double fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">4 Beds</span>
                                    </li>
    
                                    <li class="d-flex align-items-center">
                                        <i class="uil uil-bath fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">4 Baths</span>
                                    </li>
                                </ul>
                                <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                    <li class="list-inline-item mb-0">
                                        <span class="text-muted">Price</span>
                                        <p class="fw-semibold mb-0">$5000</p>
                                    </li>
                                    <li class="list-inline-item mb-0 text-muted">
                                        <span class="text-muted">Rating</span>
                                        <ul class="fw-semibold text-warning list-unstyled mb-0">
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0 text-dark">5.0(30)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div><!--end items-->
                    </div><!--end col-->
                    
                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card shop-list border-0 shadow position-relative overflow-hidden">
                            <div class="shop-image position-relative overflow-hidden shadow">
                                <img src="./assets/images/real/property/5.jpg" class="img-fluid" alt="">
                                <ul class="list-unstyled shop-icons">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-estate"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-heart"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-camera"></i></a></li>
                                </ul>
                            </div>
                            <div class="card-body content p-4">
                                <a href="property-detail.html" class="text-dark product-name h6">710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</a>
                                <ul class="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center">
                                    <li class="d-flex align-items-center me-3">
                                        <i class="uil uil-compress-arrows fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">8000sqf</span>
                                    </li>
    
                                    <li class="d-flex align-items-center me-3">
                                        <i class="uil uil-bed-double fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">4 Beds</span>
                                    </li>
    
                                    <li class="d-flex align-items-center">
                                        <i class="uil uil-bath fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">4 Baths</span>
                                    </li>
                                </ul>
                                <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                    <li class="list-inline-item mb-0">
                                        <span class="text-muted">Price</span>
                                        <p class="fw-semibold mb-0">$5000</p>
                                    </li>
                                    <li class="list-inline-item mb-0 text-muted">
                                        <span class="text-muted">Rating</span>
                                        <ul class="fw-semibold text-warning list-unstyled mb-0">
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0 text-dark">5.0(30)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div><!--end items-->
                    </div><!--end col-->
                    
                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card shop-list border-0 shadow position-relative overflow-hidden">
                            <div class="shop-image position-relative overflow-hidden shadow">
                                <img src="./assets/images/real/property/6.jpg" class="img-fluid" alt="">
                                <ul class="list-unstyled shop-icons">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-estate"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-heart"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-icon btn-pills btn-primary"><i class="uil uil-camera"></i></a></li>
                                </ul>
                            </div>
                            <div class="card-body content p-4">
                                <a href="property-detail.html" class="text-dark product-name h6">5133 MCLAIN WAY, Baton Rouge, LA 70809, USA</a>
                                <ul class="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center">
                                    <li class="d-flex align-items-center me-3">
                                        <i class="uil uil-compress-arrows fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">8000sqf</span>
                                    </li>
    
                                    <li class="d-flex align-items-center me-3">
                                        <i class="uil uil-bed-double fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">4 Beds</span>
                                    </li>
    
                                    <li class="d-flex align-items-center">
                                        <i class="uil uil-bath fs-5 me-1 text-primary"></i>
                                        <span class="text-muted">4 Baths</span>
                                    </li>
                                </ul>
                                <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                    <li class="list-inline-item mb-0">
                                        <span class="text-muted">Price</span>
                                        <p class="fw-semibold mb-0">$5000</p>
                                    </li>
                                    <li class="list-inline-item mb-0 text-muted">
                                        <span class="text-muted">Rating</span>
                                        <ul class="fw-semibold text-warning list-unstyled mb-0">
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0"><i class="mdi mdi-star"></i></li>
                                            <li class="list-inline-item mb-0 text-dark">5.0(30)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div><!--end items-->
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="text-center">
                            <a href="property-grid.html" class="mt-3 h6 text-primary">View More Properties <i class="uil uil-angle-right-b align-middle"></i></a>
                        </div>
                    </div>
                </div><!--end row-->
            </div><!--end container-->

            <div class="container-fluid mt-100 mt-60">
                <div class="rounded shadow py-5" style="background: url('../../assets/images/real/1.jpg') center center;">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="card rounded p-4">
                                    <div class="tiny-single-item">
                                        <div class="tiny-slider">
                                            <div class="client-testi text-center">
                                                <p class="h6 text-muted fst-italic fw-normal">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "</p>
                                                <div class="commenter mt-4">
                                                    <img src="./assets/images/client/01.jpg" class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg" alt="">
                                                    <div class="content mt-4">
                                                        <ul class="list-unstyled h6 text-warning mb-0">
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        </ul>
                                                        <h5 class="text-primary mb-0">Ronald Kinsey</h5>
                                                        <small class="text-muted">User</small>
                                                    </div>
                                                </div>
                                            </div><!--end review content-->
                                        </div>
            
                                        <div class="tiny-slider">
                                            <div class="client-testi text-center">
                                                <p class="h6 text-muted fst-italic fw-normal">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "</p>
                                                <div class="commenter mt-4">
                                                    <img src="./assets/images/client/02.jpg" class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg" alt="">
                                                    <div class="content mt-4">
                                                        <ul class="list-unstyled h6 text-warning mb-0">
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        </ul>
                                                        <h5 class="text-primary mb-0">Raquel Service</h5>
                                                        <small class="text-muted">App User</small>
                                                    </div>
                                                </div>
                                            </div><!--end review content-->
                                        </div>
            
                                        <div class="tiny-slider">
                                            <div class="client-testi text-center">
                                                <p class="h6 text-muted fst-italic fw-normal">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "</p>
                                                <div class="commenter mt-4">
                                                    <img src="./assets/images/client/03.jpg" class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg" alt="">
                                                    <div class="content mt-4">
                                                        <ul class="list-unstyled h6 text-warning mb-0">
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        </ul>
                                                        <h5 class="text-primary mb-0">Leona Moore</h5>
                                                        <small class="text-muted">Client</small>
                                                    </div>
                                                </div>
                                            </div><!--end review content-->
                                        </div>
            
                                        <div class="tiny-slider">
                                            <div class="client-testi text-center">
                                                <p class="h6 text-muted fst-italic fw-normal">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "</p>
                                                <div class="commenter mt-4">
                                                    <img src="./assets/images/client/04.jpg" class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg" alt="">
                                                    <div class="content mt-4">
                                                        <ul class="list-unstyled h6 text-warning mb-0">
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        </ul>
                                                        <h5 class="text-primary mb-0">Mark Rose</h5>
                                                        <small class="text-muted">CEO</small>
                                                    </div>
                                                </div>
                                            </div><!--end review content-->
                                        </div>
            
                                        <div class="tiny-slider">
                                            <div class="client-testi text-center">
                                                <p class="h6 text-muted fst-italic fw-normal">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "</p>
                                                <div class="commenter mt-4">
                                                    <img src="./assets/images/client/05.jpg" class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg" alt="">
                                                    <div class="content mt-4">
                                                        <ul class="list-unstyled h6 text-warning mb-0">
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        </ul>
                                                        <h5 class="text-primary mb-0">Marsha Donoho</h5>
                                                        <small class="text-muted">User</small>
                                                    </div>
                                                </div>
                                            </div><!--end review content-->
                                        </div>
            
                                        <div class="tiny-slider">
                                            <div class="client-testi text-center">
                                                <p class="h6 text-muted fst-italic fw-normal">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "</p>
                                                <div class="commenter mt-4">
                                                    <img src="./assets/images/client/06.jpg" class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg" alt="">
                                                    <div class="content mt-4">
                                                        <ul class="list-unstyled h6 text-warning mb-0">
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                            <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
                                                        </ul>
                                                        <h5 class="text-primary mb-0">Xavier Giancola</h5>
                                                        <small class="text-muted">App User</small>
                                                    </div>
                                                </div>
                                            </div><!--end review content-->
                                        </div>
                                    </div><!--end owl carousel-->
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div><!--end container-->
                </div>
            </div><!--end container fluid-->

            <div class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title mb-4 pb-2 text-center">
                            <h4 class="title mb-4">Our Experts</h4>
                            <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->

                <div class="row">
                    <div class="col-lg-3 col-md-6 mt-4 pt-2">
                        <div class="card team team-primary bg-light text-center rounded shadow border-0">
                            <div class="card-body">
                                <div class="position-relative">
                                    <img src="./assets/images/client/01.jpg" class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="">
                                    <ul class="list-unstyled mb-0 team-icon">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="facebook" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="instagram" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="twitter" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="linkedin" class="icons"></i></a></li>
                                    </ul><!--end icon-->
                                </div>
                                <div class="content pt-3">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Ronny Jofra</a></h5>
                                    <small class="designation text-muted">Commercial Broker</small>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-3 col-md-6 mt-4 pt-2">
                        <div class="card team team-primary bg-light text-center rounded shadow border-0">
                            <div class="card-body">
                                <div class="position-relative">
                                    <img src="./assets/images/client/04.jpg" class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="">
                                    <ul class="list-unstyled mb-0 team-icon">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="facebook" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="instagram" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="twitter" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="linkedin" class="icons"></i></a></li>
                                    </ul><!--end icon-->
                                </div>
                                <div class="content pt-3">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Micheal Carlo</a></h5>
                                    <small class="designation text-muted">Commercial Broker</small>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-lg-3 col-md-6 mt-4 pt-2">
                        <div class="card team team-primary bg-light text-center rounded shadow border-0">
                            <div class="card-body">
                                <div class="position-relative">
                                    <img src="./assets/images/client/03.jpg" class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="">
                                    <ul class="list-unstyled mb-0 team-icon">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="facebook" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="instagram" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="twitter" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="linkedin" class="icons"></i></a></li>
                                    </ul><!--end icon-->
                                </div>
                                <div class="content pt-3">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Aliana Rosy</a></h5>
                                    <small class="designation text-muted">Commercial Broker</small>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-lg-3 col-md-6 mt-4 pt-2">
                        <div class="card team team-primary bg-light text-center rounded shadow border-0">
                            <div class="card-body">
                                <div class="position-relative">
                                    <img src="./assets/images/client/02.jpg" class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="">
                                    <ul class="list-unstyled mb-0 team-icon">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="facebook" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="instagram" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="twitter" class="icons"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="btn btn-primary btn-pills btn-sm btn-icon"><i data-feather="linkedin" class="icons"></i></a></li>
                                    </ul><!--end icon-->
                                </div>
                                <div class="content pt-3">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Sofia Razaq</a></h5>
                                    <small class="designation text-muted">Commercial Broker</small>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

        </section>
  <!-- End -->
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MenuPrincipal from "./layouts/main-layout/header/header.vue";
import { defineComponent, onMounted, ref } from "vue";
import Carrusel from "./components/carrusel.vue";
import Filtros from "./components/filtro/filtro.vue";
import CustomCard from './components/Cards/Card.vue';


export default defineComponent({
  components: {
    MenuPrincipal,
    Carrusel,
    Filtros,
    CustomCard,
  },
  data() {
    return {
      slides: [
        '@/assets/images/real/1.jpg',
        '@/assets/images/real/2.jpg',
        '@/assets/images/real/3.jpg',
      ],
      delay: [4000, 4000, 4000]
    };
  },
});
</script>
