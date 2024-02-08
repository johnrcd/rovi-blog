---
layout: post
title:  "retrospective: ascension."
date:   2024-02-07 19:06:00 -0600
tags:   game_dev retrospective project music art code

description: "the game that never was."
# date_edited: 2024-02-07 19:06:00 -0600
---

Ascension was the name of a game that I worked on between April 2022 and September 2023. It was a retro-inspired side scroller about a living being falling into the world of souls. The concept wasn’t particularly creative, and the gameplay wasn’t going to be groundbreaking, but I thought that with a little bit of love and a lot of time, I could make something that was pretty good.

As with a lot of games, it never got finished, only the first world being completed before I scrapped it.
## why?
I think game development is a bit brutal in the sense that all that really matters is what you release. It doesn’t matter how well you’ve crafted your game if no one can actually play it. Not that other forms of art don’t have the same issue -- but game development combines a bunch of different skill sets to produce a single work. In that sense, projects tend to be bigger in scale, taking more time, energy resources. Game development also tends to suffer heavily from scope creep; after all, it’s hard to say no to something in the name of fun.

Ascension was created at a point where I had a lot of confidence in my ability to complete a game project. My last project before it was Monospace, a platformer that took five months to complete. It was released on itch.io, and I was proud that I was able to make a game of decent length (two hours approx.) all by myself. Because of that, I wanted to push myself for my next game -- something more difficult, more fulfilling -- more fun.

It never ended up reaching those heights.

I don’t want Ascension to be buried in my hard drive like every other one of my unfinished game projects. Even if the game isn’t done -- if development has stopped, I want something to come out of all of the work I've done.

Ascension isn't the most recent game project I've worked on (always tinkering with new stuff!), but it was in production for a long time, and I've always wanted to talk about it -- more than just mentioning bits and pieces of development here and there.

<!--- TO DO:::: --->

## objectives

(something about being a programmer first game developer second)

The main issue I had with Monospace was the quality of my code. The quality of my code was secondary to the features, which is fine for games, but I’ve always thought of myself as a programmer first, game developer second, so it was something I had some frustration with.

Ascension was planned to be a long-term project with a focus on improving my skills as a software developer. Code documentation, creating a robust architecture, and all that coding jazz. Part of this was related to the timeframe of the project – it’s difficult to feel technical debt when you’re only working on a project for a week or a month, but I figured that half a year into the project, I’d be at the point where I’d start seriously questioning half of the coding choices I made.

(I did)

## timeline

### initial concept
Ideas for Ascension started popping in my head when I played Shotgun King, a roguelike about a King duking it out against waves of chess pieces. At the end of each wave, both the player and enemies would be given a card that gives buffs in some way, such as giving the King increased ammo capacity, or adding in pieces on the board.. These cards came in pairs, and the player had the option of picking what pair to pick. I thought this was a cool risk-reward system that made the game pretty exciting.

Ascension’s initial idea was to use the dual-upgrade system in a 2D action-platformer, rather than the turn-based nature of chess. The game would take place in an arena, with enemies popping in nearby. The opportunity to select a new card pair would pop up when the player killed enough enemies, or if enough time passed. 

The story wasn’t fleshed out (it never was), but the overall concept revolved around a corrupted world that acted as a jail – the world of souls referring to how the word effectively trapped anyone unfortunate enough to fall in. Because of this, most of the inhabitants have gone insane, deforming into mindless monsters.  The player character – codenamed Biscuit – is the most recent arrival, but discovers (somehow) that the way out is through the Ascension point.

### character component system

The majority of development was focused on something I called the character component system – CCS for short. I’m trying to write posts to be readable for non-programmers/musicians/[insert technical field i will or have posted about], but this section may be a little difficult to translate, so bear with me.

Most of my programming experience had been from beginner Unity engine tutorials, and it turns out that it wasn’t the best way to create decent code. The main thing that I thought about was trying to reduce the amount of “unique” components; instead of creating a PlayerMovement, ZombieMovement, and SkeletonMovement component, I’d just make a GroundMovement component that would handle all three.

CCS was that type of abstraction but focused on characters in the game; the player character, enemies, and non-playable characters. Early on I was focused on avoiding components that were “player-specific,” so I created the Rise Input Character Component System Bridge component – or RICCS bridge for short – in order to actually have the movement component respond to the player’s input.

Q: Rise Input?

A: The namespace (code category name) of the input code. I couldn’t name it “Input” because Unity already had that taken, and the game is called Ascension, so…

The root of the system was these abstract components (blueprints for other components) I referred to as Controllers. These would represent the root features that characters could have.

So what were these features?
Movement
Combat
Abilities

Movement handled the baseline movement of a character; Abilities were (usually) non-damaging moves that overrode the Movement component when an Ability was taking over, and Combat was intended to be separate from the two, existing on its own, (usually) not connected to movement.

All of these controllers were just abstract classes that other classes inherited from, but the end goal was to have swappable features that didn’t affect the other components. Abilities would override the Movement component whether it was GroundMovement or AirMovement, and Combat wouldn’t care at all since it was it’s own thing.

Of course, actually developing this project made me realize that having all these predefined rules on how stuff should be coded shaped the ideas that I planned on implementing in the game. The player’s attacks being completely separate from their movement wasn’t exactly intentional, but the code was built for it, and I didn’t bother pushing against it. 

The bosses were awkward to implement because the whole concept of Abilities and Attacks being separate things from each other. Abilities focused on movement and 

That’s another thing I realized when working on Ascension – how I didn’t really want to be both the planner and the builder at the same time. I like programming, building the big systems, and I like music production because I have the freedom to just put in elements haphazardly based on what my ear sounds good, but game development is both a problem solving and creative endeavor, and I realized that I just wanted to problem solve more than do any creative thinking. Of course, I enjoy the planning part of game making – it would be weird to be a game developer without having a few dream game ideas in your head – but in a team, I’d just want to be the guy that gets stuff implemented.

Oh yeah. I also discovered I do not like working on a game alone.

Teams are very cool.

The whole character component system seems sort of half-baked in retrospect but it got me to start thinking of code modularity; having one class do one thing.
### burnout
Some point in developing the
### death by frustration

## post mortem

## release…?

OST
another one falls.
Voyage
The Damned
the first test
Awoken
Descent IV
Knight’s Wrath
Call of the Void
the only path left
Quicksteps
