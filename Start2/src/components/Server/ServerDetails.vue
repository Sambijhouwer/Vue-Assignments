<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if='!server'>Select a server</p>
        <p v-else>Server: {{ server.id }} Status: {{ server.status }}</p>
        <hr>
        <button @click='changeNormal'>Solve the problem</button>
    </div>

</template>

<script>
    import { serverBus } from '../../main';
    export default{ 
        data: function(){
            return{
                server: null
            }
            
        },
        methods:{
            changeNormal(){
                this.server.status = 'Normal'
            }
        },
        created(){
            serverBus.$on('Serverpass', (server) =>{
                this.server = server
            })
        }

    }
</script>

<style>

</style>
