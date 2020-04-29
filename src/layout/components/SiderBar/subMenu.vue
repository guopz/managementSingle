<template>
  <div v-if="!item.hidden">
    <el-menu-item v-if="!item.children || item.children.length == 0" :index="item.path">
      <span :class="icon(item.meta)" />
      <span slot="title">{{item.meta.title}}</span>
    </el-menu-item>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <span v-if="icon(item.meta)" :class="icon(item.meta)" />
        <span slot="title">{{item.meta.title}}11</span>
      </template>
      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.path"
        />
        <el-menu-item v-else :key="child.path" :index="child.path">
          <span slot="title">{{child.meta.title}}33</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import { iconMap } from "./iconConfig";

export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    icon() {
      return params => {
        let { icon = "", title = "" } = params,
          result =
            icon && icon.length > 0
              ? icon
              : iconMap[title]
              ? iconMap[title]
              : "";
        return result;
      };
    }
  }
};
</script>
