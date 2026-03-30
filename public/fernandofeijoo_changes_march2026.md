# Website Changes — fernandofeijoo.com — March 2026
> Structured task list for Claude Code. Work through each task sequentially. 
> Tasks marked ⚠️ NEEDS MANUAL INPUT require assets or info from Fernando before they can be completed — collect them all at the end without blocking other tasks.

---

## TASK 1 — HOME: Fix paper label in Prints section

**Location:** Home page → "Prints" section heading area (top of collection)

**Change:**
- Find the text "Sommerset" → replace with **"Somerset archival papers"**

**Verification:** Check the text renders correctly on both desktop and mobile.

---

## TASK 2 — HOME: Add Cromer Pier image to home slider (widescreen)

**Location:** Home page → hero/slider component → widescreen view only

**Change:**
- Add the **Cromer Pier collage** image to the slider
- Only show on widescreen (follow the same breakpoint logic as existing slides)

**⚠️ NEEDS MANUAL INPUT:** Fernando needs to supply the Cromer Pier collage image file.

---

## TASK 3 — GLOBAL: Fix logo font consistency in Prints collections

**Location:** All individual print detail pages under `/works/prints/`

**Issue:** When navigating from a collection overview to an individual print, the logo typography changes from **EXO 2** to a different font.

**Change:**
- Ensure the logo uses **EXO 2** consistently on every page (collection view AND individual print view)
- Check and unify the font declaration in the header/nav component

---

## TASK 4 — PRINTS: Add missing full text to ALL prints

**Location:** All collections under `/works/prints/`

**Issue:** Only the first line of text was copied for each print — the full description is missing throughout.

**⚠️ NEEDS MANUAL INPUT:** Fernando to supply the complete text for each print. This applies site-wide across all collections. Claude Code cannot fill this in without the source text. Fernando should provide a document with each print name + full description text.

---

## TASK 5 — CITIZENS & WASTRELS: Fix sizes + label for Contracted

**Location:** `/works/prints/citizens-and-wastrels` → print "Contractor" / "Contracted"

**Changes:**
1. Rename print title: **"Contractor"** → **"Contracted"**
2. Set correct size: **50 x 40 cm (W x H)**
3. Set correct medium: **Linocut** (NOT reduction linocut)

---

## TASK 6 — CITIZENS & WASTRELS: Fix size for Driven

**Location:** `/works/prints/citizens-and-wastrels` → "Driven"

**Changes:**
1. Size: **50 x 40 cm (W x H)**
2. Medium: **Linocut** (not reduction linocut)

---

## TASK 7 — CITIZENS & WASTRELS: Fix size for Wacked

**Location:** `/works/prints/citizens-and-wastrels` → "Wacked"

**Changes:**
1. Size: **50 x 40 cm (W x H)**
2. Medium: **Linocut** (not reduction linocut)

---

## TASK 8 — CITIZENS & WASTRELS: Add size + fix medium for Busted

**Location:** `/works/prints/citizens-and-wastrels` → "Busted"

**Changes:**
1. Add size: **50 x 40 cm (W x H)**
2. Medium: **Linocut** (not reduction linocut)

---

## TASK 9 — CITIZENS & WASTRELS: Group and order the 4 Gangster series

**Location:** `/works/prints/citizens-and-wastrels`

**Change:**
- Place the 4 gangster prints together in a row, in this exact order:
  1. Contracted
  2. Driven
  3. Wacked
  4. Busted

---

## TASK 10 — CITIZENS & WASTRELS: Fix rollover medium for gangster prints

**Location:** `/works/prints/citizens-and-wastrels` → hover/rollover text on Contracted, Driven, Wacked, Busted

**Change:**
- Medium on rollover: change to **"Linocut"** (remove "Reduction" from all four)

---

## TASK 11 — CITIZENS & WASTRELS: Add size for Laying down the Law

**Location:** `/works/prints/citizens-and-wastrels` → "Laying down the Law"

**Change:**
- Add size: **60 x 30 cm (W x H)**

---

## TASK 12 — CITIZENS & WASTRELS: Update Death Dances placeholder text

**Location:** `/works/prints/citizens-and-wastrels` → "Death Dances" section

**Change — replace current text with:**
> This project is currently being developed, visit again soon to see the outcomes of this collection inspired by Hans Holbein's Dance of Death.

---

## TASK 13 — GAMES & PLAYERS: Add missing size for Hierarchi of Anarchy

**Location:** `/works/prints/games-and-players` → "Hierarchi of Anarchy"

**Change:**
- Add size: **50 x 50 cm**

---

## TASK 14 — GAMES & PLAYERS: Update price + medium for small B&W prints (Ace of Diamonds to Joke 2)

**Location:** `/works/prints/games-and-players` → all small black & white prints from "Ace of Diamonds" to "Joke 2"

**Changes:**
1. Price: **£40 each print** OR **complete set of 14 prints £350**
2. Medium: **Zinc Lithography**

---

## TASK 15 — GODS & MONSTERS: Replace collection header text

**Location:** `/works/prints/gods-and-monsters` → header/intro text at top of collection

**Replace current text with:**
> A portfolio of alphabet inspired prints illustrating the surreal creatures and spiritual powers of the mighty legendary Gods and mythical beasts from the underworld. Inspired by Ovid's Metamorphosis, Greek Mythology and childhood memories. Themes include the fusion of villain and hero (Picasso's Minotaur), the passage of life, and good versus evil.

