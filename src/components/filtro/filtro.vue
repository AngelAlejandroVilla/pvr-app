<template>
  <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded mx-12" style="">
    <VForm id="kt_modal_new_card_form" class="form">
      <div class="row">
        <div class="col-md-2">
          <div class="mb-3">
            <Field
              name="Category"
              class="form-select form-select-solid"
              data-control="select2"
              data-hide-search="true"
              data-placeholder="Month"
              as="select"
            >
              <option value="Casas">Casas</option>
              <option value="Villas">Villas</option>
              <option value="Departamentos">Departamentos</option>
            </Field>
          </div>
        </div>
      </div>
    </VForm>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";

export default defineComponent({
  components: {
    ErrorMessage,
    Field,
    VForm,
  },
  setup() {
    const activeTab = ref({ current: "alquilar" });
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
          if (alquilarTab.value) alquilarTab.value.classList.add("active");
          if (yatesTab.value) yatesTab.value.classList.remove("active");
          if (rentTab.value) rentTab.value.classList.remove("active");
          if (alquilarContent.value)
            alquilarContent.value.classList.add("show", "active");
          if (yatesContent.value)
            yatesContent.value.classList.remove("show", "active");
          if (rentContent.value)
            rentContent.value.classList.remove("show", "active");
          break;
        case "yates":
          if (yatesTab.value) yatesTab.value.classList.add("active");
          if (alquilarTab.value) alquilarTab.value.classList.remove("active");
          if (rentTab.value) rentTab.value.classList.remove("active");
          if (yatesContent.value)
            yatesContent.value.classList.add("show", "active");
          if (alquilarContent.value)
            alquilarContent.value.classList.remove("show", "active");
          if (rentContent.value)
            rentContent.value.classList.remove("show", "active");
          break;
        case "rent":
          if (rentTab.value) rentTab.value.classList.add("active");
          if (alquilarTab.value) alquilarTab.value.classList.remove("active");
          if (yatesTab.value) yatesTab.value.classList.remove("active");
          if (rentContent.value)
            rentContent.value.classList.add("show", "active");
          if (alquilarContent.value)
            alquilarContent.value.classList.remove("show", "active");
          if (yatesContent.value)
            yatesContent.value.classList.remove("show", "active");
          break;
      }
    };

    return {
      activeTab,
      alquilarTab,
      yatesTab,
      rentTab,
      alquilarContent,
      yatesContent,
      rentContent,
      toggleTab,
    };
  },
});
</script>
