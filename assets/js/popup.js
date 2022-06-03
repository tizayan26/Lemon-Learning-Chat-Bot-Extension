function loadPopup() {
    const html = document.createElement('html');
    var head = document.createElement('head');

    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
    head.appendChild(link);


    var style = document.createElement('style');
    style.innerHTML = `
    @font-face {
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 700;
        src: local('Helvetica Neue'), url('${chrome.runtime.getURL("assets/fonts/HelveticaNeueBold.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica Neue';
        font-style: italic;
        font-weight: 700;
        src: local('Helvetica Neue'), url('${chrome.runtime.getURL("assets/fonts/Helvetica 76 Bold Italic.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica Neue';
        font-style: italic;
        font-weight: 900;
        src: local('Helvetica Neue'), url('${chrome.runtime.getURL("assets/fonts/HelveticaNeueBlackItalic 1.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica Neue';
        font-style: italic;
        font-weight: 500;
        src: local('Helvetica Neue'), url('${chrome.runtime.getURL("assets/fonts/HelveticaNeueMediumItalic.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 900;
        src: local('Helvetica Neue'), url('${chrome.runtime.getURL("assets/fonts/Helvetica95Black.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 25 UltraLight';
        font-style: normal;
        font-weight: 400;
        src: local('Helvetica 25 UltraLight'), url('chrome.runtime.getURL("assets/fonts/Helvetica25UltraLight_22433.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 35 Thin';
        font-style: normal;
        font-weight: 400;
        src: local('Helvetica 35 Thin'), url('chrome.runtime.getURL("assets/fonts/Helvetica35Thin_22435.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 45 Light';
        font-style: normal;
        font-weight: 400;
        src: local('Helvetica 45 Light'), url('chrome.runtime.getURL("assets/fonts/Helvetica45Light_22437.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 55 Roman';
        font-style: normal;
        font-weight: 400;
        src: local('Helvetica 55 Roman'), url('chrome.runtime.getURL("assets/fonts/Helvetica55Roman_22439.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 65 Medium';
        font-style: normal;
        font-weight: 400;
        src: local('Helvetica 65 Medium'), url('chrome.runtime.getURL("assets/fonts/Helvetica65Medium_22443.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 25 UltraLight';
        font-style: italic;
        font-weight: 400;
        src: local('Helvetica 25 UltraLight'), url('chrome.runtime.getURL("assets/fonts/Helvetica26UltraLightItalic_22434.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 35 Thin';
        font-style: italic;
        font-weight: 400;
        src: local('Helvetica 35 Thin'), url('chrome.runtime.getURL("assets/fonts/Helvetica36ThinItalic_22436.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 45 Light';
        font-style: italic;
        font-weight: 400;
        src: local('Helvetica 45 Light'), url('chrome.runtime.getURL("assets/fonts/Helvetica46LightItalic_22438.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 55 Roman';
        font-style: italic;
        font-weight: 400;
        src: local('Helvetica 55 Roman'), url('chrome.runtime.getURL("assets/fonts/Helvetica56Italic_22440.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 65 Medium';
        font-style: normal;
        font-weight: 700;
        src: local('Helvetica 65 Medium'), url('chrome.runtime.getURL("assets/fonts/Helvetica85Heavy_22449.woff")}') format('woff")}');
    }
    @font-face {
        font-family: 'Helvetica 65 Medium';
        font-style: italic;
        font-weight: 700;
        src: local('Helvetica 65 Medium'), url('chrome.runtime.getURL("assets/fonts/Helvetica86HeavyItalic_22450.woff")}') format('woff")}');
    }
    
        /* Color Scheme*/
        :root {
            --marque: #fdbe00;
            --marque-hover: #ffce39;
            --marque-active: #eea800;

            --primary: #157ad8;
            --primary-hover: #118cff;
            --primary-active: #1361aa;
        }

        *{
            user-select: none; /* supported by Chrome and Opera */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
        }
        body {
            font-family: 'Helvetica Neue', sans-serif;
            position: relative;
            
        }
        .btn-help{
            position:fixed;
            z-index: 9999999;
            top: 80vh;
            left: 80vw;
            font-size:12px;
            font-weight:600;
            height: 30px;
            width:105px;
            padding: 0 10px;
            border-radius:4px;
            background-color: #fdbe00;
            border:none;
            box-shadow: 0px 2px 6px 2px #afadad;
        }
        .modal{
            position:fixed;
            display:none;
            box-shadow: 0px 2px 6px 2px #afadad;
            z-index:99999;
            height:500px;
            width:300px;
            background-color: #fff;
            border-radius:4px;
            left: 50vw;
            top: 4vh;
        }
        .header{
            background-color: #fdbe00;
            text-align: center;
            padding: 10px;
        }
        .subhead{
            padding: 10px 0;
            background-color: #f8f8f8;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
        }
        .logo{
            width:40%;
        }
        .content{
            height:345px;
            overflow:auto;
            padding: 10px;
        }
        .content::-webkit-scrollbar-track
        {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #F5F5F5;
            border-radius: 10px;
        }
        
        .content::-webkit-scrollbar
        {
            width: 10px;
            background-color: #F5F5F5;
        }
        
        .content::-webkit-scrollbar-thumb
        {
              border-radius: 10px;
            background-color: #F90;	
            background-image: -webkit-linear-gradient(45deg,
                                                      rgba(255, 255, 255, .2) 25%,
                                                      transparent 25%,
                                                      transparent 50%,
                                                      rgba(255, 255, 255, .2) 50%,
                                                      rgba(255, 255, 255, .2) 75%,
                                                      transparent 75%,
                                                      transparent)
        }
        
        .footer{
            padding:0 10px
        }
        .chat-input{
            // border: 1px solid rgb(0,0,0,0.1);
            background-color: #f4f4f4;
            border-radius:15px;
            width:100%;
            padding: 5px 10px;
        }
        .chat-input>input[type=text]{
            font-size:12px;
            color:#7b7b7b;
            font-weight:normal;
            height:30px;
            width:90%;
            outline: none;
            border: none;
            background-color: transparent;
        }
        .btn-send{
            height: 20px;
            cursor: pointer;
        }
        .robot-icon{
            height: 30px;
            width: 30px;
            border-radius: 15px;
            background-image: url("${robot}");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 18px;
            background-color: #157ad8;
            float:left;
            margin-right: 10px;
        }
        .robot-heads{
            color:#3a3a3a;
            font-size:12px;
            background-color: #eaeaea;
            padding: 14px;
            float: left;
            border-radius: 0 15px 15px;
            clear:both;
        }
        .human-heads{
            margin: 10px 0;
            font-size: 12px;
            background-color: #157ad8;
            padding: 14px;
            float: right;
            border-radius: 15px 0px 15px 15px;
            color: #fff;
            clear:both;
        }
        .option-heads{
            margin: 10px 0;
            font-size:12px;
            background-color: #fdbe00;
            color: #fff;
            padding: 10px 14px;
            float: left;
            border-radius: 20px;
            clear:both;
            cursor: pointer;
        }
        .close{
            font-size: 30px;
            flex-direction: row-reverse;
            position: absolute;
            right: 15px;
            color: #4c4b4b;
            top: 15px;
        }
        .close:hover{
            color: revert;
        }
    `;

    head.appendChild(style);

    var body = document.createElement('body');

    html.appendChild(head);
    html.appendChild(body);
    var html_content = `
        <button id="btn_help" class="btn-help">Need Help?</button>
        <div id="modal" class="modal">
                <div class="close" id="close">&times;</div>
                <div class="header">
                <img class="logo" src="${logo}"/>
                </div>
                <div class="subhead">
                    LemonBot
                </div>
                <div class="content" id="chat_contents">
                    <div class="robot-icon"></div><div class="robot-heads" style="clear:none">Hello, how can I help you today?</div>
                </div>
                <div class="footer">
                <div class="chat-input">
                    <input type="text" id="chat_input" placeholder="Type your message"><img class="btn-send" id="btn_send" src="${logo_send}"/>
                </div>
                </div>
        </div>
    `;
    body.innerHTML = html_content;
    shadowRootPopup.appendChild(html);
}