---

## TASK 16 — GODS & MONSTERS: Set uniform info for ALL prints in collection

**Location:** `/works/prints/gods-and-monsters` → every individual print

**Change — apply this block to ALL prints (only the title changes per print):**
```
Medium: Linocut and Woodblock
Size: 57 x 37 cm (W x H)
Price: £195 each — complete set of 30 prints £2500
```

---

## TASK 17 — GODS & MONSTERS: Fix wrong image for Bala

**Location:** `/works/prints/gods-and-monsters` → "Bala"

**Issue:** Wrong image is shown (ceramic piece displayed instead of correct print)

**⚠️ NEEDS MANUAL INPUT:** Fernando to supply the correct image for Bala.

---

## TASK 18 — GODS & MONSTERS: Fix wrong image for Medusa

**Location:** `/works/prints/gods-and-monsters` → "Medusa"

**Issue:** Wrong image shown (ceramic piece)

**⚠️ NEEDS MANUAL INPUT:** Fernando to supply the correct image for Medusa.

---

## TASK 19 — GODS & MONSTERS: Fix Ra (medium, size, price, description)

**Location:** `/works/prints/gods-and-monsters` → "Ra"

**Change:** Apply the standard Gods & Monsters block from Task 16. Also correct the description text.

**⚠️ NEEDS MANUAL INPUT:** Fernando to supply the correct description text for Ra.

---

## TASK 20 — INFERNO: Fix truncated titles

**Location:** `/works/prints/inferno`

**Issue:** Some print titles have been shortened from the originals.

**⚠️ NEEDS MANUAL INPUT:** Fernando to provide the full correct titles for each affected print. Claude Code should flag which titles appear truncated by comparing against source data if available.

---

## TASK 21 — INFERNO: Fix "The War" — add missing images with expand button

**Location:** `/works/prints/inferno` → "The War"

**Issue:** 3 images from The War are missing. The existing single image shows only one view.

**Change:**
- Display all images for The War together on one screen
- Use the same layout as the "Future" print (multiple images with an expand/click button)

**⚠️ NEEDS MANUAL INPUT:** Fernando to supply the 3 missing images for The War.

---

## TASK 22 — INFERNO: Fix dimensions label format for The War

**Location:** `/works/prints/inferno` → "The War"

**Change:**
- Dimensions label: **"Various paper sizes: 76 x 56 & 40 x 50 cm"**

---

## TASK 23 — INFERNO: Fix size label for The Fall

**Location:** `/works/prints/inferno` → "The Fall"

**Change:**
- Size: **56 x 76 cm each sheet of paper** (add "each sheet of paper" to description)

---

## TASK 24 — INFERNO: Replace full info block for "Today" → retitled "The Devils in the Deal"

**Location:** `/works/prints/inferno` → print currently titled "Today"

**Replace ALL current information with:**

```
Title: The Devils in the Deal
Medium: Linocut
Dimensions: 76 x 56 cm (W x H)
Edition: 30
Price: £325

We stand, arms crossed and say "We merely observe."

But we, in our deals with the devil, unleashed the floods, the famine, the flames and the destruction.

Our endless online orders, with packaging that lays waste to the earth. Our continuous consumption corrodes the planet. Our greed degrades all life that we see. Our violence - verbal, physical and moral, violates all that we touch.

We laugh at others' misfortunes, mock the weak and deride the cries of distress, but the tables are turned. The remote control is wrested from our grip. We cannot outwit the devils and death.

We deal with the devils, daily. The devils deal with us, for eternity.

We must judge ourselves. We are the problem, but could be the solution.
```

---

## TASK 25 — INFERNO: Move "Night Attack" to top of collection with other wood engravings

**Location:** `/works/prints/inferno`

**Change:**
- Reorder so "Night Attack" appears at the top of the collection, grouped with the other wood engravings

---

## TASK 26 — INFERNO: Fix Midnight — remove mystery bar (1 & 2 buttons) + fix size

**Location:** `/works/prints/inferno` → "Midnight"

**Changes:**
1. Investigate what the bar with "1 & 2" under the image is — if it's a navigation artifact or an error, remove it (confirm with Fernando if it's intentional before removing)
2. Fix size — correct format is: **76 x 56 cm (W x H)**

**⚠️ NEEDS MANUAL INPUT (minor):** Confirm with Fernando whether the 1 & 2 bar under Midnight is intentional or a bug.

---

## TASK 27 — PERSONS & PERSONAS: Replace all 8 B&W etchings with unified info block

**Location:** `/works/prints/persons-and-personas` → the 8 B&W etching prints (Characters 1–8)

**Apply this block to all 8 (only the character number changes in the title):**
```
Title: Inscribed (Character 1) [through to Character 8]
Medium: Etching
Edition: 50 copies
Size: 20 x 30 cm
Price: £150 — each character

Drawn and etched into the skin are common expressions and relate to the techniques used for this work. Inspired by the idea of our life visualised in our skin and the events of our lives becoming an outward manifestation of our identity, pieces reveal what we are born with and what we add — as tattoos, wounds, as visuals, as words. As 'manuscript' means writing by hand, so our stories are written on our bodies - the manuscripts of our existence.
```

---

