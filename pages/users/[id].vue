<script lang="ts" setup>
import { useUserStore } from "~/stores/users.store";
import type { IUser } from "~/types";

definePageMeta({
  title: "User Details",
});

const route = useRoute();

const user = ref<IUser>();

const userStore = useUserStore();

function getInitials(user?: IUser) {
  if (!user) {
    return " ";
  }
  const firstName = user.name.split(" ")[0];
  const lastName = user.name.split(" ")[1];
  return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
}

onMounted(async () => {
  user.value = await userStore.getSingleUser(route.params.id as string);
});
</script>
<template>
  <div class="mb-16">
    <div class="banner"></div>
    <v-container>
      <div class="card-container shadow rounded-xl" rounded="xl">
        <div class="p-5" v-if="userStore.isLoading">
          <v-skeleton-loader type="card"></v-skeleton-loader>
          <v-skeleton-loader type="table"></v-skeleton-loader>
        </div>
        <div v-else-if="user">
          <div class="d-flex justify-center avatar-container">
            <div class="avatar shadow d-flex justify-center align-center">
              <span class="text-h3 font-weight-bold">{{
                getInitials(user)
              }}</span>
            </div>
          </div>

          <div
            class="pa-6 mt-6 d-flex flex-column align-center justify-center mt-8"
          >
            <h1 style="font-size: 48px">{{ user?.name }}</h1>
            <p>
              {{ user?.address.suite }}, {{ user?.address.street }},
              {{ user?.address.city }}, {{ user?.address.zipcode }} ({{
                user?.address.geo.lng
              }}, {{ user?.address.geo.lat }})
            </p>
          </div>
          <v-container class="pb-16">
            <v-row class="justify-center justify-content-center">
              <v-col cols="6">
                <h3 class="font-weight-medium text-decoration-underline">
                  Personal Information
                </h3>
              </v-col>
            </v-row>
            <v-row class="justify-center justify-content-center">
              <v-col cols="12" sm="3">
                <p>
                  <v-icon color="blue" icon="mdi-email"></v-icon>
                  {{ user?.email }}
                </p>
              </v-col>
              <v-col cols="12" sm="3">
                <p>
                  <v-icon color="blue" icon="mdi-phone"></v-icon>
                  {{ user?.phone }}
                </p>
              </v-col>
            </v-row>
            <v-row class="justify-center">
              <v-col cols="12" sm="3">
                <p>
                  <v-icon color="blue" icon="mdi-earth"></v-icon>
                  <a :href="`https://${user?.website}`" target="_blank">{{
                    user?.website
                  }}</a>
                </p>
              </v-col>
              <v-col cols="12" sm="3">
                <p class="text-lowercase">
                  <v-icon color="blue" icon="mdi-at"></v-icon>
                  {{ user?.username }}
                </p>
              </v-col>
            </v-row>

            <v-row class="justify-center justify-content-center mt-12">
              <v-col cols="6">
                <h3 class="font-weight-medium text-decoration-underline">
                  Company Information
                </h3>
              </v-col>
            </v-row>
            <v-row class="justify-center justify-content-center">
              <v-col cols="6">
                <p>
                  <v-icon color="blue" icon="mdi-domain"></v-icon>
                  {{ user?.company.name }}
                </p>
              </v-col>
            </v-row>
            <v-row class="justify-center justify-content-center">
              <v-col cols="12" sm="3">
                <p>
                  <v-icon color="blue" icon="mdi-wrench-outline"></v-icon>
                  {{ user?.company.catchPhrase }}
                </p>
              </v-col>

              <v-col cols="12" sm="3">
                <p>
                  <v-icon color="blue" icon="mdi-progress-wrench"></v-icon>
                  {{ user?.company.bs }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <div v-else class="p-5">
          <v-alert type="error" dismissible>No User found with the specified ID</v-alert>

          <v-btn to="/" color="primary" class="mt-16 text-capitalize" size="large">Back to Home Page</v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.shadow {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.card-container {
  margin-top: -100px;
  background: #fff;
}
.avatar-container {
  margin-top: -100px;
}

.avatar {
  margin-top: -75px;
  height: 150px;
  width: 150px;
  border-radius: 100%;
  background: #fff;
  z-index: 9999 !important;
}
.banner {
  background: url("~/assets/bg.jpg");
  height: 400px;
  background-size: cover;
}
</style>
