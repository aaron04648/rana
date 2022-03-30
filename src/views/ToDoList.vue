<template>
  <div id="root" @load="sendIndex(index)">
    <div id="UserCategories">
      <div class="content">
        <div id="exerciselist">
          <h1>Deine Aufgaben von jeder Kategorie</h1>
          <div class="dropdown">
            <button @click="showdropdown=!showdropdown" class="btn btn-outline-secondary">{{dropdowntext}} ↓</button>
            <div id="myDropdown" class="dropdown-content" v-if="showdropdown">
              <a @click="[this.dropdowntext='Alle',dropdownmenu()]">Alle</a>
              <a @click="[this.dropdowntext='offen',dropdownmenu()]">offen</a>
              <a @click="[this.dropdowntext='erledigt',dropdownmenu()]">erledigt</a>
            </div>
          </div>

          <ul
            v-for="(categorie, index) in categories"
            :key="categorie.id"
            class="list-group list-group-flush"
          >
            <li class="list-group-item">
              <div id="categoryTitle">
                {{ categorie.name }}
              </div>

              <ul v-for="(todos, index2) in categorie.todo" :key="todos.id">
                <li id="tasklist">
                  <div id="task-item">
                    {{ todos.todoname }}
                  </div>

                  <span class="inputs">
                    <a id="trash" @click="removeTask(index, index2)">🗑️</a>

                    <ToDoManaged
                      :id="todos.id"
                      :name="todos.name"
                      @status="sendstatus"
                    />
                  </span>
                </li>
              </ul>
            </li>
            <a id="addTask" @click="addTask(index, this.new_Task)"
              >Hier hinzufügen</a
            >
          </ul>
          <form id="AddFrom">
            <div class="form-group"></div>
            <div class="form-group">
              <center>
                <p>{{ this.errormessage }}</p>
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
  components: {
    ToDoManaged,
  },
  data() {
    return {
      new_Task: "",
      which_Category: "",
      errormessage: "",
      showdropdown:false,
      dropdowntext:"Alle"
    };
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
  methods: {
    addTask(index, newtask) {
      newtask;
      this.$emit("addTask", index, newtask);
      this.$emit();
      this.new_Task = "";
    },

    removeTask(index, index2) {
      this.$emit("removeTask", index, index2);
    },
    sendstatus(status) {
      this.$emit("status", status);
    },
    dropdownmenu(){
      this.$emit("dropdowntxt",this.dropdowntext)
    }
  },
};
</script>

<style scoped>
#root {
  height: 100%;
}
#task-item {
  width: 0%;
}
#tasklist {
  margin-bottom: 20px;
}
#categoryTitle {
  border-bottom: solid black;
}
#addTask:hover {
  cursor: pointer;
  color: darkslateblue;
}
#trash {
  position: relative;
  margin: 0%;
  right: 80%;
}
#trash:hover {
  cursor: pointer;
}
#finished {
  position: relative;
  margin: 0%;
  padding: 0%;
}

.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
 
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}


</style>