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
            let songs = response.data;
            songs = songs.sort(function(a,b){
                return new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime()
            });
            console.log(songs);
            store.commit('setSongs', songs)
        }
        catch(err){
            context.error({
                message:err.message
            })
        }
    }
}
