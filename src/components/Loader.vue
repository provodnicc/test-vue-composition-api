<template lang="">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    props:{
        height: {
            Type: String,
            default(){
                return '80'
            }
        },
        thickness:{
            Type: String,
            default(){
                return '8'
            }
        }
    },
    setup(props) {
        return {
            height: props.height,
            tickness: props.thickness
        }
    }
})
</script>
<style>
.lds-ring {
  display: inline-block;
  position: relative;
  width: v-bind(height);
  height: v-bind(height);
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: v-bind(height);
  height: v-bind(height);
  border: v-bind(thickness) solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>