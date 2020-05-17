<template>
    <div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                comments:{}
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {
            this.$api.comments.getComments().then(
                res=>{
                    console.log(res);
                }
            ).catch()

        },
        components: {}
    }
</script>
<style>

</style>