<script lang="ts" setup>
import { useUserStore } from "@/stores/users.store";

const userStore = useUserStore();

onMounted(async () => {
  await userStore.getAllUsers();
});
</script>

<template>
  <v-container class="my-16 pt-8">
    <h2 class="font-weight-mediums">All Users</h2>
    <v-row class="mt-8">
      <template v-if="userStore.isLoading && !userStore.users?.length">
        <v-col v-for="i in 12" :key="i" cols="12" sm="4">
          <v-skeleton-loader type="card" v-if="userStore.isLoading">
          </v-skeleton-loader>
        </v-col>
      </template>
      <template v-else>
        <v-col
          cols="12"
          sm="4"
          v-for="(user, index) in userStore.users"
          :key="index"
        >
          <AppUserCard :user="user" />
        </v-col>
      </template>
    </v-row>
  </v-container>

</template>
