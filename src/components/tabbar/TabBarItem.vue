<template>
  <div class="tab-bar-item" v-on:click="itemClick()">
    <div v-if="!isActived">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-actived"></slot>
    </div>
    <div :style="textColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  computed: {
    textColor() {
      return this.isActived ? { color: this.activeColor } : {};
    },
    isActived() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  props: {
    path: {
      type: String,
      default: "/home",
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>