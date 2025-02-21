<script setup>
</script>

<template>
    <div class="patients-container">
      <h1 class="title">Patients</h1>
      <span class="search-section"></span>
      <hr class="divider" />
    </div>
  </template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100&display=swap');

body {
  margin: 0;
}
.patients-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;
  color: #806df1;
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
  border: 1px solid #806df1;
  margin: 1rem 0;
}
</style>
  