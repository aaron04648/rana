<template>
  <div id="root">
  <div id="UserCategories">
    <div class="content">
      <div id="exerciselist">
        <h1>Deine Aufgaben von jeder Kategorie</h1>


        <ul
          v-for="(categorie,index) in categories"
          :key="categorie.id"
          class="list-group list-group-flush"
        >
        
          <li class="list-group-item" >

            <div id=categoryTitle>
              {{ categorie.name }}
            </div>
            
           
            <ul v-for="todos in categorie.todo" :key="todos.id">
              <li  id=tasklist>
                <div id=task-item>
                    {{ todos.todoname }}
                   
                    
                </div>
                
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
          <a id="addTask" @click="addTask(index,this.new_Task)">Hier hinzufügen</a> 

        </ul>
 <form id="AddFrom">
          
          <div class="form-group"></div>
          <div class="form-group">
            <center>
              <p>{{this.errormessage}}</p>
              <input
                type="text"
                v-model="new_Task"
                
                class="form-control"
                id="input_NameCat"
                placeholder="Name der Aufgabe..."
                style="width: auto"
              />
             
            </center>
          </div>
          
          
        </form>
        
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
      new_Task:"",
      which_Category:"",
      errormessage:""

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
    addTask(index,newtask){
     
      newtask
      this.$emit("addTask",index,newtask)
      this.$emit()
      this.new_Task="";
     
      
    },
    
    removeTask(){

    }
   
  }
};
</script>

<style scoped>
#root {
  height: 100%;
}
#tasklist{
  margin-bottom: 20px;
}
#categoryTitle{
  border-bottom:solid black ;
}
#addTask:hover{
cursor: pointer;
color: darkslateblue;
}

</style>