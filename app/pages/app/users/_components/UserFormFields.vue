<script setup lang="ts">
import type { ITeamScheme } from "~~/types/team";
import type { IUserScheme } from "~~/types/user";

const form = defineModel<Omit<IUserScheme, "_id">>({ required: true });

const { data: teams, pending: teamsPending } = await useFetch<ITeamScheme[]>(
  "/api/teams",
  { default: () => [] },
);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <InputField
      name="name"
      v-model="form.name"
      label="Full Name"
      placeholder="e.g. Alson Garbuja"
    />
    <InputField
      name="email"
      v-model="form.email"
      label="Email"
      type="email"
      placeholder="name@thankadigital.com"
    />
    <div class="flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Team
      </label>
      <div class="relative">
        <select
          v-model="form.teamId"
          :disabled="teamsPending || teams.length === 0"
          class="w-full appearance-none bg-black/3 rounded-xl pl-4 pr-10 py-3.5 text-sm outline-none focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <option value="" disabled>
            {{
              teamsPending
                ? "Loading teams..."
                : teams.length === 0
                  ? "No teams available"
                  : "Select a team"
            }}
          </option>
          <option v-for="team in teams" :key="team._id" :value="team._id">
            {{ team.name }}
          </option>
        </select>
        <span
          class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-black/30"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
    </div>

    <InputField
      name="passPin"
      v-model="form.passPin"
      label="PIN"
      type="password"
      inputmode="numeric"
      placeholder="Enter a PIN"
    />

    <!-- Avatar URL with live preview -->
    <div class="md:col-span-2 lg:col-span-2 flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Avatar URL
      </label>
      <div class="flex items-center gap-3">
        <div
          class="w-11 h-11 rounded-full bg-black/4 overflow-hidden shrink-0 flex items-center justify-center"
        >
          <img
            v-if="form.avatarUrl"
            :src="form.avatarUrl"
            alt=""
            class="w-full h-full object-cover"
          />
          <svg
            v-else
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-black/25"
          >
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
          </svg>
        </div>
        <input
          v-model="form.avatarUrl"
          type="text"
          placeholder="https://..."
          class="flex-1 bg-black/3 rounded-xl px-4 py-3.5 text-sm outline-none focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300"
        />
      </div>
    </div>

    <!-- Loggable toggle -->
    <div
      class="md:col-span-2 lg:col-span-3 flex items-center justify-between gap-4 rounded-xl bg-black/3 px-5 py-4"
    >
      <div>
        <p class="text-sm font-bold text-black">Allow Login</p>
        <p class="text-xs text-black/40 mt-0.5">
          When off, this user can't sign in even with a correct PIN.
        </p>
      </div>
      <button
        type="button"
        role="switch"
        :aria-checked="form.isLoggable"
        @click="form.isLoggable = !form.isLoggable"
        class="relative w-11 h-6 rounded-full shrink-0 transition-colors duration-300 cursor-pointer"
        :class="form.isLoggable ? 'bg-primary-blue' : 'bg-black/15'"
      >
        <span
          class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300"
          :class="form.isLoggable ? 'translate-x-5' : 'translate-x-0'"
        ></span>
      </button>
    </div>
  </div>
</template>
