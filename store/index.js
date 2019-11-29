export const state = () => ({
    songs: []
})

export const mutations = {
    setSongs(state,arg){
        state.songs = arg
    }
}

export const actions = {
    async nuxtServerInit(store, context) {
        try{
            const response = await context.$axios.get('songs')
            store.commit('setSongs', response.data)
        }
        catch(err){
            context.error({
                message:err.message
            })
        }
    }
}
