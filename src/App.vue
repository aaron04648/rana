<template>
  <div id="root">
    <div class="topnav">
      
      <button style="position:absolute;" class="btn btn-outline-secondary" id="Btn_Darkmode" @click="Darkmode"> Darkmode</button> 
      <input id="searchbar" type="text" placeholder="Suche Kategorie" />
    </div>
    <div class="sidebar">
      <router-link class="SideElements
      " to="/">Verwalten</router-link> |
      <div
        class="SideElements"
        v-for="categorie in all_categories"
        :key="categorie.id"
      >
        <a href="">{{ categorie.name }}</a>
      </div>
    </div>

    <div>
      <UserCategories
        :categories="all_categories"

        @addcategory="addCategorie"
        @remove-category="removeCategory"
        id="UserCategories"
      />
    </div>
    
  </div>
</template>

<script>
import UserCategories from "./views/UserCategories.vue";
export default {
  name: "App",
  components: {
    UserCategories,
  },
  data() {
    return {
      search_text: "",
      all_categories: [
        {
          id: 4,
          name: "🏠Persönlich",
        },
        {
          id: 1,
          name: "🏫Schule",
        },
        {
          id: 2,
          name: "🏋🏾Gym",
        },
        {
          id: 3,
          name: "📎Büro",
        },
        
      ],
    };
  },
  computed: {
    filtered_students() {
      if (this.search_text) {
        // Set new empty array as local variable
        var filtered_students = [];
        // Add into new array if condition is set
        this.all_categories.forEach((element) => {
          if (
            element.name.toLowerCase().includes(this.search_text) ||
            element.year.toString().includes(this.search_text) ||
            element.skills.toString().toLowerCase().includes(this.search_text)
          ) {
            filtered_students.push(element);
          }
        });
        return filtered_students;
      } else {
        return this.all_categories;
      }
    },
  },
  methods: {
    addCategorie: function addCategorie(category) {
      console.log(category);
      if(this.all_categories.length==0){
        let new_id = 0
        if (category) {
        this.all_categories.push({
          id: new_id,
          name: "🧍 " + category,
          category,
        });
      }
      }else{
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
			this.all_categories = this.all_categories.filter(category => {
				return category.id != id;
			});
  
		},
     Darkmode() {
  var element = document.getElementById("root");
  element.classList.toggle("dark-mode");
}
  }
  }
 
</script>

<style>
#Btn_Darkmode{
position: relative;
left: 35%;
top: 15%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>