---
layout: post
title:  "concept: perpetual song remixing"
date:   2024-04-7 14:38:00 -0600
tags:   design_talk game_design game_dev

description: "basically what toby fox did with megalovania"
toc: true
date_edited: 2024-04-13 14:35:00 -0600
---

<!-- table of contents hack -->
<h2 style="color:transparent; font-size:1;">(top of post)</h2>

## megalovania??

- explanation of megalovania -

The main thing that I find interesting about Megalovania is that Toby Fox has used it several times, each time a different version created.

- The original was a romhack of Earthbound called *Radiation Halloween Hack*.
- A remix was created for Homestuck, a webcomic Toby Fox worked on as a composer.
- And of course, for Undertale, as Sans's boss theme.

SIDENOTE: Appearently there was a remix of the original Earthbound Megalovania, released for another fangame called *MOTHER: Cognitive Dissonance*. My brain fried a bit trying to figure out the history of Megalovania, because I was about to include it then I realized that it wasn't actually made by Toby Fox.

## post format

NOTE:

I think the nature of this blog post -- embedding audio files between blocks of text -- makes the flow kind of wonky. I also do want to show the songs in their entirety, partially just so you can listen to the full tracks (none of these versions have been uploaded to any music streaming services), and also just for archiving purposes.

For each iteration, I'll have the audio embedded below the header text. Feel free to listen to the iteration as you read.

Or not.

That might make it a bit difficult to understand my points, but why not?

## Final Frontier

*Final Frontier*, technically speaking, is the final boss theme of Monospace, though it wasn't specifically created for the game. The song had been in development on and off (mostly off) for a few years, and I ended up recreating it in a more retro-styled version to fit with the other music of the game.

### 1. JuceOPLVSTi demo

<audio controls src="{{ site.url }}{{ site.baseurl }}/assets/audio/my_games/monospace_finalFrontier_demo.mp3"></audio>

Around the time I was working on the first version of Final Frontier, I was really into those retro covers people would do by making music that could run on old game sound chips, like the NES, Sega Genesis, etc. Outside of just liking the sounds, I was always a fan at how they managed to make a song sound just as good on significantly weaker hardware.

At some point I downloaded a vst called JuceOPLVSTi, which is a free FM synthesizer. Honestly, I'm not sure how powerful it was (and I was even less sure then), but I only used it for the square and triangle wave, so it didn't really matter as long as it could do those two.

![interface of JuceOPL]({{ site.url }}{{ site.baseurl }}/assets/images/vsts/JuceOPLVSTi_interface.png)
*Interface of JuceOPLVSTi*

Most of my videogame tracks typically revolve around this "AAAB" pattern, where there's three iterations of one chord progression (A), before introducing a (B) section that both introduces tension and provides a clean ending to loop back to the start of the song.

Each section typically goes as follows:

- A (loud supporting instruments)
- A (supporting instruments become quiet, melody gets introduced)
- A (supporting instruments become louder)
- B (different chord progression)

This structure is used a lot in my music because it usually reflects my thought process when I come up with songs for an area.

1. (0:00) ok i need an track; let's make the base
2. (0:18) i need melody now so this isn't just ambience
3. (0:38) i need a longer melody
4. (0:58) wait hold on i need something else so this isn't boring

NOTE: The B section is twice as long as the A sections. I didn't want to write it as AAABB because it implies there's some difference between the first B and second B. Also, not all my songs have the B section twice as long.

### 2. Sawtooth/Guitar Solo

<audio controls src="{{ site.url }}{{ site.baseurl }}/assets/audio/my_games/monospace_finalFrontier_sawtooth.mp3"></audio>

At some point I got interested in games where the boss fights have a lot of buildup towards them. For example, in Hollow Knight, when you fight one of the final bosses, you slowly reach the boss room by travelling through a long empty corridor, the lights activating as you walk past.

For this version of Final Frontier, I thought I could do something similar, by having more an ambient introduction before the main part of the song started. It wasn't too complex; just the pads and strings in the background playing, but I did slow the tempo down as it reached the end of the progression and held down the last chord, which made a pretty cool transition.

I think.

The first thing you'll probably notice is that the instrumentation is different. I was interested in having a more epic sound, so I swapped the JuceOPLVSTi with string and guitar samples. I kept the lead as a square wave because it still felt right to me. I also swapped the drums around to match the vibe.

> (Listening to it now, the drums feel oddly punch -- definitely to an amount I wouldn't do now -- but, there's also not much support from the instrumentation, so I probably wanted to compensate for it somehow.)

Other than the slow introduction at the beginning of the song, the other new area of the song was a second loop of the progression. I was trying to solve the issue of:

