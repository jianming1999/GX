export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        app.store.dispatch('getItemBase', {curMenuUrl: to.name})
        next()
    })
}