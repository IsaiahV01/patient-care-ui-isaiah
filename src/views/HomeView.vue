<script setup>
</script>

<template>
  <div class="home-container">
    <h1 class="title">NeuroCorp</h1>
    <hr class="divider" />
    <p class="slogan">Empowering Young Minds, One Step at a Time</p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100&display=swap');

body {
  margin: 0;
}
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(300deg,#9c8bf3,#9583f3,#806df1,#806df1,#6049ed,#563bf7,#ada2f3);
  background-size: 420% 420%;
  animation: gradient-animation 42s ease infinite;
  color: white;
  text-align: center;
}

.montserrat-uniquifier {
  font-family: "Montserrat", serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
}

.title {
  font-family: 'Montserrat', serif;
  font-size: 7rem;
  font-weight: bold;
  letter-spacing: 20px;
}

.divider {
  width: 85%;
  border: 1px solid white;
  margin: 1rem 0;
}

.slogan {
  font-family: 'Montserrat', serif;   
  font-size: 1.5rem;
  letter-spacing: 7px;
  word-spacing: 15px;
}

@media (max-width: 1024px) {  /* Tablets */
  .main-container {
    min-height: calc(100vh - 60px); /* ✅ Adjust for top navbar */
    padding-top: 60px; /* ✅ Pushes content down */
  }
  .title {
    font-size: 3rem;
  }
  .slogan {
    font-size: 1.2rem;
    max-width: 30rem;
    letter-spacing: 5px;
    word-spacing: 10px;
    text-wrap: balance;
  }
}

@media (max-width: 768px) {  /* Phones */
  .main-container {
    min-height: calc(100vh - 60px); /* ✅ Adjust for top navbar */
    padding-top: 60px; /* ✅ Pushes content down */
  }
  .title {
    font-size: 2.5rem;
    letter-spacing: 10px;
  }
  .divider {
    width: 70%;
  }
  .slogan {
    font-size: 1rem;
    max-width: 22rem;
    letter-spacing: normal;
    word-spacing: normal;
    text-wrap: balance;
  }
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>