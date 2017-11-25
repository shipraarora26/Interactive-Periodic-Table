<template>
  <div>
    <h3>Isotopes</h3>
    <img class="isotopes" v-bind:src="this.isotopeSrc" />
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
    }
  }
</script>

<style>
  td {
    width: 30%;
  }
  table, th, td {
    border: 1px solid white;
  }

  .isotopes {
    width: 70%;
  }
</style>
