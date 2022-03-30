<template>
  <li id="edit" style="list-style:none;">
    
    <a id=status @click.prevent="[changestatus(),emitstatus(this.status)]">{{status}}</a>
    
     
  </li>
  <ToDoList
  
  
  />
</template>

<script>
import ToDoList from "../views/ToDoList.vue";
export default {
  
  name: "TodoCategoryList",
components:{
ToDoList
},
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
    
  },

  methods: {
    removeTask(id) {
      // Emit event
      console.log(id)
      this.$emit("removeTask", id );
      
    },
    changestatus(){
      if(this.status=="offen"){
         this.status="✔️"
      }
      else if(this.status=="✔️"){
        this.status="offen"
      }
    },
    emitstatus(status){
      this.$emit("status",status)
    }
    
    
  },
};
</script>
<style>
#edit{
  margin-bottom: 10%;
}
#status:hover{
  cursor: pointer;
}
</style>

