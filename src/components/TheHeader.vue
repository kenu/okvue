<template>
  <!-- Header -->
  <section id="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Logo -->
          <h1><router-link to="/index2" id="logo">Halcyonic</router-link></h1>

          <!-- Nav -->
          <nav id="nav">
            <router-link to="/index2">Homepage!</router-link>
            <router-link to="/three_column">Three Column</router-link>
            <router-link to="/two_column1">Two Column #1</router-link>
            <router-link to="/two_column2">Two Column #2</router-link>
            <router-link to="/one_column">One Column</router-link>
          </nav>
        </div>
      </div>
    </div>
    <div id="banner">
      <div class="container">
        <div class="row">
          <div class="col-6 col-12-medium">
            <!-- Banner Copy -->
            <p>
              {{ bannerCopy }}
            </p>
            <router-link to="#" class="button-large">Go on, click me!</router-link>
          </div>
          <div class="col-6 col-12-medium imp-medium">
            <!-- Banner Image -->
            <router-link to="#" class="bordered-feature-image"
              ><img src="images/banner.jpg" alt=""
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bannerCopy: String
  },
  data_() {
    return {
      bannerCopy: `We do something really useful, important, and unique. Learn all
              about it here !!!`
    }
  }
}
</script>