## TASK 28 — PERSONS & PERSONAS: Update Siesta to Reduction Linocut

**Location:** `/works/prints/persons-and-personas` → "Siesta"

**Replace full info block with:**
```
Title: Siesta
Medium: Reduction Lino Cut
Edition: 15 copies
Size: 40 x 50 cm
Price: £250

Sun shines too hot. Drink goes down too fast. Legs feel rubbery. Arms are dead weights.
This chair is too comfy. The air is too thick. Life is too hard. Every day the same.
Sit, snooze, wake, top up; slump, sleep, half awake, top up; out for the count.
```

---

## TASK 29 — PERSONS & PERSONAS: Update Step into the Limelight

**Location:** `/works/prints/persons-and-personas` → "Step into the Limelight"

**Replace full info block with:**
```
Title: Step into the Limelight
Medium: Collagraph
Edition: 5 copies
Size: 20 x 20 cm
Price: £75

But man or Minotaur?
Fierce or fragile?
Invincible or vulnerable?

The mask hides expressions but also reveals other interpretations. So, does the fighter observe the audience's reactions, or does the audience see themselves as if in a mirror?
Influenced by Picasso and his relationship with the Minotaur: a life-long theme for the man and the artist.
```

---

## TASK 30 — ROBOTS & CRANKS: Change all mediums to Reduction Linocut

**Location:** `/works/prints/robots-and-cranks` → every print in this collection

**Change:**
- Medium: **Reduction Linocut** on all prints

---

## TASK 31 — ROBOTS & CRANKS: Fix Search & Destroy full info block

**Location:** `/works/prints/robots-and-cranks` → "Search & Destroy"

**Replace full info block with:**
```
Title: Search & Destroy
Medium: Reduction Linocut
Edition: 30 — colour variations
Size: 30 x 40 cm (W x H)
Price: £125

No mercy
No heart
No love
No Soul
No life
```

---

## TASK 32 — ROBOTS & CRANKS: Replace Metamorph with 3 new works (placeholders)

**Location:** `/works/prints/robots-and-cranks` → "Metamorph" section

**Change:** Replace/expand Metamorph with 3 separate entries. Images are coming soon — use a **"Coming Soon" placeholder image** for each. Set up the info blocks as follows:

---

**Entry 1:**
```
Title: Metamorph — Machine Crusher
Medium: Reduction Linocut
Edition: 10
Size: 40 x 50 cm (W x H)
Price: £195

The sound of crushing: broken glass cracking and metal crashing.

The huge crushing machine yawns wide its jaws ready to feast on the next metallic snack and then spit it back out as a perfectly packaged parcel.

The machine controls who its next victim will be. Its iron claw reaches forward and clamps down with pincer action, grabbing the dead shell which once took people to far away adventures of mystery and fun.

Re-cycled, re-mapped, re-planned for the future. Precious metals are melted and re-built into the next gadget, with which, humans will destroy the world.
```

**Entry 2:**
```
Title: Metamorph — Escape from Alcatraz
Medium: Reduction Linocut
Edition: 10
Size: 40 x 50 cm (W x H)
Price: £195

The electric door backs off and he goes - making his escape from the factory that would put him to work alongside all the other bots.

The future is bright: there is a new dawn, a new horizon is coming. But watch out! The next generation of AI is now out there, amongst us all, planning and dictating our futures, without us even knowing it.
```

**Entry 3:**
```
Title: Metamorph — The Day After Tomorrow
Medium: Reduction Linocut
Edition: 30
Size: 40 x 50 cm (W x H)
Price: £375

After the bombing stopped and the clouds of dust settled, the mountains of rubble were clearly visible piled up high; wastelands as far as the eye could see.

After the great wave from the sea had washed everything away in its path, the destruction was clearly visible. Tossed and thrown out of place, all is discarded and lost. The riverbeds now run dry, cracks in the clay open up the wounds from the disaster and reveal scars on the natural landscape. Wilderness lost, habitats destroyed.

After the storm comes the calm and now it is time to rebuild and plan our way. The machine survives and marches forward looking for any survivors. With violent creaking and cranking, the hydraulic pistons pump the oil around the machine, just as the heart pumps blood to the monster inside the machine.

But who is controlling the machine? As we perilously perch at the dawn of a new era, the machine comes ever closer to man's everyday existence.

Only the future will tell, but has time turned full circle and the dinosaurs are now back to rule the earth?
```

---

## TASK 33 — RUN: Fix all incorrect text and medium

**Location:** `/works/prints/run` → all prints

**Issue:** Text and medium info are from the books, not the prints — all are incorrect.

**⚠️ NEEDS MANUAL INPUT:** Fernando to provide the correct information for each print in the Run collection.

---

## TASK 34 — STRUCT & DESTRUCT: Fix Cromer Lighthouse medium

**Location:** `/works/prints/struct-and-destruct` → "Cromer Lighthouse"

**Replace full info block with:**
```
Title: Cromer Lighthouse
Medium: Collagraph
Edition: 10
Size: 40 x 30 cm (W x H)
Price: £175

Beaming out into the North Sea.
Beware invaders, beware sailing too close.
The cottage alongside is a holiday let.
Visitors drawn by the light, the beacon of the town.
Cromer welcomes; its lighthouse protects.
```

---

## TASK 35 — STRUCT & DESTRUCT: Fix Night Watch and House on the Hill (4 pieces)

