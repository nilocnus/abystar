# :exclamation: Contributing to Abystar :exclamation:

:dizzy: :star2: Firstly, I extend a large welcome and thank you for showing interest towards contributing to the project! :star2: :dizzy:

**Abystar** reflects data from a game that is consistently under live development. Thus, there will be a continuous cycle in which new characters, weapons, artifacts, etc... must be hardcoded within the program for the forseeable future. Additionally, bugs and missing features may occur at any stage of release. We wish for those excited about this project to help, even if it means a small contribution!

The following is a set of guidelines which pertain to the fair-use of the open source project Abystar. While contributers should follow their own discretion, it is recommended to adhere to these guidelines if possible as to avoid general inconsistencies within the project, and to keep yourself in a non-disruptive workflow. Use your best judgement, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [:exclamation: Contributing to Abystar :exclamation:](#exclamation-contributing-to-abystar-exclamation)
  - [Table of Contents](#table-of-contents)
  - [How Can I Send An Issue?](#how-can-i-send-an-issue)
    - [Reporting Bugs and Requesting Features](#reporting-bugs-and-requesting-features)
      - [How Do I Submit A (Good) Bug Report?](#how-do-i-submit-a-good-bug-report)
      - [How Do I Submit A (Good) Enhancement Suggestion?](#how-do-i-submit-a-good-enhancement-suggestion)
    - [Types of Issues and Issue State](#types-of-issues-and-issue-state)
  - [How Can I Contribute?](#how-can-i-contribute)
    - [Your First Code Contribution](#your-first-code-contribution)
    - [Getting Setup](#getting-setup)
      - [Forking](#forking)
      - [Running Your Local Environment](#running-your-local-environment)
    - [Pull Requests](#pull-requests)
    - [Styleguides](#styleguides)
      - [Git Commit Messages](#git-commit-messages)
      - [TypeScript Styleguide](#typescript-styleguide)
    - [Implementing Characters](#implementing-characters)
      - [Choosing A Character](#choosing-a-character)
      - [Understanding The Layout](#understanding-the-layout)
      - [Implementing `talentScalings`](#implementing-talentscalings)
        - [Checking The Metadata](#checking-the-metadata)
        - [Defining The Talent Property](#defining-the-talent-property)
        - [Attributes and Bonus Stats](#attributes-and-bonus-stats)
        - [`damageType` And `outputType`](#damagetype-and-outputtype)
        - [Creating Custom Talents](#creating-custom-talents)
        - [Toggable Talents](#toggable-talents)
      - [Implementing `characterBonuses` and `constellationBonuses`](#implementing-characterbonuses-and-constellationbonuses)
        - [Naming Bonuses](#naming-bonuses)
        - [Writing The Description](#writing-the-description)
        - [Parameters For Bonuses](#parameters-for-bonuses)
        - [The Priority System](#the-priority-system)
        - [Utils For Bonuses](#utils-for-bonuses)
        - [Implementing `effect`](#implementing-effect)
        - [Implementing `applyToTalentScaling`](#implementing-applytotalentscaling)
        - [Constellation-Specific Implementation](#constellation-specific-implementation)
      - [Finishing Up](#finishing-up)
    - [Implementing Weapons](#implementing-weapons)
    - [Implementing Artifacts](#implementing-artifacts)

## How Can I Send An Issue?

### Reporting Bugs and Requesting Features

> [!IMPORTANT]
> If it's a simple inquiry, please don't file an issue. Read through this document first to find your problem. If need be, you may contact one of the maintainers: [jktrn](https://github.com/jktrn), [nilocnus](https://github.com/nilocnus), and [vinal2](https://github.com/vinal2) for any further questions.

Say you found a bug or error with Abystar in its current state. Perhaps you wish to add a feature that wasn't already requested within the [issues](https://github.com/jktrn/abystar/issues) tab. But maybe you don't want to go through the hassle of implementing them yourself. Make sure to take a thorough look through both the *Open* and *Closed* threads for any existing matches to your problem(s).

If not, you are free to open a new thread in the issues tab. While there are no strict rules for how you should structure it, try to make your text as clear as possible in the subject, and detail everything within the body.

#### How Do I Submit A (Good) Bug Report?

> [!NOTE]
> Remember, these are only guidelines, not hard strict rules. Follow your own discretion when necessary.

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. When listing steps, *don't just say what you did, but explain how you did it*.
- **Provide specific examples to demonstrate the steps**.
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Try to include screenshots and animated GIFs and/or video** which show you following the described steps and clearly demonstrate the problem. You don't necessarily need these visual mediums, but they help.

At a baseline, please add the "*bug*" label before submitting the issue.

#### How Do I Submit A (Good) Enhancement Suggestion?

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you wish to see instead** and why. Applicable for if you're requesting enhancements.
- **Attempt to provide a visualization** either through a drawing, examples from other sites, anything that can display the enhancement's proof-of-concept in some way.
- **Explain why this feature would be useful**.

At a baseline, please add the "*enhancement*" label before submitting the issue.

***DO NOT*** assign maintainers/other contributors, even if they may seem relevant. If you do not plan to contribute directly towards the issue, leave the assignment blank. If you do choose to help contribute to your own issue, assign yourself. We may manually assign ourselves at some point if we are to fix or implement the issue.

If duplicate threads are found in the issues tab, it **will be closed** without exception.
> [!NOTE]
> If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one. IF you find an **Open** issue that follows this, do not open a new issue. Instead, make a comment in the issue.

### Types of Issues and Issue State

| Label name | Description |
| :--- | :--- |
| `enhancement` | Features and/or requests. |
| `bug` | Confirmed bugs or reports that are very likely to be bugs. |
| `dependencies` | Applied only on pull-requests which alter or update a dependency file. |
| `documentation` | Improvements or additions to existing, or new documentation. |
| `good-first-issue` | Good issues for newcomers. Thank you for contributing! |
| `question` | Further information is requested. This is not a label for asking general inquiries. |
| `help-wanted` | Extra attention may be needed. **Do not** use this label unless if you are a contributor. |
| `low-priority` | Doesn't require immediate attention. These issues may be a hindrance to the project but not to any significant degree. Will be assigned according to the pipeline. |
| `medium-priority` | Requires attention. These are issues that should be resolved relatively soon to ensure the project works properly. Will be assigned according to the pipeline. |
| `high-priority` | Requires immediate attention. These are issues that should be resolved ASAP. Will be assigned according to the pipeline. |
| `duplicate` | The issue or pull-request already exists. When assigned, the respective thread will be closed. |
| `invalid` | Something about the issue isn't right. Ex: *it's a bug that can't be replicated, is not a bug, a feature that isn't suitable, etc...* |
| `wontfix` | An acknowledgement that such a request or issue exists, but won't exist in the pipeline for implementation or fixing for whatever reason. |

## How Can I Contribute?

### Your First Code Contribution

Unsure where to begin contributing to Abystar? You can begin by looking through the `good-first-issue` and `help-wanted` issues. As stated in the issue states chart above, these are often solid challenges of varying difficulty.

Abystar is largely in need of help from hard-coding existing characters, weapons, artifacts, and the like whenever a new update for Genshin implements these. We will present you with a guide further down this document.

### Getting Setup

#### Forking

Abystar maintains its cleanliness as a repository. As a result, contributors unfortunately are not permitted to branch off of the main respository. Therefore, we ask all contributors to create a **local fork** of the project.

In the main page, select your option to create a fork in between the buttons of starring and watching. As stated by Github, forking a repository allows you to freely experiment with changes without affecting the original project. If you are not familiar with this, we suggest you take a further look into how they work.

When you create your fork, you are free to do whatever you like with it. Whether or not you decide to work off of the master branch from your own fork is up to you. Verify that regardless of which option you take, you are able to create a pull request that sends the desired commits. Whatever happens is strictly your responsibility, including any loss of data.

> [!WARNING]
> It is ***highly recommended*** to update the head your forked repository to the master branch of Abystar if it ever becomes desynced. If the head is mismatched, your pull requests may show past commits that are already merged with the master branch. However, we recommend you do this only when your pull-request is accepted and merged, otherwise you may lose progress from your local fork.

#### Running Your Local Environment

You may choose to use whatever text editor or IDE you prefer. However, make sure that it is up for the task as this is a large project. We recommend [Visual Studio Code](https://code.visualstudio.com/) with whatever setup to meet your fancy.

When cloning your forked repository, place it within a directory that you feel comfortable accessing. Don't throw it in a random spot. If you aren't sure how to do this, [check this out](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

You may setup your workspace to your pleasing, however, we recommend having two separate consoles open consecutively. One for running the development server, and one for running commands such as git commits.

In order to start the development server, we recommend you take a look at the [README.md](README.md) for instructions on how to start. Remember that this is a [Next.js](https://nextjs.org) project, so you must first run `npm install` within the terminal to install all the dependencies before beginning.

### Pull Requests

The process described here has several goals:

- Maintain Abystar's quality and consistency.
- Fix problems that are important to users.
- Enable a sustainable system for Abystar's maintainers to review contributions.

If you follow these steps when choosing to create a pull request, we will love you forever (legally non-binding statement):

1. Follow the [styleguides](#styleguides).
2. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

> [!IMPORTANT]
> If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will either re-run the status check, or manually accept the merge request.

While the prerequisites above must be satisfied prior to having your pull request reviewed, we may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted. Don't feel discouraged by this, if you have any concerns, make it clear and we will help.

### Styleguides

#### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for aligning consistency within the repository. We *highly recommend* you take a small moment to take a look through the linked webpage. The convention is largely intuitive, so we hope you will find easy to learn and understand.

> [!TIP]
> If you find trouble picking a relevant type, choose the one that makes the most sense to you. As long as it roughly aligns with the content of the commit, it's acceptable.

Additionally, here are some other tips for how you can structure your commit message(s):

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.

#### TypeScript Styleguide

This is a [React](https://react.dev/)-based project, so we operate `.tsx` files to make use of its native [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html) functionality.

All TypeScript code is linted with [Prettier](https://prettier.io/).

- We largely prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`.
- We prefer not to inline any `export` instances with expressions. However, there are some exceptions within the repository.

  ```tsx
  // Most of the time, we use this:
  class ClassName {

  }
  export default ClassName

  // Instead of:
  export default class ClassName {

  }

  // With some exceptions of course.
  ```

- We **ALWAYS** put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
- Nearly all variables and constants follow the CamelCase naming convention. For example, `characterBonus` over `character_bonus` or `CharacterBonus`. **Do not** use other naming conventions like SnakeCase or PascalCase for variables unless otherwise stated. They are reserved for the names of `.py`, `.tsx` files respectively.
- We mainly use the [K&R](https://en.wikipedia.org/wiki/Indentation_style#K&R) indentation style. Don't attempt to mix in other styles as it will create indentation inconsistencies within the code. If you have any trouble understanding how to structure your code consistently, we highly recommend you cross-reference files of similar nature.

### Implementing Characters

**Characters** are largely the most complex classes to implement. However, they are also the bread and butter to Abystar. Here, you will find a general guide to implementing characters. While it is recommended to maintain some level of programming experience for this section, don't be dissuaded if you're new and looking to learn. Take a shot at it!

#### Choosing A Character

Cross-reference the [issues](https://github.com/jktrn/abystar/issues) tab to make sure that it someone isn't already assigning themselves to the character that you wish to implement. If you aren't sure where to begin, choosing characters from earlier versions of the game is typically a good starting point as they often have simpler kits.

The most intuitive way of checking the current state of all implemented characters is to directly access Abystar either through the [main webpage](https://abystar.vercel.app), or through your localhost. Characters that are greyed out are not considered implemented.

This code is reflected through the `characters.json` file located in the `\src\components\data\characters` directory. Keep this file in mind, as it is crucial for finishing implementation later on. When you are ready to choose a character to work on, please select their corresponding `.tsx` file from the same directory as above.

#### Understanding The Layout

All characters will have some initial code pre-baked within their corresponding file. Before you begin, make sure to take a good look and comprehend the code first.

At a baseline, **4** constants are defined across every character:

- `talentScalings`: An instance of the `TalentScaling` interface. This defines the type and attribute of formulas that all talents scaling off of, like the name suggests. It provides context for the scalings from the metadata of the character, which the program **MUST** have before it can properly display calculations to the frontend.
- `characterBonuses`: An array of `Bonus` interfaces. Any passives or specific effects (apart from those granted by character constellations) that the character's kit may enable which directly affects the results of the calculation will be held within here. This part **MUST** be implemented, as the program will force register the character as unimplemented if left empty. However, calculations will still show on the right as long as `talentScalings` is implemented.
- `constellationBonuses`: An array of `Bonus` interfaces. Functions similarly to `characterBonuses`, except reserved for any and all effects that come from constellations. This distinction is made so that the rest of the program may identify and distinguish these bonuses before reflecting it on the frontend. Similar to the above, this cannot be left unimplemented, otherwise the program flags the character as incomplete.
- `{Character_Name}`: An instance of the `Character` interface. This holds the metadata of the character that is scraped from the in-built API of Abystar. It's not necessary to touch this under most circumstances. However, because the program relies on the metadata for calculations, there are situations where you may have to modify this in order to implement unique aspects of a character's kit.

> [!TIP]
> It's **highly recommended** you implement these in-order from top to bottom. `talentScalings` should be completed first in order to display all the calculations visually on the frontend. This way, you may manually test `characterBonuses` and `constellationBonuses` for bugs as their effects will be reflected within the calculation. Any additional modifications within the metadata is recommended be done last in order to avoid confusion within your workflow.

#### Implementing `talentScalings`

It is crucial to implement every property within the metadata to ensure that every talent gets a scaling. You do not have to worry about actually calculating the damage as that will be automatically done in the background. What you are doing here is defining the individual properties of every attack, as the metadata does not naturally provide information on what kind of scaling each talent is, only the actual numbers.

##### Checking The Metadata

Because the program **must** cross-reference the properties of each scaling to the metadata, you must correctly use the **exact name** for each property ID ***(case and space sensitive)***. Luckily, the talent property within the metadata holds every name and data, located here:

```tsx
const {Character_Name} {
  name: ...,
  icon: ...,
  weapon: ...,
  vision: ...,
  rarity: ...,
  description: ...,
  occupation: ...,
  baseStats: {
    ...
  }
  talents: [
    {
      name: '{Here is the name for your NA talents}',
      ...
      data: {
        '{Here is the name for each individual talent scalings}' {
          ...
        }
      }
    },
    {
      name: '{Here is the name for your skill talents}',
      ...
      data: {
        '{Here is the name for each individual talent scalings}' {
          ...
        }
      }
    },
    {
      name: '{Here is the name for your burst talents}',
      ...
      data: {
        '{Here is the name for each individual talent scalings}' {
          ...
        }
      }
    }
  ]
}
```

The heirarchy follows the same scope and structure as the talent property from the metadata. As such, you can expect the general structure of the code to mimic something along the lines of this:

```tsx
const talentScalings: TalentScaling = {
  '{name}': {
    '{data_name}': {
      ... // fields
    },
    ...
  },
  ...
}
```

##### Defining The Talent Property

> [!IMPORTANT]
> In order for the program to display the calculations for each talent on the right-hand side of the website, **all** mandatory fields **must be defined** for each talent that exists on the character.

There's **3 types** of `formulaTypes` which are used to define the specific scaling of each talent you're using.

| Type | Description | Fields |
| :--- | :--- | :--- |
| `DamageFormula` | Any talent which deals damage to the enemy will use this formula. Ex: *Normal Attacks, Elemental Skills, Elemental Bursts, etc...*  | `attribute`\*, `additiveBonusStat`, `multiplicativeBonusStat`, `critRateBonusStat`, `critDamageBonusStat`, `damageType`\*, `minConstellation` |
| `GenericFormulaWithScaling` | If the talent doesn't deal damage but still relies on an attribute, use this. Ex: *ATK Buff, HP Drain, HP Regen, etc...* | `attribute`, `additiveBonusStat`, `multiplicativeBonusStat`, `critRateBonusStat`, `critDamageBonusStat`, `outputType`\*, `minConstellation` |
| `GenericFormulaWithoutScaling` | If the talent doesn't deal damage and doesn't rely on an attibute, use this. Ex: *Stamina Cost, Energy Cost, Cooldown, Duration, Trigger Interval, Buff DMG%, etc...* | `additiveBonusStat`, `multiplicativeBonusStat`, `critRateBonusStat`, `critDamageBonusStat`, `outputType`\*, `minConstellation` |
| `ElementalReactionFormula` | Currently unimplemented. Will be used for elemental reaction damage scalings in the future. ***DO NOT USE.*** | None |

> For the table above, the `*` within the fields indicates that the specific data is required to be defined in order for the talent property to be considered valid.

##### Attributes and Bonus Stats

For the sake of keeping this section from growing far too long (like the dialogue in the Aranara Quest), not all attributes will be listed here. As of this document's live status, all `DamageFormula` talents in the game scales ***exclusively*** off a combination of attributes of the **Basic Attributes** located within the `attributeSections.ts` file. You can find this file in the directory `\src\lib\`.

If this document does not accurately reflect this change in future versions and still isn't updated by the time you're viewing this, please notify the maintainers.

All bonus stats are defined to be an array of attributes. These bonus stats will manipulate the calculation of the talent and can be altered by `characterBonuses`, `constellationBonuses`, and in the hopefully near-future when they are implemented, party buffs. A list of all attributes can be found in the `characterAttributes.ts` file located within the same directory as the one mentioned above.

While `DamageFormula` type talents don't require you to define the bonus stats in order for the property to be considered valid, we necessitate the fact that each type of these talents should have some corresponding general bonus attribute that exists within the library. If you're confused on which general bonus stats to use, cross-reference other existing characters which are already implemented.

> [!WARNING]
> There ***are no restrictions*** on what kind of attributes you can choose, **including completely fabricated ones that don't exist in the source library**. As such, it's your sole responsibility to ensure that you don't create any typos in this part of the code. This laxness is because certain characters require unique attributes that only exist for themselves, which can't exist within the general library of attributes.

**Example:** Nahida has a passive which gives a bonus to both the crit rate and damage of her elemental skill in particular. As such, she has 2 unique attributes defined only for her, which do not exist within the `characterAttributes.ts` file.

```tsx
'Tri-Karma Purification DMG': {
    formulaType: FormulaType.DamageFormula,
    attribute: ['ATK', 'Elemental Mastery'],
    additiveBonusStat: ['Elemental Skill Additive Bonus'],
    multiplicativeBonusStat: [
        'Dendro DMG Bonus',
        'Elemental Skill DMG Bonus',
        'Tri-Karma Purification DMG Bonus',
    ],
    critRateBonusStat: ['Elemental Skill CRIT Rate'],
    damageType: DamageType.Dendro,
},
```

##### `damageType` And `outputType`

This is the final piece of the property for a talent. To reiterate, this field is **always required to be defined** in order for the talent to be considered valid and show up in the calculation.

`damageType` is relatively simple. It takes in the enum `DamageType`, which as of current consists of 8 types. Use these to identify what type of elemental (or lack thereof) damage the specific talent deals.

- `DamageType.Physical`
- `DamageType.Pyro`
- `DamageType.Electro`
- `DamageType.Hydro`
- `DamageType.Anemo`
- `DamageType.Geo`
- `DamageType.Dendro`
- `DamageType.Cryo`

`outputType` takes in the enum `FormulaOutputType` to identify what kind of value the numbers are.

- `Healing`: This refers to any value that heals a character.
- `Drain`: This refers to any value that drains a character's health.
- `Time`: This refers to any value that is a unit of time. Always in seconds. Ex: *CD, Duration, etc...*
- `Percentage`: This refers to any value which isn't considered a heal nor a drain, but is still measured in percentages. Ex: *DMG buff, Bonuses, etc...*
- `Generic`: This refers to any value that doesn't meet any of the above. Ex: *Energy cost, Stamina cost, Stacks, etc...*

##### Creating Custom Talents

While the metadata for the character provides all of the necessary talents, a select few characters have kits which innately deals a special type of damage which isn't defined in the metadata. If this is the case, you may add it manually by appending your own scalings to the metadata. Use your best discretion to name this talent as accurately as possible.

**Example:** Kaedehara Kazuha has a passive which causes him to do an additional *200%* plunge damage if he absorbs an element after using his elemental skill. This is separate from his actual plunge damage. However, this specific damage is not defined within the metadata, yet it wouldn't be correct to merge this with his plunge damage either. As such, it requires its own talent.

> [!NOTE]
> These types of talents often are a flat value. However, in order for the metadata to be considered valid, the scaling must be defined for every level from 1-15 regardless. If this is the case and your added talent is a flat value, simply set the value to be the same across every level.

##### Toggable Talents

There are currently 2 methods to make a talent toggable in its visibility. Both are often used in conjunction with [custom talents](#creating-custom-talents).

1. The `minConstellation` field. You may add this optional field to any one of the 3 formula types. It has 6 possible values, `1-6`, which as the name suggests, represents the minimum constellations of the character needed to activate the talent. This is typically used if a constellation for a character deals a special type of damage.
2. Intentionally omitting `damageType` or `outputType`. As stated numerously before, without these mandatory fields, the talent simply won't display on the calculator. This may be used intentionally to toggle the visibility, as it's possible to modify talent properties from either `characterBonuses` or `constellationBonuses`. This will be explained more in-depth later on in the document.

> [!TIP]
> Due to the strict restrictions imposed upon talent scaling properties, you may find it easier to debug your instance manually by visually verifying that each and every talent is present within the calculator. Once a talent is considered to be defined validly, it will appear in the calculator.
> The most common issues which aren't directly caused by runtime violations are often caused by one of the following:
>
> - Scopes that aren't structured correctly
> - Incorrect name for the talent, typically caused by a typo or wrong casing
> - Mandatory fields that either aren't defined, or defined incorrectly

#### Implementing `characterBonuses` and `constellationBonuses`

> [!NOTE]
> Since both of these bonuses follow a similar structure in implementation, we will group them together under one topic within the document for the sake of conciseness.

**Bonuses** are the effects and passives of every character. While the calculator may calculate damage off of characters from their base stats and scalings, every character in the game possesses either a passive, or a state within their talents which alter how the calculations are done. This is often the most complicated part of coding a character, as there are no strict guidelines for every scenario, given that every character does something largely unique. It's ***highly recommended*** you cross-reference other completed characters to get an feel for how certain bonuses are programmed.

##### Naming Bonuses

Unlike `talentScalings`, there is no need to cross-reference any metadata when it comes to implementing bonuses, as everything is defined by the user's image. That said, we still need to uphold consistency across the board. By doing this, we must avoid coming up with arbitrary names whenever possible.

All bonuses currently come from talents, passives, and constellations. All of these will have a predefined name in the metadata. Use them exactly like you would for `talentScalings`. If this is to change anytime in the future, then use a name that best describes the bonus.

##### Writing The Description

While the metadata contains a description for every talent/constellation, there is a limited amount of space on the website to display all of that information. As such, we attempt to shave off as much unnecessary text as possible when it comes to the description of bonuses. Additionally, descriptions are formatted with **HTML**.

There are some general rules you should follow when creating descriptions.

- Apostrophies may frequently appear in descriptions across bonuses. Without the character code, rendering this character may confuse the HTML parser. We advise you to use `&apos;` in place of apostrophies. You may also use `&#39;` instead, but this clashes with code consistency. If this is not done properly, Vercel may encounter issues during deployment after a pull-request. You will not see this when compiling Abystar on local deployment.
- We advise you to not go over the **120 character** line in descriptions for the sake of code readability. You may use `{' '}` at the end of a line to create a space in between the start of the next character, since HTML doesn't render raw spaces at the end nor beginning of a new line.
- We also color format certain pieces of information. For any scalings that appear within the description, we highlight their color. This is done through `<span style={{ color: '#ddd' }}>insert_scaling</span>{' '}`. Notice that we need to put a `{' '}` at the end, since the renderer has issues parsing spaces immediately after a span.
- For any elemental related bonuses, we color them according to the following:
  - **Pyro:** `#bf612d`
  - **Geo:** `#c8922b`
  - **Dendro:** `#84a02f`
  - **Anemo:** `#5d9b86`
  - **Hydro:** `#3d9bc1`
  - **Cryo:** `#7fabb6`
  - **Electro:** `#8c729a`
  - **Physical:** `#ddd` (We share the physical-damage color with every other non-elemental forms of scaling)

**Example:**

```tsx
description: (
    <span>
        When initiating a Normal Attack, a Charged Attack, Elemental Skill or
        Elemental Burst, Keqing gains a{' '}
        <span style={{ color: '#ddd' }}>6/12/18/24%</span>{' '}
        <span style={{ color: '#8c729a' }}>Electro DMG Bonus</span> for{' '}
        <span style={{ color: '#ddd' }}>8s</span>.
    </span>
)
```

##### Parameters For Bonuses

Bonuses have their own set of fields which may be used to define specific properties of the bonus.

| Field | Typing | Description |
| :--- | :--- | :--- |
| `name` | `string` | The name of the bonus. **(REQUIRED)** |
| `description` | `JSX.ELEMENT` | The description of the bonus. **(REQUIRED)** |
| `icon` | `string` | The icon associated with the bonus. The string is a filepath to the relevant icon located within the `public\images\characters\` directory. **(REQUIRED)** |
| `effect` | `Effect` | The effect that the bonus has on the character's attributes. **(REQUIRED)** |
| `maxStacks` | `number` | The maximum number of stacks that the bonus may have. This is defaulted to 1 if you choose not to define it, which will keep the bonus as a toggle.|
| `stackOptions` | `string[]` | The options of which the user may choose from in a stack. Assumes that maxStacks is > 1, will transform the bonus from a toggle to a dropdown, displaying the stack names as the one you define in the string array. |
| `currentStacks` | `number` | The current stack that the bonus is at. It is advised not to define this property within the bonus, as it should always be defaulted to 1. |
| `minConstellation` | `number` | For bonuses that are locked behind a constellation, and will not become active until the minimum condition is met. |
| `minAscension` | `number` | For bonuses that are locked behind a character ascension, and will not become active until the minimum level is selected. |
| `enabled` | `boolean` | Determines whether or not the bonus should be automatically enabled once all other conditions are met. This is enabled by default. |
| `visible` | `boolean` | Determines whether or not the bonus should be visible or not. This is enabled by default. |
| `origin` | `string` | Where the bonus originates from. Ex: *(E, Q, A1, A4, Passive, C1-C6, etc...)* |
| `implemented` | `boolean` | Determines whether or not the bonus itself has been implemented fully. This is enabled by default. Note that you should avoid disabling this unless if there is a holdup with the implementation that forces you to skip the bonus, whether that be an impossibility due to unimplemented systems (such as party buffs, res shred, etc...), or an inability to program the bonus. |
| `priority` | `number` | Determines the order priority in which the bonus should be applied within the calculation. Values from `0-3`, but defaults to `Number.MAX_SAFE_INTEGER`. |
| `affectsTalentIndex` | `number` | Determines the index of the talent that needs modifying. If not defined, then assumes that the bonus will not affect `talentScalings`. Values from `0-2`. |
| `applyToTalentScaling` | `void` | Defines the modification(s) done to the indexed talent. |

##### The Priority System

> [!TIP]
> It is ***highly recommended*** that you familiarize yourself with the types of bonuses and what priorities are assigned to them, since Abystar does not natively check for the validity of the bonuses, nor their effect on the attributes/scalings. As mentioned many times previously in the document, it's advised you cross-reference other existing characters that are implemented.

One of the most crucial aspects to calculating the correct results is for the program to understand where and when the bonus should be applied within the calculation. This is where the priority system comes into play, as the program ultimately compounds all of the bonuses in conjunction with each other in practice. However, giving the wrong priority for a bonus will **NOT** cause an error in the program, so it is up to you to ensure that this doesn't happen.

**All** bonuses that define `effect` will require you to define the `priority` field. The only exception is for bonuses that do nothing in `effect`, whether that be due to a limitation, or a bonus that only effects `applyToTalentScaling`. Keep in mind that the priority system revolves around how you modify [attributes](#attributes-and-bonus-stats).

- Priority `0`: This priority is currently reserved only for implementing constellations 3 and 5, as they're the only bonuses which affect the character's talent levels. You may find how to do this [later on in the document](#constellation-specific-implementation). Note that this may change in the future, because characters like Tartaglia give party buffs which alter those properties.
- Priority `1`: If your bonus modifies the attributes from the `characterAttributes.ts` class through flat value(s) (or constants), then it belongs to priority 1. Note that any [custom attributes](#attributes-and-bonus-stats) are considered to be constants in this case, because they do not exist within the the `characterAttributes.ts` class.
  - **Example:** A bonus that increases EM by 200, a bonus that gives an additional 20% Dendro DMG%, a bonus that reduces cooldown or stamina cost by a set amount, etc...
- Priority `2`: If your bonus modifies the character's attributes through a dependency of another attribute during calculation, then it belongs to priority 2. Note that this dependency does **NOT** apply to custom attributes. The dependency must come from existing attributes within the `characterAttributes.ts` class. For example, scaling HP off of ATK is considered priority 2, scaling Tri-Karma Purification off of HP is considered priority 2, but scaling HP off of Tri-Karma Purification is considered priority 1.
  - **Example:** A bonus that gives ATK based off 25% of HP, a bonus that grants absorbed element's DMG% based off of 30% of EM, etc...
- Priority `3`: If your bonus uses a character attribute within `characterAttributes.ts` to calculate a constant, then it belongs to priority 3. Recall that any custom attributes are considered constants, and not apart of the character attribute library. Thus, you may think of this as a reverse of priority 1.
  - **Example:** A bonus that increases Tri-Karma Purification damage based off of EM, a bonus that increases summon damage based off of HP, etc...

Under the scenario where a bonus is unimplemented, priority will be automatically set to `Number.MAX_SAFE_INTEGER`.

##### Utils For Bonuses

Make sure to know the incorporated utility functions that come with the repository's library. They come very handy when you're implementing either the `effect` or `applytoTalentScaling` property. If you wish to contribute your own utility function to help with future character implementations, please create a pull request in the `utils.ts` file.

| Function | Parameters | Description |
| :--- | :--- | :--- |
| `clamp` | `(number: number, min: number, max: number)` | Takes a number and restricts its value in range between a minimum and maximum. |
| `getTalentScalingValue` | `(characterState: CharacterState, talentName: string, scalingKey: string, talentLevel: number)` | Allows you to get the numerical value of a scaling within `talentScalings`. More details on how to use this in [implementing effect](#implementing-effect). |

##### Implementing `effect`

Welcome to the grind. And by that, we mean the thing that will probably make you rip your hair out. If you are ever stuck on implementing the effect you need for the bonus, try cross-referencing other completed characters with similar bonus effects to understand how they work. There is are no strict guidelines for every possible scenario, so it is up to you to come up with the logic for implementing the effect.

The `effect` takes up to 4 possible parameters.

1. `attributes`: The instance of the character's current attribute metadata.
2. `talentLevels`: The instance of the character's current talent level metadata. This is a `number[]` which goes from index `0-2`. `talentLevels[0]` refers to the Normal Attack talent level. `talentLevels[1]` refers to the Elemental Skill talent level. Last but not least, `talentLevels[2]` refers to the Elemental Burst talent level.
3. `currentStacks`: The currently selected index for the `stackOptions` field. As mentioned previously, this defaults to 1, and will only change if `stackOptions` is defined as an array with more than 1 index within. This allows you to manipulate the effect that the bonus gives depending on the dropdown selection you choose.
4. `state`: Refers to the instance of your character's state. Generally reserved only for the [`getTalentScalingValue` function](#utils-for-bonuses) for character bonuses. However, you may also use the character state to obtain any information about the metadata as whole. This may come in handy for future characters, or future systems yet to be implemented. Ex: *The character's element, their current constellation, their level, their active bonuses, their weapon, etc...*

> [!NOTE]
> You only need to pass on `attributes` in `effect` in order for it to become valid, as it's the return type. This means that you are free to choose however many of the 4 parameters that you actually need in order to implement the bonus. **HOWEVER,** these parameters are **in-order.** This means that you cannot pass on `currentStacks` without also passing on `talentLevels`. Similarly, you cannot pass on `state` without also passing on both `talentLevels` and `currentStacks`. It is fine to not make use of any parameters that you do not need. But you must pass them nonetheless.

If you are to use any of the 3 parameters besides `attributes`, give an null condition at the very beginning as to not break the bonus.

```tsx
if (!talentLevels || !currentStacks || !state) return {attributes}
```

`attributes` cannot be directly modified, as it must be passed off with a new reference of `attributes` in the `effect`'s return statement. As such, here is an example for how you achieve this:

```tsx
const newAttributes = {
    ...attributes,
    // Insert attribute changes. Example below where we add 15% to crit rate and 15% to ER.
    // Notice that this change is priority 1.
    'CRIT Rate': attributes['CRIT Rate'] + 0.15,
    'Energy Recharge': attributes['Energy Recharge'] + 0.15,
}

// Here we update the character's attributes with the new one we defined earlier.
return { attributes: newAttributes }
```

If you wish to obtain the value of a `talentScaling` property, use the `getTalentScalingValue` function. It takes in 4 parameters, all of which required. First is the `state`, which you pass off in the fourth `effect` parameter. Second is the name of the talent, third is the name of the specific talent scaling, and the fourth is the `talentLevels` index that is associated with the talent.

For example, if we wish to get the value of Furina's damage increase from her fanfare stacks in her burst, we'll obtain the value like this:

```tsx
getTalentScalingValue(
    state,
    'Let the People Rejoice',
    'Fanfare to DMG Increase Conversion Ratio',
    talentLevels[2]
)
```

If you are to use stacks in your bonus, make sure to define all of the options within `stackOptions`, and make sure to correspondingly denote the number of elements in `maxStacks`. You may use the `currentStacks` property from `effect` to denote the current option. There are various ways you may use this. Here is an example from Keqing's constellation 4, which gives different elemental damage bonuses depending on the stack obtained:

```tsx
effect: (attributes, talentLevels, currentStacks) => {
    if (!currentStacks) return { attributes }

    const elementalDamageBonus = [0.06, 0.12, 0.18, 0.24]

    const newAttributes = {
        ...attributes,
        'Electro DMG Bonus':
            attributes['Electro DMG Bonus'] +
            elementalDamageBonus[currentStacks - 1],
    }
    return { attributes: newAttributes }
},
maxStacks: 4,
stackOptions: ['None', '1 Stack', '2 Stacks', '3 Stacks', '4 Stacks'],
origin: 'C6',
minConstellation: 6,
priority: 1,
```

##### Implementing `applyToTalentScaling`

> [!NOTE]
> Bonuses may modify just the character attributes alone through `effect`, or only change `talentScalings` through `applyToTalentScaling`, or both. But bonuses will **only** be considered valid by the program once you define `effect`. This means it's ok to omit `applyToTalentScaling` from your bonus if you deem it unnecessary. But this does not hold for `effect`, as you must define it regardless if you are to modify character attributes.

There may be various scenarios where modifying a character's attributes through `effect` isn't enough to implement a bonus. Sometimes, alterations must be made towards the `talentScaling` property itself. This can be done through the `applyToTalentScaling` function.

Firstly, it's important to understand that you may only change 1 talent in a single bonus. Luckily, as of current, all Genshin character kits follow this rule. If this is to ever change in the future, please contact the maintainers.

As such, you must define the value of `affectsTalentIndex` before `applyToTalentScaling`. Similarly with `talentLevels`, it values from `0-2`, with each value representing the same as it would for the former property.

`applyToTalentScaling` itself only takes in two potential parameters. The first is mandatory, `talentScaling`. The second is `currentStacks`, which is optional. Both of these parameters have already been explained [previously](#implementing-effect), so this section will not repeat it again.

Besides that, this section requires you to have a relatively solid understanding for algorithms. We will provide two examples for implementation, but it is up to you to learn how it works. Once again, we advise you to cross-reference other completed characters which have this property.

**Example 1:** Hu Tao's elemental skill infuses her normals with pyro. However, this requires modifying the value of `damageType` from `Physical` to `Pyro` within `talentScalings` for every normal, charged, and plunge attack. Additionally, her constellation 1 reduces the charged attack stamina cost. So we must push a [unique bonus](#attributes-and-bonus-stats) to her talents as well. This is how it's done:

```tsx
affectsTalentIndex: 0,
applyToTalentScaling: (talentScaling) => {
    const normalAttackScaling =
        talentScaling['Normal Attack: Secret Spear of Wangsheng']

    if (normalAttackScaling) {
        Object.values(normalAttackScaling).forEach((aspect) => {
            if (
                aspect.formulaType !== FormulaType.DamageFormula ||
                !aspect.multiplicativeBonusStat
            )
                return
            aspect.multiplicativeBonusStat[0] = 'Pyro DMG Bonus'
            aspect.damageType = DamageType.Pyro
        })
    }
    const chargedAttackScaling =
        talentScaling['Normal Attack: Secret Spear of Wangsheng'][
            'Charged Attack Stamina Cost'
        ].multiplicativeBonusStat
    if (chargedAttackScaling) {
        chargedAttackScaling.push('Crimson Bouquet Stamina Reduction')
    }
},
```

**Example 2:** Kaedahara Kazuha as mentioned in the unique attributes section creates an extra plunge attack that isn't defined in the character's metadata. However, before this bonus is activated, the scaling should not appear on the calculation. As such, if we wish to make it togglable, we intentionally omit defining `damageType` to begin with, making it incomplete. We will define it in this bonus, and also have its element be dependent the on `currentStacks` variable. This is how it's done:

```tsx
affectsTalentIndex: 0,
applyToTalentScaling: (talentScaling, currentStacks) => {
    if (!currentStacks) return

    const plungeAttackScaling =
        talentScaling['Normal Attack: Garyuu Bladework']['Midare Ranzan']

    const elementalDamageBonus = [
        'Hydro DMG Bonus',
        'Pyro DMG Bonus',
        'Cryo DMG Bonus',
        'Electro DMG Bonus',
    ]
    const elementalDamageType = [
        DamageType.Hydro,
        DamageType.Pyro,
        DamageType.Cryo,
        DamageType.Electro,
    ]

    if (plungeAttackScaling && plungeAttackScaling.multiplicativeBonusStat) {
        plungeAttackScaling.multiplicativeBonusStat.push(
            elementalDamageBonus[currentStacks - 1]
        )
        plungeAttackScaling.damageType =
            elementalDamageType[currentStacks - 1]
    }
},
maxStacks: 4,
stackOptions: ['Off', 'Hydro', 'Pyro', 'Cryo', 'Electro'],
```

To reiterate, there are various ways you can modify `talentScalings`. These are only two examples, so please take the time to experiment and cross-reference other characters.

##### Constellation-Specific Implementation

> [!NOTE]
> **All** constellations requires both the `origin` and `minConstellation` field to be defined.

Unlike `characterBonuses`, all constellations **MUST** be implemented regardless if they have an actual bonus or not to be affecting calculation. For those that don't have an effect, here is a general template:

```tsx
{
    name: '{name}',
    description: (
        <span>
            {description}
        </span>
    ),
    icon: '/images/characters/{character_icon}.png',
    effect: (attributes) => {
        // * Unnecessary, this does nothing
        return { attributes }
    },
    origin: '{C1-C6}',
    visible: false,
    minConstellation: {1-6},
},
```

Currently, all C3's and C5's do the same thing, which is boost the character's talent levels by 3. Here is a general template on implementing them:

```tsx
{
    name: '{name}',
    description: (
        <span>
            {description}
        </span>
    ),
    icon: '/images/characters/{character_icon}.png',
    effect: (attributes, talentLevels) => {
        if (!talentLevels) return { attributes }

        const newTalentLevels = [...talentLevels]

        /*
          value = ...
          1: Normal Attack
          2: Skill
          3: Burst
        */
        newTalentLevels[value] = Math.min(newTalentLevels[value] + 3, 13)

        return { attributes: attributes, updatedTalentLevels: newTalentLevels }
    },
    minConstellation: {3 or 5},
    origin: '{C3 or C5}',
    enabled: true,
    visible: false,
    priority: 0,
},
```

#### Finishing Up

Once you have verified that everything for the character has been fully implemented and that to the best of your ability, you've checked the class from any potential errors or bugs, you are ready to do the finishing touch to set the character as implemented.

Characters are greyed out in the selection box UI until you modify the json file that contains all of the characters. Head over to `characters.json` from the `\src\data\characters\` directory and scroll down until you find your character. Once there, the final field should have the variable `implemented`. It will be false by default. Once you're sure about your completion, change the boolean to true to finish the character. Make a git commit with the "feat:" prefix, and then push the repository before creating a new [pull request](#pull-requests).

### Implementing Weapons

> **W.I.P**

### Implementing Artifacts

> [!CAUTION]
> Artifact system under development.

---

[Back to top :arrow_up:](#table-of-contents)
