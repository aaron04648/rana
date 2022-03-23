<template>

  <div id="UserCategories" >
    <div class="content">
      <div id="exerciselist">
        <h1>Deine Kategorien</h1>
        <ul
          v-for="categorie in categories"
          :key="categorie.id"
          class="list-group list-group-flush"
        >
          <li class="list-group-item" style="margin-bottom: 2%">
            {{ categorie.name }}
            <span class="inputs">
              <input type="checkbox" name="" id="" />
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

        <form id="AddFrom">
          <div class="form-group"></div>
          <div class="form-group">
            <center>
              <input
                type="text"
                v-model="new_category"
                v-on:keyup.enter="addCategorie"
                class="form-control"
                id="input_NameCat"
                placeholder="Name der Kategorie..."
                style="width: auto"
              />
            </center>
          </div>
          <div class="form-check"></div>
          <button
            class="btn btn-outline-secondary"
            @click.prevent="addCategorie"
          >
            Kategorie hinzufügen
          </button>
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
  },
  
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
.dark-mode {
  background-color: #363940;
  color: white;
}
.dark-mode .list-group-item {
  background: #363940;
}
.dark-mode .topnav{
  background: #212226;
  color: white;
}
.dark-mode #searchbar{
  background-color: #363940;
  color: white;
}
.dark-mode .sidebar{
  background: #212226;
  color: white;
}
.dark-mode .SideElements{
  color: white;
}
.dark-mode .sidebar a{
  color: white;
}
.dark-mode .btn{
  background-color: #9966ff;
  color: white;
}
.dark-mode .btn:hover{
  background-color: #7733ff;
}
</style>