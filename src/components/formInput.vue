<template>
    
    <v-card color="primary" variant="tonal">
        <v-card-item>
            <v-card-title class="d-flex justify-center align-center mb-5 mt-2"  >Form Blog</v-card-title>
            <div class="alert alert-success" v-if="blog.alert === true" role="alert">
                {{ blog.message }}</div>
            <form @submit.prevent="('submitData')">
                
                <v-text-field 
                v-model="blog.title" 
                :rules="title" 
                label="Title"></v-text-field>
                <v-textarea 
                v-model="blog.content" 
                auto-grow variant="filled" 
                color="deep-purple" 
                label="Content"
                rows="1"></v-textarea>
                
                <v-btn 
                type="submit"
                block
                class="mt-2"
                :color="blog.updatequery ? 'blue' : 'info'"
                >{{ !blog.updatequery ? "Tambah" : "Update" }} </v-btn>
                
                <v-btn 
                type="submit" 
                block 
                class="mt-2" 
                color="red"
                v-if="blog.updatequery" 
                @click="('clearData')"
                        >Cancel</v-btn>
            </form>
        </v-card-item>

    </v-card>
    
</template>

<script setup>

const props = defineProps({
    blog: {
        type: Object,
        default: "Nodata",
    }
})

</script>