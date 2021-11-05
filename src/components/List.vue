<script setup>
import { ref } from 'vue'

defineProps({
  items: Array
})

</script>

<template>
    <div class="list">
        <div v-for="(e, i) in items" :key="i" class="list-item"><div>{{e.value}}</div><button @click="$emit('add', e)" class="item-list-button">Добавить</button></div>
    </div>
</template>

<style>
.list{
    overflow-y: auto;
}
.list-item{
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 14px 14px 14px 16px;
}
.item-list-button{
    background: #40B159;
    border: none;
    color: #000000;
    padding: 10px 18px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.list-title{
    padding: 0 5px;
}
</style>
