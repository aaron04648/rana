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
    isDeleted:{
      type:Boolean,
      default:false
    }
  },

  methods: {
    removeCategory(id) {
      // Emit event
      
      this.$emit("remove-category", id, this.edit_category);
    },
  },
};
</script>
