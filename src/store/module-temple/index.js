
import state from './state'
import * as actions from './actions'
import * as mutaions from './mutations'
import * as getters from './getters'

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutaions,
    state
}

export default myCustomModule