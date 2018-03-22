window.events = (function(){

    function handlerButtonEnter(){
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        if (login !== '' && password !== ''){
            setHTML.setMainPage();
            module.changeUser(login);

            //проработать исключения
        }
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
        tape = document.getElementsByClassName('Tape')[0];
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

    function handlerLike(obj){
        let child;
        if (module.user !== null){
            let parent = obj.parentNode;
            parent = parent.parentNode;
            child = parent.getElementsByClassName('count-likes');
            parent = parent.parentNode;
            parent = parent.parentNode;
            
            let index = moduleF.getPhotoPost(parent.id).likes.indexOf(module.user);
            if (index !== -1) {
                moduleF.getPhotoPost(parent.id).likes.splice(index, 1);
                child = child[0];
                child.innerHTML = 'Show ' + moduleF.getPhotoPost(parent.id).likes.length + ' likes';
                obj.style.color = 'rgb(55, 11, 30)';
            } else {
                moduleF.getPhotoPost(parent.id).likes.push(module.user);
                child = child[0];
                child.innerHTML = 'Show ' + moduleF.getPhotoPost(parent.id).likes.length + ' likes';
                obj.style.color = 'rgb(160, 28, 85)';
            }
        } else {
            alert(`You can not put like, edit and delete the post.
            Please login to get this opportunity.`);
        }
    }
    function handlerDelete(obj){
        if (module.user !== null){
            let parent = obj.parentNode;
            parent = parent.parentNode;
            parent = parent.parentNode;
            parent = parent.parentNode;
            module.removePhotoPost(parent.id);
        } else {
            alert(`You can not put like, edit and delete the post.
            Please login to get this opportunity.`);
        }
    }
    function handlerEdit(obj){
        if (module.user !== null){
            let parent = obj.parentNode;
            parent = parent.parentNode;
            parent = parent.parentNode;
            parent = parent.parentNode;
            console.log(parent.createdAt);
            setHTML.setEditPostPage(moduleF.getPhotoPost(parent.id));
        } else {
            alert(`You can not put like, edit and delete the post.
            Please login to get this opportunity.`);
        }
    }
    function handlerCountLikes(){

    }

    function handlerPhoto(){

    }
    function handlerAdd(){
        let htags = document.getElementById('tags').value;
        let descr = document.getElementById('descriptions').value;
        let link = document.getElementById('image-url').value;
        let post = {}
        post.id = '10';
        post.description = descr;
        post.createdAt = new Date();
        post.author = module.user;
        post.photoLink = link;
        post.tags = ['#happiness', '#travel'];
        post.likes = [];
        setHTML.setTapeBlock();
        let tape = document.getElementsByClassName('Tape');
        tape.innerHTML = '';
        tape = document.getElementsByClassName('Tape')[0];
        module.getPhotoPosts(0, 2);
        module.addPhotoPost(post);

    }

    return{
        handlerButtonEnter,
        handlerSearch,
        handlerLike,
        handlerDelete,
        handlerEdit,
        handlerAdd
    }
})();
