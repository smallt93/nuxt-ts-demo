<template>
  <div>
    <header
      class="navbar navbar-inverse navbar-fixed-top bs-docs-nav"
      role="banner"
    >
      <div class="d-flex justify-content-lg-between align-items-center w-100">
        <div class="navbar-header">
          <button
            class="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target=".bs-navbar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="/" class="navbar-brand">Book Menu</a>
        </div>
        <nav>
          <ul class="nav navbar-right d-flex">
            <li><nuxt-link to="/"> Home Page </nuxt-link></li>
            <li><nuxt-link to="/book"> Book List </nuxt-link></li>
            <li><nuxt-link to="/book/detail"> Book Detail </nuxt-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.navbar .nav li {
  margin: 0 10px;
}

.navbar .nav li a {
  color: #afafaf;
  transition: opacity 300ms ease;
}

.navbar .nav li a:hover {
  color: white;
}

.navbar-inverse {
  background-color: #003300;
}

.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  background-color: #002200;
}

.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  background-color: #003300;
}

.dropdown-menu {
  background-color: #006b00;
}

.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  background-color: #002200;
}

.navbar-inverse {
  background-image: none;
}

.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  background-image: none;
}

.navbar-inverse {
  border-color: #003300;
}

.navbar-inverse .navbar-brand {
  color: #ffffff;
}

.navbar-inverse .navbar-brand:hover {
  color: #ffcc00;
}

.navbar-inverse .navbar-nav > li > a {
  color: #ffffff;
}

.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #ffcc00;
}

.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #ffcc00;
}

.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #ffcc00;
}

.navbar-inverse .navbar-nav > .dropdown > a .caret {
  border-top-color: #ffffff;
}

.navbar-inverse .navbar-nav > .dropdown > a:hover .caret {
  border-top-color: #ffffff;
}

.navbar-inverse .navbar-nav > .dropdown > a .caret {
  border-bottom-color: #ffffff;
}

.navbar-inverse .navbar-nav > .dropdown > a:hover .caret {
  border-bottom-color: #ffffff;
}
</style>
