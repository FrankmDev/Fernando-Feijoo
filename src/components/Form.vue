<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-light text-center mb-12">Send a Message</h2>

    <!-- Mensaje de estado -->
    <div
      v-if="statusMessage"
      :class="statusClasses"
      class="mb-6 p-4 text-center"
    >
      {{ statusMessage }}
    </div>

    <form @submit.prevent="submitForm" class="space-y-6">
      <div>
        <label
          for="name"
          class="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          :disabled="isSubmitting"
          class="w-full px-0 py-3 border-0 border-b border-black bg-transparent text-black focus:outline-none focus:border-gray-600 transition-colors duration-300 disabled:opacity-50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          for="email"
          class="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          :disabled="isSubmitting"
          class="w-full px-0 py-3 border-0 border-b border-black bg-transparent text-black focus:outline-none focus:border-gray-600 transition-colors duration-300 disabled:opacity-50"
          placeholder="Your email"
        />
      </div>

      <div>
        <label
          for="message"
          class="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide"
        >
          Message
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="6"
          required
          :disabled="isSubmitting"
          class="w-full px-0 py-3 border-0 border-b border-black bg-transparent text-black resize-none focus:outline-none focus:border-gray-600 transition-colors duration-300 disabled:opacity-50"
          placeholder="Your message"
        ></textarea>
      </div>

      <div class="text-center pt-4">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="px-8 py-3 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? "SENDING..." : "SEND MESSAGE" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";

// Estado del formulario
const form = reactive({
  name: "",
  email: "",
  message: "",
});

// Estado de la UI
const isSubmitting = ref(false);
const statusMessage = ref("");
const isSuccess = ref(false);

// Clases CSS para el mensaje de estado
const statusClasses = computed(() => ({
  "border border-green-500 bg-green-50 text-green-700": isSuccess.value,
  "border border-red-500 bg-red-50 text-red-700":
    !isSuccess.value && statusMessage.value,
}));

// Función para limpiar el formulario
const resetForm = () => {
  form.name = "";
  form.email = "";
  form.message = "";
};

// Función para mostrar mensaje temporalmente
const showMessage = (message: string, success: boolean = false) => {
  statusMessage.value = message;
  isSuccess.value = success;

  // Clear message after 5 seconds
  setTimeout(() => {
    statusMessage.value = "";
    isSuccess.value = false;
  }, 5000);
};

// Main function to submit the form
const submitForm = async () => {
  if (isSubmitting.value) return;

  try {
    isSubmitting.value = true;
    statusMessage.value = "";

    // Basic client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showMessage("All fields are required");
      return;
    }

    // Send data to endpoint
    console.log("📤 Sending form data to /api/contact");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      }),
    });

    console.log("📥 Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("📄 Response data:", result);

    if (result.success) {
      showMessage(result.message, true);
      resetForm();
    } else {
      showMessage(result.error || "Failed to send message");
    }
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    if (error instanceof Error) {
      showMessage(`Error: ${error.message}`);
    } else {
      showMessage("Connection error. Please try again.");
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
