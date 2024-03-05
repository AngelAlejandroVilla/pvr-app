<template>
  <div
    class="shadow-sm p-3 mb-5 bg-body-tertiary rounded mx-12 w-100%"
    style=""
  >
    <div class="row">
      <div
        class="col-md-3 border rounded-start p-2 rounded mx-12 shadow-sm"
        id="filterMenu"
      >
        <div class="row">
          <span style="font-size: 14px; font-weight: bold">Destino</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Buscar"
            v-model="ubicacion"
            @focus="ShowCities = true"
            @input="mostarZonas()"
            class="rounded mx-12 shadow-sm"
          />
          <div v-if="ShowCities" class="card rounded shadow shadow-lg mt-2 p-3">
            <div v-if="!ShowZones">
              <ul>
                <li @click="IrZonas('Ciudad 1')">Puerto Vallarta</li>
                <li @click="IrZonas('Ciudad 2')">Riviera Nayarit</li>
              </ul>
            </div>
            <div v-else>
              <ul>
                <li>Zona 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 border rounded-start p-2 rounded mx-12 shadow-sm">
        <VDatePicker v-model="range" is-range class="custom-date-picker">
          <template #default="{ inputValue, inputEvents }">
            <!--COMO SE MUESTRA ANTES DEL CLICK-->
            <datePickerInput
              :value-start="inputValue.start"
              :value-end="inputValue.end"
              v-on="inputEvents.start"
            />
          </template>
        </VDatePicker>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import datePickerInput from "../../views/datePickerInput.vue";
import { DatePicker } from "v-calendar";

export default defineComponent({
  components: {
    VDatePicker: DatePicker,
    datePickerInput,
  },
  setup() {
    const ShowCities = ref(false);
    const ShowZones = ref(false);
    const ubicacion = ref("");

    function filterResults() {
      console.log("click");
    }
    function mostarZonas() {
      ShowCities.value = true;
      ShowZones.value = true;
    }

    function IrZonas(ciudad: string) {
      ShowCities.value = true;
      ShowZones.value = true;
      ubicacion.value = ciudad;
    }
    // Manejar clics fuera del filtro para ocultar la lista
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    function handleClickOutside(event: MouseEvent) {
      const filterMenu = document.getElementById("filterMenu");
      const target = event.target as Node;
      if (filterMenu && !filterMenu.contains(target)) {
        // Si el clic ocurre fuera del filtro, ocultar la lista
        ShowCities.value = false;
        console.log("click fuera");
      }
    }

    return {
      filterResults,
      ShowCities,
      ShowZones,
      ubicacion,
      IrZonas,
      mostarZonas,
      handleClickOutside,
    };
  },
});
</script>

<style scoped>
.contenedorip {
  position: relative;
}
.carta {
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0;
  min-height: 15rem;
  min-width: 24rem;
}
input[type="text"] {
  padding: 10px;
  margin: 10px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  width: 200px; /* Puedes ajustar el ancho según sea necesario */
  outline: none; /* Remueve el contorno azul que algunos navegadores agregan al hacer focus */
  font-size: 16px; /* Ajusta esto según las necesidades de tu diseño */
}

/* Estilos para el estado :focus para mejorar la accesibilidad */
input[type="text"]:focus {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Placeholder styling */
input[type="text"]::placeholder {
  color: #999; /* El color del texto del placeholder */
  font-style: italic;
}
</style>
