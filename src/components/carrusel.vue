<template>
  <section :id="selector" class="bg-half-260 d-table w-100">
    <div class="bg-overlay bg-black opacity-7"></div>
    <div class="container">
      <div class="row mt-5 justify-content-center">
        <div class="col-12">
          <div class="title-heading text-center">
            <h4 class="display-4 fw-bold text-white title-dark mb-3">Find your perfect property</h4>
            <p class="para-desc text-white-50 mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
          </div>
        </div>
      </div><!--end row-->
    </div> <!--end container-->
  </section><!--end section-->
</template>

<script>
import { easy_background } from '@/assets/js/easy_background.js';

export default {
  props: {
    selector: String,
    slides: {
      type: Array,
      required: true
    },
    delay: Array,
    transitionTiming: {
      type: String,
      default: "ease-in"
    },
    transitionDuration: {
      type: Number,
      default: 500
    }
  },
  mounted() {
    // Llama a la función easy_background con los argumentos apropiados
    easy_background(this.selector, {
      slide: this.slides,
      delay: this.delay || [],
      transition_timing: this.transitionTiming,
      transition_duration: this.transitionDuration
    });
  }
}
</script>
