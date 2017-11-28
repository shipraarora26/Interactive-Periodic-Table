<template>
  <div>
    <h3>Isotopes</h3>
    <img class="isotopes" v-bind:src="this.isotopeSrc" alt="no-image-available"/>
  </div>
</template>

<script>
  export default {
    name: 'isotopesComponent',
    props: ['element', 'isotopeSrc'],
    methods: {
      show () {
        this.$modal.show('hello-world')
      }
    },
    beforeMount () {
      console.log(this)
    }
  }
</script>

<style>
  h3 {
    margin: 0 0 5px 0;
  }
  .isotopes {
    width: 70%;
  }
</style>
