<template>
  <div class="app">
    <table-header></table-header>
    <table-header-details></table-header-details>
    <div class="array">
      <table-element :data="elements_p1" :period="'one'"></table-element>
      <table-element :data="elements_p2" :period="'two'"></table-element>
      <table-element :data="elements_p3" :period="'three'"></table-element>
      <table-element :data="elements_p4" :period="'four'"></table-element>
      <table-element :data="elements_p5" :period="'five'"></table-element>
      <table-element :data="elements_p6" :period="'six'"></table-element>
      <table-element :data="elements_p7" :period="'seven'"></table-element>

      <modal name="hello-world" @before-open="beforeOpen" height="50%" width="90%">
        <span @click="$modal.hide('hello-world')" class="close rounded black"></span>
        <div class="column left" :class="this.modalElement.params.element.classification">
          symbol: {{this.modalElement.params.element.Symbol}}<br>
          atomicNumber: {{this.modalElement.params.element.atomicNumber}}<br>
          meltingPoint: {{this.modalElement.params.element.meltingPoint}}<br>
          boilingPoint: {{this.modalElement.params.element.boilingPoint}}<br>
          protonsCount: {{this.modalElement.params.element.numberOfProtons}}<br>
          neutronsCount: {{this.modalElement.params.element.numberOfNeutrons}}<br>
          classification: {{this.modalElement.params.element.classification}}<br>
          crystalStructure: {{this.modalElement.params.element.crystalStructure}}<br>
          density: {{this.modalElement.params.element.density}}<br>
          color: {{this.modalElement.params.element.color}}<br>

          <h1>
            {{this.modalElement.params.element.Symbol}}<br>
            <small style="font-weight: 100; font-size: 18px;">{{this.modalElement.params.element.Name}}</small>
          </h1>
        </div>
        <div class="column middle">
          <img v-bind:src="this.imageSrc" />


          <h5>Atomic Structure</h5>
          <span>Number of Energy Levels: {{this.modalElement.params.element.numberOfEnergyLevels}}</span>
          <br>
          <span v-if="this.modalElement.params.element.firstEnergyLevel">First Energy Level: {{this.modalElement.params.element.firstEnergyLevel}}</span><br>
          <span v-if="this.modalElement.params.element.secondEnergyLevel">Second Energy Level: {{this.modalElement.params.element.secondEnergyLevel}}</span><br>
          <span v-if="this.modalElement.params.element.thirdEnergyLevel">Third Energy Level: {{this.modalElement.params.element.thirdEnergyLevel}}</span><br>
          <span v-if="this.modalElement.params.element.fourthEnergyLevel">Fourth Energy Level: {{this.modalElement.params.element.fourthEnergyLevel}}</span><br>
          <span v-if="this.modalElement.params.element.fifthEnergyLevel">Fifth Energy Level: {{this.modalElement.params.element.fifthEnergyLevel}}</span><br>
          <span v-if="this.modalElement.params.element.sixthEnergyLevel">Sixth Energy Level: {{this.modalElement.params.element.sixthEnergyLevel}}</span><br>
          <span v-if="this.modalElement.params.element.seventhEnergyLevel">Seventh Energy Level: {{this.modalElement.params.element.seventhEnergyLevel}}</span><br>
          {{this.modalElement.params.element.elementName}}
        </div>
        <div class="column right" :class="this.modalElement.params.element.classification">
          <div class="element-facts">
            <isotopes-component :element="this.modalElement.params.element"></isotopes-component>
          </div>
          <div class="element-facts">
            <facts-component :element="this.modalElement.params.element" :isotopeSrc="this.isotopeSrc" ></facts-component>
          </div>
        </div>
      </modal>

      <footer-component></footer-component>
      <section>
        <img class="bottom" src="../assets/animation/reaction1.png">
        <img class="top" src="../assets/animation/reaction2.png">
      </section>
    </div>

  </div>
</template>

<script>
  import tableHeader from '../components/tableHeader.vue'
  import tableHeaderDetails from '../components/tableHeaderDetails.vue'
  import tableElement from '../components/tableElement.vue'
  import isotopesComponent from '../components/isotopesComponent.vue'
  import factsComponent from '../components/factsComponent.vue'
  import footerComponent from '../components/footerComponent.vue'

  import { db, drop, seed } from '../db'

  export default {
    components: {tableHeader, tableHeaderDetails, tableElement, footerComponent, isotopesComponent, factsComponent},
    data () {
      return {
        imageSrc: null,
        isotopeSrc: null,
        modalElement: {
          params: {
            element: {
              class: 'empty',
              symbol: null,
              atomicNumber: null,
              meltingPoint: null,
              boilingPoint: null,
              protonsCount: null,
              neutronsCount: null,
              classification: null,
              crystalStructure: null,
              density: null,
              color: null
            }
          }
        },
        elements_p1: db.get('elements1').value(),
        elements_p2: db.get('elements2').value(),
        elements_p3: db.get('elements3').value(),
        elements_p4: db.get('elements4').value(),
        elements_p5: db.get('elements5').value(),
        elements_p6: db.get('elements6').value(),
        elements_p7: db.get('elements7').value(),
        elements_p8: db.get('elements8').value()
      }
    },
    beforeMount () {
      drop()
      seed()
      console.log('Reseeded database')
    },
    methods: {
      show () {
        this.$modal.show('hello-world')
      },
      hide () {
        this.$modal.hide('hello-world')
      },
      beforeOpen (event) {
        this.modalElement = event
        var str = '/static/imgs/' + this.modalElement.params.element.Name.toLowerCase()
        str = str.substring(0, str.length - 1)
        this.imageSrc = str + '.png'

        str = '/static/imgs/' + this.modalElement.params.element.Symbol.toLowerCase()
        this.isotopeSrc = str + '.png'
        console.log(this.isotopeSrc)
      }

    }
  }
</script>

<style lang="scss">
  @import '../style/global';

  img {
    width: 30%;
  }

  .v--modal-overlay[data-modal="hello-world"] {
    background-color: rgba(111,111,111,0.9);
  }

  .v--modal {
    background-color: white;
    text-align: left;
    min-height: 400px;
    border-radius: 10px;
    box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);
    padding: 0;
  }

  .column{
    display: inline-table;
    width: 30%;
    min-height: 100%;
    padding: 15px;
    text-align: left;
  }

  .left {
    float: left;
    color: white;
  }

  .middle {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: black;
  }

  .right {
    float: right;
    color: white;
  }

  .element-facts {
    min-height: 150px;
  }

  .close {
    cursor: pointer;
    position: fixed;
    right: 4%;
    top: 21%;
    display: inline-block;
    width: 31px;
    height: 53px;
    &:hover {
      &::before, &::after {
        background: #1ebcc5;
      }
    }

    &::before, &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      background: #000;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }

    &.black {
      &::before, &::after {
        height: 6px;
      }
    }

    &.rounded {
      &::before, &::after {
        border-radius: 5px;
      }
    }
  }
</style>
