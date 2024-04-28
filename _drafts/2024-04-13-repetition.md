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

*Final Frontier*, technically speaking, is the final boss theme of Monospace, though it wasn't specifically created for the game. The song had been in development on and off (mostly off) for a few years, and I ended up recreating it in a more retro-styled version to fit with the previous music of the game.

### iteration 1 - nes-style sfx test

<audio controls src="{{ site.url }}{{ site.baseurl }}/assets/audio/my_games/monospace_finalFrontier_1.mp3"></audio>

Around the time I was working on the first version of Final Frontier, I was really into those retro covers people would do by making music that could run on old game sound chips, like the NES, Sega Genesis, etc. Outside of just liking the sounds, I was always a fan at how they managed to make a song sound just as good on significantly weaker hardware.

At some point I downloaded a vst called JuceOPLVSTi, which is a free FM synthesizer. Honestly, I'm not sure how powerful it was (and I was even less sure then), but I only used it for the square and triangle wave, so it didn't really matter as long as it could do those two.

![interface of JuceOPL]({{ site.url }}{{ site.baseurl }}/assets/images/vsts/JuceOPLVSTi_interface.png)
*Interface of JuceOPLVSTi*

This first iteration cemented the form that future versions of the song would follow -- I was pretty happy with the overall progression that the song took, so that never really changed. The only thing I will note is that this version of the song was never technically completed -- near the end of the song, the melody cuts off because I didn't know what to put there, and I got bored of it before I could put something in.

NOTE: I don't write these blog posts in any specific order (right now, this is one of four drafts I've been periodically updating), so I may have mentioned this before, but:

This song demonstrates some (almost) universal patterns in the game music I've made.

Well, at least the ones that loop.

#### 1. Song Progression

Final Frontier basically introduces my bread-and-butter style -- it's my default pattern: an AAAB progression.

NOTE: There might be a better name for that?

Anyways, most of my songs revolve around a main chord progression (A)that gets swapped near the end of the loop (B) to build tension, then it loops.

Each section typically goes as follows:

- A (loud supporting instruments)
- A (supporting instruments become quiet, melody gets introduced)
- A (supporting instruments become louder)
- B (different chord progression)

#### 2. The Simpliest Dynamics Possible

Typically in music, you want to have the instrumentation in the background change overtime -- maybe the bass plays differently so it thumps a bit right before a chord change, or the lead guitar quiets down near the end of a section so a transition is smoother -- it just helps keeps things interesting.

Most of the time, I don't do any of that.

For videogame music, I don't have a specific theme in mind, but very often I do have a rough idea of the vibe I want. 