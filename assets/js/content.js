var shadowWrapper_popup = document.createElement("div");
shadowWrapper_popup.id = "shadow-wrapper-popup", document.body.appendChild(shadowWrapper_popup);
shadowWrapper_popup.style = "position: fixed;width:100%;bottom: 0px;right: 0;z-index:99999999;";
const host_popup = document.getElementById("shadow-wrapper-popup"),
    shadowRootPopup = host_popup.attachShadow({
        mode: "open"
    });
loadPopup();
var btn = shadowRootPopup.getElementById('btn_help');
var modal = shadowRootPopup.getElementById('modal');
var close = shadowRootPopup.getElementById('close');
var send = shadowRootPopup.getElementById('btn_send');
var content = shadowRootPopup.getElementById('chat_contents');
var input = shadowRootPopup.getElementById('chat_input');
input.addEventListener("keyup", function() {
    if (this.value.length > 0) {
        send.src = logo_send_active;
    } else {
        send.src = logo_send;
    }
    console.log(this.value.length);

})

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        send.click();
    }
});

dragElement(btn);
btn.addEventListener('click', function() {

    modal.style.display = 'block';
    modal.style.left = (parseInt(btn.style.left) - 250) + 'px';
    modal.style.top = (parseInt(btn.style.top) - 520) + 'px';
    btn.style.backgroundColor = '#fff';
    btn.style.border = '2px solid #fdbe00';
})
close.addEventListener('click', function() {
    modal.style.display = 'none';
    btn.style.background = '#fdbe00';
    btn.style.border = 'none';
})
var first_msg = 0;
var account_name = 0;
var close_date = 0;
send.addEventListener('click', function() {
    if (input.value != '') {
        var human_head = document.createElement('div');
        human_head.className = 'human-heads';
        var bot_head = document.createElement('div');
        bot_head.className = 'robot-heads';

        var input_val = input.value
        human_head.innerText = input_val;
        content.appendChild(human_head);
        var pos = input_val.search(/opportunity/i);
        if (first_msg == 0) {
            if (pos >= 0) {
                bot_head.innerText = "Very well, here are the available options :";
                content.appendChild(bot_head);
                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Create a new Opportunity';
                option_head.onclick = function() {
                    var human_head = document.createElement('div');
                    human_head.className = 'human-heads';
                    human_head.innerText = 'Create a new Opportunity';
                    content.appendChild(human_head);
                    console.log(shadowRootPopup.querySelectorAll('.option-heads'));
                    shadowRootPopup.querySelectorAll('.option-heads').forEach(function(element) {
                        element.style.display = 'none';
                    })
                    var bot_head = document.createElement('div');
                    bot_head.className = 'robot-heads'
                    bot_head.innerText = "Do you want to be guided during this process or do you want us to do it for you?";
                    content.appendChild(bot_head);
                    var option_head = document.createElement('div');
                    option_head.className = 'option-heads';
                    option_head.innerText = 'Show me how to do it';
                    option_head.onclick = function() {
                        shadowRootPopup.querySelectorAll('.option-heads').forEach(function(element) {
                            element.style.display = 'none';
                        })
                        var human_head = document.createElement('div');
                        human_head.className = 'human-heads';
                        human_head.innerText = 'Show me how to do it';
                        content.appendChild(human_head);
                        var bot_head = document.createElement('div');
                        bot_head.className = 'robot-heads'
                        bot_head.innerText = 'Great! Click on the "GO" button whenever you are ready and a step-by-step guide will show up.';
                        content.appendChild(bot_head);
                        var bot_head = document.createElement('div');
                        bot_head.className = 'robot-heads'
                        bot_head.style.marginTop = '10px';
                        bot_head.innerText = 'Thank you for using LemonBot.';
                        content.appendChild(bot_head);
                        var option_head = document.createElement('div');
                        option_head.className = 'option-heads';
                        option_head.style.position = 'relative';
                        option_head.style.left = '45%';
                        option_head.innerText = 'GO';
                        content.appendChild(option_head);
                        shadowRootPopup.getElementById('chat_input').disabled = true;
                    }
                    content.appendChild(option_head);
                    var option_head = document.createElement('div');
                    option_head.className = 'option-heads';
                    option_head.innerText = 'Do it for me please';
                    option_head.onclick = function() {
                        shadowRootPopup.querySelectorAll('.option-heads').forEach(function(element) {
                            element.style.display = 'none';
                        })
                        var human_head = document.createElement('div');
                        human_head.className = 'human-heads';
                        human_head.innerText = 'Do it for me please';
                        content.appendChild(human_head);
                        var bot_head = document.createElement('div');
                        bot_head.className = 'robot-heads'
                        bot_head.innerHTML = 'Ok! I will need a few informations first :<br>What is the name of the opportunity?';
                        content.appendChild(bot_head);
                        // var bot_head = document.createElement('div');
                        // bot_head.className = 'robot-heads'
                        // bot_head.style.marginTop = '10px';
                        // bot_head.innerText = 'What is the name of the opportunity?';
                        // content.appendChild(bot_head);
                        account_name = 1;
                    }
                    content.appendChild(option_head);

                }
                content.appendChild(option_head);
                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Delete an Opportunity';
                content.appendChild(option_head);
                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Modify an Opportunity';
                content.appendChild(option_head);
                first_msg = 1;
            } else {
                bot_head.innerText = "Sorry, I did not understand, can you please reformulate?";
                content.appendChild(bot_head);
            }
        } else {
            if (input_val.toLowerCase() == 'create a new opportunity') {
                bot_head.innerText = "Do you want to be guided during this process or do you want us to do it for you?";
                content.appendChild(bot_head);
                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Show me how to do it';
                option_head.id = 'smhtdi';
                option_head.onclick = function() {
                    console.log(shadowRootPopup.querySelectorAll('.option-heads'));
                    var human_head = document.createElement('div');
                    human_head.className = 'human-heads';
                    human_head.innerText = 'Show me how to do it';
                    content.appendChild(human_head);
                    shadowRootPopup.querySelectorAll('.option-heads').forEach(function(element) {
                        element.style.display = 'none';
                    })
                    var bot_head = document.createElement('div');
                    bot_head.className = 'robot-heads'
                    bot_head.innerText = 'Great! Click on the "GO" button whenever you are ready and a step-by-step guide will show up.';
                    content.appendChild(bot_head);
                    var bot_head = document.createElement('div');
                    bot_head.className = 'robot-heads'
                    bot_head.style.marginTop = '10px';
                    bot_head.innerText = 'Thank you for using LemonBot.';
                    content.appendChild(bot_head);
                    var option_head = document.createElement('div');
                    option_head.className = 'option-heads';
                    option_head.style.position = 'relative';
                    option_head.style.left = '45%';
                    option_head.innerText = 'GO';
                    content.appendChild(option_head);
                    shadowRootPopup.getElementById('chat_input').disabled = true;
                }
                content.appendChild(option_head);
                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Do it for me please';
                content.appendChild(option_head);
            }

            if (input_val.toLowerCase() == 'show me how to do it') {
                bot_head.innerText = 'Great! Click on the "GO" button whenever you are ready and a step-by-step guide will show up.';
                content.appendChild(bot_head);
                var bot_head = document.createElement('div');
                bot_head.className = 'robot-heads'
                bot_head.style.marginTop = '10px';
                bot_head.innerText = 'Thank you for using LemonBot.';
                content.appendChild(bot_head);
                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.style.position = 'relative';
                option_head.style.left = '45%';
                option_head.innerText = 'GO';
                content.appendChild(option_head);
                shadowRootPopup.getElementById('chat_input').disabled = true;
            }
            if (account_name == 1 && close_date == 0) {
                var bot_head = document.createElement('div');
                bot_head.className = 'robot-heads';
                bot_head.innerText = 'Then what is the account name?';
                content.appendChild(bot_head);
                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Lemon Learning';
                option_head.onclick = function() {
                    var human_head = document.createElement('div');
                    human_head.className = 'human-heads';
                    human_head.innerText = 'Lemon Learning';
                    content.appendChild(human_head);
                    shadowRootPopup.querySelectorAll('.option-heads').forEach(function(element) {
                        element.style.display = 'none';
                    })
                    var bot_head = document.createElement('div');
                    bot_head.className = 'robot-heads'
                    bot_head.innerText = 'Got, and what is the close date?';
                    content.appendChild(bot_head);
                    close_date = 1;
                }
                content.appendChild(option_head);
                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Apptraktiv';
                content.appendChild(option_head);
            }
            if (close_date == 1) {
                var bot_head = document.createElement('div');
                bot_head.className = 'robot-heads';
                bot_head.innerText = 'Finally, may I know what is the current stage of this opportunity?';
                content.appendChild(bot_head);
                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Qualification';
                option_head.onclick = function() {
                    finalMsg('Qualification');
                }
                content.appendChild(option_head);

                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Value Proposition';
                option_head.onclick = function() {
                    finalMsg('Value Proposition');
                }
                content.appendChild(option_head);

                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Need Analysis';
                option_head.onclick = function() {
                    finalMsg('Need Analysis');
                }
                content.appendChild(option_head);

                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Prospection';
                option_head.onclick = function() {
                    finalMsg('Prospection');
                }
                content.appendChild(option_head);

                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Description marker indetification';
                option_head.onclick = function() {
                    finalMsg('Description marker indetification');
                }
                content.appendChild(option_head);

                var option_head = document.createElement('div');
                option_head.className = 'option-heads';
                option_head.innerText = 'Perception Analyses';
                option_head.onclick = function() {
                    finalMsg('Perception Analyses');
                }
                content.appendChild(option_head);

                function finalMsg(name) {
                    var human_head = document.createElement('div');
                    human_head.className = 'human-heads';
                    human_head.innerText = name;
                    content.appendChild(human_head);
                    shadowRootPopup.querySelectorAll('.option-heads').forEach(function(element) {
                        element.style.display = 'none';
                    })
                    var bot_head = document.createElement('div');
                    bot_head.className = 'robot-heads'
                    bot_head.innerText = 'We are all set! I have all the elements I need.';
                    content.appendChild(bot_head);

                    var bot_head = document.createElement('div');
                    bot_head.className = 'robot-heads'
                    bot_head.innerText = 'Click on the GO button to be redirected to the corresponsing page. Please review the informations on the form and click on "Save" to create the opportunity.';
                    content.appendChild(bot_head);

                    var option_head = document.createElement('div');
                    option_head.className = 'option-heads';
                    option_head.style.position = 'relative';
                    option_head.style.left = '45%';
                    option_head.innerText = 'GO';
                    content.appendChild(option_head);
                    shadowRootPopup.getElementById('chat_input').disabled = true;
                }
            }
        }

        input.value = '';
        send.src = logo_send;
        setTimeout(content.scrollTo(0, content.scrollHeight), 5000);
    }
})