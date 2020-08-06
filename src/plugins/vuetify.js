import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true, 
        themes: {
            dark: {
            primary: '#ffce07', // #E53935
            secondary: '#878B8B', // #FFCDD2
            accent: '#AAAFAE', // #3F51B5
            },
        },
    },
  });
