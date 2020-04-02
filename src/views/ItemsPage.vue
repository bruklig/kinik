<template lang="pug">
v-content
  v-container.games-list
    v-data-table(
      :headers="headers"
    )
    //https://vuetifyjs.com/en/components/data-tables
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class ItemsPage extends Vue {
  private dialog = false
  private headers = [
    {
      text: 'Dessert (100g serving)',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Actions', value: 'action', sortable: false },
  ]
  private games = []
  private editedIndex = -1
  private editedItem = {
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  }
  private defaultItem = {
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  }

  public created() {
    this.games = [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
      },
    ]
  }

  get formTitle() {
    return this.editedIndex === -1 ? 'Новая игра' : 'Редактировать'
  }

  public editItem (item: any) {
    this.editedIndex = this.games.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }

  public deleteItem (item) {
    const index = this.games.indexOf(item)
    confirm('Are you sure you want to delete this item?') && this.games.splice(index, 1)
  }

  public close () {
    this.dialog = false
    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    }, 300)
  }

  public save () {
    if (this.editedIndex > -1) {
      Object.assign(this.games[this.editedIndex], this.editedItem)
    } else {
      this.games.push(this.editedItem)
    }
    this.close()
  }

  // watch: {
//   dialog (val) {
//     val || this.close()
//   },
// },
}
</script>
