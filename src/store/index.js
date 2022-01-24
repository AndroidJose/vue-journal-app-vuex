
import { createStore } from 'vuex'
import daybook from '../modules/daybook/store/daybook'

// Create a new store instance.
const store = createStore({
    modules: {
        daybook,
    }
})


export default store