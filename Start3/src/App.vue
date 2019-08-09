<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary"  @click='page = appBlue'>Load Blue Template</button>
                <button class="btn btn-success" @click='page = appGreen'>Load Green Template</button>
                <button class="btn btn-danger" @click='page = appRed'>Load Red Template</button>
                <hr>
                <component :is="page">
                    <app-blue>
                        <slot name='blueslot'>
                            <h1>Hello Blue</h1>
                        </slot>
                    </app-blue>
                    <app-green >
                        <slot name='greenslot'>
                            <h1>Hello Blue</h1>
                        </slot>
                    </app-green>
                    <app-red >
                        <slot name='redslot'>
                            <h1>Hello Blue</h1>
                        </slot>
                    </app-red>
                </component>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function(){
            return{
                page = 'appBlue'
            }
        }
    }
</script>

<style>
</style>
