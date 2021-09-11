<template>
  <div class="converter">
    <div class="row json-picker">
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option v-for="json in jsons" :key="json.name" v-bind:value="json">
          {{ json.name }}
        </option>
      </select>
    </div>
    <div class="row">
      <div class="col">
        <h3>json</h3>
        <pre>{{ selected }}</pre>
      </div>
      <div class="col">
        <h3>rpy</h3>
        <pre>{{ convert(selected.jsonValue) }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import convert from "../../lib/src/index";
import one from "../../lib/tests/jsonExamples/1-plain-text-dialog-single-line";
import two from "../../lib/tests/jsonExamples/2-plain-text-multiple-line";
import three from "../../lib/tests/jsonExamples/3-with-refs";
import four from "../../lib/tests/jsonExamples/4-with-refs-explicit-names";
import five from "../../lib/tests/jsonExamples/5-branching-dialog";

export default defineComponent({
  name: "Renpy Converter",
  data() {
    return {
      selected: {},
      jsons: [
        {
          name: "1-plain-text-dialog-single-line",
          jsonValue: one,
        },
        {
          name: "2-plain-text-multiple-line",
          jsonValue: two,
        },
        {
          name: "3-with-refs",
          jsonValue: three,
        },
        {
          name: "4-with-refs-explicit-names",
          jsonValue: four,
        },
        {
          name: "5-branching-dialog",
          jsonValue: five,
        },
      ],
    };
  },
  methods: {
    convert(data: unknown) {
      if (data == null) return;
      return convert(data);
    },
  },
});
</script>

<style>
.json-picker {
  justify-content: center;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.col {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
</style>
