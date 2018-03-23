var post1 = {
    //id: '1',
    description: 'Austria, Wien',
    createdAt: new Date(2017, 03, 13, 16, 51),
    author: 'Mary',
    photoLink: '5.jpg',
    likes: [],//['ChesnAnastasia', 'Kate'],
    tags: ['#travel']
}
var post2 = {
    //id: '2',
    description: 'Russia, Sankt-Peterburg',
    createdAt: new Date(2017, 06, 07, 12, 49),
    author: 'ChesnAnastasia',
    photoLink: '4.jpg',
    likes: [],//['Mary', 'Kate'],
    tags: ['#travel', '#beauty']
}
var post3 = {
    //id: '3',
    description: 'Hungary, Pech',
    createdAt: new Date(2017, 09, 26, 16, 05),
    author: 'Mary',
    photoLink: '3.jpg',
    likes: [],//['ChesnAnastasia'],
    tags: ['#travel', '#beauty', '#happiness']
}
var post4 = {
    //id: '4',
    description: 'Hungary, Pech',
    createdAt: new Date(2017, 09, 26, 18, 24),
    author: 'ChesnAnastasia',
    photoLink: '2.jpg',
    likes: [],//['Mary', 'Kate'],
    tags: ['#happiness', '#travel']
}
var post5 = {
    //id: '5',
    description: 'Hungary, Pech',
    createdAt: new Date(2017, 09, 26, 16, 52),
    author: 'Kate',
    photoLink: '1.jpg',
    likes: [],//['ChesnAnastasia', 'Mary'],
    tags: ['#happiness', '#beauty']
}

moduleF.addPhotoPost(post1);
moduleF.addPhotoPost(post2);
moduleF.addPhotoPost(post3);
moduleF.addPhotoPost(post4);
moduleF.addPhotoPost(post5);
setHTML.setMainPage();

var options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};

window.module = (function () {

    let user = null;
    let tape = document.getElementsByClassName('Tape');

    let setTape = function(){
        tape = document.getElementsByClassName('Tape')[0];
    }

    let changeUser = function (newUser) {
        let User = document.querySelector('.User');
        if (newUser !== null && typeof newUser === 'string' && newUser !== '') {
            this.user = newUser;
            User.innerHTML = `
            <div class="user-profile">
                <p class="user-name">` + this.user + `</p>
            </div>
            <div class="buttons">
                <button class="b2" onclick="eventsMainPage.handlerAddNewPost()">Add new post</button>
                <button class="b3" onclick="eventsMainPage.handlerLogOut()">Log out</button>
            </div>`;
            User.style.height = '80px';
            User.style.margin = '65px 0 0 0';
        } else {
            this.user = null;
            User.innerHTML = `
            <div class="user-profile">
                <p class="user-name">Guest</p>
            </div>
            <div class="buttons">
                <button class="b4" onclick="eventsMainPage.handlerLogIn()">Log in</button>
            </div>`;
            User.style.height = '50px';
            User.style.margin = '75px 0 0 0';
        }
        tape.innerHTML = '';
        setTape();
        getPhotoPosts(0, 2);
    }

    let createPhotoPost = function (post) {
        var classes = document.getElementsByClassName("Tape");
        let myclass = classes[0];
        let newPost = document.createElement('div');
        newPost.id = post.id;
        newPost.className = 'post';
        newPost.innerHTML = `
        <img class="post-photo" src="` + post.photoLink + `" alt="photo">
        <div class="info-about-post">
            <div class="post-author-tags-description">
                <p>` + post.author + `</p>
                <p class="post-tags">` + post.tags + `</p>
                <p class="post-description">` + post.description + `</p>
            </div>
            <div class="date-time-icons">
                <div class="icons-block">
                    <i class="like-icon material-icons" onclick="events.handlerLike(this)">favorite</i>
                    <i class="edit-icon material-icons" onclick="events.handlerEdit(this)">mode_edit</i>
                    <i class="delete-icon material-icons" onclick="events.handlerDelete(this)">delete</i>
                </div>
                <button class="count-likes" onclick = "events.handlerCountLikes()">Show ` + post.likes.length + ` likes</button>
                <p>` + post.createdAt.toLocaleString("en", options) + `</p>
            </div>
        </div>`;
        let index = post.likes.indexOf(this.user);
        if (index !== -1) myclass.querySelector('.like-icon material-icons').style.color = 'rgb(160, 28, 85)';
        //else myclass.querySelector('.like-icon material-icons').style.color = 'rgb(55, 11, 30)';
        /*if (index !== -1) myclass.querySelector('.like-icon material-icons').innerHTML = 'favorite';
        else myclass.querySelector('.like-icon material-icons').innerHTML = 'favorite_border';*/
        myclass.appendChild(newPost);
        return newPost;
    }
    let addPhotoPost = function (photoPost) {
        if (moduleF.addPhotoPost(photoPost)) {
            createPhotoPost(photoPost);
            return true;
        } else return false;
    }

    let clearTape = function () {
        tape.innerHTML = '';
    }
    
    let getPhotoPosts = function (skip, top, filterConfig) {
        let posts = moduleF.getPhotoPosts(skip, top, filterConfig);
        count = posts.length;
        posts.forEach(item => {
            tape.appendChild(createPhotoPost(item));
        });
    }

    let removePhotoPost = function (id) {
        if (moduleF.removePhotoPost(id)) {
            tape.removeChild(document.getElementById(id));
            return true;
        }
        else return false;
    }

    let editPhotoPost = function (id, photoPost) {
        if (moduleF.editPhotoPost(id, photoPost)) {
            tape.replaceChild(createPhotoPost(moduleF.getPhotoPost(id)), document.getElementById(id));
            return true;
        }
        return false;
    }

    function removeAllChilds(){
        while(tape.innerHTML !== ''){
            tape.removeChild(document.getElementsByClassName('post'));
        }
    }

    return {
        user,
        setTape,
        changeUser,
        createPhotoPost,
        addPhotoPost,
        clearTape,
        getPhotoPosts,
        removePhotoPost,
        editPhotoPost,
        removeAllChilds
    }
})();

let dmy = new Date();
let lc = document.querySelector('.lc');
lc.innerHTML = 'Date of last change: ' + dmy.toLocaleString("en", options);

module.changeUser();

/*
module.changeUser();
module.changeUser('ChesnAnastasia');

module.addPhotoPost(post1);
module.addPhotoPost(post2);
module.addPhotoPost(post3);
module.addPhotoPost(post4);
module.addPhotoPost(post5);
module.addPhotoPost(post6);*/
/*
module.removePhotoPost('1');

module.editPhotoPost('2', { tags: ['#travel', '#beauty', '#positive'] });

module.clearTape();
module.getPhotoPosts(1, 3);
module.clearTape();
module.getPhotoPosts(0, photoPosts.length);*/

