<template>
  <div :class="element.class" class="group box-wrapper loading color" @click="$modal.show('hello-world', { element: element })" v-on:click="clearStyles">
      <div class="atomic-orbital-shells">
        <span class="K">{{element.atomicOrbitalShells.k}}</span>
        <span class="L">{{element.atomicOrbitalShells.l}}</span>
        <span class="M">{{element.atomicOrbitalShells.m}}</span>
        <span class="N">{{element.atomicOrbitalShells.n}}</span>
        <span class="O">{{element.atomicOrbitalShells.o}}</span>
        <span class="P">{{element.atomicOrbitalShells.p}}</span>
        <span class="Q">{{element.atomicOrbitalShells.q}}</span>
      </div>
      <div class="atomic-number">
        {{element.atomicNumber}}
      </div>
      <div class="element-symbol">
        <strong>{{element.elementSymbol}}</strong>
      </div>
      <div class="element-name">
        {{element.elementName}}
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
        })
      }
    }
  }
</script>

<style>

</style>
