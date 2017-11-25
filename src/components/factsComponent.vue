<template>
  <div>
    <h4>Fun Facts about {{element.elementName}}</h4>
    <span>Date of Discovery: {{element.dateOfDiscovery}}</span><br>
    <span>Discoverer: {{element.discoverer}}</span><br>
    <span>Origin of Name: {{element.nameOrigin}}</span><br>
    <span>Origin of Symbol: {{element.symbolOrigin}}</span><br>
    <span>Uses: {{element.uses}}</span><br>
    <span>Obtained From: {{element.obtainedFrom}}</span><br>
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
