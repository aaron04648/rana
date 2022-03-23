<template>
  <div id="root"></div>
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
            <ul v-for="todos in categorie.todo" :key="todos.id">
              <li>
                {{ todos.todoname }}
                <span class="inputs">
                  <input type="checkbox" name="" id="" />
                  <span id="BtnDelete"> </span>
                </span>
              </li>
            </ul>
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
export default {
  props: {
    categories: {
      type: Array,
    },
  },
};
</script>

<style>
#root {
  height: 100%;
}
</style>