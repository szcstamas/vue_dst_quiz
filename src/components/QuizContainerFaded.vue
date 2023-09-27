<template>
  <form @submit.prevent>
    <h4>{{ headlineOfContainer }}</h4>
    <label
      v-for="value in actualObjectOfOptions"
      class="form-control"
      @click="$emit('chooseOptionFunction')"
    >
      <input type="radio" v-model="choosenInput" :value="value" name="radio" />
      {{ value }}
    </label>
    <input
      type="submit"
      :disabled="!isOptionChoosen"
      :class="{ disabled: !isOptionChoosen }"
      @click="$emit('nextQuestionFunction')"
      value="Next question"
    />
  </form>
</template>

<script>
export default {
  props: {
    headlineOfContainer: {
      type: String,
      required: true,
    },
    actualObjectOfOptions: {
      type: Object,
      required: true,
    },
    choosenInput,
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 500px;
  margin: auto;

  h4 {
    font-size: 2rem;
    text-align: center;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-right: auto;
    cursor: pointer;

    font-size: 18px;

    input[type="radio"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      margin: 0;
      font: inherit;
      width: 2em;
      height: 2em;
      border: 0.25em solid #343434;
      border-radius: 50%;

      display: grid;
      place-content: center;
      cursor: pointer;

      &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em purple;
      }

      &:checked::before {
        transform: scale(1);
      }
    }
  }

  input[type="submit"].disabled {
    opacity: 50%;
    cursor: not-allowed;
  }

  input[type="submit"] {
    appearance: none;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    background-color: #343434;
    padding: 1rem 2rem;
    border-radius: 10px;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
  }
}
</style>
