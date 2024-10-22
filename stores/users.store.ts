import { defineStore } from "pinia";
import type { IUser } from "~/types";

interface State {
  users?: IUser[];
  isLoading: boolean;
}

export const useUserStore = defineStore("users", {
  state: (): State => ({
    users: undefined,
    isLoading: false,
  }),

  actions: {
    async getAllUsers() {
      const { $axios } = useNuxtApp();
      this.isLoading = true;
      try {
        const response = await $axios.get("/users");
        this.users = response.data;
      } catch {
        useToastify("An error occurred while trying to fetch users!", {
          autoClose: 1000,
          type: "error",
        });
      } finally {
        this.isLoading = false;
      }
    },

    async getSingleUser(id: string) {
      const { $axios } = useNuxtApp();
      this.isLoading = true;
      try {
        const response = await $axios.get(`/users/${id}`);
        return response.data;
      } catch {
        useToastify("Could not fetch user with the provided ID!", {
          autoClose: 1000,
          type: "error",
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
});
