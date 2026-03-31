<script setup lang="ts">
useSeoMeta({
  title: "Thanka Digital - Careers",
  description:
    "We are always looking for passionate people to join our team. Look at the current openings and apply now",
});

import { ref } from "vue";

const showModal = ref(false);
const activeJob = ref(null);
const resumeName = ref("");
const coverLetterName = ref("");
const emailError = ref(false);

const handleFile = (event, type) => {
  const file = event.target.files[0];
  if (file) {
    if (type === "resume") resumeName.value = file.name;
    if (type === "cover") coverLetterName.value = file.name;
  }
};

const removeFile = (type) => {
  if (type === "resume") resumeName.value = "";
  if (type === "cover") coverLetterName.value = "";
};

const formData = ref({ name: "", email: "", phone: "" });
const errors = ref({ email: false, phone: false });

const submitApplication = () => {
  // Reset errors
  errors.value.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email);
  errors.value.phone =
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      formData.value.phone,
    );

  if (errors.value.email || errors.value.phone) return;

  alert("Application data transmitted to the core.");
  showModal.value = false;
};

const openApplyModal = (job) => {
  activeJob.value = job;
  showModal.value = true;
};

const jobs = ref([
  {
    id: 1,
    title: "Senior Systems Architect",
    salary: "$140k — $180k",
    type: "Hybrid",
    experience: "5+ Years",
    requirements: [
      "Nuxt 3 Expert",
      "Deep Node.js Knowledge",
      "Experience with PostgreSQL & Redis",
      "Cloud Architecture (AWS/GCP)",
    ],
    responsibilities: [
      "Lead engineering sprints",
      "Design scalable microservices",
      "Mentor junior developers",
      "Code review & optimization",
    ],
  },
  {
    id: 2,
    title: "AI Research Engineer",
    salary: "$130k — $170k",
    type: "Remote",
    experience: "3+ Years",
    requirements: [
      "Python / PyTorch Proficiency",
      "Strong RL/DQN Background",
      "Understanding of Large Scale Games",
      "Masters in CS or equivalent",
    ],
    responsibilities: [
      "Develop adaptive adversaries",
      "Neural network optimization",
      "Research paper analysis",
      "Implementation of RL algorithms",
    ],
  },
]);
</script>

