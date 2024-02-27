<template>
    <div class="detalles-propiedad">
      <div class="detalles-content">
        <h2>{{ propiedad.Nombre }}</h2>
        <p><strong>Dirección:</strong> {{ propiedad.Domicilio }}, {{ propiedad.Ciudad }}, {{ propiedad.Estado }}</p>
        <p><strong>Recámaras:</strong> {{ propiedad.Recamaras }}</p>
        <p><strong>Baños:</strong> {{ propiedad.Baños }}</p>
        <p><strong>Descripción:</strong> {{ propiedad.Descripcion }}</p>
        <!-- Agrega más detalles según tus necesidades -->
      </div>
      <button @click="cerrarDetalles">Cerrar</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { useRoute, useRouter } from "vue-router";
  
  export interface DepartamentoDetalle {
    idPropiedad: number;
    Compartida: number;
    Nombre: string;
    Condominio: string;
    Huespedes: number;
    Recamaras: number;
    tipo: string;
    imagen: string;
    url?: string;
    prioritaria: number;
    Estado: string;
    Zona: string;
    Domicilio: string;
    Ciudad: string;
    Descripcion: string;
    minNoches: string;
    Baños: string;
    CalendarioImportado?: string;
  }
  
  export default defineComponent({
    props: {
      propiedad: {
        type: Object as PropType<DepartamentoDetalle>,
        required: true
      }
    },
    methods: {
      cerrarDetalles() {
        this.$emit('cerrar');
      }
    }
  });
  </script>
  