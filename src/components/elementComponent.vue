<template>
  <div :class="element.classification" class="group box-wrapper loading color" @click="$modal.show('hello-world', { element: element })" v-on:click="clearStyles">
      <div class="atomic-orbital-shells">
        <span class="K">{{element.firstEnergyLevel}}</span>
        <span class="L">{{element.secondEnergyLevel}}</span>
        <span class="M">{{element.thirdEnergyLevel}}</span>
        <span class="N">{{element.fourthEnergyLevel}}</span>
        <span class="O">{{element.fifthEnergyLevel}}</span>
        <span class="P">{{element.sixthEnergyLevel}}</span>
        <span class="Q">{{element.seventhEnergyLevel}}</span>
      </div>
      <div class="atomic-number">
        {{element.atomicNumber}}
      </div>
      <div class="element-symbol">
        <strong>{{element.Symbol}}</strong>
      </div>
      <div class="element-name">
        {{element.Name}}
      </div>
      <div class="atomic-mass">
        {{element.atomicMass}}
      </div>
    </div>
</template>

<script>
  export default {
    name: 'elementComponent',
    props: ['element'],
    methods: {
      show () {
        this.$modal.show('hello-world')
      },
      clearStyles () {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          document.getElementById('header-details-title').innerText = ''
          document.getElementById('header-details-text').innerText = ''
        })
      }
    }
  }
</script>

<style>

</style>
