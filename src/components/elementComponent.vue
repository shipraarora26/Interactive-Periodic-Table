<template>
    <div :class="element.class" class="group">
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
    props: ['element']
  }
</script>

<style>

</style>
