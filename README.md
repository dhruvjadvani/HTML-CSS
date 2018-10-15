<!DOCTYPE html>
<style>@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);

html, body {
    background: #e5e5e5;
    font-family: 'Lato', sans-serif;
    margin: 0px auto;
}
::selection{
  background: rgba(82,179,217,0.3);
  color: inherit;
}
a{
  color: rgba(82,179,217,0.9);
}

/* M E N U */

.menu {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 50px;
    background:#9932CC;
    z-index: 100;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.back {
    position: absolute;
    width: 90px;
    height: 50px;
    top: 0px;
    left: 0px;
    color: #fff;
    line-height: 50px;
    font-size: 30px;
    padding-left: 10px;
    cursor: pointer;
}
.back img {
    position: absolute;
    top: 5px;
    left: 30px;
    width: 40px;
    height: 40px;
    background-color: rgba(255,255,255,0.98);
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    margin-left: 15px;
    }
.back:active {
    background: rgba(255,255,255,0.2);
}
.name{
    position: absolute;
    top: 3px;
    left: 110px;
    font-family: 'Lato';
    font-size: 25px;
    font-weight: 300;
    color: rgba(255,255,255,0.98);
    cursor: default;
}
.last{
    position: absolute;
    top: 30px;
    left: 115px;
    font-family: 'Lato';
    font-size: 11px;
    font-weight: 400;
    color: rgba(255,255,255,0.6);
    cursor: default;
}

/* M E S S A G E S */

.chat {
    list-style: none;
    background: none;
    margin: 0;
    padding: 0 0 50px 0;
    margin-top: 60px;
    margin-bottom: 10px;
}
.chat li {
    padding: 0.5rem;
    overflow: hidden;
    display: flex;
}
.chat .avatar {
    width: 40px;
    height: 40px;
    position: relative;
    display: block;
    z-index: 2;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    background-color: rgba(255,255,255,0.9);
}
.chat .avatar img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    background-color: rgba(255,255,255,0.9);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
.chat .day {
    position: relative;
    display: block;
    text-align: center;
    color: #c0c0c0;
    height: 20px;
    text-shadow: 7px 0px 0px #e5e5e5, 6px 0px 0px #e5e5e5, 5px 0px 0px #e5e5e5, 4px 0px 0px #e5e5e5, 3px 0px 0px #e5e5e5, 2px 0px 0px #e5e5e5, 1px 0px 0px #e5e5e5, 1px 0px 0px #e5e5e5, 0px 0px 0px #e5e5e5, -1px 0px 0px #e5e5e5, -2px 0px 0px #e5e5e5, -3px 0px 0px #e5e5e5, -4px 0px 0px #e5e5e5, -5px 0px 0px #e5e5e5, -6px 0px 0px #e5e5e5, -7px 0px 0px #e5e5e5;
    box-shadow: inset 20px 0px 0px #e5e5e5, inset -20px 0px 0px #e5e5e5, inset 0px -2px 0px #d7d7d7;
    line-height: 38px;
    margin-top: 5px;
    margin-bottom: 20px;
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.other .msg {
    order: 1;
    border-top-left-radius: 0px;
    box-shadow: -1px 2px 0px #D4D4D4;
}
.other:before {
    content: "";
    position: relative;
    top: 0px;
    right: 0px;
    left: 40px;
    width: 0px;
    height: 0px;
    border: 5px solid #fff;
    border-left-color: transparent;
    border-bottom-color: transparent;
}

.self {
    justify-content: flex-end;
    align-items: flex-end;
}
.self .msg {
    order: 1;
    border-bottom-right-radius: 0px;
    box-shadow: 1px 2px 0px #D4D4D4;
}
.self .avatar {
    order: 2;
}
.self .avatar:after {
    content: "";
    position: relative;
    display: inline-block;
    bottom: 19px;
    right: 0px;
    width: 0px;
    height: 0px;
    border: 5px solid #fff;
    border-right-color: transparent;
    border-top-color: transparent;
    box-shadow: 0px 2px 0px #D4D4D4;
}

.msg {
    background: white;
    min-width: 50px;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.07);
}
.msg p {
    font-size: 0.8rem;
    margin: 0 0 0.2rem 0;
    color: #777;
}
.msg img {
    position: relative;
    display: block;
    width: 450px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #eee;
    transition: all .4s cubic-bezier(0.565, -0.260, 0.255, 1.410);
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
@media screen and (max-width: 800px) {
    .msg img {
    width: 300px;
}
}
@media screen and (max-width: 550px) {
    .msg img {
    width: 200px;
}
}

.msg time {
    font-size: 0.7rem;
    color: #ccc;
    margin-top: 3px;
    float: right;
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
.msg time:before{
    content:"\f017";
    color: #ddd;
    font-family: FontAwesome;
    display: inline-block;
    margin-right: 4px;
}

emoji{
    display: inline-block;
    height: 18px;
    width: 18px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: -7px;
    margin-right: 2px;
    transform: translate3d(0px, 3px, 0px);
}
emoji.please{background-image: url(https://imgur.com/ftowh0s.png);}
emoji.lmao{background-image: url(https://i.imgur.com/MllSy5N.png);}
emoji.happy{background-image: url(https://imgur.com/5WUpcPZ.png);}
emoji.pizza{background-image: url(https://imgur.com/voEvJld.png);}
emoji.cryalot{background-image: url(https://i.imgur.com/UUrRRo6.png);}
emoji.books{background-image: url(https://i.imgur.com/UjZLf1R.png);}
emoji.moai{background-image: url(https://imgur.com/uSpaYy8.png);}
emoji.suffocated{background-image: url(https://i.imgur.com/jfTyB5F.png);}
emoji.scream{background-image: url(https://i.imgur.com/tOLNJgg.png);}
emoji.hearth_blue{background-image: url(https://i.imgur.com/gR9juts.png);}
emoji.funny{background-image: url(https://i.imgur.com/qKia58V.png);}

@-webikt-keyframes pulse {
  from { opacity: 0; }
  to { opacity: 0.5; }
}

::-webkit-scrollbar {
    min-width: 12px;
    width: 12px;
    max-width: 12px;
    min-height: 12px;
    height: 12px;
    max-height: 12px;
    background: #e5e5e5;
    box-shadow: inset 0px 50px 0px rgba(82,179,217,0.9), inset 0px -52px 0px #fafafa;
}

::-webkit-scrollbar-thumb {
    background: #bbb;
    border: none;
    border-radius: 100px;
    border: solid 3px #e5e5e5;
    box-shadow: inset 0px 0px 3px #999;
}

::-webkit-scrollbar-thumb:hover {
    background: #b0b0b0;
  box-shadow: inset 0px 0px 3px #888;
}

::-webkit-scrollbar-thumb:active {
    background: #aaa;
  box-shadow: inset 0px 0px 3px #7f7f7f;
}

::-webkit-scrollbar-button {
    display: block;
    height: 26px;
}

/* T Y P E */

input.textarea {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 50px;
    z-index: 99;
    background: #fafafa;
    border: none;
    outline: none;
    padding-left: 55px;
    padding-right: 55px;
    color: #666;
    font-weight: 400;
}
.emojis {
    position: fixed;
    display: block;
    bottom: 8px;
    left: 7px;
    width: 34px;
    height: 34px;
    background-image: url(https://i.imgur.com/5WUpcPZ.png);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 100;
    cursor: pointer;
}
.emojis:active {
    opacity: 0.9;
}</style>
<html>
<div class="menu">
            <div class="back"><i class="fa fa-chevron-left" </i> <img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
            <div class="name">Rushikesh</div>
            <div class="last">18:09</div>
        </div>
    <ol class="chat">
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p>hello!</p>
        <p> can we go to pizza hut????<emoji class="pizza"/></p>
        <time>20:17</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        
        <p>too many asignments to write <emoji class="books"/></p>
        <p>sorry</p>
        <time>20:18</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p>you don't have a time?? <emoji class="suffocated"/></p>
        <time>20:18</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>we will go after viva</p>
        <p>not now </p>
        <time>20:18</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p><emoji class="scream"/></p>
        <p>Please <emoji class="please"/></p>
        <time>20:18</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <img src="https://i.imgur.com/QAROObc.jpg" draggable="false"/>
        <time>20:19</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png"  draggable="false"/></div>
      <div class="msg">
        <p>love <emoji class="hearth_blue"/></p>
        <time>20:20</time>
      </div>
    </li>
        <div class="day">Hoy</div>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>where are you?</p>
        <time>18:03</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p>hostel</p>
        <time>18:07</time>
      </div>
    </li>
   
    <input class="textarea" type="text" placeholder="Type here!"/><div class="emojis"></div></html>
