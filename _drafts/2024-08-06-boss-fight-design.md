---
layout: post
title:  "boss fight design"
date:   2024-8-3 16:18:00 -0600
tags:   game_dev retrospective projects music art code

description: "me talking about boss design incoherently"
date_edited: 2024-8-3 21:06:00 -0600
---
<!-- table of contents hack -->
<h2 style="color:transparent; font-size:1px;">(top of post)</h2>

Boss fights are cool, and I want an excuse to talk about them, so here we are.[^post_reason]

[^post_reason]: I like boss fights, don't get me wrong, but the predominant reason I made this post in the first place was so I could have a post that wasn't just one of my projects. (The first two posts don't count -- I was just filling in space.)

## why boss fights???

## boss that can attack minions

In Ascension, one common move I wanted the bosses to share is the ability to summon enemies. I'd love to say it was because it added to the vibe of the world, or that it added a layer of complexity and difficult that made fights more thrilling, but the truth is that it made creating bosses slightly faster, and when I have to implement the sound, animation, and design for each enemy, it does keep me sane.

Animation was probably the biggest factor out of the three, since that's the main part of the game development trifecta I struggle with the most (and also care about the least). A "summon attack" for Ascension was basically just the boss raising their weapon up in the air. Considering the art style, this was effectively one or two frames, which is *so much* easier than animating something like a whole sword swing, where not only do I have to actually make the art, I have to implement the hitboxes to pop in and out at the right times -- even worse when I have to go back and make edits because the design feels off.

Q: I thought this post was about boss design.

A: That's not a question.

*Anyways*, all of this leads to the issue of enemies and bosses stacking to force damage on to you. I don't remember where I heard this, but ideally you should be able to beat any boss you design without taking damage. The main purpose is to ensure that any attack you throw at the player can be countered, as an attack that cannot be avoided can be considered bad design. Testing out the first boss led me to think about that: turns out, enemies that fly at jumping height plus a boss that walks at... walking height, will lead to impossible to avoid attacks.

There's probably a ton of ways to mitigate this problem, but in my infinite wisdom (not wanting to redesign the attacks again), I thought of a solution:

What if boss attacks also hit regular enemies?

#### boring technical details of combat system

Within the game's combat system, every character is assigned a team. In other games, a team can usually be represented with something like a whole number, because the only thing that really matters when validating an attack is making sure that the teams don't match when an attack is detected. Ascension is different because I wanted "one-sided attacking" -- where one team can attack the other, but not the other way around.

So, how was this implemented?

There are four main teams in Ascension that a character can be a part of:

- Player
- Ally
- Enemy
- Boss

There's also two more for edge cases:

- All (can hit anyone, can be hit by anyone)
- Excluded (can't hit anyone, can be hit by anyone)

Player and Ally can be thought of as being on the same "team", along with Boss and Enemy. However, the Ally and Enemy are considered "lower status" teams and can be hit by someone on the Player and Boss team, respectively.

> Q: Why is there an ally team?

> A: Mostly for balance -- it felt weird that bosses could have allies they can hit but not the player. I got the idea from a weapon idea I had from a different game, where one of your companions was a flying fire ball of sorts that could be thwacked to deal damage to enemies.

<hr />

## footnotes
