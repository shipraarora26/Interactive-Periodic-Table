<template>
  <div>
    <h4>Facts about {{element.Name || 'Unknown'}}</h4>
    <span>Date of Discovery: {{element.dateOfDiscovery || 'Unknown'}}</span><br>
    <span>Discoverer: {{element.discoverer || 'Unknown'}}</span><br>
    <span>Origin of Name: {{element.nameOrigin || 'Unknown'}}</span><br>
    <span>Origin of Symbol: {{element.symbolOrigin || 'Unknown'}}</span><br>
    <span>Uses: {{element.uses || 'Unknown'}}</span><br>
    <span>Obtained From: {{element.obtainedFrom || 'Unknown'}}</span><br>
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
  h4 {
    margin: 0 0 5px 0;
  }
</style>
