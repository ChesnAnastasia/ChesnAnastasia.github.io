let events = (function(){
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

    function handlerButtonEnter(){
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        if (login !== null){
            console.log(login);
            setHTML.setMainPage();
            module.getPhotoPosts(0, 2);
            console.log(photoPosts);
        }
        console.log(login);
        module.changeUser(login);
    }

    function handlerShowMore(btn){
        let count = document.getElementsByClassName('post').length;
        if (count + 2 >= photoPosts.length) {
            btn.style.display = 'none';
        }
        module.getPhotoPosts(count, 2);
    }

    function handlerSearch(){
        let authorName = document.getElementById('author-name').value;
        let htags = document.getElementById('tags').value;
        let date = document.getElementById('date').value;
        console.log(authorName);
        console.log(tags);
        console.log(date);
        /*let filter = {
            author: authorName,
            tags: htags,
            createdAt: date
        };
        let arr = [];

        let filter;
        if (authorName !== null){
            if (tags)
        } else {

        }

        if (authorName !== null && htags !== null && date !== null) arr = module.getPhotoPosts(0, 2, {author: authorName, tags: htags, createdAt: date});
        if (authorName === null && htags !== null && date !== null) arr = module.getPhotoPosts(0, 2, {tags: htags, createdAt: date});
        if (authorName !== null && htags === null && date !== null) arr = module.getPhotoPosts(0, 2, {author: authorName, createdAt: date});
        if (authorName !== null && htags !== null && date === null) arr = module.getPhotoPosts(0, 2, {author: authorName, tags: htags});
        if (authorName === null && htags === null && date !== null) arr = module.getPhotoPosts(0, 2, {createdAt: date});
        if (authorName === null && htags !== null && date === null) arr = module.getPhotoPosts(0, 2, {tags: htags});
        if (authorName !== null && htags === null && date === null) arr = module.getPhotoPosts(0, 2, {author: authorName});
        console.log(arr);
        arr.forEach(element => {
            module.addPhotoPost(element)
        });*/
        //module.getPhotoPosts(0, 2, filter);
    }

    function handlerLike(){
        //let like = document.querySelector('.like-icon material-icons');
        //like.style.color =  rgb(168, 35, 95);
    }

    return{
        handlerEditProfilePhoto,
        handlerAddNewPost,
        handlerLogOut,
        handlerLogIn,
        handlerButtonEnter,
        handlerShowMore,
        handlerSearch,
        handlerLike
    }
})();

//document.querySelector('.b1').addEventListener('click', events.handlerEditProfilePhoto());

/*document.querySelector('.b2').addEventListener('click', events.handlerAddNewPost);
document.querySelector('.b3').addEventListener('click', events.handlerLogOut);
document.querySelector('.b4').addEventListener('click', events.handlerLogIn);
document.querySelector('.bShow').addEventListener('click', events.handlerShowMore); //не работает
document.querySelector('.bSearch').addEventListener('click', events.handlerSearch);*/