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
          <div class="tab-content bg-white rounded-bottom shadow" id="pills-tabContent">
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

<script>
import { defineComponent, ref } from "vue";
import FormAlquilar from "./Forms/FormAlquilar.vue";
import FormYates from "./Forms/FormYates.vue";
import FormRent from "./Forms/FormRent.vue";

export default defineComponent({
  components: {
    FormAlquilar,
    FormYates,
    FormRent,
  },
  setup() {
    const activeTab = ref({ current: 'alquilar' });
    const alquilarTab = ref(null);
    const yatesTab = ref(null);
    const rentTab = ref(null);
    const alquilarContent = ref(null);
    const yatesContent = ref(null);
    const rentContent = ref(null);

    const toggleTab = (tabName) => {
      activeTab.value = tabName;
      switch (tabName) {
        case "alquilar":
          yatesTab.value.classList.remove("active");
          rentTab.value.classList.remove("active")
          alquilarTab.value.classList.add("active")
          yatesContent.value.classList.remove("show", "active")
          rentContent.value.classList.remove("show", "active")
          alquilarContent.value.classList.add("show", "active")
          break;
        case "yates":
          alquilarTab.value.classList.remove("active")
          rentTab.value.classList.remove("active")
          yatesTab.value.classList.add("active")
          alquilarContent.value.classList.remove("show", "active")
          rentContent.value.classList.remove("show", "active")
          yatesContent.value.classList.add("show", "active")
          break;
        case "rent":
          alquilarTab.value.classList.remove("active")
          yatesTab.value.classList.remove("active")
          rentTab.value.classList.add("active")
          alquilarContent.value.classList.remove("show", "active")
          yatesContent.value.classList.remove("show", "active")
          rentContent.value.classList.add("show", "active")
          break;
      }
    }

    return {
      activeTab,
      alquilarTab,
      yatesTab,
      rentTab,
      alquilarContent,
      yatesContent,
      rentContent,
      toggleTab
    };
  },
});
</script>
