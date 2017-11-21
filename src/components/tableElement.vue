<template>
    <div class="period" :id="period">
      <elementComponent :element="element" v-for="element in data"></elementComponent>
    </div>
</template>

<script>
  import elementComponent from './elementComponent.vue'
  export default {
    name: 'table-element',
    props: ['data', 'period'],
    mounted: function () {
      var els = document.getElementsByClassName('box-wrapper')
      Array.prototype.forEach.call(els, function (element) {
        setTimeout(function () {
          element.classList.remove('loading')
        }, 500)
      })
    },
    components: {elementComponent}
  }
</script>

<style>
  body {
    overflow-x: hidden;
  }

  .box-wrapper {
    -webkit-transition-duration: 1500ms;
    transition-duration: 1500ms;
  }

  .box-wrapper.loading:nth-child(odd) {
    transform: translate(5000%);
    -webkit-transform: translate(5000%);
  }

  .box-wrapper.loading:nth-child(even) {
    transform: translate(-5000%);
    -webkit-transform: translate(-5000%);
  }

</style>
