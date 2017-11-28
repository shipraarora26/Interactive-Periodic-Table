<template>
  <div class="box-wrapper loading">
    <div class="break"></div>
    <span class="title sm">Ln</span>
    <span class="title lg">Lanthoids</span>
    <table-element :data="elements_p8" :period="'eight'"></table-element>
    <span class="title sm">An</span>
    <span class="title lg">Anthoids</span>
    <table-element :data="elements_p9" :period="'nine'"></table-element>
  </div>
</template>

<script>
  import tableElement from '../components/tableElement.vue'

  import { db } from '../db'

  export default {
    components: {tableElement},
    data () {
      return {
        elements_p8: db.get('elements8').value(),
        elements_p9: db.get('elements9').value()
      }
    },
    methods: {
      show () {
        this.$modal.show('hello-world')
      },
      hide () {
        this.$modal.hide('hello-world')
      },
      beforeOpen (event) {
        this.modalElement = event
      }
    }
  }
</script>

<style>
  .title {
    z-index: 10;
    position: relative;
    top: 50px;
    left: 40px;
  }

  .sm {
    display: none;
  }
  @media screen and (max-width: 1020px) {
    .lg {
       display:none;
    }

    .sm {
       display:inline-block;
    }
}
</style>
