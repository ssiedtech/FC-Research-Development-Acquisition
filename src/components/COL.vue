<template>
  <transition :name="'slide'" mode="out-in">
    <div class="Card">
      <div class="OuterWrapper">
          <h1><slot name="Title"/></h1>
        <div class="CardLimiterWrapper">
          <div class="QuestionWrapper">
            <slot name="Qs"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
  h1 {
    text-align: center;
  }
  .QuestionWrapper {
    padding: 20px;
    background-color: #1e1e1e;
    border-radius: 10px;
  }
  .OuterWrapper {
    width: 100%;
    min-height: 0px;
  }

  .CardTitleAndImageWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .CardLimiterWrapper {
    width: 100%;
    display: flex;
    min-height: 0px;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2%;
  }

  .CardLimiter {
    min-height: 0px;
    max-width: calc(950px);
    overflow-y: auto;
    width: 100%;
    min-height: 175px;
  }

  .Card {
    width: 100%;
    min-height: 0px;
  }

  .Title {
    text-align: center;
    width: 100%;
    font-size: 2em;
  }

  .Card-Image {
    width: 100px;
    height: 100px;
    max-width: 100px;
    margin: 20px;
    margin-top: 15px;
  }

  .v-card__title {
    font-size: 28px;
    justify-content: center;
  }

  .ListItem {
    font-size: 24px;
    line-height: 28px;
  }

  .slide-enter-active {
  animation: slide-entering .3s linear;
}

.slide-leave-active {
  animation: slide-leaving .3s linear;
}

@keyframes slide-leaving {
  0% {
    transform: rotatey(0%);
    transform-origin: 50% 0%;
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    transform-origin: 50% 0%;
    opacity: 0;
  }
}

@keyframes slide-entering {
  0% {
    transform: translateY(-100%);
    transform-origin: 50% 0%;
    opacity: 0;
  }
  100% {
    transform: rotatey(0);
    transform-origin: 50% 0%;
    opacity: 1;
  }
}
</style>

<script>
export default {
    props: [
        'Cards',
        'Title',
        'BigTitle'
    ]
}
</script>
