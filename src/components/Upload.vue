<template>
  <section>
    <o-field>
      <o-upload v-model="dropFiles" multiple variant="info" expanded drag-drop>
        <section class="ex-center">
          <p>
            <o-icon icon="upload" size="is-large"> </o-icon>
          </p>
          <p>Drop your files here or click to upload</p>
        </section>
      </o-upload>
    </o-field>

    <div class="tags">
      <span v-for="(file, index) in dropFiles" :key="index">
        {{ file.name }}
        <o-button
          icon-left="times"
          size="small"
          native-type="button"
          @click="deleteDropFile(index)">
        </o-button>
      </span>
    </div>

    <o-field class="file">
      <o-upload v-model="file">
        <o-button tag="a" variant="primary">
          <o-icon icon="upload"></o-icon>
          <span>Click to upload</span>
        </o-button>
      </o-upload>
      <span v-if="file" class="file-name">
        {{ file.name }}
      </span>
    </o-field>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      dropFiles: [] as File[],
      file: null as File | null,
    };
  },
  methods: {
    deleteDropFile(index: number) {
      this.dropFiles.splice(index, 1);
    },
  },
});
</script>

<style lang="css" scoped></style>
