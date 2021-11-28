import { GetterTree, ActionTree, MutationTree } from 'vuex'

/**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
function shuffle(a:any) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
}

export const state = () => ({
    pages: [] as any[],
    page: {},
    isSoundEnabled: true
  })
  
  export type RootState = ReturnType<typeof state>
  
  export const getters: GetterTree<RootState, RootState> = {
    pages: state => state.pages,
    page: state => state.page,
    isSoundEnabled: state => state.isSoundEnabled
  }
  
  export const mutations: MutationTree<RootState> = {
    SET_ONE: (state, newOne) => (state.page = newOne),

    SET_INITIAL: (state, r: any) => {
        const tmp_imgs: any[] = []

        state.pages = tmp_imgs
    },

    initializeSound(state) {
      state.isSoundEnabled = false;
      localStorage.setItem("isSoundEnabled", 'false');

      // later 
      const isSoundEnabled = localStorage.getItem('isSoundEnabled') || 'false';
      console.log('isSoundEnabled init '+isSoundEnabled)
      if(isSoundEnabled === 'false') {
        state.isSoundEnabled = false;
        localStorage.setItem("isSoundEnabled", 'false');
      } else if(isSoundEnabled) {
        state.isSoundEnabled = true;
        localStorage.setItem("isSoundEnabled", 'true');
      } else {
        state.isSoundEnabled = true;
        localStorage.setItem("isSoundEnabled", 'true');
      }
    },

    toggleSound(state) {
      console.log('isSoundEnabled before '+state.isSoundEnabled)
      state.isSoundEnabled = !state.isSoundEnabled;
      console.log('isSoundEnabled after '+state.isSoundEnabled)

      localStorage.setItem('isSoundEnabled', state.isSoundEnabled ? 'true' : 'false');
      console.log('set isSoundEnabled '+(state.isSoundEnabled ? 'true' : 'false'))
    }
  }
  
  export const actions: ActionTree<RootState, RootState> = {
    async fetchData({ commit }) {
      
    },

    async fetchOne({ dispatch, commit, state }, in_value: string) {
      if (!state.pages || !state.pages.length) {
        await dispatch('fetchData', { root: true })
      }
      const found_el = state.pages.find((el) => el.key === in_value)
      commit('SET_ONE', {
        /* id: found_el.key,
        image_url: found_el.cover_url.substr(1),
        model_name: found_el.model_name,
        model_description: 'A beautiful custom built guitar for you!',
        in_stock: found_el.in_stock,
        discount: found_el.discount,
        images_list: found_el.images_list */
      })
    }
  }