<script lang="ts" setup>
const route = useRoute();

const handleDropdownClick = () => {
  // Manually close the dropdown
  const dropdown = document.querySelector('.navbar-collapse.show');
  if (dropdown) {
    dropdown.classList.remove('show');
  }
};
</script>
<template>
  <nav
    class="navbar navbar-expand-lg bg-white container mb-8 mb-md-0"
    style="height: 90px; z-index: 1"
  >
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img src="../assets/logo.png" class="logo" alt="" />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse p-3" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li
            class="nav-item"
            :class="route.path === '/' ? 'border-b active' : ''"
          >
            <NuxtLink
              class="nav-link"
              :class="route.path === '/' ? ' active' : ''"
              to="/" @click="handleDropdownClick"
              >Home</NuxtLink
            >
          </li>
          <li
            class="nav-item"
            :class="route.path.includes('/users') ? 'border-b active' : ''"
          >
            <NuxtLink
              to="/users"
              class="nav-link" @click="handleDropdownClick"
              :class="route.path.includes('/users') ? 'active' : ''"
              >Users</NuxtLink
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-link {
  font-size: 18px;
  font-weight: medium;
  &.active {
    font-weight: bold;
    border-width: 3px !important;
    color: #4169e2 !important;
    border-color: #4169e2 !important;
  }
}

.logo {
  max-width: 12.2rem;
}

@media only screen and (max-width: 600px) {
  .navbar {
    margin-top: -30px;
  }
}

.navbar-collapse {
  background-color: #fff !important; 
//   border: none; 
}
</style>
