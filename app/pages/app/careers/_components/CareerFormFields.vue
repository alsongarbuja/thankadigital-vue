<script setup lang="ts">
import type { ICareerScheme } from "~~/types/career";

const form = defineModel<ICareerScheme>({ required: true });

const typeOptions: { value: ICareerScheme["type"]; label: string }[] = [
  { value: "on-site", label: "On-Site" },
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
];

const statusOptions: { value: ICareerScheme["status"]; label: string }[] = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "archieved", label: "Archived" },
];

const addRequirement = () => form.value.requirements.push("");
const removeRequirement = (index: number) =>
  form.value.requirements.splice(index, 1);

const addResponsibility = () => form.value.responsibilities.push("");
const removeResponsibility = (index: number) =>
  form.value.responsibilities.splice(index, 1);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <InputField
      name="title"
      v-model="form.title"
      label="Job Title"
      placeholder="e.g. Senior Systems Architect"
    />
    <InputField
      name="experience"
      v-model="form.experience"
      label="Experience"
      placeholder="e.g. 5+ Years"
    />

    <!-- Type -->
    <div class="flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Type
      </label>
      <div class="flex items-center gap-1 p-1 rounded-xl bg-black/3 w-fit">
        <button
          v-for="option in typeOptions"
          :key="option.value"
          type="button"
          @click="form.type = option.value"
          class="px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer"
          :class="
            form.type === option.value
              ? 'bg-primary-blue text-white shadow-sm'
              : 'text-black/50 hover:text-black'
          "
        >
          {{ option.label }}
        </button>
      </div>
    </div>

    <InputField
      name="salary_min"
      :model-value="String(form.salary_min || '')"
      @update:model-value="form.salary_min = Number($event) || 0"
      label="Salary Min"
      placeholder="140000"
      type="number"
      inputmode="numeric"
    />
    <InputField
      name="salary_max"
      :model-value="String(form.salary_max || '')"
      @update:model-value="form.salary_max = Number($event) || 0"
      label="Salary Max"
      placeholder="180000"
      type="number"
      inputmode="numeric"
    />

    <!-- Status -->
    <div class="flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Status
      </label>
      <div class="flex items-center gap-1 p-1 rounded-xl bg-black/3 w-fit">
        <button
          v-for="option in statusOptions"
          :key="option.value"
          type="button"
          @click="form.status = option.value"
          class="px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer"
          :class="
            form.status === option.value
              ? 'bg-primary-blue text-white shadow-sm'
              : 'text-black/50 hover:text-black'
          "
        >
          {{ option.label }}
        </button>
      </div>
    </div>

    <!-- Requirements -->
    <div class="md:col-span-2 lg:col-span-3 flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Requirements
      </label>
      <div class="flex flex-col gap-2">
        <div
          v-for="(requirement, index) in form.requirements"
          :key="index"
          class="flex items-center gap-2"
        >
          <input
            v-model="form.requirements[index]"
            type="text"
            placeholder="e.g. Nuxt 3 Expert"
            class="flex-1 bg-black/3 rounded-xl px-4 py-3 text-sm outline-none focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300"
          />
          <button
            type="button"
            @click="removeRequirement(index)"
            class="w-9 h-9 rounded-lg flex items-center justify-center text-black/30 hover:text-white hover:bg-primary-red transition-colors duration-300 shrink-0 cursor-pointer"
          >
            &times;
          </button>
        </div>
      </div>
      <button
        type="button"
        @click="addRequirement"
        class="mt-1 inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-full text-xs font-semibold text-primary-blue bg-primary-blue/5 hover:bg-primary-blue/10 transition-colors duration-300 cursor-pointer"
      >
        + Add Requirement
      </button>
    </div>

    <!-- Responsibilities -->
    <div class="md:col-span-2 lg:col-span-3 flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Responsibilities
      </label>
      <div class="flex flex-col gap-2">
        <div
          v-for="(responsibility, index) in form.responsibilities"
          :key="index"
          class="flex items-center gap-2"
        >
          <input
            v-model="form.responsibilities[index]"
            type="text"
            placeholder="e.g. Lead engineering sprints"
            class="flex-1 bg-black/3 rounded-xl px-4 py-3 text-sm outline-none focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300"
          />
          <button
            type="button"
            @click="removeResponsibility(index)"
            class="w-9 h-9 rounded-lg flex items-center justify-center text-black/30 hover:text-white hover:bg-primary-red transition-colors duration-300 shrink-0 cursor-pointer"
          >
            &times;
          </button>
        </div>
      </div>
      <button
        type="button"
        @click="addResponsibility"
        class="mt-1 inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-full text-xs font-semibold text-primary-blue bg-primary-blue/5 hover:bg-primary-blue/10 transition-colors duration-300 cursor-pointer"
      >
        + Add Responsibility
      </button>
    </div>
  </div>
</template>
