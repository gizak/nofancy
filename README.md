## Nofancy

Yet another [Hugo](http://hugo.spf13.com) blog theme made by love. It tries to use less design to provide full functionalities.


### Snapshots

List view:
![list](https://raw.githubusercontent.com/gizak/nofancy/master/images/snapshot.png)

Content view:
![content](https://raw.githubusercontent.com/gizak/nofancy/master/images/tn.png)

Mobile devices
![mobile](https://raw.githubusercontent.com/gizak/nofancy/master/images/mobile.png)

### Basic ideas

Are you tired of all that emerging design concepts like flat or material? Are you sick of getting distracted when pages filled up with those fancy nonsense? Here I brought up a new distraction-free theme: nofancy.

Some ideas behind this:

1. Do subtraction instead of addition.

2. The blog's content matters (SNS things then after).

3. Clean, high readability and mobile-friendly.

4. Full stack support (sorting contents by categories, tags, series; Google Analytics; SNS & email links...)


### Config

Note that only posts in content/post will be displayed and the author setting in `config.toml` is slightly different:

```toml
baseurl = "http://hugo.spf13.com/"
title = "Hugo Themes"
#author = "Steve Francia"
copyright = "Copyright (c) 2008 - 2014, Steve Francia; all rights reserved."

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
