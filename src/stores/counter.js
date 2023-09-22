import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    cart: 0,
    title: "My couter title"
  }),
  actions: {
    increment(){
      this.cart++
    },
    descrementCart(){
      this.cart--
    },
    
  }
})
