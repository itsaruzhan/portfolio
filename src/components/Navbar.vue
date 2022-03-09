<template >
  <div >
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-st" 
     >
      <div class="container" >
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
         <img id="logo" src="data:image/png;base64,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" alt="">
        </a>
        <button
          class="navbar-toggler"
          type="button"
         
        >
         
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
                >About</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
               
                >Skills</a
              >
            </li>
            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                >Projects</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import info from "../../info";

export default {
  name: "Navbar",
  
  data() {
    return {
      navbarConfig: info.config.navbar,
    };
  },
 

};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}
.nav-link:hover{
  background-color: rgba(160, 159, 159, 0.336);
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(160, 159, 159, 0.336);
  position: fixed !important;
}

#logo{
  width: 70px;
  height: 70px;
  border-radius: 50% ;
  border: 1px solid rgb(42, 76, 128);
}
#menu{
  background-color: rgb(244, 146, 253);
}

</style>
