<style>
    .navbar-inverse .navbar-nav .nav-link {
        color: rgba(255, 255, 255,1);
    }
    .search {
        display: block;
        width: 100%;
        padding: 0.5rem 0.75rem;
        font-size: 15px;
        line-height: 0;
        height: 31px;
        color: #ffffff;
        background-color: rgba(255,255,255,0.125);
        background-image: none;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
    }
    .search:focus {
        display: block;
        width: 100%;
        padding: 0.5rem 0.75rem;
        font-size: 15px;
        line-height: 0;
        height: 31px;
        color: #ffffff;
        background-color: rgba(255,255,255,0.150);
        background-image: none;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
    }
</style>

<template>
    <div >


    <nav class="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse bg-faded " style="background-color: #24292e !important;padding-top: 16px;padding-bottom: 16px;">
        <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#" style="padding-top: 0px;padding-bottom: 0px;">
            <img :src="'/images/logo.svg'" alt="" width="96%">
        </a>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav ">
                <li class="nav-item active">
                    <router-link to="/main" class="nav-link">Main</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">Demos</router-link>
                </li>


            </ul>

            <form class="form-inline  ml-auto">
                <input class="form-control search" type="text" placeholder="Search Mavericks.Dev">
            </form>
            <ul class="navbar-nav ml-auto " style="    margin-left: 13px !important;">
                <li class="nav-item ">
                    <router-link to="/home" class="nav-link">Sign In</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">Sign Up</router-link>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hey, Akshay
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Profile</a>
                        <a class="dropdown-item" href="#">Settings</a>
                        <a class="dropdown-item" href="#">Logout</a>
                    </div>
                </li>
            </ul>

        </div>
        </div>
    </nav>
    </div>
</template>