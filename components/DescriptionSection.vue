<template>
  <div class="pa-md-16 my-8 d-flex flex-column justify-center align-center container text-center">
    <p class="text-h5">Welcome to SavingsBox NuxtJs Assessment</p>
    <p class="text-md-h2 text-h4 my-6 font-weight-medium">
      You Won't regret you visit this page!
    </p>
    <p class=" fs-5">
      This simple web page has three pages: the Home page, Users page and User
      details page. You can view the users page by clicking on Users on users on
      the Navigation menu or the the users button below. On the users page you
      will see a list of users presented on a user card, click on a card to view
      the user details.
    </p>

    <NuxtLink to="/users" class="btn btn-primary font-weight-bold fs-5 px-8 py-3 mt-5">View All Users</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.text-h5 {
  color: #4169e2;
}
</style>
