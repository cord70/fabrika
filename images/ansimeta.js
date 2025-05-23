//cord70.github.io/fabrika

//var googlecounter='UA-9493768-7';
var googlecounter='G-WXES3Q30MJ';
var disqusname='photo-ek';

// lazy counters
var scrolldone = false;
function onLazyScroll() {
    if (!scrolldone) {
        scrolldone = true; if (!navigator.onLine) return;

        // google analytics
        setTimeout(function () {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', googlecounter);
            var s = document.createElement("script");
            s.src = 'https://www.googletagmanager.com/gtag/js?id=' + googlecounter;
            s.async = true;
            document.body.appendChild(s);
        }, 500); // 500ms после scroll
    }
}
addScrollEvent(onLazyScroll);


var homepage = 'index.html';
var comments = 'Комментарии';


// disqus
var chat = document.getElementById('disqus_thread');
var disqusLoaded = false;
if (chat) {
    insertBeforeend(chat, '<div class="center"><button class="big" onclick="loadDisqus();">' +
        comments + '...</button></div>'); // на случай если не работает scroll	
    function onDisqusScroll(e) {
        // scrollingElement.scrollTop не работает в ie8
        var currentScroll = document.documentElement.scrollTop;
        if (!disqusLoaded && (currentScroll > chat.getBoundingClientRect().top - 100)) loadDisqus();
    }
    addScrollEvent(onDisqusScroll);

}
function loadDisqus() {
    disqusLoaded = true;
    window.disqus_config = function () {
        this.page.url = chat.getAttribute('data-url');
        this.page.identifier = chat.getAttribute('data-id');
    };
    var s = document.createElement('script');
    s.setAttribute('data-timestamp', +new Date());
    s.async = true; // чтобы страница не повисла на время загрузки
    s.src = 'https://' + disqusname + '.disqus.com/embed.js';
    (document.head || document.body).appendChild(s);
    insertBeforebegin(chat, '<h2 class="foot1">' + comments + '</h2>');
}


function addScrollEvent(func) {
    if (window.addEventListener) window.addEventListener('scroll', func, false);
    else if (window.attachEvent) window.attachEvent('onscroll', func);
    else window['scroll'] = func;
}


function insertBeforeend(elem, htmlText) { elem.insertAdjacentHTML('beforeend', htmlText); }
function insertBeforebegin(elem, htmlText) { elem.insertAdjacentHTML('beforebegin', htmlText); }


function show() { // отладочная функция, показываем строки в конце страницы
    var str = '<p>debug_output: ' + show.caller.name + '<br>';
    for (var i = 0; i < arguments.length; i++)
        str += '<span class="big"> ' + arguments[i] + '</span><br>';
    var body = document.getElementsByTagName('body')[0];
    if (body) insertBeforeend(body, str);
}
