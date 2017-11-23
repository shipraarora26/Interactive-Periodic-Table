<template>
  <div class="header-details">
    <div class="row-one" v-on:click="clearStyles"></div>
    <div class="row-two" v-on:click="clearStyles">
      <h2 id="header-details-title"></h2>
      <div class="details">
        <p id="header-deatils-text"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'table-header-details',
    methods: {
      clearStyles () {
        var els = document.getElementsByClassName('color')
        Array.prototype.forEach.call(els, function (element) {
          element.removeAttribute('style')
          document.getElementById('header-details-title').innerText = ''
          document.getElementById('header-deatils-text').innerText = ''
        })
      }
    }
  }
</script>

<style>
  .row-one {
    width: 86.2%;
    height: 100px;
    position: fixed;
    z-index: 8;
    margin-top: 1.2%;
    background-color: transparent;
    margin-left: 7%;
    margin-right: auto;
  }

  .row-two {
    width: 60%;
    position: fixed;
    z-index: 12;
    margin: 7% 0 2% 12%;
    background-color: transparent;
    margin-right: auto;

    text-align: center;
  }

  .details {
    text-align: left;
    margin-left: 20%;
    margin-right: 20%;
  }

  @media(max-width: 1700px) {
    h2 {
    font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  @media(max-width: 768px) {
    h2 {
      font-size: 14px;
    }

    p {
      font-size: 9px;
    }
  }

  @media(max-width: 400px) {
    h2 {
      font-size: 8px;
    }

    p {
      font-size: 0px;
    }
  }
  </style>
