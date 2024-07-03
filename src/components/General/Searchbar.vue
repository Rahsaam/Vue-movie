<template>
  <div class="sm:flex hidden">
    <div class="search-container w-full">
      <i class="fa-solid fa-magnifying-glass search-icon text-white text-2xl"></i>
      <input
        class="search-input border-2 border-yellow-900 rounded-xl outline-none bg-black md:w-full text-white p-2 placeholder:italic"
        placeholder="Search movie..."
        type="text"
        aria-label="Search"
        name="searchMovie"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.search-container {
  position: relative;
  display: inline-block;
}

.search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.search-input {
  padding-left: 50px;
}
</style>
