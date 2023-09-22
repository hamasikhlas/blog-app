<template>
<main>
        <div class="selection-profil">
            <img  class="profil" alt="" src="../assets/logo-biodata.JPG" >
            <div class="bio">
                <h1>Muhammad Hamas Ikhlas</h1>
                <h3>Front-End Developer</h3>
            </div>
            <br>
        </div>
        <div class="selection-data">
            <div class="selection-data-1">
                <h3>Data Diri</h3>
                <h4>Nama  : Muhammad Hamas Ikhlas</h4>
                <h4>Alamat : Depok</h4>
                <h4>Hobi :</h4>
                <ul>
                    <li>Conducted performance testing using JMeter and Newrelic, compiled the test results, and provided analysis to the development team.
                    </li>
                    <li>Created the user interface (UI) for the JMeter Cluster & Health Check Project using JavaScript, Vue.js, and Vuetify. Displayed detailed 
                        information and performance test results.</li>
                    <li>Conducted health checks on squad servers, reported the status of any down servers, assisted in troubleshooting problematic servers, 
                    and updated server data.</li>
                </ul>
                <div class="selection-data-2">
                    <h3>Work Experiences</h3>
                    <h4>PT Global Digital Niaga (Blibli.com)</h4>
                    <h5>PSR Engineer</h5>
                    <ul>
                        <li>Conducted performance testing using JMeter and Newrelic, compiled the test results, and provided analysis to the development team.
                        </li>
                        <li>Created the user interface (UI) for the JMeter Cluster & Health Check Project using JavaScript, Vue.js, and Vuetify. Displayed detailed 
                            information and performance test results.</li>
                        <li>Conducted health checks on squad servers, reported the status of any down servers, assisted in troubleshooting problematic servers, 
                        and updated server data.</li>
                    </ul>
                </div>
            </div>
            </div>    
    </main>
</template>

<style scoped>


main{
    margin: 100px 400px;
    padding: 40px;
    border: 2px solid gray;
    border-radius: 30px;
    background-color: #FFA06F;
    box-shadow: 10px 10px 5px lightblue;
}
.selection-biodata{
    font-family: 'Bangers', cursive;
    font-size: 20px;
    text-align: center;
}

.profil{
    height: 150px;
    width: 150px;
    border-radius: 50%;
}

.selection-profil{
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}

.selection-data{
    text-align: justify;
    display: flex;
    color: white;
    font-size: 15px;

}

.bio{
    text-align: center;
    
}

.selection-data-1 {
    margin: 10px;
    padding: 10px;
    border: 3px dotted gray;
    border-radius: 30px;

}

.selection-data-1 p {
    padding-right: 20px ;

}


.bio h1{
    font-family: 'EB Garamond', serif;
    font-size: 30px;
    color: white;

}

.selection-data-1 h3{
    border-bottom: 3px dotted grey;
    margin-bottom: 10px;
    margin-right: 10px;
    padding-bottom: 10px;
    text-align: center;
}

.selection-data-2 h3{
    margin-top: 20px;
    padding-top: 10px;
    text-align: center;
    border-top: 3px dotted gray;
}


</style>