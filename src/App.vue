<template>
  <div id="app">
    <router-view />
    <tab-bar>
      <tab-bar-item path="/home" active-color='blue'>
        <img slot="item-icon" src="./assets/img/tabbar/1.svg" />
        <img slot="item-icon-actived" src="./assets/img/tabbar/11.svg" />
        <div slot="item-text">Home</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/2.svg" />
        <img slot="item-icon-actived" src="./assets/img/tabbar/12.svg" />
        <div slot="item-text">Category</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/3.svg" />
        <img slot="item-icon-actived" src="./assets/img/tabbar/13.svg" />
        <div slot="item-text">Cart</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/4.svg" />
        <img slot="item-icon-actived" src="./assets/img/tabbar/14.svg" />
        <div slot="item-text">Profile</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },

};
</script>

<style>
@import "./assets/css/base.css";
</style>
