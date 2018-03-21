window.eventsMainPage = (function(){

    function handlerLogoMP(){
        setHTML.setMainPage();
        module.changeUser(module.user);
    }

    function handlerEditProfilePhoto() {
        
    }

    function handlerAddNewPost(){
        setHTML.setAddNewPostPage(new  Date());
    }

    function handlerLogOut(func){
        module.changeUser();
    }

    function handlerLogIn(){
        setHTML.setLogInPage();
    }

    function handlerShowMore(btn){
        let count = document.getElementsByClassName('post').length;
        if (count + 2 >= photoPosts.length) {
            btn.style.display = 'none';
        }
        module.getPhotoPosts(count, 2);
    }

    return {
        handlerLogoMP,
        handlerEditProfilePhoto,
        handlerAddNewPost,
        handlerLogOut,
        handlerLogIn,
        handlerShowMore
    }
})();