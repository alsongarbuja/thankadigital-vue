<script setup lang="ts">
import { ref } from "vue";
import MaxWidthWrapper from "~/wrappers/MaxWidthWrapper.vue";

useSeoMeta({
  title: "Thanka Digital - Careers",
  description:
    "We are always looking for passionate people to join our team. Look at the current openings and apply now",
});

const showModal = ref(false);
const activeJob = ref<ICareerScheme | null>(null);
const resumeName = ref("");
const coverLetterName = ref("");
const emailError = ref(false);

const handleFile = (event, type: "resume" | "cover") => {
  const file = event.target.files[0];
  if (file) {
    if (type === "resume") resumeName.value = file.name;
    if (type === "cover") coverLetterName.value = file.name;
  }
};

const removeFile = (type: "resume" | "cover") => {
  if (type === "resume") resumeName.value = "";
  if (type === "cover") coverLetterName.value = "";
};

const formData = ref({ name: "", email: "", phone: "" });
const errors = ref({ email: false, phone: false });

const submitApplication = () => {
  errors.value.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email);
  errors.value.phone =
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      formData.value.phone,
    );

  if (errors.value.email || errors.value.phone) return;

  // Send to API

  alert("Application data transmitted to the core.");
  showModal.value = false;
};

const openApplyModal = (job: ICareerScheme) => {
  activeJob.value = job;
  showModal.value = true;
};

const jobs = ref<ICareerScheme[]>([
  // {
  //   id: 1,
  //   title: "Senior Systems Architect",
  //   salary_min: 140000,
  //   salary_max: 180000,
  //   type: "hybrid",
  //   experience: "5+ Years",
  //   status: "published",
  //   requirements: [
  //     "Nuxt 3 Expert",
  //     "Deep Node.js Knowledge",
  //     "Experience with PostgreSQL & Redis",
  //     "Cloud Architecture (AWS/GCP)",
  //   ],
  //   responsibilities: [
  //     "Lead engineering sprints",
  //     "Design scalable microservices",
  //     "Mentor junior developers",
  //     "Code review & optimization",
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "AI Research Engineer",
  //   salary_min: 130000,
  //   salary_max: 170000,
  //   type: "remote",
  //   experience: "3+ Years",
  //   status: "published",
  //   requirements: [
  //     "Python / PyTorch Proficiency",
  //     "Strong RL/DQN Background",
  //     "Understanding of Large Scale Games",
  //     "Masters in CS or equivalent",
  //   ],
  //   responsibilities: [
  //     "Develop adaptive adversaries",
  //     "Neural network optimization",
  //     "Research paper analysis",
  //     "Implementation of RL algorithms",
  //   ],
  // },
]);

const { data: careers } = await useFetch<ICareerScheme[]>("/api/careers");
</script>

