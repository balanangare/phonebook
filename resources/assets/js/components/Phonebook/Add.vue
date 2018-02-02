<template>
    <div class="modal fade" id="exampleModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New Entry</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                        <div class="form-group">
                            <label for="name" class="form-control-label">Name:</label>
                            <input type="text" class="form-control" placeholder="Name" id="name" v-model="list.name">
                            <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
                        </div>

                        <div class="form-group">
                            <label for="phone" class="form-control-label">Phone:</label>
                            <input type="text" class="form-control" placeholder="Phone" id="phone" v-model="list.phone">
                            <small v-if="errors.phone" class="text-danger">{{ errors.phone[0] }}</small>
                        </div>

                        <div class="form-group">
                            <label for="email" class="form-control-label">Email:</label>
                            <input type="text" class="form-control" placeholder="Email" id="email" v-model="list.email">
                            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>
                        </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="save">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {

        data(){

            return{
                list:{
                    name:'',
                    phone:'',
                    email:''
                },
                errors:{}
            }
        },

        methods:{

            save(){

                axios.post('/phonebook',this.$data.list).then((response)=>{
                    $('#exampleModal').modal('hide')
                    this.$parent.lists.push(response.data)

                    this.$parent.lists.sort(function(a,b){
                        if( a.name > b.name)
                        {
                            return 1;
                        }else if(a.name < b.name){
                            return -1;
                        }
                    })

                    this.list = ""

                })
                    .catch((error)=> this.errors = error.response.data)
            }
        }
    }
</script>