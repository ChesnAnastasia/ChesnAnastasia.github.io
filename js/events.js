window.events = (function(){

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

    function handlerSearch(){
        let authorName = document.getElementById('author-name').value;
        let htags = document.getElementById('tags').value;
        let date = document.getElementById('date').value;
        console.log(authorName);
        console.log(tags);
        console.log(date);
        let tape = document.getElementsByClassName('Tape');
        tape.innerHTML = '';
        module.getPhotoPosts(0, 2, {author: authorName});
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
        let like = document.querySelector('.like-icon material-icons');
        like.style.color = rgb(160, 28, 85);
    }

    function handlerDelete(obj){
        //removePhotoPost(document.getElementById);
        console.log(obj);
    }

    function handlerCountLikes(){

    }

    return{
        handlerButtonEnter,
        handlerSearch,
        handlerLike,
        handlerDelete
    }
})();
