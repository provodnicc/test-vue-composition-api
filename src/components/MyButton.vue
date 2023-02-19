<template>
    <div>
        <div
            class="Button"
            @click="onClick"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props:{
        active:{
            Type: Boolean,
            default(){
                return false
            }
        },
        padding: {
            Type: String,
            default(){
                return ''
            }
        },
        
    },

    emits: ['onClick'],
    setup(props: any, { emit }){
        const my_padding = props.padding
        let bg_color_disable = 'rgb(242, 248, 248, 0.5)'
        let font_color_disable = 'rgb(100, 100, 100, 0.5)'
        let border_color_disable = 'rgb(210, 220, 230, 0.5)'
        
        let bg_color_enable = 'rgb(124, 124, 253)'
        let font_color_enable = 'white'
        let border_color_enable = 'rgb(210, 220, 230)'
        
        let font_color = font_color_disable
        let bg_color = bg_color_disable
        let border_color = border_color_disable
        let opacity = 1
        const onClick = ()=>{
            emit('onClick')
        }
        if(props.active){
            font_color = font_color_enable
            bg_color = bg_color_enable
            border_color = border_color_enable
            opacity = 0.5
        }

        return {
            onClick,
            bg_color,
            font_color,
            border_color,
            opacity,
            my_padding
        }
    }
})
</script>

<style>
    .Button:active{
        
        opacity: v-bind(opacity);
        background-color: v-bind(bg_color);
    }
    .Button{
        cursor: pointer;

        text-align: center;
        border: 1px solid v-bind(border_color);
        border-radius: 3px;
        
        font-family: 'SF Pro Display Bold';
        color: v-bind(font_color);
        background-color: v-bind(bg_color);
        padding: v-bind(my_padding);
    }
</style>