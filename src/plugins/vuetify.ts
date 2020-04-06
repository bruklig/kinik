import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

/**
 * primary: '#1EB980',
 * secondary: '#045D56',
 * tertiary: '#FF6859',
 * quaternary: '#FFCF44',
 * quinary: '#B15DFF',
 * senary: '#72DEFF',
 */
export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E53935', // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
})