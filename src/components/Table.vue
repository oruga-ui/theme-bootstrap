<template>
  <o-field grouped group-multiline>
    <o-switch v-model="isBordered" :rounded="true">Bordered</o-switch>
    <o-switch v-model="isStriped" :rounded="false">Striped</o-switch>
    <o-switch v-model="isNarrowed" :rounded="true">Narrowed</o-switch>
    <o-switch v-model="isHoverable" :rounded="true">Hoverable</o-switch>
    <o-switch v-model="isFocusable" :rounded="true">Focusable</o-switch>
    <o-switch v-model="isLoading" :rounded="true">Loading state</o-switch>
    <o-switch v-model="isEmpty" :rounded="true">Empty</o-switch>
    <o-switch v-model="hasMobileCards" :rounded="true"
      >Mobile cards <small>(collapsed rows)</small></o-switch
    >
  </o-field>

  <o-table
    v-model:current-page="currentPage"
    v-model:checked-rows="checkedRows"
    :paginated="isPaginated"
    :per-page="perPage"
    :pagination-simple="isPaginationSimple"
    :pagination-position="paginationPosition"
    :data="isEmpty ? [] : dataTable"
    :bordered="isBordered"
    :striped="isStriped"
    :narrowed="isNarrowed"
    :hoverable="isHoverable"
    :loading="isLoading"
    :focusable="isFocusable"
    :mobile-cards="hasMobileCards"
    checkable
    detailed>
    <o-table-column
      v-slot="props"
      field="id"
      label="ID"
      width="40"
      sortable
      position="right">
      {{ props.row.id }}
    </o-table-column>

    <o-table-column
      v-slot="props"
      field="first_name"
      label="First Name"
      sortable>
      {{ props.row.first_name }}
    </o-table-column>

    <o-table-column v-slot="props" field="last_name" label="Last Name" sortable>
      {{ props.row.last_name }}
    </o-table-column>

    <o-table-column
      v-slot="props"
      field="date"
      label="Date"
      position="centered">
      {{ new Date(props.row.date).toLocaleDateString() }}
    </o-table-column>

    <o-table-column v-slot="props" label="Gender">
      <span>
        <o-icon
          pack="fas"
          :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
        </o-icon>
        {{ props.row.gender }}
      </span>
    </o-table-column>

    <template #detail="props">
      <tr>
        <td>{{ props.row.id }}</td>
        <td>{{ props.row.first_name }}</td>
        <td>{{ props.row.last_name }}</td>
        <td>{{ props.row.gender }}</td>
      </tr>
    </template>

    <!--    <template #bottom-left>
            <b>Total checked</b>: {{ checkedRows.length }}
        </template> -->
  </o-table>

  <section>
    <o-button
      variant="danger"
      :disabled="!selected"
      icon-left="times"
      @click="selected = null">
      <span>Clear selected</span>
    </o-button>
    <p>{{ selected }}</p>
    <o-table v-model:selected="selected" :data="dataTable" focusable>
      <o-table-column
        v-slot="props"
        field="id"
        label="ID"
        width="40"
        sortable
        position="right">
        {{ props.row.id }}
      </o-table-column>

      <o-table-column
        v-slot="props"
        field="first_name"
        label="First Name"
        sortable>
        {{ props.row.first_name }}
      </o-table-column>

      <o-table-column
        v-slot="props"
        field="last_name"
        label="Last Name"
        sortable>
        {{ props.row.last_name }}
      </o-table-column>

      <o-table-column
        v-slot="props"
        field="date"
        label="Date"
        position="centered">
        {{ new Date(props.row.date).toLocaleDateString() }}
      </o-table-column>

      <o-table-column v-slot="props" label="Gender">
        <span>
          <o-icon
            pack="fas"
            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
          </o-icon>
          {{ props.row.gender }}
        </span>
      </o-table-column>
    </o-table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const dataTable = [
  {
    id: 1,
    first_name: "Jesse",
    last_name: "Simmons",
    date: "2016/10/15 13:43:27",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "John",
    last_name: "Jacobs",
    date: "2016/12/15 06:00:53",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Tina",
    last_name: "Gilbert",
    date: "2016/04/26 06:26:28",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Clarence",
    last_name: "Flores",
    date: "2016/04/10 10:28:46",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Anne",
    last_name: "Lee",
    date: "2016/12/06 14:38:38",
    gender: "Female",
  },
];

export default defineComponent({
  data() {
    return {
      dataTable,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,

      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      currentPage: 1,
      perPage: 3,

      checkedRows: [],
      selected: null,
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true,
        },
        {
          field: "first_name",
          label: "First Name",
        },
        {
          field: "last_name",
          label: "Last Name",
        },
        {
          field: "date",
          label: "Date",
          // position: 'centered'
        },
        {
          field: "gender",
          label: "Gender",
          position: "left",
        },
      ],
    };
  },
});
</script>
