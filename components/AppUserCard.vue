<script lang="ts" setup>
import { IUser } from "~/types/index";

const props = defineProps<{
  user: IUser;
}>();
</script>
<template>
  <v-card
    class="mx-auto"
    hover
    flat
    rounded
    border
    :to="`/users/${props.user.id}`"
  >
    <v-card-item>
      <v-card-title>
        {{ props.user.name }}
        <small class="font-weight-thins text-lowercase"
          >@{{ props.user.username }}</small
        >
      </v-card-title>
      <v-card-subtitle>
        <v-icon icon="mdi-email"></v-icon> {{ props.user.email }}
      </v-card-subtitle>
      <v-card-subtitle>
        <v-icon icon="mdi-phone"></v-icon> {{ props.user.phone }}
      </v-card-subtitle>
    </v-card-item>

    <v-divider></v-divider>

    <v-card-text>
      <p class="mb-3">Address details:</p>
      <p>
        <v-icon icon="mdi-domain"></v-icon> {{ props.user.address.suite }},
        {{ props.user.address.street }}, {{ props.user.address.city }},
        {{ props.user.address.zipcode }}, {{ props.user.address.geo.lat }}
      </p>
      <p class="mt-2">
        <v-icon icon="mdi-earth"></v-icon> {{ props.user.website }}
      </p>
    </v-card-text>
  </v-card>
</template>
