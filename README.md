## Nofancy

Yet another [Hugo](http://hugo.spf13.com) blog theme made by love. It tries to use less design to provide full functionalities.


### Snapshots

List view:

<img src="https://raw.githubusercontent.com/gizak/nofancy/master/images/list.png" width="800">

Content view:

<img src="https://raw.githubusercontent.com/gizak/nofancy/master/images/content.png" width="800">

Mobile devices

<img src="https://raw.githubusercontent.com/gizak/nofancy/master/images/mobile.png" width="400">

### Basic ideas

Are you tired of all that emerging design concepts like flat or material? Are you sick of getting distracted when pages filled up with those fancy nonsense? Here I brought up a new distraction-free theme: nofancy.

Some ideas behind this:

1. Do subtraction instead of addition.

2. The blog's content matters (SNS things then after).

3. Clean, high readability and mobile-friendly.

4. Full stack support (sorting contents by categories, tags, series; Google Analytics; SNS & email links...)

### Syntax highlight
Use [GitHub flavoured markdown](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) to write your code snippets in posts, it will auto highlighted after running `hugo`.

### Config

Note that only posts in content/post will be displayed and the author setting in `config.toml` is slightly different:

```toml
baseurl = "http://hugo.spf13.com/"
title = "Hugo Themes"
#if not set copyright, default copyright template will be applied
copyright = "Copyright (c) 2008 - 2014, Steve Francia; all rights reserved."

[params]
	# See themes/nofancy/static/highlight/styles for available options
	# i.e. "default", "github", "monokai".
	highlight="Assign a syntax highlight style"
	
	# Controls what items are listed in the top nav menu
	# "none", or "categories"
	# If you have too many categories to fit in the top nav menu, set this to "none"
	topmenu="categories"
	
[author]
    name = "Steve Francia"
    github = "spf13"
    linkedin = "YOUR LINKEDIN ID"
    facebook = "YOUR FB ID"
    gaID = "YOUR Google Analytics Tracking ID"
    twitter = "YOUR TWITTER ID"
```

All your personal information is in `author` section. it also support SNS links including github, twitter, linkedin, facebook (just fill in your user id).

There is a fixed About page link on the top navbar which will bring user to your aboutme page. Just use `hugo new about` to write something about yourself!

__You are ready to go!__
