<template>
    <div class="spin"></div>
</template>
  
  <style>
  .spin {
      border: 3px solid transparent;
      border-top-color: #ecf002;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 30px auto 0;
      text-align: center;
      animation: spin 1s ease infinite;
      color: white;
  }
  @keyframes spin {
      to {transform: rotateZ(360deg);}
  }
  </style>