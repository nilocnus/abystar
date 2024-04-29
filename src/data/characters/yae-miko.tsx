import { TalentScaling, Bonus, Character } from '@/interfaces/Character'

const talentScalings: TalentScaling = {
    // ...
}

const characterBonuses: Bonus[] = [
    // ...
]

const constellationBonuses: Bonus[] = [
    // ...
]

const YaeMiko: Character = {
    name: 'Yae Miko',
    icon: '/images/characters/UI_AvatarIcon_Yae.png',
    weapon: 'Catalyst',
    vision: 'Electro',
    rarity: 5,
    description:
        'Lady Guuji of the Grand Narukami Shrine. Also serves as the editor-in-chief of Yae Publishing House. Unimaginable intelligence and cunning are hidden under her beautiful appearance.',
    occupation: 'Grand Narukami Shrine',
    baseStats: {
        '1/20': {
            'Base HP': 807.0,
            'Base ATK': 26.44,
            'Base DEF': 44.27,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/20': {
            'Base HP': 2095.0,
            'Base ATK': 68.59,
            'Base DEF': 114.85,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/40': {
            'Base HP': 2787.0,
            'Base ATK': 91.25,
            'Base DEF': 152.81,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/40': {
            'Base HP': 4170.0,
            'Base ATK': 136.55,
            'Base DEF': 228.65,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/50': {
            'Base HP': 4662.0,
            'Base ATK': 152.65,
            'Base DEF': 255.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/50': {
            'Base HP': 5364.0,
            'Base ATK': 175.63,
            'Base DEF': 294.1,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/60': {
            'Base HP': 6020.0,
            'Base ATK': 197.11,
            'Base DEF': 330.06,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/60': {
            'Base HP': 6729.0,
            'Base ATK': 220.32,
            'Base DEF': 368.94,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/70': {
            'Base HP': 7220.0,
            'Base ATK': 236.43,
            'Base DEF': 395.91,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/70': {
            'Base HP': 7936.0,
            'Base ATK': 259.85,
            'Base DEF': 435.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/80': {
            'Base HP': 8428.0,
            'Base ATK': 275.96,
            'Base DEF': 462.11,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/80': {
            'Base HP': 9151.0,
            'Base ATK': 299.65,
            'Base DEF': 501.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/90': {
            'Base HP': 9643.0,
            'Base ATK': 315.76,
            'Base DEF': 528.75,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
        '90/90': {
            'Base HP': 10372.0,
            'Base ATK': 339.63,
            'Base DEF': 568.73,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Spiritfox Sin-Eater',
            image: '/images/characters/Skill_A_Catalyst_MD.png',
            description:
                'Normal Attack\nSummons forth kitsune spirits, initiating a maximum of 3 attacks that deal\nElectro DMG\n.\nCharged Attack\nConsumes a certain amount of Stamina to deal\nAoE Electro DMG\nafter a short casting time.\nPlunging Attack\nPlunges towards the ground from mid-air, damaging all opponents in her path with thunderous might. Deals\nAoE Electro DMG\nupon impact with the ground.',
            data: {
                '1-Hit DMG': {
                    Lv1: '39.66%',
                    Lv2: '42.63%',
                    Lv3: '45.61%',
                    Lv4: '49.57%',
                    Lv5: '52.55%',
                    Lv6: '55.52%',
                    Lv7: '59.49%',
                    Lv8: '63.45%',
                    Lv9: '67.42%',
                    Lv10: '71.39%',
                    Lv11: '75.35%',
                    Lv12: '79.32%',
                    Lv13: '84.27%',
                    Lv14: '89.23%',
                    Lv15: '94.19%',
                },
                '2-Hit DMG': {
                    Lv1: '38.52%',
                    Lv2: '41.41%',
                    Lv3: '44.3%',
                    Lv4: '48.15%',
                    Lv5: '51.04%',
                    Lv6: '53.93%',
                    Lv7: '57.78%',
                    Lv8: '61.63%',
                    Lv9: '65.48%',
                    Lv10: '69.33%',
                    Lv11: '73.19%',
                    Lv12: '77.04%',
                    Lv13: '81.85%',
                    Lv14: '86.67%',
                    Lv15: '91.48%',
                },
                '3-Hit DMG': {
                    Lv1: '56.89%',
                    Lv2: '61.16%',
                    Lv3: '65.42%',
                    Lv4: '71.11%',
                    Lv5: '75.38%',
                    Lv6: '79.64%',
                    Lv7: '85.33%',
                    Lv8: '91.02%',
                    Lv9: '96.71%',
                    Lv10: '102.4%',
                    Lv11: '108.09%',
                    Lv12: '113.78%',
                    Lv13: '120.89%',
                    Lv14: '128%',
                    Lv15: '135.11%',
                },
                'Charged Attack DMG': {
                    Lv1: '142.89%',
                    Lv2: '153.61%',
                    Lv3: '164.33%',
                    Lv4: '178.62%',
                    Lv5: '189.34%',
                    Lv6: '200.05%',
                    Lv7: '214.34%',
                    Lv8: '228.63%',
                    Lv9: '242.92%',
                    Lv10: '257.21%',
                    Lv11: '271.5%',
                    Lv12: '285.79%',
                    Lv13: '303.65%',
                    Lv14: '321.51%',
                    Lv15: '339.38%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '50',
                    Lv2: '50',
                    Lv3: '50',
                    Lv4: '50',
                    Lv5: '50',
                    Lv6: '50',
                    Lv7: '50',
                    Lv8: '50',
                    Lv9: '50',
                    Lv10: '50',
                    Lv11: '50',
                    Lv12: '50',
                    Lv13: '50',
                    Lv14: '50',
                    Lv15: '50',
                },
                'Plunge DMG': {
                    Lv1: '56.83%',
                    Lv2: '61.45%',
                    Lv3: '66.08%',
                    Lv4: '72.69%',
                    Lv5: '77.31%',
                    Lv6: '82.6%',
                    Lv7: '89.87%',
                    Lv8: '97.14%',
                    Lv9: '104.41%',
                    Lv10: '112.34%',
                    Lv11: '120.27%',
                    Lv12: '128.2%',
                    Lv13: '136.12%',
                    Lv14: '144.05%',
                    Lv15: '151.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '113.63%',
                    Lv2: '122.88%',
                    Lv3: '132.13%',
                    Lv4: '145.35%',
                    Lv5: '154.59%',
                    Lv6: '165.17%',
                    Lv7: '179.7%',
                    Lv8: '194.23%',
                    Lv9: '208.77%',
                    Lv10: '224.62%',
                    Lv11: '240.48%',
                    Lv12: '256.34%',
                    Lv13: '272.19%',
                    Lv14: '288.05%',
                    Lv15: '303.9%',
                },
                'High Plunge DMG': {
                    Lv1: '141.93%',
                    Lv2: '153.49%',
                    Lv3: '165.04%',
                    Lv4: '181.54%',
                    Lv5: '193.1%',
                    Lv6: '206.3%',
                    Lv7: '224.45%',
                    Lv8: '242.61%',
                    Lv9: '260.76%',
                    Lv10: '280.57%',
                    Lv11: '300.37%',
                    Lv12: '320.18%',
                    Lv13: '339.98%',
                    Lv14: '359.79%',
                    Lv15: '379.59%',
                },
            },
        },
        {
            name: 'Yakan Evocation: Sesshou Sakura',
            image: '/images/characters/Skill_S_Yae_01.png',
            description:
                'To Yae, such dull tasks as can be accomplished by driving spirits out need not be done personally.\nMoves swiftly, leaving a Sesshou Sakura behind.\nSesshou Sakura\nHas the following properties:\n\u00b7 Periodically strikes one nearby opponent with lightning, dealing\nElectro DMG\n\u00b7 When there are other Sesshou Sakura nearby, their level will increase, boosting the DMG dealt by these lightning strikes.\nThis skill has three charges.\nA maximum of 3 Sesshou Sakura can exist simultaneously. The initial level of each Sesshou Sakura is 1, and the initial highest level each sakura can reach is 3. If a new Sesshou Sakura is created too close to an existing one, the existing one will be destroyed.\n"The kitsune spirits sealed in the branches are all yakan who stooped to preying upon humans. The yakan are two grades lower than us Sky Kitsune, and so, I hardly see the problem with... asking that they do my bidding. Now, this doesn\'t mean that you humans should go learning from our grading systems, no indeed \u2014 and as for which of us, kitsune or human, is higher up in the pecking order... Heh, wouldn\'t you like to know?"',
            data: {
                'Sesshou Sakura DMG: Level 1': {
                    Lv1: '60.67%',
                    Lv2: '65.22%',
                    Lv3: '69.77%',
                    Lv4: '75.84%',
                    Lv5: '80.39%',
                    Lv6: '84.94%',
                    Lv7: '91.01%',
                    Lv8: '97.08%',
                    Lv9: '103.14%',
                    Lv10: '109.21%',
                    Lv11: '115.28%',
                    Lv12: '121.34%',
                    Lv13: '128.93%',
                    Lv14: '136.51%',
                    Lv15: '144.1%',
                },
                'Sesshou Sakura DMG: Level 2': {
                    Lv1: '75.84%',
                    Lv2: '81.53%',
                    Lv3: '87.22%',
                    Lv4: '94.8%',
                    Lv5: '100.49%',
                    Lv6: '106.18%',
                    Lv7: '113.76%',
                    Lv8: '121.34%',
                    Lv9: '128.93%',
                    Lv10: '136.51%',
                    Lv11: '144.1%',
                    Lv12: '151.68%',
                    Lv13: '161.16%',
                    Lv14: '170.64%',
                    Lv15: '180.12%',
                },
                'Sesshou Sakura DMG: Level 3': {
                    Lv1: '94.8%',
                    Lv2: '101.91%',
                    Lv3: '109.02%',
                    Lv4: '118.5%',
                    Lv5: '125.61%',
                    Lv6: '132.72%',
                    Lv7: '142.2%',
                    Lv8: '151.68%',
                    Lv9: '161.16%',
                    Lv10: '170.64%',
                    Lv11: '180.12%',
                    Lv12: '189.6%',
                    Lv13: '201.45%',
                    Lv14: '213.3%',
                    Lv15: '225.15%',
                },
                'Sesshou Sakura DMG: Level 4': {
                    Lv1: '118.5%',
                    Lv2: '127.39%',
                    Lv3: '136.28%',
                    Lv4: '148.13%',
                    Lv5: '157.01%',
                    Lv6: '165.9%',
                    Lv7: '177.75%',
                    Lv8: '189.6%',
                    Lv9: '201.45%',
                    Lv10: '213.3%',
                    Lv11: '225.15%',
                    Lv12: '237%',
                    Lv13: '251.81%',
                    Lv14: '266.63%',
                    Lv15: '281.44%',
                },
                Duration: {
                    Lv1: '14s',
                    Lv2: '14s',
                    Lv3: '14s',
                    Lv4: '14s',
                    Lv5: '14s',
                    Lv6: '14s',
                    Lv7: '14s',
                    Lv8: '14s',
                    Lv9: '14s',
                    Lv10: '14s',
                    Lv11: '14s',
                    Lv12: '14s',
                    Lv13: '14s',
                    Lv14: '14s',
                    Lv15: '14s',
                },
                CD: {
                    Lv1: '4s',
                    Lv2: '4s',
                    Lv3: '4s',
                    Lv4: '4s',
                    Lv5: '4s',
                    Lv6: '4s',
                    Lv7: '4s',
                    Lv8: '4s',
                    Lv9: '4s',
                    Lv10: '4s',
                    Lv11: '4s',
                    Lv12: '4s',
                    Lv13: '4s',
                    Lv14: '4s',
                    Lv15: '4s',
                },
            },
        },
        {
            name: 'Great Secret Art: Tenko Kenshin',
            image: '/images/characters/Skill_E_Yae_01.png',
            description:
                "Legends of \"kitsunetsuki,\" or the manifestation of a kitsune's might, are common in Inazuma's folktales. One that particularly captures the imagination is that of the Sky Kitsune, said to cause lightning to fall down upon the foes of the Grand Narukami Shrine. Summons a lightning strike, dealing\nAoE Electro DMG\n.\nWhen she uses this skill, Yae Miko will unseal nearby Sesshou Sakura, destroying their outer forms and transforming them into Tenko Thunderbolts that descend from the skies, dealing\nAoE Electro DMG\n. Each Sesshou Sakura destroyed in this way will create one Tenko Thunderbolt.\nOnly at times like these will Yae reveal her Sky Kitsune form and wield lightning itself. None have seen the Lady Guuji's tails and lived to tell the story... so remember, as far as you are concerned, Lady Yae does not have a tail.",
            data: {
                'Skill DMG': {
                    Lv1: '260%',
                    Lv2: '279.5%',
                    Lv3: '299%',
                    Lv4: '325%',
                    Lv5: '344.5%',
                    Lv6: '364%',
                    Lv7: '390%',
                    Lv8: '416%',
                    Lv9: '442%',
                    Lv10: '468%',
                    Lv11: '494%',
                    Lv12: '520%',
                    Lv13: '552.5%',
                    Lv14: '585%',
                    Lv15: '617.5%',
                },
                'Tenko Thunderbolt DMG': {
                    Lv1: '333.82%',
                    Lv2: '358.85%',
                    Lv3: '383.89%',
                    Lv4: '417.27%',
                    Lv5: '442.31%',
                    Lv6: '467.34%',
                    Lv7: '500.72%',
                    Lv8: '534.11%',
                    Lv9: '567.49%',
                    Lv10: '600.87%',
                    Lv11: '634.25%',
                    Lv12: '667.63%',
                    Lv13: '709.36%',
                    Lv14: '751.09%',
                    Lv15: '792.81%',
                },
                CD: {
                    Lv1: '22s',
                    Lv2: '22s',
                    Lv3: '22s',
                    Lv4: '22s',
                    Lv5: '22s',
                    Lv6: '22s',
                    Lv7: '22s',
                    Lv8: '22s',
                    Lv9: '22s',
                    Lv10: '22s',
                    Lv11: '22s',
                    Lv12: '22s',
                    Lv13: '22s',
                    Lv14: '22s',
                    Lv15: '22s',
                },
                'Energy Cost': {
                    Lv1: '90',
                    Lv2: '90',
                    Lv3: '90',
                    Lv4: '90',
                    Lv5: '90',
                    Lv6: '90',
                    Lv7: '90',
                    Lv8: '90',
                    Lv9: '90',
                    Lv10: '90',
                    Lv11: '90',
                    Lv12: '90',
                    Lv13: '90',
                    Lv14: '90',
                    Lv15: '90',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Meditations of a Yako',
            image: '/images/characters/UI_Talent_S_Yae_07.png',
            description:
                'Has a 25% chance to get 1 regional Character Talent Material (base material excluded) when crafting. The rarity is that of the base material.',
        },
        {
            name: "The Shrine's Sacred Shade",
            image: '/images/characters/UI_Talent_S_Yae_05.png',
            description:
                'When casting\nGreat Secret Art: Tenko Kenshin\n, each Sesshou Sakura destroyed resets the cooldown for 1 charge of\nYakan Evocation: Sesshou Sakura\n.',
        },
        {
            name: 'Enlightened Blessing',
            image: '/images/characters/UI_Talent_S_Yae_06.png',
            description:
                'Every point of Elemental Mastery Yae Miko possesses will increase\nSesshou Sakura\nDMG by 0.15%.',
        },
    ],
    constellations: [
        {
            name: 'Yakan Offering',
            image: '/images/characters/UI_Talent_S_Yae_01.png',
            description:
                'Each time\nGreat Secret Art: Tenko Kenshin\nactivates a Tenko Thunderbolt, Yae Miko will restore 8 Elemental Energy for herself.',
            level: 1,
        },
        {
            name: "Fox's Mooncall",
            image: '/images/characters/UI_Talent_S_Yae_02.png',
            description:
                'Sesshou Sakura\nstart at Level 2 when created, their max level is increased to 4, and their attack range is increased by 60%.',
            level: 2,
        },
        {
            name: 'The Seven Glamours',
            image: '/images/characters/UI_Talent_U_Yae_01.png',
            description:
                'Increases the Level of\nYakan Evocation: Sesshou Sakura\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Sakura Channeling',
            image: '/images/characters/UI_Talent_S_Yae_03.png',
            description:
                'When\nSesshou Sakura\nlightning hits opponents, the\nElectro DMG Bonus\nof all nearby party members is increased by 20% for 5s.',
            level: 4,
        },
        {
            name: 'Mischievous Teasing',
            image: '/images/characters/UI_Talent_U_Yae_02.png',
            description:
                'Increases the Level of\nGreat Secret Art: Tenko Kenshin\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Forbidden Art: Daisesshou',
            image: '/images/characters/UI_Talent_S_Yae_04.png',
            description:
                "The Sesshou Sakura's\nattacks will ignore 60% of the opponents' DEF.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default YaeMiko
