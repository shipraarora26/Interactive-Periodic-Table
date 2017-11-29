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

      <modal name="hello-world" @before-open="beforeOpen" height="auto" :scrollable="true" width="85%">
        <div class="column left" :class="this.modalElement.params.element.classification">
          Symbol: {{this.modalElement.params.element.Symbol || 'Unknown'}}<br>
          Atomic Number: {{this.modalElement.params.element.atomicNumber || 'Unknown'}}<br>
          Melting Point: {{this.modalElement.params.element.meltingPoint || 'Unknown'}}<br>
          Boiling Point: {{this.modalElement.params.element.boilingPoint || 'Unknown'}}<br>
          Protons Count: {{this.modalElement.params.element.numberOfProtons || 'Unknown'}}<br>
          Neutrons Count: {{this.modalElement.params.element.numberOfNeutrons || 'Unknown'}}<br>
          Classification: {{this.modalElement.params.element.classification || 'Unknown'}}<br>
          Crystal Structure: {{this.modalElement.params.element.crystalStructure || 'Unknown'}}<br>
          Density: {{this.modalElement.params.element.density || 'Unknown'}}<br>
          Color: {{this.modalElement.params.element.color || 'Unknown'}}<br>

          <h1>
            {{this.modalElement.params.element.Symbol}}<br>
            <small style="font-weight: 100; font-size: 18px;">{{this.modalElement.params.element.Name}}</small>
          </h1>
        </div>
        <div class="column middle">
          <img v-bind:src="this.imageSrc" alt="No image available"/>


          <h4>Atomic Structure</h4>
          <span>Number of Energy Levels: {{this.modalElement.params.element.numberOfEnergyLevels || 'Unknown'}}</span>
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
          <span @click="$modal.hide('hello-world')" class="close rounded black"></span>
          <div class="element-facts">
            <isotopes-component :element="this.modalElement.params.element" :isotopeSrc="this.isotopeSrc" ></isotopes-component>
          </div>
          <div class="element-facts">
            <facts-component :element="this.modalElement.params.element" ></facts-component>
          </div>
        </div>
      </modal>

      <footer-component></footer-component>
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
        this.imageSrc = str + '.png'

        var iso = '/static/imgs/' + this.modalElement.params.element.Symbol.toLowerCase()
        this.isotopeSrc = iso + '.png'
        console.log(this.isotopeSrc)
      }

    }
  }
</script>

<style lang="scss">
  @import '../style/global';

  img {
    width: 60%;
  }

  @media(max-width: 1700px) {
    .v--modal-overlay[data-modal="hello-world"] {
      background-color: rgba(111,111,111,0.9);
    }

    .v--modal {
      background-color: white;
      text-align: left;
      min-height: 600px;
      top: 13px !important;
      border-radius: 10px;
      box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);
      padding: 0;
    }

    .column {
      display: inline-block;
      width: 30%;
      height: 600px;
      margin-bottom: -10px;
      min-height: 100%;
      padding: 15px 15px 0 15px;
      text-align: left;
    }

    .left {
      float: left;
      color: white;
      font-size: 13px;
    }

    .middle {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      color: black;
      overflow: scroll;
      font-size: 13px;
    }

    .right {
      float: right;
      color: white;
    }

    .element-facts {
      min-height: 150px;
      margin-bottom: 30px;
    }

    .close {
      cursor: pointer;
      position: fixed;
      right: 6.5%;
      top: -2%;
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
  }

  @media(max-width: 1000px) {
    .v--modal-overlay[data-modal="hello-world"] {
      background-color: rgba(111,111,111,0.9);
    }

    .v--modal-overlay .v--modal-box {
      overflow: scroll !important;
    }

    .v--modal {
      background-color: white;
      text-align: left;
      min-height: 400px;
      top: 13px !important;
      border-radius: 10px;
      box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);
      padding: 0;
    }

    .column {
      display: inline-table;
      width: 100%;
      min-height: 100%;
      text-align: left;
    }

    .left {
      color: white;
      font-size: 12px;
    }

    .middle {
      color: black;
      text-align: center;
      font-size: 12px;
      img {
        width: 50%;
      }
      span {
        display: inherit !important;
      }
    }

    .right {
      color: black;
      text-align: center;
      width: 100%;
      img {
        width: 50%;
      }
      span {
        display: inherit !important;
      }
    }

    .close {
      cursor: pointer;
      position: fixed;
      right: 6%;
      top: -1%;
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
        background: #fff;
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
  }

  @media(max-width: 380px) {
    .v--modal-overlay[data-modal="hello-world"] {
      background-color: rgba(1,1,1,0.9);
    }

    .v--modal-overlay .v--modal-box {
      overflow: scroll !important;
    }

    .v--modal {
      background-color: white;
      text-align: left;
      min-height: 400px;
      top: 10px !important;
      border-radius: 10px;
      box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);
      padding: 0;
    }

    .column {
      display: inline-table;
      width: 100%;
      min-height: 100%;
      padding: 15px;
      text-align: left;
    }

    .left {
      color: white;
    }

    .middle {
      color: black;
      text-align: center;
      img {
        width: 80%;
      }
      span {
        display: inherit !important;
      }
    }

    .right {
      color: black;
      text-align: center;
      width: 90%;
      img {
        width: 80%;
      }
      span {
        display: inherit !important;
      }
    }

    .close {
      cursor: pointer;
      position: fixed;
      right: 6%;
      top: -2%;
      display: inline-block;
      width: 30px;
      height: 30px;

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
        background: #fff;
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
  }
</style>
