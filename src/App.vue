<template>
  <div id="root" class="rootdesign">
    <div class="topnav">
      <div>
        <button
          style="position: absolute"
          class="btn btn-outline-secondary"
          id="Btn_Darkmode"
          @click="Darkmode"
        >
          {{ darkmodebtn_text }}
        </button>
        <input
          id="searchbar"
          v-model="search_text"
          type="text"
          placeholder="Suche Kategorie"
        />
      </div>
    </div>

    <div class="sidebar">
      <router-link class="SideElements" to="/"> 📝 Verwalten | </router-link>
      <div>
        <router-link to="/ToDoList">
          <a href="" onclick="return">✅ Aufgaben</a>
        </router-link>
      </div>
    </div>

    <div>
      <div id="errormessage" v-if="this.showErrordiv == true">
        <p>{{ errormessage }}</p>
      </div>

      <router-view
        :categories="filtered_categories"
        @addcategory="addCategorie"
        @remove-category="removeCategory"
        @addTask="addTask"
        @removeTask="removeTask"
      />

      <ToDoList />-->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      darkmodebtn_text: "🌙 Darkmode",
      search_text: "",
      errormessage: "",
      showErrordiv: false,
      all_categories: [
        {
          id: 4,
          name: "🏠Persönlich",
          todo: [
            {
              id: 1,
              todoname: "test",
            },
            {
              id: 2,
              todoname: "test2",
            },
          ],
        },
        {
          id: 1,
          name: "🏫Schule",
          todo: [
            {
              id: 1,
              todoname: "test",
            },
          ],
        },
        {
          id: 2,
          name: "🏋🏾Gym",
          todo: [
            {
              id: 2,
              todoname: "test",
            },
          ],
        },
        {
          id: 3,
          name: "📎Büro",
          todo: [
            {
              id: 3,
              todoname: "test",
            },
          ],
        },
      ],
    };
  },
  computed: {
    filtered_categories() {
      if (this.search_text) {
        // Set new empty array as local variable
        var filtered_categories = [];
        // Add into new array if condition is set
        this.all_categories.forEach((element) => {
          if (element.name.includes(this.search_text)) {
            filtered_categories.push(element);
          }
        });
        return filtered_categories;
      } else {
        return this.all_categories;
      }
    },
  },
  methods: {
    addCategorie: function addCategorie(category) {
      console.log(category);
      if (this.all_categories.length == 0) {
        let new_id = 0;
        if (category) {
          this.all_categories.push({
            id: new_id,
            name: "🧍 " + category,
            category,
          });
        }
      } else {
        let new_id = this.all_categories.slice(-1)[0].id + 1;
        if (category) {
          this.all_categories.push({
            id: new_id,
            name: "🧍 " + category,
            category,
          });
        }
      }
    },
    removeCategory(id) {
      this.all_categories = this.all_categories.filter((category) => {
        console.log(category);
        return category.id != id;
      });
    },
    Darkmode() {
      var element = document.getElementById("root");
      element.classList.toggle("dark-mode");
      if (this.darkmodebtn_text == "🌙 Darkmode") {
        this.darkmodebtn_text = "☀️ Lightmode";
      } else {
        this.darkmodebtn_text = "🌙 Darkmode";
      }
    },
    Searchbox_function() {
      console.log(this.search_text);
    },
    addTask(index, task) {
      console.log(task);
      console.log(this.all_categories.length);
      if (this.all_categories[index].todo.length == 0) {
        if (task != "") {
          let new_id = 0;
          this.all_categories[index].todo.push({
            id: new_id,
            todoname: task,
          });
        }else{
          if (this.errormessage == "") {
            this.showErrordiv = true;
            this.errormessage =
              "❗Geben Sie einen namen für ihre Aufgabe unten ein❗";
          }
        }
      } else {
        if (task != "") {
          let new_id = this.all_categories[index].todo.slice(-1)[0].id + 1;

          this.all_categories[index].todo.push({
            id: new_id,
            todoname: task,
          });
          this.errormessage = "";
        } else {
          if (this.errormessage == "") {
            this.showErrordiv = true;
            this.errormessage =
              "❗Geben Sie einen namen für ihre Aufgabe unten ein❗";
          }
        }
      }
    },

    removeTask(id, id2) {
      console.log(id);
      console.log(id2);
      this.all_categories[id].todo = this.all_categories[id].todo.splice(id2);
      if (id2 == 0) {
        this.all_categories[id].todo.shift();
      }
    },
  },
};
</script>

<style>
#searchbar {
  position: relative;
  margin-left: 10%;
}
#Btn_Darkmode {
  position: relative;
  margin-left: 2%;
}
#app {
  font-family: Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
.sidebar a.active {
  background-color: #f2a38a;
  color: white;
}
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
.topnav {
  width: 100%;
  overflow: auto;
  height: 56px;
  background-color: #e9e9e9;
  position: relative;
  left: 0px;
  top: 0%;
}
.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav a.active {
  background-color: #2196f3;
  color: white;
}
.topnav input[type="text"] {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  border: none;
  font-size: 17px;
}
@media screen and (max-width: 600px) {
  .topnav a,
  .topnav input[type="text"] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
}
#errormessage {
  position: relative;
  left: 10%;
}
</style>