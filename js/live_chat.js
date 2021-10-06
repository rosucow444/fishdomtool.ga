$(document).ready(function() {
    var chat_username = '';

    var generator_sound = true;
    var use_proxy = false;

    $('.generator_sound_checkbox .switchery').click(function() {
        generator_sound = !generator_sound;
    });

    $('.use_proxy_checkbox .switchery').click(function() {
        use_proxy = !use_proxy;
    });


    var live_chat = {
        get_nicknames: function() {
            return ['Benito', 'Rivka', 'Hilde', 'Quyen', 'Ronny', 'Cornell', 'Rickie', 'Korey', 'Bridgette', 'Misti', 'Vanetta', 'Williemae', 'Deandre', 'Bari', 'Adriane', 'Concetta'];
        },
        get_messages: function() {
            return [
            	"How much Diamonds can I generate?",
            	"Anyone tried this already?",
            	"Does it work in android?",
            	"Why this is so easy lol?",
            	"This is incredible, never thought it would work.",
            	"I generated 250000 Diamonds, can't wait to start.",
            	"ios player here, works flawless.",
            	"Can someone help me with the survey?",
            	"OMG!",
            	"LOL!",
            	"ROFL!",
            	"Real",
            	"haha",
            	"easy",
            	"bro",
            	"What can I do here?",
            	"Shut up man I love this website",
            	"hi guys",
            	"How much Diamonds u made so far?",
            	"what about surveys on mobile phone?",
            	"Is this free?",
            	"How long do you have to wait?",
            	"Yea",
            	"No",
            	"I know",
            	"Exactly why this is so good",
            	"uhm", "maybe",
            	"I can't wait anymoreeee",
            	"Is this for real guys?",
            	"Thanks man I appreciate this.",
            	"Cool =)",
            	"<message deleted>",
            	"oh god",
            	"damn",
            	"I love this",
            	"Never imagined this would work but damn its so simple",
            	"saw this on forums pretty impressive",
            	"yo guys dont spam okay?",
            	"anyone up for a game?",
            	"you think this will be patched any time soon",
            	"pretty sure this is saving me a lot of money",
            	"any idea how long it takes for Diamonds and Coins to come?",
            	"so happy i found this",
            	"you guys watch nightblue?",
            	"I have seen this website on twitch stream i think",
            	"just wow",
            	"Where do I get my Diamonds and Coins?",
            	"a friend told me about this",
            	"thanks to whoever spams this website lol",
            	"how to complete human verification?",
            	"so far I am cool with this",
            	"can I get for free?",
            	"bye guys",
            	"okay i applied thank you",
            	"how much can you even have",
            	"incredible",
            	"ten minutes",
            	"need to go now",
            	"brb",
            	"You should give it a try",
            	"dont regret being here",
            	"this is fucking real",
            	"omg stop asking how to make Diamonds just get it from generator",
            	"guys this is so easy, it takes less than a minute",
            	"Can anyone do it for me? My username is smartgeek302",
            	"PM me pls",
            	"Fishdom sucks noobs haha",
            	"EA pls",
            	"today is lucky day",
            	"this is the best Diamonds generator website",
            	"i think everyone here got free Diamonds and Coins haha",
            	"when can I play I am new to this",
            	"Diamonds for free?",
            	"Do Diamonds expire?",
            	"I got big pack of Diamonds for my girlfriend making her happy and i dont pay for them lol",
            	"man servers are always down fuk it",
            	"funny how this works but it does like always",
            	"hi again im here for more Coins",
            	"i need some Coins what do i do",
            	"this worked lol",
            	"fuck i have no surveys left, had like 5k Diamonds already on my acc",
            	"where do all of you come from",
            	"nice page for Fishdom Diamonds",
            	"i was stuck in survey had to do again but it worked then",
            	"thank you for giving me Coins!",
            	"saw on stream yo",
            	"generator working fine",
            	"i love this generator so much",
            	"this makes my game more enjoyable i hope",
            	"thank you all for helping me out bros",
            	"thanks to whoever pmed me it worked",
            	"thank you for messaging me man",
            	"when do you wanna play?",
            	"imagine all the people waiting fo this",
            	"any idea if this still works tomorrow",
            	"best generator out thereee!!",
            	"is this twitch chat?",
            	"wow really many people online here",
            	"hi all",
            	"anyone not here for free Diamonds lol?",
            	"what is the newest version",
            	"who is up for a chat hehe?",
            	"i play in EU",
            	"check my profile i am rich",
            	"when is game start men?",
            	"even noobs can do this",
            	"when did you guys start playing Fishdom?",
            	"i can only recommend this stuff",
            	"great i can be the best",
            	"can't wait for it to start!",
            	"where do you come from?",
            	"does this giveaway go forever?",
            	"pretty good Coins generator guys",
            	"i begin to like this very much. third pack i unlocked",
            	"worth it",
            	"ok cool",
            	"i see no limits on how Diamonds you can get thats so epic",
            	"which country are you playing in guys?",
            	"think so man",
            	"Likely, but I think one day this will fail",
            	"this still works at the moment",
            	"i havent seen this before but im impressed with the result!",
            	"my boyfriend will freak out :D",
            	"nice ",
            	"Fishdom download dont appaer every time but i think its there to have enough money for the website to buy get the Diamonds codes",
            	"actually i had no problem with any Fishdom download ever, just try?",
            	"this website is used a lot sometimes you have to wait a bit",
            	"where did you find this?",
            	"so when will Coins start?",
            	"ty for the Coins opt in guys!",
            	"i wish i found this earlier",
            	"i wasted so much money on buying Diamonds lol - good this is free here",
            	"how come i dont see any trolls here",
            	"just dodged queue for this",
            	"any bro needs help?",
            	"i would do screenshot but maybe you report me then",
            	"are there new weapons in this expansion pack?",
            	"did you try 250000 pack yet? I used on NA but maybe other locations can use it too",
            	"Fishdom sucks hahahaha",
            	"i feel like this will be the best! it was starting to get boring lol",
            	"think so", "what you can get Coins here for free?",
            	"ok sounds good enough for me bros",
            	"anyone reddit here?",
            	"Okay I believe this works cus I just logged in and saw my Diamonds ROFL",
            	"I had a bit trouble with some survy thing but no problem if you just choose an easy",
            	"my friends on facebook spam this like every day they are rly happy about it",
            	"Where do i put my phone",
            	"what?",
            	"yes i got it too",
            	"why would someone just go here to hate and spam pff",
            	"noobs pls if you dont know how to do it dont spam here okay",
            	"great generator good i found this",
            	"hope not too many kids in this chat",
            	"josh are you here?",
            	"unlocking takes some time for me",
            	"derp",
            	"i am curious is this legit?",
            	"Works on Android?",
            	"had to reload page before it worked",
            	"used this three times and applied for 3x 250000 Diamonds, lol see you ingame suckers",
            	"i see most people here write positive things it is true?",
            	"hi my english no good i here get Diamonds?",
            	"Exactly what I think",
            	"you can have reginalds IQ and still be able to get Diamonds",
            	"when i came first to this website i was like most of you guys just spamming here the chat, in the end im glad that i tried it because now for next year or so i am not leaving my room",
            	"if you want a proof add me on skype",
            	"thank you!", "are you not bored at all? i cant wait for expansion pack",
            	"i am looking for a friend please pm me",
            	"i thought my friend wanted to fool me with this website link. but you can rly get Diamonds here if you dont mess up with the survey part",
            	"aasdasdasd",
            	"Ok so I am back and what I can say is that i got my Coins! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it",
            	"worth got my Diamonds key",
            	"i agree",
            	"i am fine with having free Diamonds how about you",
            	"what i always disliked is when you get close to release date and they move it even further",
            	"from all websites ive been on this is the first and probably the only one which rly gives you the  Diamonds",
            	"i have tried too many surveys in my life finally i got lucky here ",
            	"yeah free Diamonds is cool",
            	"you like this?",
            	"What you think about all this",
            	"I want to play from korea",
            	"wow i waited ages to get a server transfer now here it shouldnt be a problem anymore",
            	"lol ProSmrad32 is here? you were in my skype! how are you guy",
            	"i checked some of the people accounts here they are actually real humans maybe not all though",
            	"now the secret is solved",
            	"this works for EU players right?",
            	"hey i am a newbie will i be able to play?",
            	"i signed up, now the waiting starts :/ i hope they will launch sooner", "can i do this with my nexus phone?",
            	"...^^",
            	"fucking hilarious some people",
            	"Diamonds here I come",
            	"wow 10 minutes ago this was empty now all people here wtf",
            	"i dont rly like instagram anymore",
            	"god thanks for this generator finally",
            	"i can imagine that", "okay",
            	"not sure if i understood? its all free right?",
            	"I would be so sad if this did not work because it took a while, thankfully it worked then",
            	"uhm", "so you can buy 10 Diamonds now guys?",
            	"i think with the new game might become somewhat more interesting",
            	"fucking helll! got my Diamonds!.",
            	"yayy",
            	"servers i tested this and its working",
            	"i usually choose the first offer in the list because its normally the easiest one",
            	"i think some offers easier in countries like USA", "if you chose an offer make sure to fully complete it, or you will not sign up for Diamonds guys!"
            ];
        },
        get_random_from_items: function(items) {
            return items[Math.floor(Math.random() * items.length)];
        },
        add_welcome_message: function() {
            $('.chat__items').append('<div class="chat__item"><div class="chat__content"><span class="chat__message">Welcome to the chating links or spamming will result in a kick.</span></div></div>');
        },
        add_message: function() {
            $('.chat__items').append('<div class="chat__item"><div class="chat__content"><span class="chat__nickname">' + live_chat.get_random_from_items(live_chat.get_nicknames()) + ':</span><span class="chat__message">' + live_chat.get_random_from_items(live_chat.get_messages()) + '</span></div></div>');
        },
        add_custom_message: function(username, message) {
            $('.chat__items').append('<div class="chat__item"><div class="chat__content"><span class="chat__nickname">' + username + ':</span><span class="chat__message">' + message + '</span></div></div>');
        },
        send_message: function() {
            if (chat_username != '') {
                var chat_message = $('input#form_chat_message').val();

                if (chat_message != '') {
                    live_chat.add_custom_message(chat_username, chat_message);
                    $('input#form_chat_message').val('');

                    if (generator_sound) {
                        ion.sound.play("swash");
                    }
                }
            } else {
                $('.full_overlay').addClass('full_overlay--show').hide().fadeIn(300);
                $('.popup#nick_username').addClass('popup--show').hide().fadeIn(500);
            }
        },
        timer_message: function() {
            setInterval(function() {
                var delay_values = [3000, 5000, 8000];
                var delay = delay_values[Math.floor(Math.random() * delay_values.length)];

                setTimeout(function() {
                    live_chat.add_message();
                }, delay);
            }, 2000);
        },
    }

    live_chat.add_welcome_message();
    live_chat.add_message();
    live_chat.timer_message();

    $(document).keypress(function(e) {
    	var chat_is_active = $('.nav__item:nth-child(3)').hasClass('nav__item--active');
    	var chat_username_form_active = $('.popup#nick_username').hasClass('popup--show');

        if (e.which == 13 && chat_is_active && !chat_username_form_active) {
            live_chat.send_message();
        }
    });

    $('.live_chat_send_trg').click(function() {
        live_chat.send_message();

        return false;
    });

    $('.save_chat_username_trg').click(function() {
        var username = $('input#form_chat_username').val();

        if (username != '') {
            chat_username = username;

            $('input#form_chat_username').val('');
            $('.full_overlay').removeClass('full_overlay--show');
            $('.popup#nick_username').removeClass('popup--show');
        }

        return false;
    });

});
