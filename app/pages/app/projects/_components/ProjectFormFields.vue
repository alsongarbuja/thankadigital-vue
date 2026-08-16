<script setup lang="ts">
import { ref } from "vue";
import type { IProjectScheme } from "~~/types/project";

const form = defineModel<IProjectScheme>({ required: true });

const statusOptions: { value: IProjectScheme["status"]; label: string }[] = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "archieved", label: "Archived" },
];

const tagInput = ref("");
const addTag = () => {
  const value = tagInput.value.trim().replace(/,$/, "");
  if (value && !form.value.tags.includes(value)) {
    form.value.tags.push(value);
  }
  tagInput.value = "";
};
const removeTag = (index: number) => {
  form.value.tags.splice(index, 1);
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <InputField
      name="name"
      v-model="form.name"
      label="Project Name"
      placeholder="e.g. Adversary AI"
    />
    <InputField
      name=""
      v-model="form.slug"
      label="Slug"
      placeholder="adversary-ai"
    />
    <InputField
      name="thumbnail"
      v-model="form.thumbnail"
      label="Thumbnail URL"
      placeholder="/project-ai.jpg"
    />

    <InputField
      name="liveLink"
      :model-value="form.liveLink ?? ''"
      @update:model-value="form.liveLink = $event || null"
      label="Live Link"
      placeholder="https://..."
    />
    <InputField
      name="githubLink"
      :model-value="form.githubLink ?? ''"
      @update:model-value="form.githubLink = $event || null"
      label="GitHub Link"
      placeholder="https://github.com/..."
    />

    <!-- Status -->
    <div class="flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Status
      </label>
      <div class="flex items-center gap-1 p-1 rounded-xl bg-black/[0.03] w-fit">
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

    <!-- Tags -->
    <div class="md:col-span-2 lg:col-span-3 flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Tags
      </label>
      <div
        class="flex flex-wrap items-center gap-2 bg-black/[0.03] rounded-xl px-3 py-2.5 focus-within:bg-primary-blue/5 focus-within:ring-2 focus-within:ring-primary-blue/20 transition-all duration-300"
      >
        <span
          v-for="(tag, index) in form.tags"
          :key="tag"
          class="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full bg-white text-xs font-semibold text-black/70 shadow-sm shadow-black/5"
        >
          {{ tag }}
          <button
            type="button"
            @click="removeTag(index)"
            class="w-4 h-4 rounded-full flex items-center justify-center text-black/30 hover:text-white hover:bg-primary-red transition-colors duration-300 cursor-pointer"
          >
            &times;
          </button>
        </span>
        <input
          v-model="tagInput"
          type="text"
          placeholder="Type a tag and press Enter"
          class="flex-1 min-w-[140px] bg-transparent text-sm outline-none placeholder:text-black/30 px-1 py-1"
          @keydown.enter.prevent="addTag"
          @keydown.,.prevent="addTag"
        />
      </div>
    </div>

    <!-- Summary -->
    <div class="md:col-span-2 lg:col-span-3 flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Summary
      </label>
      <textarea
        v-model="form.summary"
        rows="2"
        placeholder="One or two sentences shown on the project card."
        class="bg-black/[0.03] rounded-xl px-4 py-3.5 text-sm outline-none focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300 resize-none"
      ></textarea>
    </div>

    <!-- Details -->
    <div class="md:col-span-2 lg:col-span-3 flex flex-col gap-1.5">
      <label
        class="text-xs font-semibold uppercase tracking-wide text-black/40 px-1"
      >
        Details
      </label>
      <textarea
        v-model="form.details"
        rows="8"
        placeholder="Full case study write-up shown on the project detail page."
        class="bg-black/[0.03] rounded-xl px-4 py-3.5 text-sm leading-relaxed outline-none focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300 resize-none"
      ></textarea>
    </div>

    <!-- Showcase toggle -->
    <div
      class="md:col-span-2 lg:col-span-3 flex items-center justify-between gap-4 rounded-xl bg-black/[0.03] px-5 py-4"
    >
      <div>
        <p class="text-sm font-bold text-black">Showcase on Homepage</p>
        <p class="text-xs text-black/40 mt-0.5">
          Featured projects appear in the homepage Projects section.
        </p>
      </div>
      <button
        type="button"
        role="switch"
        :aria-checked="form.isShowcase"
        @click="form.isShowcase = !form.isShowcase"
        class="relative w-11 h-6 rounded-full shrink-0 transition-colors duration-300 cursor-pointer"
        :class="form.isShowcase ? 'bg-primary-blue' : 'bg-black/15'"
      >
        <span
          class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300"
          :class="form.isShowcase ? 'translate-x-5' : 'translate-x-0'"
        ></span>
      </button>
    </div>
  </div>
</template>
