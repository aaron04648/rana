<template>
 
  <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>



  <div id="root">
    <div class="topnav">
      <div>
       <UserLogin/>
         <button style="position:absolute;" class="btn btn-outline-secondary" id="Btn_Darkmode" @click="Darkmode"> Darkmode</button> 
      <input id="searchbar" v-model="search_text" type="text" placeholder="Suche Kategorie" />
      </div>

     
    </div>
    <div class="sidebar">
      <router-link class="SideElements
      " to="/">Verwalten |</router-link> 
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
        :categories="filtered_categories"

        @addcategory="addCategorie"
        @remove-category="removeCategory"
        id="UserCategories"
      />
    </div>
    
  </div>
  
</template>

<script>
import UserCategories from "./views/UserCategories.vue";
import UserLogin from "./components/UserLogin.vue";
export default {
  name: "App",
  components: {
    UserCategories, UserLogin
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
    filtered_categories() {
      if (this.search_text) {
        // Set new empty array as local variable
        var filtered_categories = [];
        // Add into new array if condition is set
        this.all_categories.forEach((element) => {
          if (
            element.name.toLowerCase().includes(this.search_text)
          ) {
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
},
Searchbox_function(){
  console.log(this.search_text)
  

}
  }
}
 
</script>

<style>

#searchbar{
  position: relative;
  margin-left: 10%;
}
#Btn_Darkmode{
position: relative;
margin-left:2%;
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