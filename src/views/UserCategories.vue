<template>
  <div id="UserCategories" >
    <div class="content">
      <div id="exerciselist">
        

        <!--  
        ●list of all array
        ●v-for to read out the array 
        -->
        <ul
          v-for="filtered_category in filtered_categories"
          :key="filtered_category.id"
          class="list-group list-group-flush"
        >
        <!--single list-->
          <li class="list-group-item" style="margin-bottom: 2%">
            <!--categorie.name put the name of the categories out-->
            {{ filtered_category.name }}
            <span class="inputs">

              <!--Checkbox for multiple delete-->
              <input type="checkbox" name="" id="" />

              <!--deletebutton for delete a separate category -->
              <span id="BtnDelete">
                <UserCategoriesManaged
                  :id="categorie.id"
                  :name="categorie.name"
                  @remove-category="removeCategory"
                />
              </span>

            </span>

          </li>

        </ul>
        <!--Form for add categories-->
        <form id="AddFrom">

          <!--Textinput-->
          <div class="form-group">
            <center>
              <!--user types name of the new category-->
              <input type="text" v-model="new_category" v-on:keyup.enter="addCategorie" class="form-control" id="input_NameCat"
                placeholder="Name der Kategorie..."
                style="width: auto"
              />

            </center>
          </div>



          <!--Submitbutton-->
          <div class="form-check"></div>
          <!--submit category. Enter is also possible-->
          <center>
             <button
            class="btn btn-outline-secondary" @click.prevent="addCategorie">
            Kategorie hinzufügen
          </button>
          </center>
         

        </form>



      </div>
    </div>
  </div>
</template>     

<script>
import UserCategoriesManaged from "../components/UserCategoriesManaged.vue";
export default {
  components: {
    UserCategoriesManaged,
  },
  data() {
    return {
      new_category: "",
    };
  },
  props: {
    categories: {
      type: Array,
    }
    
  },

  methods: {
    test: function () {
      window.alert(this.new_category);
    },
    addCategorie: function addCategorie() {
      console.log(this.new_category);
      this.$emit("addcategory", this.new_category);

      this.new_category = "";
    },
    removeCategory(id) {
      this.$emit("remove-category", id);
      console.log(id)
    },
  },computed:{
      filtered_categories() {

			if (this.search_text) {
				
				// Set new empty array as local variable
				var filtered_categories = [];

				// Add into new array if condition is set
				this.categories.forEach(element => {
					if (
						element.name.toLowerCase().includes(this.search_text)
						|| 
						element.year.toString().includes(this.search_text)
						|| 
						element.skills.toString().toLowerCase().includes(this.search_text)
						) {
						
						filtered_categories.push(element);

					}
				});

				return filtered_categories;
			}
			else {

				return this.categories;

			}
    }
  }
};
</script>

<style>
#BtnDelete:hover {
  cursor: pointer;
}
#form_add {
  position: relative;
  top: 10%;
}
#btn_addCat {
  position: relative;
  top: 25px;
  left: 45%;
}
.inputs {
  position: absolute;
  left: 90%;
}
#GymTemp {
  display: none;
}
#exerciselist {
  position: relative;
  left: 25%;
  top: 12%;
  width: 60%;
}
.list-group-item {
  text-align: left;
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
#HomeButton {
  background-color: #f2a38a;
}
#UserCategories {
  width: 100%;
  height: 100%;
  display: block;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: absolute;
  top: 0%;
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