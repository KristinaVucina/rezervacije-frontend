<template>
  <div class="flex justify-center max-h-screen h-screen">
    <Card class="self-center">
      <template #title>
        <h1>Login</h1>
      </template>
      <template #content>
        <FormKit
          id="loginForm"
          v-model="form"
          type="form"
          :submit-attrs="{
            inputClass: 'p-button p-component',
          }"
          @submit="submitHandler"
        >
          <FormKitSchema :schema="schema" :data="form" />
        </FormKit>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
});
const schema = [
  {
    $formkit: "primeInputText",
    name: "email",
    label: "Email",
    help: "This will be used for your account.",
    validation: "required|email",
  },
  {
    $formkit: "primePassword",
    name: "password",
    label: "Password",
    help: "Enter your new password.",
    validation: "required|length:8,32",
  },
];

const form = {};

const submitHandler = async () => {
  await useAuth().login(form);
  navigateTo("/");
};
</script>
  