**Location:** `/works/prints/struct-and-destruct` → "Night Watch" and "House on the Hill" (4 pieces total)

**⚠️ NEEDS MANUAL INPUT:** Fernando to supply the correct text for all 4 pieces. Current text is confirmed incorrect but no replacement was provided in the document.

---

## TASK 36 — STRUCT & DESTRUCT: Add 2 new works with placeholder images

**Location:** `/works/prints/struct-and-destruct`

**Use a holding/placeholder image for both until Fernando supplies the real images.**

**New work 1:**
```
Title: Cromer
Medium: Reduction Linocut
Edition: 30 copies
Size: 112 x 60 cm (W x H)
Price: £650

Nostalgia for past times is conjured when one thinks of a place by the sea.

A special memory is created, locked away for ever and treasured, until your return visit sparks it alive again.

The crashing sound of the waves pounding the sea wall.
Whispers and fragrances of sea salt mist fill the air; and the smell of fish and chips lingers around each corner. Queues of excited children line up for ice cream.

Architectural grandeur and elegance prevail with old, battered buildings still standing strong against the North Sea winds which have blown ceaselessly over the centuries.

The pier juts into the sea as a bold statement of British historical character, while the sounds of laughter and dancing from the musical performance reverberate and echo out to sea.
```

**New work 2:**
```
Title: Mill Road Library
Medium: Collagraph
Edition: 10
Size: 40 x 30 cm (W x H)
Price: £175

Not just books - but where have the dreams gone, the adventures through the leaves, the words of writers, long gone, but who still speak to us now? The pictures that we daydreamed about, the flights of fancy enjoyed?
Not just books - but the seeds that were sown, the people met in the corners of this imposing building. An edifice that enthralled and helped us realise that we are small, but not insignificant. That we are one of many and can join with others - to save our libraries.
```

---

## TASK 37 — THE JOURNEY MAN: Add missing text to all prints

**Location:** `/works/prints/the-journey-man-prints`

**Issue:** Only the first line of text was copied for each print.

**⚠️ NEEDS MANUAL INPUT:** Fernando to supply the complete text for all Journey Man prints.

---

## TASK 38 — THE JOURNEY MAN: Fix print order — add missing #6 Darkness (currently shown as a book)

**Location:** `/works/prints/the-journey-man-prints`

**Changes:**
1. Print #6 "Darkness" is currently incorrectly displayed as a book — change it to display as an **etching** (like all other Journey Man prints)
2. Ensure all Journey Man items are listed as **etchings**
3. Fix the display order so #6 Darkness appears in the correct sequence

---

## TASK 39 — THE JOURNEY MAN: Add set price note to each print

**Location:** `/works/prints/the-journey-man-prints` → every print

**Change:**
- After the individual price (£125), add: **"Complete set available for £750 of 10 prints"**

---

## TASK 40 — THE THREE PROGRESSES: Change all mediums to Linocut

**Location:** `/works/prints/the-three-progresses` → every print

**Change:**
- Medium: **Linocut** on all prints (currently showing woodblock and letterpress — both wrong)

---

## TASK 41 — THE THREE PROGRESSES: Add overview text and restructure layout

**Location:** `/works/prints/the-three-progresses`

**Layout change:**
- Split into 3 project groups (or space out clearly), similar to the Sketchbooks layout format
- 3 separate collections: Crack's Progress / Charlie's Progress / Modern Marriage
- The main piece "The Curtain Rises" sits at the top, centred

**Frontispiece block (centred at top):**
```
Title: The Curtain Rises
Medium: Linocut
Edition: 30
Size: 60 x 40 cm (W x H)
Price: £325
```

**Add this overview text above the 3 project groups:**
```
Overview — The Progresses

This trilogy of works is Inspired by William Hogarth's A Rake's Progress, A Harlot's Progress and Marriage a la Mode, the eternal stories of money, corruption, dissolution, crime and redemption. In the book versions a contemporary style of writing is utilised to bring new rhythms to Hogarth's cycles. Rap, para rhyme and sharp word play tie up this great saga which is just as relevant in regards to eighteenth century London as the twenty first century.

Hogarth completed his A Harlot's Progress in 1731 and it contained six frames. A Rake's Progress followed in 1735 with eight frames and Marriage a la Mode was completed in the years 1743-45 with six frames. The order of these Progresses is slightly different and a consistency of eight frames for each cycle was decided on. Number four of each Progress is a single frame and is often a defining moment of the story. One frame: one key message. This frame is often used as a standalone image in exhibition. In writing a Prologue and Epilogue for the series as a whole, a frame is created in terms of artistic expression, narrative and homage to Hogarth.

In his titles, Hogarth generalised his characters to types - a Rake, a Harlot etc., but for this modern version not only were actual names given, but very specific details were created in the texts, hence the use of word play: Crack and Charlie make links to drugs and Spike the dog implies multiple meanings of violence. This is in the spirit of Hogarth who had Earl Squanderfield for his Marriage a la Mode — a clear link to the father of Crack, Charlie and Tara. He lives in a 'faux' mansion placed incongruously in the countryside.

Threaded through the work are instances of hope, humour and horror directly rooted in the vision of the artist as well as the moralities and codes of society. Little themes, running gags and asides underpin this version with the loyal dog, the fighting dogs, the moon (sometimes sinister, sometimes benign), and particularly the rats, which run through sewers and invade all areas of human life. Cityscapes background all scenes, some with specific geographic references (London), others universal in their topicality with modern urban life.

The stage is set. The curtain rises on a convoluted tale.

Each of the three narratives is played out for us to spectate and observe, reflect on and consider our own judgements.
```

