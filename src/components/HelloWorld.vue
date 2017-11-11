<template>
  <div class="app">
    <div class="reseed" v-on:click="reseedDB">Reseed Database</div>
    <table-header></table-header>
    <div class="array">
      <table-element :data="elements_p1" :period="'one'"></table-element>
      <table-element :data="elements_p2" :period="'two'"></table-element>
      <table-element :data="elements_p3" :period="'three'"></table-element>
      <table-element :data="elements_p4" :period="'four'"></table-element>
      <table-element :data="elements_p5" :period="'five'"></table-element>
      <table-element :data="elements_p6" :period="'six'"></table-element>
      <table-element :data="elements_p7" :period="'seven'"></table-element>

      <footer-component></footer-component>
    </div>

  </div>
</template>

<script>
  import tableHeader from '../components/tableHeader.vue'
  import tableElement from '../components/tableElement.vue'
  import footerComponent from '../components/footerComponent.vue'

  import { db, drop, seed } from '../db'

  export default {
    components: {tableHeader, tableElement, footerComponent},
    data () {
      return {
        elements_p1: db.get('elements1').value(),
        elements_p2: db.get('elements2').value(),
        elements_p3: db.get('elements3').value(),
        elements_p4: db.get('elements4').value(),
        elements_p5: db.get('elements5').value(),
        elements_p6: db.get('elements6').value(),
        elements_p7: db.get('elements7').value()
      }
    },
    methods: {
      reseedDB: function () {
        drop()
        seed()
        alert('Reseeded database')
      }
    }
  }
</script>

<style lang="scss">
  @import '../style/global';
</style>
