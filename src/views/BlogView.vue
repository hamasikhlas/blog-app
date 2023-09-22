<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <TableBlog :data="blog.data" @updateData="updateData" @deleteData="deleteData" />
            </div>
            <div class="col">
                <FormInput :blog="blog" @submitData="handleSubmit" @clearData="clearForm"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { db, timestamps } from "../../config/firebase";
import { reactive, onMounted, } from "vue";
import { collection, addDoc, onSnapshot, query, doc, updateDoc, deleteDoc} from "firebase/firestore";
import TableBlog from "../components/table.vue";
import  FormInput  from "../components/formInput.vue";

const blogCollection = collection(db, "blog");
const blog = reactive({
    title: null,
    content: null,
    id: "",
    alert: false,
    message: "",
    data: [],
    updatequery : false,
})
const clearForm = () => {
        blog.title = "";
        blog.content = "";
        blog.id = "";
        blog.alert = false;
        blog.message = "";
        blog.updatequery  = false;
};
const updateData = (object) => {
    blog.updatequery = true;
    blog.title = object.title;
    blog.id = object.id;
    blog.content = object.content;
    blog.alert = false;
};
const deleteData = async (itemId) => {
    clearForm();
    await deleteDoc(doc(db, "blog", itemId));
    blog.alert = true;
    blog.message = "Data Berhasil Dihapus"
};
const handleSubmit = async () => {
    if (blog.title && blog.content) {
        if (blog.updatequery == false) {
            await addDoc(blogCollection, {
                title: blog.title,
                content: blog.content,
                createAt : timestamps,
                updateAt : timestamps,
            });
            clearForm();
            blog.alert = true;
            blog.message = "Data Berhasil Ditambahkan";
        } else {
            await updateDoc(doc(db,"blog", blog.id), {
                title: blog.title,
                content: blog.content,
                updateAt : timestamps,
            });
            clearForm();
            blog.alert = true;
            blog.message = "Data Berhasil Diupdate";
        }
    } else {
        alert("Data harus di Isi Tidak boleh kosong")
    }

};


const readData = async () => {
    const filderCollection = query(collection(db, "blog"));
    onSnapshot(filderCollection, (querySnapshot) => {
        const todos = [];
        querySnapshot.forEach((doc) => {
           let todo = {
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
           };
           todos.push(todo);
        });
        blog.data = todos;

    });
};
onMounted(() => {
    readData();
});
</script>