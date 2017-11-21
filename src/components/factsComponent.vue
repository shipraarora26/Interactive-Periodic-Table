<template>
  <div>
    <h4>Fun Facts about {{element.elementName}}</h4>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'factsComponent',
    props: ['element'],
    methods: {
      show () {
        this.$modal.show('hello-world')
      }
    }
  }
</script>

<style>

</style>
