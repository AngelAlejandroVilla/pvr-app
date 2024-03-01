<template>
  <div>
    <div style="cursor: pointer" class="row mt-3">
      <div class="col-md-6 border rounded-start p-2">
        <div class="row">
          <span style="font-size: 10px; font-weight: bold">LLEGADA</span>
        </div>
        <div>{{ valueStart }}</div>
      </div>
      <div class="col-md-6 border rounded-end p-2">
        <div class="row">
          <span style="font-size: 10px; font-weight: bold">SALIDA</span>
        </div>
        <div>{{ valueEnd }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  props: {
    valueEnd: {
      type: Date,
      required: true,
    },
    valueStart: {
      type: Date,
      required: true,
    },
  },

  setup() {
    function formatearFecha(fecha: Date) {
      // Convertir la fecha a un objeto Date
      var date = new Date(fecha);

      // Obtener el año, mes y día
      var año = date.getFullYear();
      var mes = (date.getMonth() + 1).toString().padStart(2, "0"); // Los meses van de 0 a 11, por eso sumamos 1
      var día = date.getDate().toString().padStart(2, "0");

      // Devolver la fecha formateada
      return año + "/" + mes + "/" + día;
    }

    return {
      formatearFecha,
    };
  },
});
</script>
