<template>
    <div>
        <input type='text' v-model='quoteinput'>
        <button @click="Sendquote">Add quote</button>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            quoteinput: ''
        }
        
    },
    methods: {
        Sendquote(){
            this.$emit('SendQuote', this.quoteinput);
            this.quoteinput = ''
        }
    }
}
</script>
<style>
    
</style>