**Print order within each group (use this grid for reference):**

Crack's Progress:
1. Crack could get by
2. Bad Bradley dreams
3. Nice girls wouldn't touch him
4. Caught
5. Crack came out
6. Crack took crack
7. Taken a life
8. Now it is the nightmare

Charlie's Progress:
1. Conceived in a summer of love
2. To be safe in the city
3. Wayward women working the web
4. Raided at dawn *(rename from "Caught" to avoid confusion)*
5. To pay her debt
6. Tara came in graduation gown
7. Nearly died
8. Badly Bradley dreams

Modern Marriage:
1. Younger sister to Crack and Charlie
2. At the back end of town
3. Conceived a child
4. Young Wayne became wayward
5. Behind the scenes
6. The river rats
7. Walking the line into oblivion
8. Protecting a new generation

**Add a blank/text spacer line between each of the 3 groups to insert project description text (Fernando will provide these texts separately).**

---

## TASK 42 — WATCH & BEWITCHED: Replace all text, mediums and prices

**Location:** `/works/prints/watch-and-bewitched`

**Replace the collection header text with:**
> In theatres, halls and streets a stage is set. Performers transform into characters who tell their tales. The audience become entranced: a spell is cast. Roles can be reversed.

**Replace info blocks for ALL prints as follows:**

```
Title: Pamplona
Medium: Etching | Edition: 50 copies | Size: 30 x 40 cm | Price: £150
Text: The bull runs, streets full of tourists turn to streets full of terror as the bulls charge the men who dare to defy these furious beasts. Commentators, safe behind the barriers, use inflammatory language; crowds, cowering behind each other, yell encouragement or disparagement.
The bulls are the heroes in this barbaric spectacle.

Title: Run Run Run
Medium: Etching | Edition: 30 copies | Size: 60 x 20 cm | Price: £150
Text: [same as Pamplona]

Title: Carrera de San Fermin
Medium: Reduction Linocut | Edition: 10 copies | Size: 30 x 20 cm | Price: £150
Text: [same as Pamplona]

Title: Knock Out 1
Medium: Colour Wood Cut | Edition: 30 copies — variable colours | Size: 80 x 60 cm | Price: £150
Text: Fight as a game. / Fight for life. / On guard, guard down. / Lunge forward, fall back. / Knocked out, a symbol of life.

Title: Knock Out 2
Medium: Wood Cut | Edition: 30 copies | Size: 60 x 40 cm | Price: £100
Text: [same as Knock Out 1]

Title: Knock Out 3
Medium: Linocut | Edition: 10 copies — variable colours | Size: 30 x 620 cm | Price: £125
Text: [same as Knock Out 1]
⚠️ NOTE: Size "30 x 620 cm" looks like a typo — confirm with Fernando before publishing.

Title: Take Down
Medium: Etching | Edition: 30 | Size: 20 x 15 cm | Price: £125
Text: [same as Knock Out 1]

Title: Rumble in the Jungle
Medium: Linocut | Edition: 30 copies | Size: 56 x 76 cm | Price: £325
Text: The procession passes. / The procession pauses. / Leaves tremble, people quiver. / The procession passes.

Title: Temptation
Medium: Linocut | Edition: 30 copies | Size: 30 x 40 cm | Price: £95
Text: The lustful Catrina bewitches the viewers, drawing them in with her powerful gaze. She symbolises life and death, but which path will she choose for you?

Title: Tolerance
Medium: Linocut | Edition: 30 copies | Size: 30 x 40 cm | Price: £95
Text: The triumphant Skeleton entertains his spectators as he pours out his magic potion which represents strength and power. Will you dare to sample this deadly drink and play the game of life and death?

Title: Rudos Vs Tecnicos
Medium: Stone Lithograph | Edition: 10 copies | Size: 40 x 50 cm | Price: £195
Text: Step into the arena, the fight is on, the crowd is roaring, but only one winner will stand triumphant and victorious. The identity of each fighter is masked. Superheroes battle amongst themselves. The crowd below beckons. Strength and power are on display as the magical minotaur steps into the arena to command supremacy over all that stand in his path.

Title: Tomatina
Medium: Lithograph | Edition: 30 copies | Size: 50 x 20 cm | Price: £95
Text: The big trucks roll along the bumpy cobbled roads down into the village of Bunol near Valencia. There are no spectators in this festival, everyone is a participant. Take aim and fire. Swish, swash, slop — the target is hit. Now it is time to duck and hide. Trucks roll out, water hoses come out to spray everything down, and then the party begins.

Title: Role Reversal 1, 2, 3
Medium: Screenprint | Edition: 10 copies | Size: 60 x 80 cm | Price: £95
Text: The roles have been switched. / The hunter becomes poacher. / The crowd roars, blood spills. / The triumphant stand defiantly. / Who is laughing now?
```

---

## TASK 43 — CERAMICS: Move "Burn in Hell" to middle row (round plates row)

**Location:** `/works/ceramics`

