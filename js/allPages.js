
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

    function setAddNewPostPage(date) {
        let tapeBlock = document.querySelector('.Tape-block');
        tapeBlock.innerHTML = `
        <link href="css/stylesAddPost.css" rel="stylesheet">
        <h1>Add new post</h1>
        <div class="new-post-block">
            <div class="no-image-block">
                <img class="download-image" src="no_icon.png" />
                <p class="date-of-creating">` + date.toLocaleString("en", options) + `</p>
            </div>
            <div class="write-info-block">
                <input class="tags-comments" type="text" placeholder="Add tags...">
                <input class="tags-comments" type="text" placeholder="Add comments...">
                <button class="bAdd">Add</button>
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
    
    return{
        setLogInPage,
        setAddNewPostPage,
        setMainPage
    }
})();
