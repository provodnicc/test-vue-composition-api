<template>
    <div class="DropDown">
        <div class="dropSelect">
            <p 
                class="dropTitle" 
                @click="show"
            >
                {{ selected }}
            </p>
            <div
                v-show="flag" 
            >
                <ul
                    v-for="(item, id) in list"
                    class="dropList"
                    :key="id"
                >
                    <div
                        class="dropListItem"
                        @click="setCurr(item.title)"
                    >
                        {{ item.title }}
                    </div>
                </ul>
            </div>
        </div>
        <div class="blur" v-show="flag" @click="show">
        </div>
        
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
    props: {
        list: {
            type: Array,
            default(){
                return []
            }
        },
        selected: {
            type: String,
            default: ''
        },
        padding: {
            Type: String,
            default(){
                return ''
            }
        },
    },
    emits:['getSelected'],
    setup(props: any, { emit }){
        const padding = props.padding
        const list = props.list
        let selected = ref(list[0].title)
        const flag = ref(false)

        const setCurr = (title: string)=>{
            selected.value = title
            emit('getSelected', title)
            show()
        }

        const show = ()=>{
            flag.value=!flag.value
        }

        return {
            list,
            show,
            flag,
            setCurr,
            selected,
            
            padding
        }
    }
})
</script>

<style scoped>
    .blur{
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;

        filter: blur(20px);
        background-color: rgb(234, 236, 236);
    }
    .dropSelect{
        position: relative;
        z-index: 100;

        border: 1px solid rgb(210, 220, 230);
        border-radius: 3px;
        background-color: rgb(242, 248, 248);
    }
    .DropDown{
        cursor: pointer;
    }
    .dropTitle:active{
        opacity: 0.5;
        background-color: rgb(242, 248, 248);
    }
    .dropTitle{
        z-index: inherit;
        text-align: center;
        width: 100%;
        padding: v-bind(padding);
        border: 1px solid rgb(237, 242, 247);
    }
    .dropList{
        z-index: inherit;
        width: 100%;
    }
    .dropListItem{
        z-index: inherit;
        width: 100%;
    }
    .dropListItem:hover{
        transition: 0.3s;
        background-color: rgb(201, 201, 201);
    }
</style>