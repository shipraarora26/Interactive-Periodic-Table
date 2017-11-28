<template>
  <div>
    <div id="seconds" class="seconds">
      <div id="bar" class="bar animating"></div>
    </div>
    <section>
      <img class="bottom" src="../assets/animation/reaction1.png">
      <img class="top" src="../assets/animation/reaction2.png">
    </section>
    <span class="title-loading">Interactive Peridioc table</span>
  </div>
</template>

<script>
  import { drop, seed } from '../db'

  export default {
    beforeMount () {
      drop()
      seed()
      console.log('Reseeded database')
      console.log(this)
    },
    mounted () {
      var router = this.$router
      setTimeout(function () { router.push('/app') }, 1200)
    }
  }
</script>

<style>
  .title-loading {
    width: 200px;
    left: 43%;
    top: 60%;
    color: rgb(228,56,83);
    position: absolute;
    font-size: 18px;
    font-weight: bold;
  }

  <!-- flask animation -->
  section {
    position: relative;
    width: 100%;
  }

  section img {
    position: absolute;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    left: 40%;
    bottom: 40%;
  }

  .top {
    animation-name: fade;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-direction: alternate;
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  <!-- loading bar animation -->
  body {
    background-color: #dddee0;
  }

  .seconds {
    background-color: #76c5c8;
    height: 2px;
    width: 300px;
    margin: auto;
    position: relative;
    margin-top: 45%;
  }

  .bar {
    background: -webkit-gradient(linear, left top, right top, color-stop(0%,#87d4d7), color-stop(100%,#8bfbff));
    height: 2px;
    width: 0%;
  }

  .animating {
    -webkit-animation: progress 4s infinite linear;
  }

  @-webkit-keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
</style>