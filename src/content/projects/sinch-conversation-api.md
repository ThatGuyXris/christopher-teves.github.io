---
title: Conversation API
slug: sinch-conversation-api
role: Lead Designer
roleDetail: Conversation API was my first project at Sinch, and my first as Lead Designer. I worked across a team of roughly a dozen engineers, a product owner and a project lead, responsible for the full design and UX decisions from discovery through to launch. I joined mid-process — some groundwork existed, but design ownership was mine. The thinking needed to go further, and drive the project from here.
description: Sinch needed a single API endpoint that would let developers send and receive messages across any channel — SMS, WhatsApp, RCS, Viber and more — without building separate integrations for each.
platform: Web
workDone: Research & discovery, UX/UI design, prototyping, usability testing, developer collaboration
heroImage: /images/sinch-conversation-api-hero.png
finalProductionImages:
  - /images/sinch-conversation-api-final-01.png
processImage: /images/sinch-conversation-api-process.png
hideMetaSections: true
heroLeftSections:
  - heading: "Role and responsibility"
    body:
      - "Conversation API was my first project at Sinch, and my first as Lead Designer. I worked across a team of roughly a dozen engineers, a product owner and a project lead, responsible for all design and UX decisions from discovery through to launch."
      - "I joined mid-process: some groundwork existed, but design ownership was mine to take. I assessed what was usable, identified where the thinking needed to go further, and drove the project from there."
  - heading: "The problem"
    body:
      - "Sinch needed a single API endpoint that would let developers send and receive messages across any channel — SMS, WhatsApp, RCS, Viber and more — without building separate integrations for each."
      - "The product concept was clear. The problem was the setup experience. Research from the previous team had surfaced that it took 15–35 steps, depending on the channel. Users were dropping off before completing it. The friction wasn't a comprehension problem; developers understood what they needed to do. The flow had simply never been structured around how they actually thought about the task."
  - heading: "Constraints worth naming"
    body:
      - "Two things made this harder than a standard flow redesign. First, the Conversation API depended on several other Sinch products — channel apps, contact lists — each with its own UI and its own logic. Any changes I made had to work within the constraints of each. Second, the Sinch portal had an established design guide. Consistency across the platform wasn't optional, which meant some technically cleaner solutions weren't available, and the real work was finding what was both correct and possible."
  - heading: "Press"
    body:
      - '<a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer">TechCrunch</a> — The Conversation API launched to press coverage at release.'
order: 4
---

### The problem

Sinch needed a single API endpoint that would let developers send and receive messages across any channel — SMS, WhatsApp, RCS, Viber and more — without building separate integrations for each.

The product concept was clear. The problem was the setup experience. Research from the previous team had surfaced that it took 15–35 steps, depending on the channel. Users were dropping off before completing it. The friction wasn't a comprehension problem; developers understood what they needed to do. The flow had simply never been structured around how they actually thought about the task.

### Constraints worth naming

Two things made this harder than a standard flow redesign. First, the Conversation API depended on several other Sinch products — channel apps, contact lists — each with its own UI and its own logic. Any changes I made had to work within the constraints of each. Second, the Sinch portal had an established design guide. Consistency across the platform wasn't optional, which meant some technically cleaner solutions weren't available, and the real work was finding what was both correct and possible.

### Discovery

We started with what we had: heatmaps and session recordings from the previous team, captured through Hotjar. Rather than treating this as legacy material I needed to orient myself around, I used it as a diagnostic, testing the drop-off points as decisions. Where did users stop? What were they being asked to do at that moment? Was it a comprehension failure, a navigation failure, or a step that simply shouldn't have existed at all?

The recordings were direct. Users were not confused about what the system wanted to provide. They were confused about what the system wanted them to provide. Some steps existed not because users needed them but because the underlying system architecture required them to be exposed to the user.

### Define

We ran interviews and usability tests to validate what the data suggested. Developer users brought a specific mental model: they expected setup to follow a logical dependency chain. If step B requires something from step A, that order should be obvious and the system shouldn't have obscured it. The key question at every step: does this step need to exist, or does it exist because we haven't questioned it?

The result: 15–35 steps reduced to 6–9, by restructuring the dependency view, consolidating steps that were logically one, and letting the system absorb complexity that had previously been handed to the user.

### A decision worth explaining: the design guide

There were moments where the cleanest UX solution conflicted with existing portal patterns. Diverging from convention introduces new friction: users who already know the platform have learned certain patterns and moving outside them creates a cognitive cost. My approach was to stay within the guide except where the user need was specific and clear enough to justify it, and to document exceptions so they could be reviewed for future design guidance, rather than becoming anomalies.

### Delivery

Handover to development was treated as a continuation of the design process, not a clean break. We stayed involved through implementation, verified the final product against the intended design before release, and caught issues during final testing that prototypes hadn't surfaced. This approach rarely felt limiting — it ultimately produced a higher quality final product.

### Outcome

The Conversation API launched to press coverage at release, including TechCrunch. The setup journey reduced from 15–35 steps to 6–9. That reduction came not from simplifying the product but from removing structural assumptions that shouldn't have been handed to the user.

### Reflection

On a project of this type, I'd run structured concept interviews before touching the existing flow at all. Understanding how developers mentally model a dependency chain before seeing any UI tells you more about what the structure should be than any amount of heat map analysis of the wrong one.