<template>
  <main
    class="bg-[#F9F9F7] min-h-screen pt-32 pb-24 px-6 md:px-16 overflow-hidden relative"
  >
    <div
      class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      style="
        background-image:
          linear-gradient(#000 1px, transparent 1px),
          linear-gradient(90deg, #000 1px, transparent 1px);
        background-size: 80px 80px;
      "
    ></div>

    <section class="relative z-10">
      <div class="mb-20">
        <h1
          class="font-black uppercase tracking-tighter leading-[0.8] text-black"
        >
          Join the
          <br />
          Architecture.
        </h1>
      </div>

      <div
        v-if="jobs.length === 0"
        class="border-t border-black/10 pt-20 flex flex-col items-center justify-center text-center"
      >
        <h2 class="font-light text-gray-300 mb-6">
          No open slots at the moment.
        </h2>
        <p class="font-mono text-xs uppercase tracking-[0.5em] text-black">
          Keep your eyes open
        </p>
      </div>

      <div v-else class="flex flex-col border-t border-black/10">
        <div
          v-for="job in jobs"
          :key="job.id"
          class="group border-b border-black/10 py-6 hover:bg-white/50 px-4 md:px-8 transition-all"
        >
          <div
            class="flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-1">
                <span
                  class="text-sm font-mono uppercase tracking-widest text-red-600"
                >
                  {{ job.type }}
                </span>
                <span class="text-sm font-mono uppercase text-gray-400">
                  / {{ job.experience }}
                </span>
              </div>
              <h3 class="font-bold uppercase tracking-tight transition-all">
                {{ job.title }}
              </h3>
            </div>

            <div class="flex flex-wrap gap-x-8 gap-y-2 md:text-right">
              <div>
                <p class="font-mono text-[10px] text-gray-400 uppercase">
                  Comp
                </p>
                <p class="text-xs font-bold uppercase">{{ job.salary }}</p>
              </div>
              <div class="hidden lg:block">
                <p class="font-mono text-[10px] text-gray-400 uppercase">
                  Focus
                </p>
                <p class="text-xs font-bold uppercase">
                  {{ job.requirements[0] }}
                </p>
              </div>
            </div>

            <button
              @click="openApplyModal(job)"
              class="px-6 py-3 bg-black text-white uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-red-600 transition-colors"
            >
              Apply ↗
            </button>
          </div>
        </div>
      </div>
    </section>

    <Transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 z-100 flex items-center justify-center p-6"
      >
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          @click="showModal = false"
        ></div>

        <div
          class="relative bg-[#F9F9F7] w-full max-w-2xl border border-black/10 p-10 md:p-16 overflow-hidden"
        >
          <div
            class="absolute inset-0 z-0 opacity-20 grain-overlay pointer-events-none"
          ></div>

          <div class="relative z-10">
            <h2 class="text-4xl font-black uppercase tracking-tighter mb-2">
              Apply //
            </h2>
            <p class="font-mono text-[10px] uppercase text-gray-400 mb-10">
              {{ activeJob?.title }}
            </p>

            <form
              @submit.prevent="submitApplication"
              class="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                placeholder="Full Name"
                class="bg-transparent border-b border-black/20 py-3 text-xs uppercase tracking-widest outline-none focus:border-black"
                required
              />
              <div class="flex flex-col">
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="Email Address"
                  :class="[
                    'bg-transparent border-b py-3 text-xs uppercase tracking-widest outline-none transition-colors',
                    errors.email
                      ? 'border-red-600'
                      : 'border-black/20 focus:border-black',
                  ]"
                  required
                />
                <span
                  v-if="errors.email"
                  class="text-sm text-red-600 uppercase font-mono mt-1 tracking-tighter"
                >
                  ! Incorrect email format
                </span>
              </div>

              <div class="flex flex-col">
                <input
                  v-model="formData.phone"
                  type="number"
                  placeholder="Contact Number"
                  :class="[
                    'bg-transparent border-b py-3 text-xs uppercase tracking-widest outline-none transition-colors',
                    errors.phone
                      ? 'border-red-600'
                      : 'border-black/20 focus:border-black',
                  ]"
                  required
                />
                <span
                  v-if="errors.phone"
                  class="text-sm text-red-600 uppercase font-mono mt-1 tracking-tighter"
                >
                  ! Invalid contact format
                </span>
              </div>

              <div class="md:col-span-2 mt-4">
                <label
                  class="block font-mono text-[10px] uppercase text-gray-400 mb-4"
                >
                  Attachments (PDF)
                </label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="relative group/file">
                    <label
                      :class="[
                        'flex items-center justify-center border border-dashed p-6 text-center cursor-pointer transition-all h-20',
                        resumeName
                          ? 'bg-black border-black text-white'
                          : 'border-black/20 hover:bg-black/5',
                      ]"
                    >
                      <span
                        class="text-sm uppercase tracking-widest truncate px-4"
                      >
                        {{ resumeName ? `✓ ${resumeName}` : "Upload Resume" }}
                      </span>
                      <input
                        v-if="!resumeName"
                        type="file"
                        class="hidden"
                        accept=".pdf"
                        @change="(e) => handleFile(e, 'resume')"
                      />
                    </label>
                    <button
                      v-if="resumeName"
                      @click="removeFile('resume')"
                      class="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      ×
                    </button>
                  </div>

                  <div class="relative group/file">
                    <label
                      :class="[
                        'flex items-center justify-center border border-dashed p-6 text-center cursor-pointer transition-all h-20',
                        coverLetterName
                          ? 'bg-black border-black text-white'
                          : 'border-black/20 hover:bg-black/5',
                      ]"
                    >
                      <span
                        class="text-sm uppercase tracking-widest truncate px-4"
                      >
                        {{
                          coverLetterName
                            ? `✓ ${coverLetterName}`
                            : "Upload Cover Letter"
                        }}
                      </span>
                      <input
                        v-if="!coverLetterName"
                        type="file"
                        class="hidden"
                        accept=".pdf"
                        @change="(e) => handleFile(e, 'cover')"
                      />
                    </label>
                    <button
                      v-if="coverLetterName"
                      @click="removeFile('cover')"
                      class="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="md:col-span-2 mt-8 py-4 bg-black text-white text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-red-600 transition-all"
              >
                Transmit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.grain-overlay {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY1jY2NDQ0N4eHh0dHR2dnZubm5vbm5nZ2dycnJzc3N4eHh0dHR2dnZ6uPjUAAAAB3RSTlMAAQIDBAUGBwgICAn3elYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAGbSURBVDjHnZZRi8MgEEbjS9S0xpWq7v//ofdrAnu9Xm8v96BwnvE6Mw56v/+p9f0fGvP7f6Xp9Xp9v99v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f59vV5v7/f7+329Xm/v9/v7/f6fXq/X6/X693v/A5iM8yN4N99uAAAAAElFTkSuQmCC");
  background-repeat: repeat;
}
</style>
