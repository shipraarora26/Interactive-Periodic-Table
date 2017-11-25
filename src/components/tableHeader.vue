<template>
  <div class="box-wrapper loading">
    <div class="characteristic" v-on:click="showNonMetals">
      <div class="metals" v-on:click="showMetals">
        <span>Metals</span>
      </div>
      <div class="non-metals">
        <span>Nonmetals</span>
      </div>
    </div>
    <div class="category">
      <div class="alkali-metals color" v-on:click="showAlkaliMetals">
        <span>Alkali Metals</span>
      </div>
      <div class="alkaline-earth-metals color" v-on:click="showAlkalineEarthMetals">
        <span>Alkaline Earth</span>
      </div>
      <span>
        <div class="lanthanoids color" style="writing-mode: horizontal-tb; height: 50%; line-height: 300%" v-on:click="showLanthanoids">
          <span>Lanthanoids</span>
        </div>
        <div class="actinoids color" style="writing-mode: horizontal-tb; height: 50%; line-height: 300%" v-on:click="showActinoids">
          <span>Actinoids</span>
        </div>
      </span>
      <div class="transition-metals color" v-on:click="showTransitionMetals">
        <span>Transition</span>
      </div>
      <div class="post-transition-metals color" v-on:click="showPostTransitionMetals">
        <span>Post Transition</span>
      </div>
      <div class="metalloids color" v-on:click="showMetalloids">
        <span>Metalloids</span>
      </div>
      <div class="other-nonmetals color" v-on:click="showOtherNonMetals">
        <span>Other</span>
      </div>
      <div class="halogens color" v-on:click="showHalogens">
        <span>Halogens</span>
      </div>
      <div class="noble-gases color" v-on:click="showNobleGases">
        <span>Noble Gases</span>
      </div>
    </div>
  <div id="seconds" class="seconds">
    <div id="bar" class="bar animating"></div>
  </div>
  </div>
</template>

<script>
  import tableHeaderDetails from '../components/tableHeaderDetails.vue'

  export default {
    components: {tableHeaderDetails},
    methods: {
      showOtherNonMetals: function (event) {
        var els = document.getElementsByClassName('color')
        document.getElementById('header-details-title').innerText = 'Other NonMetals'
        document.getElementById('header-deatils-text').innerText = 'Usually soft and have low melting temperature can be found close to the zigzag line on the periodic table'
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
        document.getElementById('header-details-title').innerText = 'Noble Gases'
        document.getElementById('header-deatils-text').innerText = 'Inactive, or inert. Each atom has exactly the number of electrons it needs to have to a full outer shell, so these atoms almost never bond with other atoms. That is why these are all gases.'
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
        document.getElementById('header-details-title').innerText = 'Halogens'
        document.getElementById('header-deatils-text').innerText = 'Reactive nonmetals and readily form compounds but are not found free in nature. They combine with alkali metals to form salts (halogen means salt-former).'
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
        document.getElementById('header-details-title').innerText = 'Metalloids'
        document.getElementById('header-deatils-text').innerText = 'In their solid state they are usually brittle (the break rather then bend) nod they are insulators of both heat and electricity'
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
        document.getElementById('header-details-title').innerText = 'Alkaline Earth Metals'
        document.getElementById('header-deatils-text').innerText = 'In their solid state they are usually brittle (the break rather then bend) nod they are insulators of both heat and electricity'
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
        document.getElementById('header-details-title').innerText = 'Alkali Metals'
        document.getElementById('header-deatils-text').innerText = 'Partly like metals and partly like non-metals. For example, they are semiconductors, which means they conduct electricity in some conditions.'
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
        document.getElementById('header-details-title').innerText = 'Transition Metals'
        document.getElementById('header-deatils-text').innerText = 'Typical metals: they are strong, shiny, malleable (they can be hammered into shape), flexible (in thin sheets and wires), and they conduct both heat and electricity.'
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
        document.getElementById('header-details-title').innerText = 'Post Transition Metals'
        document.getElementById('header-deatils-text').innerText = 'Typical metals: they are strong, shiny, malleable (they can be hammered into shape), flexible (in thin sheets and wires), and they conduct both heat and electricity.'
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
        document.getElementById('header-details-title').innerText = 'Lanthanoids'
        document.getElementById('header-deatils-text').innerText = 'Soft, malleable, high luster and conductivity. Used in industry to make various alloys and high-quality glass form trivalent cations by giving electrons to Nonmetals and Halogens'
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
        document.getElementById('header-details-title').innerText = 'Actinoids'
        document.getElementById('header-deatils-text').innerText = 'All are radioactive, most are synthetic, some used as energy source in nuclear power plants and nuclear weapons, all are pyrophoric meaning they catch on fire when they react with air react frequently with elements in group 16 and 17, Nonmetals and Halogens'
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
        document.getElementById('header-details-title').innerText = 'NonMetals'
        document.getElementById('header-deatils-text').innerText = 'In their solid state they are usually brittle (the break rather then bend) nod they are insulators of both heat and electricity'
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
        document.getElementById('header-details-title').innerText = 'Metals'
        document.getElementById('header-deatils-text').innerText = 'In their solid state they are usually brittle (the break rather then bend) nod they are insulators of both heat and electricity'
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
