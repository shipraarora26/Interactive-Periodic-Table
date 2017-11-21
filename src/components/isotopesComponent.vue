<template>
  <div>
    <h3>Isotopes</h3>
    <table>
      <tr>
        <td>Isotope</td>
        <td>Half Life</td>
      </tr>
      <tr>
        <td>Be-7</td>
        <td>53.3 Days</td>
      </tr>
      <tr>
        <td>Be-9</td>
        <td>Stable</td>
      </tr>
      <tr>
        <td>Be-10</td>
        <td>26000000.0 Years</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'isotopesComponent',
    props: ['element'],
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
</style>
