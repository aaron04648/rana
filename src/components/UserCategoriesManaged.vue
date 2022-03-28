<template>
  <li style="list-style:none;">
    <a @click="removeCategory(id)">🗑️</a>
  </li>
</template>

<script>
export default {
  name: "TodoCategoryList",

  data() {
    return {
      edit_category_id: 0,
      edit_category: "",
      test:0,
    };
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  methods: {
    removeCategory(id) {
      // Emit event
      console.log(id)
      this.$emit("remove-category", id /*, this.edit_category*/);
      
    },
  },
};
</script>
