<template>
    <v-card>
        <v-tabs v-model="tab" bg-color="dark">
            <v-tab value="login">Login</v-tab>
            <v-tab value="register">Register</v-tab>

        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="login">
                    <v-sheet width="300" class="mx-auto">
                        <v-form @submit.prevent="handleSubmit">
                            <v-text-field v-model="user.email" density="compact" placeholder="Email address"
                                prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
                            <v-text-field v-model="user.password"  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                                prepend-inner-icon="mdi-lock-outline" variant="outlined"
                                @click:append-inner="visible = !visible"></v-text-field>
                            <v-btn type="submit" block class="mt-2" color="green">Login</v-btn>
                        </v-form>
                    </v-sheet>
                </v-window-item>

                <v-window-item value="register">
                    <v-sheet width="300" class="mx-auto">
                        <v-form @submit.prevent="handleSubmit">
                            <v-text-field v-model="user.email"  density="compact" placeholder="Email address"
                                prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
                            <v-text-field v-model="user.password"  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                                prepend-inner-icon="mdi-lock-outline" variant="outlined"
                                @click:append-inner="visible = !visible"></v-text-field>
                            <v-btn type="submit" block class="mt-2" color="blue">Register</v-btn>
                        </v-form>
                    </v-sheet>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script setup>

import { ref, reactive } from 'vue'
import { useAuthStore } from '../stores/authStore'

//storeAuth
const storeAuth = useAuthStore();


const visible = ref(false)
const tab = ref(null)
const user = reactive({
    email: '',
    password: '',
});

const handleSubmit = () => {
    if (!user.email || !user.password) {
        alert("please insert an email and password");
    } else {
        if (tab.value == "login"){
            storeAuth.LoginUser(user);
            
        } else {
            storeAuth.registerUser(user);
        }
    }
}
</script>