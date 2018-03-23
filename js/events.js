window.events = (function(){

    function handlerButtonEnter(){
        let newUser = {};
        newUser.login = document.getElementById('login').value;
        newUser.password = document.getElementById('password').value;

        let isNewUser = false;
        users.forEach(element => {
            if (element.login === newUser.login && element.password === newUser.password) isNewUser = true;
        });

        if (isNewUser){
            setHTML.setMainPage();
            module.changeUser(newUser.login);
        } else {
            alert(`This user is not registered. Please check the correctness of the entered data. (login length = 3-20 symbols, password length = 6-10 symbols)`);
        }
    }

    function handlerSearch(){
        let authorName = document.getElementById('author-name').value;
        let htags = document.getElementById('tags').value;
        let date = document.getElementById('date').value;

        console.log(authorName);
        console.log(tags);
        console.log(date);

        let filter = {};
        if (authorName != '' && authorName != null) filter.author = authorName;
        if (date != '' && date != null) filter.createdAt = date.DateTimeFormat;
        if (htags != '' && htags != null) {
            filter.tags = htags.match(/\#[a-z0-9_]{1,20}/g);
            if (htags === null) filter.tags = [];
        }

        setHTML.setTapeBlock();
        module.setTape();
        module.getPhotoPosts(0, photoPosts.length, filter);
        document.getElementsByClassName('bShow').style.display = 'none';
        
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
            alert(`You can not put like, edit and delete the post. Please login to get this opportunity.`);
        }
    }
    function handlerCountLikes(){

    }
    function handlerDelete(obj){
        if (module.user !== null){
            let parent = obj.parentNode;
            parent = parent.parentNode;
            parent = parent.parentNode;
            parent = parent.parentNode;
            module.removePhotoPost(parent.id);
        } else {
            alert(`You can not put like, edit and delete the post. Please login to get this opportunity.`);
        }
    }

    let id;
    function handlerEdit(obj){
        if (module.user !== null){
            let parent = obj.parentNode;
            parent = parent.parentNode;
            parent = parent.parentNode;
            parent = parent.parentNode;
            console.log(parent.createdAt);
            setHTML.setEditPostPage(moduleF.getPhotoPost(parent.id));
            id = parent.id;
        } else {
            alert(`You can not put like, edit and delete the post. Please login to get this opportunity.`);
        }
    }
    function handlerSave(obj){
        let htags = document.getElementById('edit-tags').value;
        let descr = document.getElementById('edit-descriptions').value;
        let link = document.getElementById('image-url2').value;

        let parent = obj.parentNode;
        parent = parent.parentNode;
        parent = parent.parentNode;
        parent = parent.parentNode;

        if (descr != '') moduleF.getPhotoPost(id).description = descr;
        if (link != '') moduleF.getPhotoPost(id).photoLink = link;
        if (htags != '') htags = htags.match(/\#[a-z0-9_]{1,20}/g);
        else if (htags === null) moduleF.getPhotoPost(id).tags = [];

        setHTML.setTapeBlock();
        module.setTape();
        module.getPhotoPosts(0, 2);
    }

    function handlerAdd(){
        let htags = document.getElementById('tags').value;
        let descr = document.getElementById('descriptions').value;
        let link = document.getElementById('image-url1').value;
        let post = {};
        post.id = '10';
        post.description = descr;
        post.createdAt = new Date();
        post.author = module.user;
        post.photoLink = link;
        post.likes = [];
        let regex1 = /\#[a-z0-9_]{1,20}/g;
        post.tags = htags.match(regex1);
        if (post.tags === null) post.tags = [];
        if (moduleF.validatePhotoPost(post) && typeof(moduleF.getPhotoPost(post.id)) === 'undefined'){
            setHTML.setTapeBlock();
            module.addPhotoPost(post);
            module.setTape();
            module.getPhotoPosts(1, 1);
        } else {
            alert("Check the correctness of the entered data.");
        }
    }


    return{
        handlerButtonEnter,
        handlerSearch,
        handlerLike,
        handlerCountLikes,
        handlerDelete,
        handlerEdit,
        handlerSave,
        handlerAdd
    }
})();
