<style>
    .jumbotron-codelines {
        color: rgba(255,255,255,0.6);
        background: url(http://127.0.0.1:8000/images/simple-codelines.svg),#2b3137;
        background-position: center -19%;
        background-size: cover;
    }
</style>

<template>

    <div style="margin-top: 72px;">
        <div class="card card-inverse jumbotron-codelines" style=" border-radius: 0; border-color: #333; padding:16px;padding-left:0;">
            <div class="container">
                <div class="card-block">
                    <h3 class="card-title">Welcome Page</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-success btn-md">Read More</a>
                </div>
            </div>
        </div>


        <div class="container" style="margin-top: 50px;">
            <div class="row">
                <div class="col-md-12">
                    <table class="table">

                        <tbody>
                          <tr>
                            <td>
                                <h4>Phonebook App Demo</h4>
                                <p> Phonebook App with Vuejs, npm, Vue-Router</p>
                            </td>
                              <td>
                                  <router-link to="/home" class="btn btn-success">View Demo</router-link>
                              </td>

                          </tr>
                          <tr>
                              <td>
                                  <h4>Vuejs Data Viewer with Filter System</h4>
                                  <p> Data Viewer App with Vuejs, npm, Vue-Router</p>
                              </td>
                              <td>
                                  <a href="javascript:{}" class="btn btn-success">View Demo</a>
                              </td>
                          </tr>

                        </tbody>
                      </table>
                </div>
            </div>
        </div>


    </div>
</template>