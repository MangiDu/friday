<template>
    <div id="app">
        index page
    </div>
</template>

<script>
export default {
    mounted() {
        this.$axios.get('/api/test').then((res) => {
            console.log(res)
        })
    }
}
</script>
