<template>
  <v-card class="mx-auto overflow-hidden MainLayout">
    <v-app-bar color="#686C6D">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>RDA</v-toolbar-title>
      <Navigation-Buttons :v-if="this.$router" :rout="this.$router">
      </Navigation-Buttons>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer" absolute temporary color="#878B8B" width="450">
      <vue-scroll>
      <figure class="pa-4 d-flex flex-row justify-content justify-center align-items align-center">
        <img src="../assets/logo.png" />
      </figure>
      <v-card class="mx-auto MainLayoutDrawer">
        <v-list v-for="(route, i) in this.$router.options.routes" :key="i">
          <template>
            <div v-if="route.title === 'Home'" tabindex="0" aria-expanded="false" role="button" class="v-list-group__header v-list-item v-list-item--link theme--dark">
              <div class="v-list-item__icon v-list-group__header__prepend-icon">
                  <i aria-hidden="true" class="v-icon notranslate material-icons theme--dark">
                  home
                  </i>
              </div>
              <div @click="go()" class="v-list-item__title">
                Home
              </div>
            </div>
          </template>
          <v-list-group v-if="route.title !== 'Home'" :prepend-icon="route.icon">
            <template v-slot:activator>
                <v-list-item-title :to="route.path">{{ route.title }}</v-list-item-title>
            </template>
            <div v-for="(child, c) in route.children" :key="c">
              <v-list-group no-action sub-group value="true" v-if="child.children">
                <template v-slot:activator>
                  <v-list-item-content link>
                    <v-list-item-title :to="child.path">{{ child.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-group>
              <div v-else>
                <template>
                  <v-btn class="MainLayoutNavButton" :to="child.path">{{ truncate(child.title) }}</v-btn>
                </template>
              </div>
            </div>
          </v-list-group>
        </v-list>
      </v-card> 
       </vue-scroll>
    </v-navigation-drawer>
    <div class="RouterStyling">
      <router-view />
    </div>
  </v-card>
</template>


<style scoped>
.RouterStyling {
  height: calc(100% - 64px);
  overflow-y: auto;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .RouterStyling {
    width: 100%;
    padding: 0;
  }
}
figure {
  width: 100%;
  height: 200px;
}

figure > img {
  width: auto;
  height: 100%;
  max-height: 250px;
}

.v-application--wrap {
  position: relative;
}

.MainLayoutDrawer.v-sheet.v-card:not(.v-sheet--outlined) {
  overflow-x: hidden;
  border-radius: 0;
  background-color:rgba(0, 0, 0, 0);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0), 0px 2px 2px 0px rgba(0, 0, 0, 0.0), 0px 1px 5px 0px rgba(0, 0, 0, 0.0);
}

.v-list-group__items > .v-list-item.v-list-item--link.theme--dark {
  padding: 0;
}

div.v-list-group__items > div > a {
  font-weight: 500;
}

.MainLayoutNavButton.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
  background-color: rgba(0, 0, 0, 0.0);
  width: 100%;
  font-weight: 100;
  text-transform: none;
  min-height: 50px;
  border-radius: 0;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0), 0px 2px 2px 0px rgba(0, 0, 0, 0.0), 0px 1px 5px 0px rgba(0, 0, 0, 0.0);
}

.MainLayout {
  border-radius: 0;
  height: 100vh;
  width: 100vw;

}

.MainLayout > header {
  z-index: 2;
  position: relative;
}

.MainLayout > aside {
  z-index: 3;
  position: absolute;
}

.NavButton {
  width: 100%;
}
</style>

<style>
  .wrapper {
    align-items: center;
    height: 100%;
  }

  h2.mb-4 {
    font-size: 2rem;
  }

  h3.mb-4 {
    font-size: 1.7rem;
  }

  .v-toolbar__title {
    overflow: visible;
    min-width: 100px;
}
  
</style>

<script>
import NavigationButtons from '../components/NavigationButtons.vue';

export default {
  name: "MainLayout",
  components: {
    NavigationButtons,
  },
  methods: {
    go: function() {
      console.log(this.$router.options.routes);
      this.$router.replace('/');
    },
    truncate: function(string) {
      if (string.length >= 40) {
        return string.substr(0, 40) + ' ...'
      }
      return string;
    },
  },
  data: () => ({
    drawer: true,
    offset: true,
  })
};
</script>