<template>
  <div class="box-wrapper loading">
    <div class="category">
      <div class="other-nonmetals color" v-on:click="showOtherNonMetals">
        <span>Other Nonmetals</span>
      </div>
      <div class="noble-gases color" v-on:click="showNobleGases">
        <span>Noble Gases</span>
      </div>
      <div class="halogens color" v-on:click="showHalogens">
        <span>Halogens</span>
      </div>
      <div class="metalloids color" v-on:click="showMetalloids">
        <span>Metalloids</span>
      </div>
      <div class="alkaline-earth-metals color" v-on:click="showAlkalineEarthMetals">
        <span>Alkaline Earth Metals</span>
      </div>
      <div class="alkali-metals color" v-on:click="showAlkaliMetals">
        <span>Alkali Metals</span>
      </div>
      <div class="transition-metals color" v-on:click="showTransitionMetals">
        <span>Transition Metals</span>
      </div>
      <div class="post-transition-metals color" v-on:click="showPostTransitionMetals">
        <span>Post Transition Metals</span>
      </div>
      <div class="lanthanoids color" v-on:click="showLanthanoids">
        <span>Lanthanoids</span>
      </div>
      <div class="actinoids color" v-on:click="showActinoids">
        <span>Actinoids</span>
      </div>
    </div>
    <div class="characteristic " v-on:click="showNonMetals">
      <div class="non-metals">
        <span>Nonmetals</span>
      </div>
      <div class="metals" v-on:click="showMetals">
        <span>Metals</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showOtherNonMetals: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('other-nonmetals')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showNobleGases: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('noble-gases')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showHalogens: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('halogens')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showMetalloids: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('metalloids')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showAlkalineEarthMetals: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('alkaline-earth-metals')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showAlkaliMetals: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('alkali-metals')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showTransitionMetals: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('transition-metals')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showPostTransitionMetals: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('post-transition-metals')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showLanthanoids: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('lanthanoids')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showActinoids: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('actinoids')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showNonMetals: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('non-metals')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      },
      showMetals: function (event) {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          if (!element.classList.contains('empty')) {
            if (!element.classList.contains('metals')) {
              element.setAttribute('style', 'background-color: rgb(220,220,220);')
            }
          }
        })
      }
    }
  }
</script>

<style>

</style>
