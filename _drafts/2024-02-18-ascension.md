---
layout: post
title:  "retrospective: ascension."
date:   2024-02-18 14:49:00 -0600
tags:   game_dev retrospective projects music art code

description: the game that never was
toc: true
# date_edited: 2024-02-07 19:06:00 -0600
---

![concept art of Ascension]({{ site.url }}{{ site.baseurl }}/assets/images/my_games/ascension_city_of_decay.png)
*concept art*

Ascension was the name of a game that I worked on between April 2022 and September 2023. It was a retro-inspired side scroller about a living being falling into the world of souls. The concept wasn’t particularly creative, and the gameplay wasn’t going to be groundbreaking, but I thought that with a little bit of love and a lot of time, I could make something that was pretty good.

As with a lot of projects I've worked on, it never got completed. Only one world was finished before it was scrapped.

## why this?

I think game development is a bit brutal in the sense that sometimes, all that matters is what you release. Games are a medium of art that are experienced by playing them, so if there's nothing to play, what's the point?

I occasionally see people in industry post about this -- long-time developers with gaps in their work history that they can't go into because they can't talk about a game that'll never see the light of day.

It probably makes a bit more sense to talk about something I've already released, just so you could try it out yourself, but... meh. Ascension isn't the most recent game project I'm working on, but it was in production for a long time, and I've always wanted to talk about it at length, so I figured it would make for a good game project retrospective.

> note: I'll be leaving footnotes for topics I briefly go over but where I thought a more technical explanation would be interesting. I planned for these to be optional, and not required to understand the article.

> I'll also just be putting footnotes for random stuff I find interesting.

## game overview

Ascension's initial idea came when I played [Shotgun King: The Final Checkmate](https://punkcake.itch.io/shotgun-king), an entry in the Ludum Dare 50 game jam. The game made you play as a black king chess piece equipped with a shotgun, defeating waves of other chess pieces. At the end of each wave, the player would be given a few pairs of cards to choose from. One card in the pair would buff the player, but the other would buff the board, usually by adding new pieces.

