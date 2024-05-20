export default defineEventHandler((event) => {
    const { id } = event.context.params || {}
    return {
        status: 200,
        data: {}
    }
})