**Change:**
- Move "Burn in Hell" (round ceramic plate) to the **middle row**, so all round plates are grouped together in the middle row

---

## TASK 44 — CERAMICS: Fix cropped descriptions

**Location:** `/works/ceramics` → all individual ceramic pieces

**Issue:** Text descriptions have been cut off/cropped on each piece.

**⚠️ NEEDS MANUAL INPUT:** Fernando to supply or confirm the complete description text for each ceramic piece.

---

## TASK 45 — SKETCHBOOKS: Add Instagram link

**Location:** `/works/sketchbooks` or relevant sketchbooks page

**Change:**
- Add a link to Fernando's Instagram page that opens in a **new window/tab**
- Text: **"For further examples of drawings visit: @thejourneyman"**
- Replace `[insert link]` with the actual Instagram URL

**⚠️ NEEDS MANUAL INPUT:** Fernando to provide the full Instagram URL for @thejourneyman.

---

## TASK 46 — SKETCHBOOKS: Remove all prices

**Location:** `/works/sketchbooks` → all items

**Change:**
- Remove prices from all sketchbook items (nothing is for sale in this section)

---

## TASK 47 — SKETCHBOOKS: Change mediums for B&W items

**Location:** `/works/sketchbooks` → all black and white sketchbook works

**Change:**
- Medium: **"Ink and graphite"** for all B&W works

---

## TASK 48 — SKETCHBOOKS: Rename and reorder category tabs/folders

**Location:** `/works/sketchbooks` → category navigation

**Changes:**
1. Rename "Locations" → **"Architecture"**
2. Rename "Sketches" → **"Locations"**
3. Final tab order/labels: **Characters | Architecture | Locations**

---

## TASK 49 — SKETCHBOOKS: Audit and fix items in wrong folders

**Location:** `/works/sketchbooks`

**Change:**
- Audit all sketchbook items for misplaced entries
- Example: "Semana Santa" is in Sketches — move it to **Characters** folder
- Check all folders for any repeated or misplaced items

---

## TASK 50 — ARTIST BOOKS: Update all prices

**Location:** `/works/artist-books` (or wherever books are listed)

**Changes:**
| Book | New Price |
|---|---|
| Journeyman | £800 |
| Future | £750 |
| Run | £999 |
| Gods & Monsters | £1500 |
| Crack's Progress | £125 |
| Contemporary Street Alphabet | £150 |
| Modern Marriage | £75 |

---

## TASK 51 — ARTIST BOOKS: Add collection intro text

**Location:** `/works/artist-books` → at the top of the section, before individual book listings

**Add this text:**
```
The artist book lends itself well to the adaption and exploration of sequential narrative story telling. Careful consideration is given to all design elements of the book including layout, typography, pagination, and cover designs. The artist can control all design elements and apply the handmade craft to produce unique artist books.

All artist books are hand printed, signed and bound by the artist.

Printed onto Somerset velvet paper 250 gms with archival inks.
```

---

## TASK 52 — ARTIST BOOKS: Replace full info blocks for all 7 books

**Location:** `/works/artist-books`

**Replace all book info with the following (in order):**

```
Title: Gods & Monsters
Medium: Linocut, Wood Block & Letterpress
Edition: 10
Technical info: 32 pp, 570 x 370 x 38 mm, hardback cover concertina book
Price: £1500
Published: 2022

A large format alphabet book illustrating the surreal creatures and spiritual powers of the mighty legendary Gods and mythical beasts from the underworld.

The works were inspired from a number of sources including Tales from Ovid's Metamorphosis, Greek Mythology and childhood memories or these surreal narratives and the fantasies they created in my own mind.

Each character blends the ancient and the modern as well as stimuli from other artists' interpretations. Picasso's Minotaur motivated the fusion of villain and hero which is a connecting theme running throughout several of the prints.

Further themes are explored including the passage of life with lovers rising to the heavens and demons dragging sinners deep into the depths of hell. The creation of the universe by the powerful Gods is represented through a narrative series of black and white prints which illustrate good versus evil. A combination of lino and wood cut printing techniques complement one another giving rich textural patterns and expressive mark making creating powerful visual imagery.
```

```
Title: Journeyman
Medium: Etching & Letterpress
Edition: 15
Technical info: 12 pages, 188 x 253 x 24 mm, hardback cover concertina book
Price: £800
Published: 2018

Journeyman was inspired by a surreal dream many years ago. With references to the artist's own experiences, but also in the spirit of the universal idea of the journeyman, it nods to everyman, every person. The labyrinth represents the twists and turns and blind alleys of modern life and reflects our confusion and despairs at decisions to be made, paths to take.

Choices made are in our power, but we can fall foul of authorities, beliefs, expectations and desires. With poignant use of symbolism, the jelly fish has babies and these both rescue, and are cared for by the journeyman. There is love and there are safety nets and the journeyman is like a dream catcher: but there is also the dominant theme of life's excitements, fears and dangers. A story that does not end: it evolves with whatever the times we live in.
```

```
Title: Run
Medium: Linocut, Letterpress, and Collage
Edition: 10
Technical info: 16 pages, 34 x 57 x 20 mm, ½ bound hardback cover
Price: £999
Published: 2018

RUN is an exploration of the sayings and expressions inspired by contemporary life. Machines are taking over and we are being run by them. With minds of their own and with features strangely like ours, with their big eyes, sharp teeth and weird distorted humour, we can see glimpses of how the media runs the news, how politicians run and ruin lives, and how fake news runs away with the facts. Steroid fuelled rockets power their way, running through lives, and sending the humans running for cover. Corruption runs through every vein and artery. Big bosses manipulate the workforce. Deception rules: rulers run riot. So, who controls who? Who is running the show?
```

