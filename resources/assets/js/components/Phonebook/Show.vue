<template>

    <div class="modal fade" id="showData"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ list.name }}'s Details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label class="form-control-label">Name:</label>
                      <p>{{ list.name }}</p>
                    </div>

                    <div class="form-group">
                        <label  class="form-control-label">Phone:</label>
                        <p>{{ list.phone }}</p>
                    </div>

                    <div class="form-group">
                        <label  class="form-control-label">Email:</label>
                        <p>{{ list.email }}</p>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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

                }
            }
        }

    }

</script>