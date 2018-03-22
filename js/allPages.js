
window.setHTML = (function(){
    function setLogInPage(){
        let main = document.querySelector('.Main');
        main.innerHTML = `
        <header>
            <img class="logo" src="logo.png" alt="logo" onclick="eventsMainPage.handlerLogoMP()">
        </header>
        <div class="pictures">
            <img class="img-picture" src="complexPictures.png" alt="photo">
        </div>
        <div class="LogIn-block">
            <div class="log-in-form">
                <h1>Authorization Form</h1>
                <div class="login">
                    <p class="login-password">Login:</p>
                    <input class="input-log-pass" id="login" type="text" placeholder="Enter your login" />
                </div>
                <div class="password">
                    <p class="login-password">Password:</p>
                    <input class="input-log-pass" id="password" type="text" placeholder="Enter your password" />
                </div>
                <button class="bEnter" onclick="events.handlerButtonEnter()">Enter</button>
            </div>
        </div>`;
    }

    function getFile() {
        document.getElementById("img-upload").click();
    }
    function updateImageDisplay() {
        var curFiles = document.getElementById("img-upload").files;
        if (curFiles.length !== 0) {
            document.querySelector('.edit-image').src = document.getElementById('img-upload').files[0].name;
        }
    }

    function setAddNewPostPage(date) {//no_icon.png
        let tapeBlock = document.querySelector('.Tape-block');
        tapeBlock.innerHTML = `
        <link href="css/stylesAddEditPost.css" rel="stylesheet">
        <h1>Add new post</h1>
        <div class="new-post-block">
            <div class="no-image-block">
                <img src="no_icon.png" class="download-image">
                <input id="image-url" type="text" placeholder="Link to photo">

                <p class="date-of-creating">` + date.toLocaleString("en", options) + `</p>
                
            </div>
            <div class="write-info-block">
                <input class="tags-comments" id="tags" type="text" placeholder="Add tags..." maxlenght = "200">
                <input class="tags-comments" id="descriptions" type="text" placeholder="Add descriptions..." maxlenght = "200">
                <button class="bAdd" onclick="events.handlerAdd()">Add</button>
            </div>
        </div>`;
    }
    
    function setEditPostPage(post) {
        let tapeBlock = document.querySelector('.Tape-block');
        tapeBlock.innerHTML = `
        <link href="css/stylesAddEditPost.css" rel="stylesheet">
        <h1>Edit post</h1>
        <div class="new-post-block">
            <div class="no-image-block">
                <img class="edit-image" src="` + post.photoLink + `" />
                <p class="date-of-creating">` + post.createdAt.toLocaleString("en", options) + `</p>
            </div>
            <div class="write-info-block">
                <input class="tags-comments" id="edit-tags" type="text" placeholder="` + post.description + `" maxlenght = "200">
                <input class="tags-comments" id="edit-descriptions" type="text" placeholder="` + post.tags + `" maxlenght = "200">
                <button class="bAdd">Save</button>
            </div>
        </div>`;
    }

    function setMainPage(){
        let main = document.querySelector('.Main');
        main.innerHTML = `
        <div class="User">
            
        </div>
        <header>
            <img class="logo" src="logo.png" alt="logo" onclick="eventsMainPage.handlerLogoMP()">
        </header>
        <div class="Tape-block">
            <div class="Filter">
                <p class="search">Search by:</p>
                <input id="author-name" type="text" placeholder="AuthorName">
                <input id="tags" type="text" placeholder="#tags">
                <input id="date" type=date placeholder="DD.MM.YYYY">
                <button class="bSearch" onclick="events.handlerSearch()">
                    <i class="search-icon material-icons">search</i>
                </button>
            </div>
            <div class="Tape">

            </div>
            <button class="bshow" onclick="eventsMainPage.handlerShowMore(this)">Show more...</button>
        </div>`;
    }

    function setTapeBlock(){
        let tapeBlock = document.querySelector('.Tape-block');
        tapeBlock.innerHTML = `
        <div class="Filter">
            <p class="search">Search by:</p>
            <input id="author-name" type="text" placeholder="AuthorName">
            <input id="tags" type="text" placeholder="#tags">
            <input id="date" type=date placeholder="DD.MM.YYYY">
            <button class="bSearch" onclick="events.handlerSearch()">
                <i class="search-icon material-icons">search</i>
            </button>
        </div>
        <div class="Tape">

        </div>
        <button class="bshow" onclick="eventsMainPage.handlerShowMore(this)">Show more...</button>`;
        
    }
    
    return{
        setLogInPage,
        setAddNewPostPage,
        setEditPostPage,
        setMainPage,
        setTapeBlock
    }
})();
