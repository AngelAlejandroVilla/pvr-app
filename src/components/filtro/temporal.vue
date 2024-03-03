<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-11 col-12 text-center mt-sm-0 pt-sm-0">
        <div class="text-center features-absolute">
          <ul
            class="nav nav-pills bg-light shadow border-bottom flex-column flex-sm-row d-md-inline-flex nav-justified mb-0 rounded-top position-relative overflow-hidden"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item m-1">
              <a
                class="nav-link py-2 px-5"
                :class="{ active: activeTab.current === 'alquilar' }"
                @click="toggleTab('alquilar')"
                ref="alquilarTab"
              >
                <div class="text-center">
                  <h6 class="mb-0">Alquilar</h6>
                </div>
              </a>
            </li>
            <li class="nav-item m-1">
              <a
                class="nav-link py-2 px-5"
                :class="{ active: activeTab.current === 'yates' }"
                @click="toggleTab('yates')"
                ref="yatesTab"
              >
                <div class="text-center">
                  <h6 class="mb-0">Yates</h6>
                </div>
              </a>
            </li>
            <li class="nav-item m-1">
              <a
                class="nav-link py-2 px-5"
                :class="{ active: activeTab.current === 'rent' }"
                @click="toggleTab('rent')"
                ref="rentTab"
              >
                <div class="text-center">
                  <h6 class="mb-0">Rent</h6>
                </div>
              </a>
            </li>
          </ul>
          <div
            class="tab-content bg-white rounded-bottom shadow"
            id="pills-tabContent"
          >
            <div
              class="card border-0 tab-pane fade"
              :class="{ 'show active': activeTab.current === 'alquilar' }"
              id="alquilar"
              role="tabpanel"
              ref="alquilarContent"
            >
              <FormAlquilar />
            </div>
            <div
              class="card border-0 tab-pane fade"
              :class="{ 'show active': activeTab.current === 'yates' }"
              id="yates"
              role="tabpanel"
              ref="yatesContent"
            >
              <FormYates />
            </div>
            <div
              class="card border-0 tab-pane fade"
              :class="{ 'show active': activeTab.current === 'rent' }"
              id="rent"
              role="tabpanel"
              ref="rentContent"
            >
              <FormRent />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
