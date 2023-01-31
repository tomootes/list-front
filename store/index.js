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
                return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
            });
            let property = 'type';
            songs = songs.reduce(function(memo, x) {
                if (!memo[x[property]]) { memo[x[property]] = []; }
                memo[x[property]].push(x);
                return memo;
              }, {});
            store.commit('setSongs', songs)
        }
        catch(err){
            context.error({
                message:err.message
            })
        }
    }
}
