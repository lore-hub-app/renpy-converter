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
         <pre>{{ converted }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import plainTextDialogSingleLine from '../../../dialogs-json/1-plain-text-dialog-single-line'

export default {
  name: 'Converter',
  data () {
    return {
      selected: null,
      jsons: [
        {
          name: '1-plain-text-dialog-single-line',
          jsonValue: plainTextDialogSingleLine
        }
      ]
    }
  },
  computed: {
    converted () {
      return this.selected
    }
  },
  methods: {
    some () {
      const a = 3
      return a
    }
  }
}
</script>

<style scoped>
.json-picker{
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