```
Title: Future
Medium: Linocut, Letterpress, and Collage
Edition: 15
Technical info: 24 pp, 275 x 380 x 16 mm, hardback cover
Price: £750
Published: 2018

Created in a time of great uncertainty there is an unease which pervades all areas of society. With the world's superpowers challenging each other and strutting like boxers in a heavy weight contest, parallels are seen between Kim Jong-un and Trump and Putin. Who will nuke the world first? Who uses nerve agents to poison one man, while potentially many are caught in the collateral? Greed dominates: power corrupts. Myths are referenced — who is burnt by flying too close to the sun? Global communication systems spread knowledge or fakery, rumour or subversion. The artist makes cultural nods to David Bowie and others and shows that popular music, which pervades every nation, is manipulated to mesmerize the populations of the world. With chilling resonances, this work reflects the times we live in, whenever that is, and whatever little details may appear to change. The Future is now.
```

```
Title: Crack's Progress / Charlie's Progress
Medium: Offset Lithograph from scaled down original linocuts
Edition: 50
Technical info: 20 pages, 250 x 250 x 30 mm, hardback cover dos a dos artist book
Price: £125
Published: 2004

Crack's Progress: Loosely based on Hogarth's A Rake's Progress this is a modern fable of dark morality and crime and corruption. Crack, with his faithful dog Spike, fight and bite and deal in drugs. Using contemporary slang and rap rhythms the tale is told of the descent into the grim underbelly of society with the use and abuse of women as well as substances, but finally Crack is caught. He is convicted in a trial scene, depicted in the strong fourth frame. He comes out of prison further corrupted and continues but is finally driven crazy by his drug habit and he kills. He is sent to Bedlam (with more than a nod to Hogarth) and, in the final frame, a mad Crack appears to die. But the final full stop is not the end.

Charlie's Progress: This second tale is inspired by Hogarth's A Harlot's progress. Charlie, Crack's sister, is more rooted in the family background as the opening scene shows the 'faux' nouveau riche mansion of her father. Her trip to London reveals the dark low life of London with drugs and violence as the norm. The corruption at the top of society is lampooned, but the victim is Charlie and also her younger sister Tara. Both girls are viciously exploited by their aunt — seen as like a black widow spider. Charlie recovers, painfully, from her addiction and seeks help from her brother Crack, in the final open-ended scenes.

Just as Crack had a companion, a dog called Spike, who was hard and murderous, Charlie has a cat, Flora who has kittens, but cruelly they are all slain in an indictment of aspects of society's continuing attitudes to women and children.
```

```
Title: Modern Marriage
Medium: Offset Lithograph & Letterpress
Edition: 50
Technical info: 62 pp, 230 x 163 x 13 mm, hardback cover with screen printed band
Price: £75
Published: 2013

Modern Marriage had a longer evolution and proved more complex to interpret for a contemporary audience — even the title creating difficulties in how it would relate to 'progress' and to modern marriage patterns. Changes also occurred in the telling and drawing together of the Progresses with the interweaving of print and publishing through visual and textual references.

In scene one the viewer is introduced to Tara, a spoilt brat, who poses with her horse, as her father's business empire is threatened and a luxury car is towed away. In contrast, scene two is set in the back end of the city where Den and his son Darren exist. But while Den thrives through a range of nefarious activities, he needs money laundering contacts and friends in the higher rungs of society. Darren is a waste of space. The two fathers come up with a deal and marry off the two youngsters. Thus 'real rich' meets 'nouveau riche': the eternal devil's knot. Set in the environment of desirable waterside apartments (despite the rank mud and the view of wrecks) Tara and Darren conceive a child, Wayne, but also fall back into their dissolute ways.

In scene four young Wayne is neglected and sees sights of crime and horror, exemplified by the illegal dog fight. Darren gets into horrendous debt and from the bottom of the pit to which he has sunk sells his wife and son into pornography. But even this deal goes bad and he is murdered. Shocked into consciousness and blaming herself Tara decides to end her own life and that of her wayward son. But their fall is caught by Tara's older brother and sister, Crack and Charlie. There are some signs that there may be redemption for all at last.

Bringing the three siblings together and connecting their lives to the redeeming powers of writing, teaching, art and parenthood, links are created to the artist and the stories, and also frame the series, which is finally printed, blocked and boxed.
```

```
Title: Contemporary Street Alphabet
Medium: Offset Lithograph & Letterpress
Edition: 50
Technical info: 32 pages, 250 x 200 x 30 mm, hardback cover
Price: £150
Published: 2006

An alphabet book of modern-day street characters within the city with text by Pat Francis.

Inspired by some of the biting satires from history but conceived during the early years of the new millennium, this quite savage portrayal of the streets of our cities, depicts both sad and exploited victims, as well as their perpetrators. The cartoonish stereotypes and characters are presented through the form of an alphabet with crude texts reflecting the horror and humour of the metropolis.
```

---

## TASK 53 — MIXED MEDIA: Fix Pagannini drawing description

