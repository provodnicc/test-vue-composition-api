<template>
    <div>
        <div v-for="item in $props.info" :key="item.id">
            <div>
                {{ item.id }} <span> {{ item.name }} </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
    props:{
        info:{
            Type: Array,
            default(){
                return []
            }
        }
    },
    setup(props: any){

        return {
            // info: props.info
        }
    }
})

</script>