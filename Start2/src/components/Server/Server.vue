<template>
        <li @click='passserver()'>
            Server: {{ server.id }}
        </li>
</template>

<script>
    import { serverBus } from '../../main'
    export default{
        props: ['server'],
        methods:{
            passserver(){
                serverBus.$emit('Serverpass', this.server);
            }
        }
    }
</script>

<style>

</style>
