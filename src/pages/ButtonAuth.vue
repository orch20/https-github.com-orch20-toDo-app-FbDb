<template>
     <button class="w-100 btn btn-lg btn-primary bn39" type="submit"><span class="bn39span"><slot></slot></span></button>
</template>

<!-- <a class="bn39" href="/"><span class="bn39span">Button</span></a> -->

<style scoped>
.bn39 {
  background-image: linear-gradient(135deg, #008aff, #86d472);
  border-radius: 6px;
  box-sizing: border-box;
  color: #6c757d;
  display: block;
  height: 50px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
}

.bn39:hover {
  color: #fff;
}

.bn39 .bn39span {
  align-items: center;
  background: #e4e4e5bb;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.bn39:hover .bn39span {
  background: transparent;
}
</style>