<template>
    <div class="loading-skeleton-cards">
      <div v-for="index in cardCount" :key="index" class="loading-card">
        <div class="loading-card-image"></div>
        <div class="loading-card-content">
          <div class="loading-card-title"></div>
          <div class="loading-card-description"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cardCount: {
        default: ['' ,'' , '', '', '', ''], // Number of loading skeleton cards to show
      }
    },
  };
  </script>
  
  <style scoped>
  .loading-skeleton-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }
  
  .loading-card {
    background-color: var(--main-card-bg-color);
    margin: 2px;
    display: flex;
    flex-direction: row;
    /* align-items: center;
    justify-content: flex-end; */
    /* height: 99%; */
    border-radius: 5px;
    border-bottom: solid 3px blueviolet;
    box-shadow: #0000003d 2px 2px 6px 1px;
    width: 500px;
    height: 320px;
    animation: pulse 1s infinite ease-in-out;
  }
  
  @keyframes pulse {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }
  
  .loading-card-image {
    background-color: #e0e0e0;
    height: 150px;
    border-radius: 4px;
  }
  
  .loading-card-content {
    margin-top: 12px;
  }
  
  .loading-card-title {
    background-color: #e0e0e0;
    height: 12px;
    width: 70%;
    margin-bottom: 8px;
    border-radius: 4px;
  }
  
  .loading-card-description {
    background-color: #e0e0e0;
    height: 10px;
    width: 90%;
    border-radius: 4px;
  }
  
  </style>
  