![screenshot from shotgun king's press kit, displaying an example of two possible card pairs you could get at the end of a wave.]({{ site.url }}{{ site.baseurl }}/assets/images/other_games/shotgun_king_press_kit_screen_5.png)
*An example of two possible card pairs you could get at the end of a wave in Shotgun King.*

I thought this system was pretty fun, and I got addicted to the game for a few days. The risk and reward that came from each card pair made upgrades a decision I had to think a bit more deeply about -- deciding what type of upgrades I wanted to focus on, figuring out what new chess pieces would screw me over later on and avoiding them, etc. 

Ascension's initial idea was to use a similar risk-reward card upgrade system in fast-paced real-time combat instead of, y'know, chess's turn-based nature. The game would've taken place in an arena surrounded by void, with enemies constantly pelting you. Rather than the round/wave-based nature of Shotgun King, Ascension would've paused to give you your choice of cards based on the amount of eliminations you've gotten and amount of time that's passed.

At least, that was the original idea.

### story

Ascension took place in a world called Voidspace (internally, anyways); a hidden dimension categorized by the floating islands and geometry floating around, seemingly held by nothing. Voidspace acted as a prison for souls -- a crumbling world that held no way out for those unfortunate enough to find themselves there. The never ending passage of time rendered most of the inhabitants mindless, their bodies deformed due to some force within Voidspace.

Players would've play as Biscuit -- one of the first people to arrive in Voidspace in a long time. Though the world itself seems to be out to get him, with souls rushing him down when they see him, he lives long enough to learn about a location known as the Ascension Point -- the highest spot in Voidspace, rumoured to house the only chance of escape.

Simple story, but good enough to serve the gameplay.

I liked to summerize the concept as "a living being falling into the world of souls." It sounded pretty cool in my head, although I just realized that just sounds like the premise of the film Coco.

Whoops.
 
### character component system

The majority of development was focused on something I called the character component system – which I will refer to as "CCS" for short.

> (I’m trying to write posts to be readable for non-programmers/musicians, but this section may be a little difficult to translate, so bear with me.)

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

### linear vs non-linear levels

### boss design

Implementing bosses ended up being a decent challenge because I had to work around the whole "ability, attack, movement" trifecta that CCS was designed around. When designing bosses, I focused on what "moves" they had; the separate actions that they had at their disposal. The issue was that abilities and attacks were treated as different sytems within characters and could activate/deactivate without caring about the other system, which wasn't really how I wanted to plan out the bosses.

> (I don't think that most developers would ever design a boss like that, but I'm not a game designer so I don't know.)

My solution was pretty straight forward -- use attacks for everything.

It wouldn't be a direct issue if I kept the attack/ability system split, but I had to choose one of them to act as the primary system for a boss's moveset. Attack was the option I went for simply because the animation for characters prioritzed attacks above all else,[^animation_priority] so using Attack would prevent a boss's move from being overridden by another animation.

For attacks that used movement abilities, I had the attack animations directly ask the character's ability controller to activate the desired ability.[^attack_ability_conflicts]

The whole character component system seems sort of half-baked in retrospect but it got me to start thinking of code modularity; having one class do one thing.

So, who were the bosses?

[^animation_priority]: <details>
        <summary> technical explanation: character animation </summary>
        <p>
            Character animations were treated as a separate systed (stored in a different namespace) as the character component system. I would call it the animation system, but calling it a system would be overstating it &#8211; it was just a collection of scripts, each script being the animation controller for a character.
        </p>
        <p>
            Even though the scripts weren't directly connected, I designed the animation controllers to follow a hierarchy based on what character components were active.
        </p>
        <p>
            The priority for characters animation were:
        </p>
        <ol>
            <li>Attacks (highest)</li>
            <li>Ability</li>
            <li>Movement (lowest/default)</li>
        </ol>
        <p>
            Characters were graphically represented as a single sprite, so this layered/priority system was necessary to choose the current sprite of the character. Attacks and abilities wouldn't be able to have conflict within themselves because those controllers forced a max of one attack/ability to be active at any given time. This didn't cause any issues for the artstyle (for me, anyways). The only real issue was that there was no graphical distinction between attacks done in the air versus on the ground, but that was more of a design choice that I kept as a quirk of the art.
        </p>
        <p>
            (also because it would've been more effort to implement lol)
        </p>
    </details>

[^attack_ability_conflicts]: <details>
    <summary> boss ability conflicts </summary>
    <p>
        Because characters never actually activate abilities themselves, but instead request if an ability can be activated through their ability controller, it is technically possible for a boss's attack to partially fail if the ability they attempted to activate was denied (e.g., dash attack without the dash). I never implemented code to handle how any of the bosses would react, so if it occured, the boss would continue on as if nothing had happened.
    </p>
    <p>
        Though technically possible, the two bosses that were implemented never had this issue, as abilities are almost always shorter than the length of an attack, so there was always enough time between abilities. This was also never an issue for enemies, as no enemies were implemented that used the character attack system.
    </p>
    </details>

#### Galar -- The Vanguard Commander

The first boss you encounter is Galar, a knight for the once prosperous monarchy in Voidspace. You meet him when you enter a passage to grant you access to a walled off city. Though a crumbling mess of his old self, he remembers his duties, and appears before you, blocking your passage, axe in hand.

![player and galar inside galar's boss arena]({{ site.url }}{{ site.baseurl }}/assets/images/my_games/ascension_galar.png)
*Boss arena of Galar, with the player in view.*

Galar's main purpose design-wise was to ensure that you had a solid foundation in combat. He's the first enemy in the game to have a weapon, and he's able to really threaten you because of it. One way I hammered this home was ensuring his first (and one of his more common) attack was his Slam -- an overhead axe swing. It was clearly telegraphed, but it would absolutely punish you if you decided to ignore it, hitting you for a quarter of your health and knocking you back significantly.

While Galar hits harder than a regular enemy, he's actually quite slow to give players chance room to breathe. This gets mitigated when he's down to two-thirds of health, where he switches to his phase two attacks. One of these is his Summon ability, which summons three flying enemies. As with the nature of the game, they aren't particularly threatening alone, but letting Galar spawn waves of enemies without finishing off the ones basically guarentees you'll get a big chunk of your health picked off.

(Part of the reason I added the Summon ability was to have an easy way to add to a boss without adding in more attack animations.)

> (...but, y'know -- it's also pretty fun.)

I thought Galar was a good boss. Not particularly interesting, but he was a fair fight that was a cake walk when you were comfortable with combat. My favourite move from him is his spin attack that he starts using when he's around the last third of his health -- quickly dashing towards the player, spinning his axe around his chest. It catches you off guard the first time, but it's rewarding and fun to be able to jump above it, catching him with a slash as you drop down behind him.

#### Dicter -- The Champion

When coming up with bosses, I thought it would be cool if all the bosses were connected in some way -- rather than being just stronger-than-normal souls.

One of the ideas I had was to name the bosses after the five stages of grief, then figure it out from there. I didn't actually follow this very well -- Galar's name was Grief initially because I thought grief was one of the stages (...don't ask how).

For the second boss, I chose anger.

(insert Dicter image)


#### [creature above the void] -- ???

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
