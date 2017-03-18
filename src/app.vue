<!-- <template>
  <div class="main container">
    <input type="text" v-model="text" />
    <div class="hello">Hello {{ text }}!</div>
    <div class="text-center">
      <dropdown>
        <button slot="button" type="button" class="btn btn-success dropdown-toggle">
          Wellcome
          <span class="caret"></span>
        </button>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a v-link="{path:'/user'}">User</a></li>
          <li><a v-link="{path:'/posts'}">Posts</a></li>
          <li><a v-link="{path:'/profile'}">Profile</a></li>
          <li role="separator" class="divider"></li>
          <li><a v-link="{path:'/logout'}">Logout</a></li>
        </ul>
      </dropdown>
      <div class="page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template> -->
<template>
  <navbar placement="top" type="default">
    <a slot="brand" v-link="{path:'/'}" title="Home" class="navbar-brand">BTK VUEJS</a>
    <dropdown text="My Settings">
      <li><a v-link="{path:'/user'}">User</a></li>
      <li><a v-link="{path:'/posts'}">Posts</a></li>
      <li><a v-link="{path:'/profile'}">Profile</a></li>
      <li role="separator" class="divider"></li>
      <li><a v-link="{path:'/logout'}">Logout</a></li>
    </dropdown>
    <li slot="right">
      <a href="https://github.com/yuche/vue-strap" target="_blank">Fork...</a>
    </li>
  </navbar>
  <div class="main container">
    <div class="text-center page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script src="./app.js" type="text/javascript"></script>
