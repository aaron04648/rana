<template>
      <!--Class Root for darmode-->

  <div id="root"> 
    <div class="topnav">
      
      
      
      <!--Darkmode Button-->
            <!--class btn is bootstrap-->
  <div id="topnav_elements">
    <button
        class="btn btn-outline-secondary"
        id="Btn_Darkmode"
        @click="Darkmode"
      >
        Darkmode
      </button>

      <!--Searchbox to filter in categories-->
      <input id="searchbar" v-model="search_text" @keyup.enter="test_function()" type="text" placeholder="Suche Kategorie">
  </div>
      

    </div>

    <!--SideBar (Router in Progress)-->
    <div class="sidebar">
      <router-link class="SideElements" onclick="return false;" to="/"
        >💻 Verwalten |
      </router-link>
      <router-view/>
      <div
        class="SideElements"
        v-for="categorie in all_categories"
        :key="categorie.id"
      >
        <router-link to="/test" onclick="return false;">{{
          categorie.name
        }}</router-link>
      </div>
    </div>


    <!--emit function-->
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
// import and export components
export default {
  name: "App",
  components: {
    UserCategories,
  },




  data() {
    return {
      search_text: "",
      //array to save all categories
      all_categories: [
        //isChecked is in progress
        {
          //'name' is the name of categorie 
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
    //Filter for search box (in Progress)
   filtered_students() {

			if (this.search_text) {
				
				// Set new empty array as local variable
				var filtered_students = [];

				// Add into new array if condition is set
				this.all_categories.forEach(element => {
					if (
						element.name.toLowerCase().includes(this.search_text)
						) {
						
						filtered_students.push(element);

					}
				});

				return filtered_students;
			}
			else {

				return this.students;

			}
  },


  methods: {
    test_function: function test_function(){
      window.alert(this.search_text)
    },
    //function to add Categories
    addCategorie: function addCategorie(category) {
      console.log(category);
      //check if the array is empty
      if (this.all_categories.length == 0) {
        //if empty id = 0
        let new_id = 0;
        //if category exists
        if (category) {
          // add attributes to elements and push it in array
          this.all_categories.push({
            id: new_id,
            name: "🧍 " + category,
            category,
          });
        }
      } else {
        //if array isnt empty id +1
        let new_id = this.all_categories.slice(-1)[0].id + 1;
        if (category) {
          // add attributes to elements and push it in array
          this.all_categories.push({
            id: new_id,
            name: "🧍 " + category,
            category,
          });
        }
      }
    },



    //function 
    removeCategory(id) {
     
        this.all_categories = this.all_categories.filter((category) => {
        return category.id != id;
      });
      
      
    },




    Darkmode() {
      var element = document.getElementById("root");
      element.classList.toggle("dark-mode");
    },
  },
}
}
</script>

<style>
#Btn_Darkmode{
 position: relative;
  margin-left: 80%;
  margin-top:10px ; 
}
 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;

  height: 100%;
  overflow: auto;
}

.sidebar router-link {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.sidebar router-link.active {
  background-color: #f2a38a;
  color: white;
}

.sidebar router-link:hover:not(.active) {
  background-color: #555;
  color: white;
  cursor: pointer;
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
  .sidebar router-link {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar router-link {
    text-align: center;
    float: none;
  }
}
#searchbar{
  border-radius: 5px;
  border-color: black;
  position: relative;
}
.topnav {
  position: relative;
  width: 100%;
  height: 20%;
}
.dark-mode {
  background-color: #363940;
  color: white;
}
.dark-mode .list-group-item {
  background: #363940;
}
.dark-mode .topnav {
  background: #212226;
  color: white;
}
.dark-mode #searchbar {
  background-color: #6c3fac;
  color: white;
}
.dark-mode #searchbar::placeholder {
  color: white;
}
.dark-mode .sidebar {
  background: #212226;
  color: white;
}
.dark-mode .SideElements {
  color: white;
}
.dark-mode .sidebar router-link {
  color: white;
}
.dark-mode .btn {
  background-color: #6c3fac;
  color: white;
  border-color: black;
}
.dark-mode .btn-outline-secondary {
  background-color: #6c3fac;
}


</style>