> How do you keep a track interesting but still loopable*?

*One of the quirks of video game music is you can't typically have the energy move around too much, as you're typically trying to fit a certain theme. That isn't a hard and fast rule, of course, but I almost always follow this guideline.

My solution was pretty simple:

> Loop the song, but change the melody the second time around.

It helps the song from becoming stale over successive loops, and also lets me have more fun with making melodies, one of the more fun parts of music production.

For this version, I ended up doing this by adding a sawtooth (guitar inspired?) solo of sorts at the start of the second loop. I'm not particularly good at making solos so I employed the technique of "notes go brr" to make it sound acceptable. When the "verse" of the song comes in (the second and third A of the progression), I keep the sawtooth lead, but have it act as a countermelody to add variety to the square lead, which is unchanged between the two different loops.

As with the first version, this track was never fully finished either. At the very least, it's only the second B section that's missing, so I just copy-pasted the first section and faded it out.

### 3. Monospace

<audio controls src="{{ site.url }}{{ site.baseurl }}/assets/audio/my_games/monospace_finalFrontier_main.mp3"></audio>

And now, the actual boss theme.

This third iteration goes back to that retro style that my initial demo was trying to give, with the square wave dominance and bit-crushed drums.

This could probably be considered a spoiler so... play my game?

> (why am i advertising on my own blog???)

There's a lot of composition differences in this one because the song had a direct connection with the boss fight. In Monospace, the final boss was structured as a gauntlet, where your objective was to survive the entire fight. The arena was a cage, with three rocks floating on a pool of lava. Throughout the fight, turrets would spawn in and out based on the status of the song, and at some point, the rocks would do the same.

For a final boss without an actual final boss to fight, I thought it was actually pretty good. The fact that the arena changed in sync with the music made it feel like a rhythm game, which I thought was funny.

The most interesting part of this version is that the B section melodies got revamped to fit in with the boss fight. The B section works by having two melodies go back and forth with eachother, but in order to make the arena rapidly change when the B section was playing, I cut the lengths of each melody by half, making each part change twice as fast.

Other than that, I suppose the main different thing is that the second and third A section in the second loop (totally not difficult to follow whoops) was cut. This was made during the development of the boss, as I didn't like how long it was getting.

In isolation, I think the B section absolutely pops, and with the context of the boss fight, it really does make it more frantic. However, I wasn't exactly sure if the frantic pace really fit the vibe of the whole song. So I ended up making another version, just for me.

### 4. Scrapped Final Boss

> Q: There's more???

> A: yup

As you play through Monospace, you gain new abilities. These abilities would always come in the transition between worlds, so you would be able to experiment with them right away in the main level, then have your skills tested in the world boss.

- In the starting cave, you unlock the *Dash*
- then you get the *Double Jump*,
- then lastly, the *Wall Mount*.

The Dash and Double Jump displayed this relatively straight-forward in their respective boss fights -- the Dash was a horizontal arena where you had to dash to avoid long sections of spikes, while the Double Jump was use extensively in a vertical arena that had you avoiding a rising pit of lava.

The Wall Mount was never used to the same extent as the other movement abilities, which was mainly due to a (self-imposed) lack of time. The third/final world of Monospace was built during Slow Jam Winnipeg 2023, a month long game jam to start a new project you haven't had time to work on, or finish up a longer term project.

The initial plans for the final boss were to have it split into segments -- the first segment would be the same boss fight, but when you would drop down at the end, you would be taken to a second, harder segment. This segment would be focused on an idea I've had for awhile: "A platformer without ground."

I'm not exactly sure where I got this idea from, but it probably just comes from how the majority of platformers will have you slowly grow in movement power overtime. This progression almost always results in gameplay that makes you spend less time on "solid ground" -- giving you a double, triple, or even quadruple jump; temporary flight, dashing, all of that fun stuff.

So, I figured -- what if you just keep the player in the air?

The idea was never to remove the idea of "ground to step on," but moreso to make a platformer where there was this constant battle between being a safe position and being able to move. In the final boss, this would be shown by the second half of the fight taking place on a few floating walls, with spikes at the top and bottom so you couldn't step on them.

Technically, your feet are on somewhere, and you're in a stable spot, but the reliability of this position was countered by the fact that you couldn't climb up and down the walls, leading to this situation where in order to reliably move, you kept having to pop into a more dangerous position (being above a bottomless pit) in order to move around.

I was a big fan of this idea at the time -- and I still very much am -- but my skills weren't at the level where I could implement this in a way where it would be fun enough to serve as the climax to my game. Also, I didn't have much time to add it either, so the second part was scrapped.