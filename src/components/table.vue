<template>
    <v-table fixed-header height="300px">
        <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th class="d-flex justify-center align-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for=" item in data">
                <td>{{ item.title }}</td>
                <td>{{ item.content }}</td>
                <td>
                    <v-btn @click="('updateData', item)" color="blue" type="submit" variant="tonal" class='mr-2' >EDIT</v-btn>
                    <v-btn @click="('deleteData', item.id)" color="red" type="submit" variant="tonal">DELETE</v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>

const props = defineProps({
    data: {
        type: Object,
        default: "Nodata",
    }
})

</script>