<template>
  <main class="min-h-screen pt-28 pb-24 relative">
    <MaxWidthWrapper>
      <div
        class="absolute -top-24 -right-24 w-95 h-95 rounded-full bg-primary-blue/10 blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute top-96 -left-24 w-70 h-70 rounded-full bg-primary-red/10 blur-3xl pointer-events-none"
      ></div>

      <section class="relative z-10">
        <div
          class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div
              class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
            >
              <span class="w-2 h-2 rounded-full bg-primary-red"></span>
              <span
                class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
              >
                We're Hiring
              </span>
            </div>
            <h1
              class="text-4xl md:text-6xl font-bold leading-[1.05] text-black"
            >
              Join the Architecture
              <span class="text-primary-red">.</span>
            </h1>
          </div>
          <p
            class="max-w-sm text-sm md:text-base text-black/60 leading-relaxed"
          >
            We're always looking for driven people to help us build products
            that matter.
          </p>
        </div>

        <!-- Empty state -->
        <div
          v-if="careers?.length === 0"
          class="text-center py-24 rounded-2xl bg-black/2 border border-dashed border-black/10"
        >
          <p class="text-base text-black/50 mb-3">
            No open slots at the moment.
          </p>
          <p
            class="text-xs font-semibold uppercase tracking-widest text-primary-blue"
          >
            Keep your eyes open
          </p>
        </div>

        <!-- Job list -->
        <div v-else class="flex flex-col gap-4">
          <div
            v-for="job in careers"
            :key="job.id"
            class="group rounded-2xl bg-white p-6 md:p-8 shadow-sm shadow-black/5 border border-black/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div
              class="flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <span
                    class="px-2.5 py-1 rounded-full bg-primary-red/10 text-primary-red text-[10px] font-semibold uppercase tracking-wide"
                  >
                    {{ job.type }}
                  </span>
                  <span class="text-xs text-black/40">
                    {{ job.experience }}
                  </span>
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-black">
                  {{ job.title }}
                </h3>
              </div>

              <div class="flex flex-wrap gap-x-8 gap-y-3 md:text-right">
                <div>
                  <p
                    class="text-[10px] uppercase tracking-wide text-black/40 mb-1"
                  >
                    Comp
                  </p>
                  <p class="text-sm font-bold text-black">
                    {{ job.salary_min }} - {{ job.salary_max }}
                  </p>
                </div>
                <div class="hidden lg:block">
                  <p
                    class="text-[10px] uppercase tracking-wide text-black/40 mb-1"
                  >
                    Focus
                  </p>
                  <p class="text-sm font-bold text-black">
                    {{ job.requirements[0] }}
                  </p>
                </div>
              </div>

              <button
                @click="openApplyModal(job)"
                class="group/btn inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-primary-blue shadow-sm shadow-primary-blue/20 hover:shadow-md hover:shadow-primary-blue/30 transition-all duration-300 shrink-0 w-fit cursor-pointer"
              >
                <span
                  class="text-xs font-semibold uppercase tracking-wide text-white"
                >
                  Apply
                </span>
                <span
                  class="w-7 h-7 rounded-full bg-white text-primary-blue flex items-center justify-center text-xs transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                >
                  &#8599;
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>

    <!-- Apply modal -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showModal"
        class="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6"
      >
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-sm"
          @click="showModal = false"
        ></div>

        <Transition
          appear
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-2"
          enter-to-class="opacity-100 scale-100 translate-y-0"
        >
          <div
            class="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl shadow-black/20 border border-black/5 p-8 md:p-12 max-h-[90vh] overflow-hidden"
          >
            <button
              @click="showModal = false"
              class="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/4 hover:bg-primary-red hover:text-white flex items-center justify-center text-sm transition-colors duration-300 cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>

            <div
              class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10"
            >
              <span class="w-2 h-2 rounded-full bg-primary-red"></span>
              <span
                class="text-xs font-semibold uppercase tracking-wide text-primary-blue"
              >
                Application
              </span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-black mb-1">
              Apply Now
            </h2>
            <p class="text-sm text-black/50 mb-10">
              {{ activeJob?.title }}
            </p>

            <form
              @submit.prevent="submitApplication"
              class="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <input
                v-model="formData.name"
                type="text"
                placeholder="Full Name"
                class="bg-black/3 rounded-xl px-4 py-3.5 text-sm outline-none focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20 transition-all duration-300 md:col-span-2"
                required
              />

              <div class="flex flex-col gap-1.5">
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="Email Address"
                  :class="[
                    'rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300',
                    errors.email
                      ? 'bg-primary-red/5 ring-2 ring-primary-red/30'
                      : 'bg-black/3 focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20',
                  ]"
                  required
                />
                <span v-if="errors.email" class="text-xs text-primary-red px-1">
                  Please enter a valid email
                </span>
              </div>

              <div class="flex flex-col gap-1.5">
                <input
                  v-model="formData.phone"
                  type="tel"
                  placeholder="Contact Number"
                  :class="[
                    'rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300',
                    errors.phone
                      ? 'bg-primary-red/5 ring-2 ring-primary-red/30'
                      : 'bg-black/3 focus:bg-primary-blue/5 focus:ring-2 focus:ring-primary-blue/20',
                  ]"
                  required
                />
                <span v-if="errors.phone" class="text-xs text-primary-red px-1">
                  Please enter a valid phone number
                </span>
              </div>

              <div class="md:col-span-2 mt-2">
                <label
                  class="block text-xs font-semibold uppercase tracking-wide text-black/40 mb-4"
                >
                  Attachments (PDF)
                </label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="relative">
                    <label
                      :class="[
                        'flex items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-all duration-300 h-20',
                        resumeName
                          ? 'bg-primary-blue/5 border-primary-blue/30'
                          : 'border-black/10 hover:bg-black/2 hover:border-primary-blue/20',
                      ]"
                    >
                      <span
                        class="text-sm font-medium truncate px-4"
                        :class="
                          resumeName ? 'text-primary-blue' : 'text-black/50'
                        "
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
                      type="button"
                      @click="removeFile('resume')"
                      class="absolute -top-2 -right-2 bg-primary-red text-white w-6 h-6 rounded-full text-xs flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                    >
                      &times;
                    </button>
                  </div>

                  <div class="relative">
                    <label
                      :class="[
                        'flex items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-all duration-300 h-20',
                        coverLetterName
                          ? 'bg-primary-blue/5 border-primary-blue/30'
                          : 'border-black/10 hover:bg-black/2 hover:border-primary-blue/20',
                      ]"
                    >
                      <span
                        class="text-sm font-medium truncate px-4"
                        :class="
                          coverLetterName
                            ? 'text-primary-blue'
                            : 'text-black/50'
                        "
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
                      type="button"
                      @click="removeFile('cover')"
                      class="absolute -top-2 -right-2 bg-primary-red text-white w-6 h-6 rounded-full text-xs flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                class="md:col-span-2 mt-4 py-4 rounded-full bg-primary-blue text-white text-sm font-semibold uppercase tracking-wide shadow-sm shadow-primary-blue/20 hover:shadow-md hover:shadow-primary-blue/30 hover:bg-[#2a3266] transition-all duration-300 cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>
  </main>
</template>
