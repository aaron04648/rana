<template>
  <div id="root">
  <div id="UserCategories">
    <div class="content">
      <div id="exerciselist">
        <h1>Deine Aufgaben von jeder Kategorie</h1>
        <ul
          v-for="categorie in categories"
          :key="categorie.id"
          class="list-group list-group-flush"
        >
        



          <li class="list-group-item" style="margin-bottom: 2%">
            {{ categorie.name }}
            <form id="AddFrom">
          <div class="form-group"></div>
          <div class="form-group">
            <center>
              <input
                type="text"
                v-model="new_Task"
                v-on:keyup.enter="addTask"
                class="form-control"
                id="input_NameCat"
                placeholder="Name der Kategorie..."
                style="width: auto"
              />
              <button
            class="btn btn-outline-secondary"
            @click.prevent="addTask"
          >
            Kategorie hinzufügen
          </button>
            </center>
          </div>
          
          
        </form>
            <ul v-for="todos in categorie.todo" :key="todos.id">
              <li>
                {{ todos.todoname }}
                <span class="inputs">
                  
                  <span id="BtnDelete">
                    <ToDoManaged


                    
                    
                    @removeTask="removeTask "
                    />
                     </span>
                </span>
              </li>
            </ul>
          </li>
        </ul>

        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ToDoManaged from "../components/ToDoManaged.vue";
export default {
  components:{
    ToDoManaged
  },
  data(){
    return{
      new_Task:""
    }
  },
  props: {
    categories: {
      type: Array,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods:{
    addTask(id){
      
      this.$emit("addTask",this.new_Task)
      this.new_Task="";
      this.$emit("IdTask",id)
    },
    
    removeTask(){

    }
   
  }
};
</script>

<style>
#root {
  height: 100%;
}
</style>