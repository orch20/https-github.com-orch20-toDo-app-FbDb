<template>
     <button class="w-100 btn btn-lg btn-primary btn-auth" type="submit"><span class="btn-auth--span"><slot></slot></span></button>
</template>

<style scoped>
.btn-auth {
  background-image: linear-gradient(135deg, #0dcaf0, #86d472);
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

.btn-auth:hover {
  color: #fff;
}

.btn-auth .btn-auth--span {
  align-items: center;
  background: #e4e4e5bb;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.btn-auth:hover .btn-auth--span {
  background: transparent;
}
</style>