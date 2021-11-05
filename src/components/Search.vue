<template>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      class="input"
    />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>

<style>
    .input{
        background: #FFFFFF;
        padding: 14px 16px;
        width: -webkit-fill-available;
        border: 1px solid #C4C4C4;
    }
</style>