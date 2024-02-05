---
layout: home
title: About
permalink: /about/
---
## introduction

Hi, I'm Rovi Decena.

#### what is this?

A blog, I think.

I like talking about stuff I do, and I thought it would be nice to be able to have it written down somewhere if I ever want to look back on it.

For the most part, I'll usually just be talking about projects I'm working on, or have finished. Unless I have a career change, this'll almost be guarenteed to be:

- code
- music
- game dev (basically music and code plus design)

While I only started working on this blog for me, I'll try my best to make stuff understandable to a wide audience, even if I start delving into technical topics.

## technical details

tl;dr: This blog was built using Jekyll.

Originally, I was going to use React with Vite, but I immediately discovered that attempting to create a blog using React without any actual server/backend in place was easier said than done. (do not ask me why i tried doing that idk either).

I didn't get very far with React, but my plans were to have markdown files stored in a folder, each .md file being a post. I also stored a CSV that acted as directory, storing the metadata of each file. Part of this metadata was the file path, which was how I was going to be able to dynamically load posts.

I spent several hours trying to jam this functionality before I gave up. I thought about making a database just because that's probably the most robust solution, but I gave up on that quickly after realizing I'd have to pay to store the database.

It's a good thing I switched to Jekyll, because it quite literally has every bit of functionality I could need out of the box. I would've scrapped this whole blog otherwise.

Could I have used React?

Probably.

It's not impossible or anything -- it would've been relatively easy to brute force it together, but I'd like to at least try and write decent code.