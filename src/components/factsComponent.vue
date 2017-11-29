<template>
  <div class="facts">
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
  .facts {
    color: white;
    font-family: avenir;
  }

  .facts span {
    font-size: 13px;
  }

  @media(max-width: 1000px) {
    .facts span {
        text-align: left;
        margin: 0 0 0 40px;
        line-height: 0.5;
        font-size: 12px;
      }
  }

  h4 {
    margin: 0 0 15px 0;
    font-size: 18px;
  }
</style>
