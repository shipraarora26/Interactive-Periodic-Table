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
    components: {elementComponent}
  }
</script>

<style>

</style>
