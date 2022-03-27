<template>
  <li style="list-style:none;">
    <a @click="removeTask(id)">🗑️</a>
     
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
    Task:{
        type:Array
    }
  },

  methods: {
    removeTask(id) {
      // Emit event
      
      this.$emit("removeTask", id );
      
    },
    addTask(id){
      console.log(id)
        this.$emit("addTask",id)
    }
  },
};
</script>

