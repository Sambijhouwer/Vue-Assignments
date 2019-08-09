<template>
    <div class='row'>
        <app-quote
        v-for='(quote, index) in quotes'
        @click.native='deleteQuote(index)'>
            {{ quote }}
        </app-quote>
    </div>
</template>
<script>
    import  tekst  from './Quote.vue'
    export default {
        props:['quotes'],
        components: {
            appQuote: tekst     
        },
        methods:{
            deleteQuote(index){
                this.$emit("quotedelete", index)
            }
        }
    }
</script>
<style scoped>
    app-quote{
        cursor: pointer
    }
</style>