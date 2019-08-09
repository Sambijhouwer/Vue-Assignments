<template>
    <div class="container">
        <div>
            Bar
        </div>
        <div>
            <app-add-quote @SendQuote='addQuote' ></app-add-quote>
        </div>
        <div>
            <app-quotes :quotes='quotes' @quotedelete='deleteQuote'></app-quotes>
        </div>
    
    </div>
</template>

<script>
    import Quotes from './components/Quotes.vue';
    import addQuote from './components/addQuote.vue';

    export default{
        components: {
            appQuotes: Quotes,
            appAddQuote: addQuote

        },
        data: function(){
            return{
                quotes: ['One to get started']
            }
        },
        methods: {
            addQuote(quote){
                if (this.quotes.length >= 10){
                    alert('To many quotes, delete some to add new ones')
                    return
                }
                this.quotes.push(quote)
            },
            deleteQuote(index){
                this.quotes.splice(index, 1)
            }
        }
        
    }
</script>

<style>
</style>
