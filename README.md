# YeloTV Full browser player

Intended for usage with YeloTV browser interface.


If you are using multiple monitors and want to watch YeloTV fullscreen whilst doing other things on a different monitor, you're screwed. Our friends at Telenet chose  to put their Silverlight's player `StaysInFullScreenWhenUnfocused` property to `false`, and they
 [ won't tell why](https://twitter.com/tldnr/status/488061672473767937).

GitHub won't allow me to add a proper JavaScript bookmarklet, so you'll have to do the dirty work yourself. Make a new bookmark in your browser, and set the URL to `javascript:` followed by the contents of [bookmarklet.min.js](https://github.com/nickwaelkens/yelo-fullbrowser/blob/master/bookmarklet.min.js) and you're good to go! :+1:
