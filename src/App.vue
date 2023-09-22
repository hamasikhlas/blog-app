<template>
    <v-layout class="rounded rounded-md">
        <v-navigation-drawer v-model="drawer" app color="light-blue">
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" :title="storeAuth.user.email ? storeAuth.user.email : 'Belum login'" ></v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <v-list-item 
                v-for="(item, index) in menu" 
                :prepend-icon="item.icon" 
                :title="item.title"
                :key="`menu-` + index" 
                :to="item.route">
            </v-list-item>
            <v-list-item 
                v-if="storeAuth.user.id"
                prepend-icon="mdi-post" 
                title="Blog"
                to="/blog">
            </v-list-item>
            <v-list-item 
                v-if="!storeAuth.user.id"
                prepend-icon="mdi-login" 
                title="login/register"
                to="/auth">
            </v-list-item>
            <v-list-item
                v-else 
                prepend-icon="mdi-login" 
                title="Logout"
                @click="handleLogout">
            </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-toolbar-title>LabuCuk</v-toolbar-title>
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>
        </v-app-bar>
        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <RouterView />
        </v-main>
    </v-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router';
import { useAuthStore } from './stores/authStore';

//storeAuth
const storeAuth = useAuthStore();


const drawer = ref(true);



const menu = [
    { title: 'Home', icon: 'mdi-home-circle', route: '/' },
    { title: 'About', icon: 'mdi-account-circle', route: '/about' },
];

const handleLogout = () => {
       storeAuth.LogoutUser();
};

onMounted(() => {
    storeAuth.init();

});

</script>

