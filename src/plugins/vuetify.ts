import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'

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
  preset,
  icons: {
    iconfont: 'mdi',
  },
})
