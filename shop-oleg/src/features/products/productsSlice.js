import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, title: "Ноутбук Lenovo IdeaPad", price: 24500, category: "Ноутбуки", image: "https://picsum.photos/300/200?1" },
    { id: 2, title: "Смартфон Samsung Galaxy", price: 18900, category: "Смартфони", image: "https://picsum.photos/300/200?2" },
    { id: 3, title: "Навушники HyperX", price: 3200, category: "Аксесуари", image: "https://picsum.photos/300/200?3" },
    { id: 4, title: "Клавіатура Logitech", price: 2700, category: "Аксесуари", image: "https://picsum.photos/300/200?4" },
    { id: 5, title: "Монітор LG 24", price: 6200, category: "Монітори", image: "https://picsum.photos/300/200?5" },
    { id: 6, title: "Миш Razer", price: 2100, category: "Аксесуари", image: "https://picsum.photos/300/200?6" },
  ],
  search: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = productsSlice.actions;
export default productsSlice.reducer;