**Location:** `/works/mixed-media` → "Drawing — Pagannini" (or "Paganini")

**Replace current text with:**
```
Title: Pagannini
Medium: Painting onto the inside of a wooden wardrobe
Dimensions: 300 x 200 cm
Price: NFS

This piece was inspired from the Labyrinth of Dreams project and shows the spectacular finale performance in the grand theatre. All the monsters and players have come to see her sing one last song. Inspired by a visit to see the great Ara Malikian, the violin player, and painted collaboratively with Rafa Armero.
```

---

## TASK 54 — MIXED MEDIA: Add Labyrinth of Dreams intro text + keep price at £450

**Location:** `/works/mixed-media` → "Labyrinth of Dreams" section

**Keep price at £450 for all Labyrinth works.**

**Add this intro text at the top of the Labyrinth of Dreams section:**
```
Labyrinth of Dreams

This collaborative project was made with Rafa Armero in response to a series of short stories which explore a lost man trying to find himself in a surreal world surrounded by chickens, monsters, hunters, and demons.

Alternating between split personalities, decisions are made which have future consequences.

As the moon emerges his darker inner desires and fantasies are played out in reality as he wanders through the labyrinthine streets of the deeply dark city.
```

**Then update all Labyrinth prints with the following info blocks (price £350 each, size 40 x 30 cm, medium: Painting, Indian inks & collage):**

Arrogance / Condemnation / Creation / Evasion / Greed / Hunter / Illumination / Lost / Obsession / Persuasion / Reality / The Final Bow

*(Full texts for each are in the source document — apply them as provided)*

---

## TASK 55 — MIXED MEDIA (COLLAGE): Rename "Others" section to "Collage"

**Location:** `/works/mixed-media` → section currently called "Others"

**Change:**
- Rename to: **"Collage"**
- Remove all prices from items in this section
- Note: These works should arguably be in the Sketchbook section — check with Fernando if a move is preferred or if renaming is sufficient for now

---

## TASK 56 — MIXED MEDIA (COLLAGE): Update Theatre of War — add info + make slider

**Location:** `/works/mixed-media` → "Theatre of War" (or "The War Theatre")

**Change:**
- Convert the display to a **slider/carousel** (all views of the same piece shown as slides)
- Replace info with:
```
Title: Theatre of War
Medium: Linocut prints & card
Edition: Unique piece
Size: 60 x 55 x 45 cm (W x H x D)
Price: £2000

This piece is a unique exploration of the idea of who is the audience, and who is the performance for? The concept of cutting elements from a two dimensional set of four prints which pan downwards into the depths of hell, to a three dimensional theatre set, produces different questions, differing perspectives and raises, as all live performances do, dialogues between performer and viewer. Nothing is static, just as the topics raised here, are not. But overarching all is the frightening theme of Big Brother looming over us, pulling strings and wielding power and control which seem to be taken out of our hands. However, an audience/viewer are not passive: they can, and must, react.
```

---

## TASK 57 — PAINTING: Fix putaGallina spacing between two-word titles

**Location:** `/works/painting` → putaGallina series

**Issue:** Two-word titles display with words merged/too close together.

**Change:**
- Fix spacing so all multi-word titles display with proper separation

---

## TASK 58 — PAINTING: Add NFS to putaGallina works + add intro text

**Location:** `/works/painting` → putaGallina section

**Changes:**
1. Mark all putaGallina works as: **NFS** (Not For Sale)
2. Add this intro text:
```
This collaborative street art piece was produced with Pilar Munoz at La Curtiduría in Oaxaca, Mexico, whilst attending an artist residency at the studio. Reflections on the culture and life in Mexico and Lucha Libre tournaments influenced the production of this piece of work.

Title: Luchador
Medium: Painting and collage
Dimensions: 5 x 4 meters
```

---

## SUMMARY: Items Requiring Manual Input from Fernando
*(Claude Code should collect these and flag them — do not block other tasks)*

| # | Section | What's needed |
|---|---|---|
| 1 | Home Slider | Cromer Pier collage image file |
| 2 | Prints (ALL) | Complete text for every print (only first line was transferred) |
| 3 | Gods & Monsters — Bala | Correct image (not the ceramic) |
| 4 | Gods & Monsters — Medusa | Correct image (not the ceramic) |
| 5 | Gods & Monsters — Ra | Correct description text |
| 6 | Inferno — truncated titles | Full list of which titles were shortened + correct versions |
| 7 | Inferno — The War | 3 missing images |
| 8 | Inferno — Midnight | Confirm: is the "1 & 2" bar intentional or a bug? |
| 9 | Run (entire collection) | Correct text + medium for every print |
| 10 | Struct & Destruct — Night Watch + House on the Hill | Correct text for all 4 pieces |
| 11 | Struct & Destruct — Cromer + Mill Road Library | Real images (use placeholders until supplied) |
| 12 | The Journey Man (all) | Complete text for all prints |
| 13 | Ceramics (all) | Confirmed full descriptions (currently cropped) |
| 14 | Sketchbooks | Full Instagram URL for @thejourneyman |
| 15 | Watch & Bewitched — Knock Out 3 | Confirm size: "30 x 620 cm" — likely a typo |
| 16 | Three Progresses | Description texts for each of the 3 project sub-groups (blank spacers are set up, texts TBC) |
