**Tmux** is a nifty tool that lets you split the terminal window using panes and hide processes so they don't die when you exit.

The default is `Ctrl-B`, but I've remapped this in my [dotfiles](https://github.com/ashwinreddy/dotfiles/blob/master/.tmux.conf#L1). To reload, use `:source-file ~/.tmux.conf`

# Panes

Use `"` for horizontal and `%` for vertical.

# Clearing

By default, tmux is kinda fucky when you use command k. For something more sensible, check out [this](https://superuser.com/questions/611373/with-tmux-on-osx-how-can-i-make-commandk-clear-more-gracefully)