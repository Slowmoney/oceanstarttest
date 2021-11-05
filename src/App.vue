<script setup>
import { API } from './api';
import Search from './components/Search.vue';
import { ref } from 'vue'
import List from './components/List.vue';

const searchString = ref('')

const fioData = ref([])
const addFioData = ref([])
const autoSearchStop = ref(false)

async function search(e) {
    if (autoSearchStop.value) return
    if (e.length > 2) {
        fioData.value = (await API.suggestFio({ query: e })).data.suggestions
    } else {
        fioData.value = []
    }
}
function add(suggestion) {
    addFioData.value.push(suggestion)
}
</script>

<template>
    <div class="layout">
        <header>
            <div class="container">
                <Search
                    @update:modelValue="search"
                    placeholder="Введите имя"
                    v-model="searchString"
                />
            </div>
        </header>
        <main>
            <List style="margin-top: 24px;" :items="fioData" @add="add" />
            <div v-if="addFioData.length > 0">
                <div class="list-title">Список добавленных элементов:</div>
                <List :items="addFioData" />
            </div>
        </main>
        <footer class="footer footer_btn" @click="autoSearchStop = !autoSearchStop">
            {{ !autoSearchStop ? 'Остановить' : 'Включить' }}
            <br />автопоиск
        </footer>
    </div>
</template>

<style>
#app {
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
}
body {
    margin: 0;
    padding: 0;
    background: #c4c4c4;
}
main {
    flex: 1;
}
.footer {
    padding: 14px 16px;
    background: #7382cd;
    font-size: 12px;
    text-align: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: sticky;
    bottom: 0;
    width: -webkit-fill-available;
}
.container {
    width: 100%;
}
.layout {
    display: flex;
    height: 100%;
    flex-direction: column;
}
</style>
