<template>
  <li style="list-style:none;">
    <a id=trash @click="removeTask(id)">🗑️</a><br>
    <a id=status @click="changestatus(id)">{{status}}</a>
    
     
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
      status:"offen"
      
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
    changestatus(){
      if(this.status=="offen"){
         this.status="erledigt"
      }
      else if(this.status=="erledigt"){
        this.status="offen"
      }
    }
    
    
  },
};
</script>
<style>

</style>

