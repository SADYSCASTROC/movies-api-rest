window.addEventListener('DOMContenteLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)


function navigator(){
    console.log({ location })

    if(location.hash.startsWith('#trends')){
        trendsPage()
    }else if(location.hash.startsWith('#search=')){
        searchPage()
    }else if(location.hash.startsWith('#movi=')){
        movieDetailPage();
    }
    else if(location.hash.startsWith('#category=')){
        console.log('categorys!!!')
    }else{
        homePage()
    }

}

function trendsPage (){
 console.log('trend!!!!!!')
}

function searchPage (){
    console.log('search!!!!!!')
}


function movieDetailPage (){
    console.log('movii!!!!!!')
}


function categoriesPage (){
    console.log('category!!!!!!')
}


function homePage (){
    console.log('home!!!!!!')
}