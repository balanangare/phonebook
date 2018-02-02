<style>
    .jumbotron-codelines {
        color: rgba(255,255,255,0.6);
        background: url(http://127.0.0.1:8000/images/simple-codelines.svg),#2b3137;
        background-position: center -19%;
        background-size: cover;
    }
    .card-header {
        padding: 10px 1.25rem;
        margin-bottom: 0;
        background-color: #f6f8fa;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }


</style>

<template>

    <div style="margin-top: 72px;">
    <div class="card card-inverse jumbotron-codelines" style=" border-radius: 0; border-color: #333; padding:16px;padding-left:0;">
        <div class="container">
            <div class="card-block">
                <h3 class="card-title">Home</h3>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <router-link to="/main" class="btn btn-success btn-md">Back to Miain</router-link>
            </div>

        </div>
    </div>


        <div class="container" style="margin-top: 30px;">

            <div class="card">
                <div class="card-header">
                    VueJs Phonebook
                    <a href="javascript:{}"  data-toggle="modal" data-target="#exampleModal" class="float-right btn btn-primary btn-sm">Add New</a>
                    <span v-if="loading">
                       <i class="fa fa-1x fa-spinner fa-spin float-right mr-2"></i>
                    </span>
                </div>
                <div class="card-block">
                    <input type="text" class="form-control" v-model="searchQuery"  placeholder="Search...">
                    <hr>
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th width="78%">Name</th>
                            <th>Delete</th>
                            <th>Edit</th>
                            <th>View</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item,key in temp">
                            <td>{{ item.name }}</td>
                            <td><a href="javascript:{}" class="btn btn-danger btn-sm" @click="del(key,item.id)">Delete</a></td>
                            <td><a href="" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#updateDetails" @click="openUpdate(key)">Edit</a></td>
                            <td><a href="javascript:{}" data-toggle="modal" data-target="#showData" @click="openShow(key)" class="btn btn-success btn-sm">View</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>



        <Add></Add>
        <Show></Show>
        <Update></Update>

    </div>

</template>


<script>
    let Add = require('./Add.vue');
    let Show = require('./Show.vue');
    let Update = require('./Update.vue');

    export default {
        components:{Add,Show,Update},

        data(){
            return{
                lists:{},
                errors:{},
                loading:false,
                searchQuery:'',
                temp:''
            }
        },

        watch:{
            searchQuery(){

                if(this.searchQuery.length>0){
                    this.temp = this.lists.filter((item)=>{
                        return Object.keys(item).some((key)=>{
                            let string = String(item[key]);
                            return string.toLowerCase().indexOf(this.searchQuery.
                            toLowerCase())>-1
                        })

                    });
                }else{
                    this.temp = this.lists;
                }


            }
        },

        methods:{

            openShow(key){
                this.$children[1].list = this.temp[key]
            },
            openUpdate(key){
                this.$children[2].list = this.temp[key]
            },
            del(key,id){
                if(confirm("Are you Sure ?"))
                {
                    this.loading = !this.loading;
                    axios.delete(`/phonebook/${id}`)
                        .then((response)=>{this.lists.splice(key,1); this.loading = !this.loading})
                        .catch((error)=> this.errors = error.response.data)
                }
            }
        },

        mounted(){

            axios.post('/getData',this.$data.list).
            then((response)=>this.lists= this.temp =response.data)
                .catch((error)=> this.errors = error.response.data)
        }

    }
</script>