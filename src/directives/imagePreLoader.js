export default {
    beforeMount(el, binding) {
      const img = new Image();  
      img.src = binding.value;
  
      img.onload = function () {
        el.src = binding.value;
        el.classList.add('fade-in-animation');
      };
    }
  };