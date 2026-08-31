<script setup lang="ts">
import type { ITeamScheme } from "~~/types/team";

const form = defineModel<ITeamScheme>({ required: true });
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <InputField
      name="name"
      v-model="form.name"
      label="Team name"
      placeholder="e.g. Web developer"
    />
    <InputField
      name="description"
      v-model="form.description!"
      label="Description"
      placeholder=""
    />
  </div>
</template>
