---
layout: post
title:  "retrospective: ascension."
date:   2024-02-18 14:49:00 -0600
tags:   game_dev retrospective project music art code

description: the game that never was
# date_edited: 2024-02-07 19:06:00 -0600
---

![]({{ site.url }}{{ site.baseurl }}/assets/images/ascension/ascension_city_of_decay.png)
*concept art: Ascension, the City of Decay*

Ascension was the name of a game that I worked on between April 2022 and September 2023. It was a retro-inspired side scroller about a living being falling into the world of souls. The concept wasn’t particularly creative, and the gameplay wasn’t going to be groundbreaking, but I thought that with a little bit of love and a lot of time, I could make something that was pretty good.

As with a lot of games, it never got finished, only the first world being completed before I scrapped it.

## why this?

I think game development is a bit brutal in the sense that sometimes, all that matters is what you release. Games are a medium of art that are experienced by playing them, so if there's nothing to play, what's the point?

I occasionally see people in industry post about this -- long-time developers with gaps in their work history that they can't go into because they can't talk about a game that'll never see the light of day.

It probably makes a bit more sense to talk about something I've already released, just so you could try it out yourself, but... meh. Ascension isn't the most recent game project I'm working on, but it was in production for a long time, and I've always wanted to talk about it at length, so I figured it would make for a good game project retrospective.

## game overview

As with a lot of my game ideas, it started with a game mechanic.

Ascension's initial idea came when I played Shotgun King, an entry in the Ludum Dare 50 game jam. The game made you play as a black king chess piece equipped with a shotgun, defeating waves of other chess pieces. At the end of each wave, the player would be given a few pairs of cards to choose from. One card in the pair would buff the player, but the other would buff the board, usually by adding new pieces.

I thought this system was pretty fun, and I got addicted to the game for a few days. The risk and reward that came from each card pair made upgrades a decision I had to think a bit more deeply about -- deciding what type of upgrades I wanted to focus on, figuring out what new chess pieces would screw me over later on and avoiding them, etc. 

Ascension's initial idea was to use a similar risk-reward card upgrade system in fast-paced real-time combat instead of, y'know, chess's turn-based nature. The game would've taken place in an arena surrounded by void, with enemies constantly pelting you. Rather than the round/wave-based nature of Shotgun King, Ascension would've paused to give you your choice of cards based on the amount of eliminations you've gotten and amount of time that's passed.

At least, that was the original idea.

### there's a story??

Story isn't really something I consider when coming up with game ideas, but my plans for Ascension became big enough where it would've been pretty awkward for the player if they were walking around with no endgoal in mind.

Ascension took place in a world I called Voidspace; a hidden dimension categorized by the floating islands and geometry floating around, seemingly held by nothing. Voidspace acted as a prison for souls -- a crumbling world that held no way out for those unfortunate enough to find themselves there. The never ending passage of time rendered most of the inhabitants mindless, their bodies deformed due to some force within Voidspace.

Players would've play as Biscuit -- one of the first people to arrive in Voidspace in a long time. Though the world itself seems to be out to get him, with souls rushing him down when they see him, he lives long enough to learn about a location known as the Ascension Point -- the highest spot in Voidspace, rumoured to house the only chance of escape.

Simple story, but good enough to serve the gameplay.

I liked to summerize the concept as "a living being falling into the world of souls." It sounded pretty cool in my head, although I just realized that just sounds like the premise of the film Coco.

Whoops.

### spectre

Generally, whenever game concepts grow large enough to start having a story, I typically pair the main character with a sidekick that helps them throughout their journey. I like having characters that players rely and care about, and having a buddy to help you out throughout whatever journey you're going through is a pretty easy way of doing that.

In Ascension, that character was Spectre.

When you first see Spectre, you'd probably think he's a relatively intimidating individual. He stands several times taller than Biscuit, floats above the ground, and is fully cloaked, hiding his appearance.

In other words -- he looks like the grim reaper.

The plan was to have him be a wandering traveller that would make increasinly common appearances. The player would be able to see him from a distance in the start of the game, and talk to him for the first time before the first boss, where Spectre would give you a warning, along with a tip to aid you.

As the game progresses, you'd get the oppertunity to talk with Spectre. He's most commonly found at campfires he's set up, where he'll talk to you for a bit, or react to anything you have on you. This is also when you'd discover that Spectre is actually a skeleton.
 
### character component system

The majority of development was focused on something I called the character component system – CCS for short. I’m trying to write posts to be readable for non-programmers/musicians/[insert technical field i will or have posted about], but this section may be a little difficult to translate, so bear with me.

Most of my programming experience had been from beginner Unity engine tutorials, and it turns out that it wasn’t the best way to create decent code. The main thing that I thought about was trying to reduce the amount of “unique” components; instead of creating a PlayerMovement, ZombieMovement, and SkeletonMovement component, I’d just make a GroundMovement component that would handle all three.

CCS was that type of abstraction but focused on characters in the game; the player character, enemies, and non-playable characters. Early on I was focused on avoiding components that were “player-specific,” so I created the Rise Input Character Component System Bridge component – or RICCS bridge for short – in order to actually have the movement component respond to the player’s input.

Q: Rise Input?

A: The namespace (code category name) of the input code. I couldn’t name it “Input” because Unity already had that taken, and the game is called Ascension, so…

The root of the system was these abstract components (blueprints for other components) I referred to as Controllers. These would represent the root features that characters could have.

So what were these features?
- Movement
- Combat
- Abilities

Movement handled the baseline movement of a character; Abilities were (usually) non-damaging moves that overrode the Movement component when an Ability was taking over, and Combat was intended to be separate from the two, existing on its own, (usually) not connected to movement.

All of these controllers were just abstract classes that other classes inherited from, but the end goal was to have swappable features that didn’t affect the other components. Abilities would override the Movement component whether it was GroundMovement or AirMovement, and Combat wouldn’t care at all since it was it’s own thing.

Of course, actually developing this project made me realize that having all these predefined rules on how stuff should be coded shaped the ideas that I planned on implementing in the game. The player’s attacks being completely separate from their movement wasn’t exactly intentional, but the code was built for it, and I didn’t bother pushing against it. 

### enemy design

### boss design

The bosses were awkward to implement because the whole concept of Abilities and Attacks being separate things from each other. Turns out, instead of thinking of bosses as having Abilities and Attacks that they activated separately, it makes more sense to think of bosses as having moves that they execute depending on the state of the fight. My solution was to allow attacks to activate abilities, and if needed, have abilities that activated other abilities. It was pretty hacky, but it worked well enough for the most part.

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
