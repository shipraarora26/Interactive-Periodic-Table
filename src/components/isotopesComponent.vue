<template>
  <div>
    <h3>Isotopes</h3>
    <img class="isotopes" v-bind:src="this.isotopeSrc" alt="No image available"/>
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
    margin: 0 0 15px 0;
    font-size: 18px;
    color: white;
  }

  .isotopes {
    width: 70%;
  }
</style>
