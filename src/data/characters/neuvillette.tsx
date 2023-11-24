import { AbilityScaling, Bonus, Character } from '@/interfaces/Character'

const abilityScalings: AbilityScaling = {
    // ...
}

const characterBonuses: Bonus[] = [
    // ...
]

const constellationBonuses: Bonus[] = [
    // ...
]

const Neuvillette: Character = {
    name: 'Neuvillette',
    icon: '/images/characters/neuvillette.png',
    weapon: 'Catalyst',
    vision: 'Hydro',
    rarity: 5,
    description:
        'The Chief Justice of Fontaine, known as the Iudex, is renowned for his unassailable impartiality.',
    occupation: 'Court of Fontaine',
    baseStats: {
        '1/20': {
            'Base HP': 1144.0,
            'Base ATK': 16.22,
            'Base DEF': 44.87,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/20': {
            'Base HP': 2967.0,
            'Base ATK': 42.07,
            'Base DEF': 116.4,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/40': {
            'Base HP': 3948.0,
            'Base ATK': 55.97,
            'Base DEF': 154.87,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/40': {
            'Base HP': 5908.0,
            'Base ATK': 83.76,
            'Base DEF': 231.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/50': {
            'Base HP': 6605.0,
            'Base ATK': 93.63,
            'Base DEF': 259.08,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/50': {
            'Base HP': 7599.0,
            'Base ATK': 107.73,
            'Base DEF': 298.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/60': {
            'Base HP': 8528.0,
            'Base ATK': 120.9,
            'Base DEF': 334.52,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/60': {
            'Base HP': 9533.0,
            'Base ATK': 135.14,
            'Base DEF': 373.92,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/70': {
            'Base HP': 10230.0,
            'Base ATK': 145.02,
            'Base DEF': 401.26,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/70': {
            'Base HP': 11243.0,
            'Base ATK': 159.39,
            'Base DEF': 441.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/80': {
            'Base HP': 11940.0,
            'Base ATK': 169.27,
            'Base DEF': 468.35,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.28800000000000003,
        },
        '80/80': {
            'Base HP': 12965.0,
            'Base ATK': 183.8,
            'Base DEF': 508.56,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.28800000000000003,
        },
        '80/90': {
            'Base HP': 13662.0,
            'Base ATK': 193.68,
            'Base DEF': 535.9,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
        '90/90': {
            'Base HP': 14695.0,
            'Base ATK': 208.32,
            'Base DEF': 576.42,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
    },
    activeSkills: [
        {
            name: 'Normal Attack: As Water Seeks Equilibrium',
            image: 'https://genshin.honeyhunterworld.com/img/s_873101.webp',
            description:
                "Normal Attack\nWith light flourishes, Neuvillette commands the tides to unleash a maximum of 3 attacks, dealing\nHydro DMG\n.\nCharged Attack Empowerment: Legal Evaluation\nWhile charging up, Neuvillette will gather the power of water, forming it into a Seal of Arbitration. In this state, Neuvillette can move and change facing, and also absorb any Sourcewater Droplets in a certain AoE.\nEvery Droplet he absorbs will increase the formation speed of the Seal, and will heal Neuvillette.\nWhen the charging is stopped, if the Symbol has yet to be formed, then a Charged Attack will be unleashed. If it has been formed, then a Charged Attack: Equitable Judgment will be unleashed.\nCharged Attack\nConsumes a fixed amount of Stamina to attack opponents with a rupturing blast of water, dealing\nAoE Hydro DMG\n.\nCharged Attack: Equitable Judgment\nUnleashes surging torrents, dealing continuous\nAoE Hydro DMG\nto all opponents in a straight-line area in front of him.\nEquitable Judgment will not consume any Stamina and lasts 3s.\nIf Neuvillette's HP is above 50%, he will continuously lose HP while using this attack.\nPlunging Attack\nGathering the might of Hydro, Neuvillette plunges towards the ground from mid-air, damaging all opponents in his path. Deals\nAoE Hydro DMG\nupon impact with the ground.",
            data: {
                '1-Hit DMG': {
                    Lv1: '54.58%',
                    Lv2: '58.67%',
                    Lv3: '62.76%',
                    Lv4: '68.22%',
                    Lv5: '72.31%',
                    Lv6: '76.41%',
                    Lv7: '81.87%',
                    Lv8: '87.32%',
                    Lv9: '92.78%',
                    Lv10: '98.24%',
                    Lv11: '103.7%',
                    Lv12: '109.15%',
                    Lv13: '115.98%',
                    Lv14: '122.8%',
                    Lv15: '129.62%',
                },
                '2-Hit DMG': {
                    Lv1: '46.25%',
                    Lv2: '49.71%',
                    Lv3: '53.18%',
                    Lv4: '57.81%',
                    Lv5: '61.28%',
                    Lv6: '64.74%',
                    Lv7: '69.37%',
                    Lv8: '73.99%',
                    Lv9: '78.62%',
                    Lv10: '83.24%',
                    Lv11: '87.87%',
                    Lv12: '92.49%',
                    Lv13: '98.27%',
                    Lv14: '104.05%',
                    Lv15: '109.83%',
                },
                '3-Hit DMG': {
                    Lv1: '72.34%',
                    Lv2: '77.76%',
                    Lv3: '83.19%',
                    Lv4: '90.42%',
                    Lv5: '95.85%',
                    Lv6: '101.27%',
                    Lv7: '108.51%',
                    Lv8: '115.74%',
                    Lv9: '122.97%',
                    Lv10: '130.21%',
                    Lv11: '137.44%',
                    Lv12: '144.68%',
                    Lv13: '153.72%',
                    Lv14: '162.76%',
                    Lv15: '171.8%',
                },
                'Charged Attack DMG': {
                    Lv1: '136.8%',
                    Lv2: '147.06%',
                    Lv3: '157.32%',
                    Lv4: '171%',
                    Lv5: '181.26%',
                    Lv6: '191.52%',
                    Lv7: '205.2%',
                    Lv8: '218.88%',
                    Lv9: '232.56%',
                    Lv10: '246.24%',
                    Lv11: '259.92%',
                    Lv12: '273.6%',
                    Lv13: '290.7%',
                    Lv14: '307.8%',
                    Lv15: '324.9%',
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
                'Charged Attack: Equitable Judgment': {
                    Lv1: '7.32% Max HP',
                    Lv2: '7.91% Max HP',
                    Lv3: '8.51% Max HP',
                    Lv4: '9.36% Max HP',
                    Lv5: '9.96% Max HP',
                    Lv6: '10.64% Max HP',
                    Lv7: '11.57% Max HP',
                    Lv8: '12.51% Max HP',
                    Lv9: '13.45% Max HP',
                    Lv10: '14.47% Max HP',
                    Lv11: '15.49% Max HP',
                    Lv12: '16.51% Max HP',
                    Lv13: '17.53% Max HP',
                    Lv14: '18.55% Max HP',
                    Lv15: '19.57% Max HP',
                },
                'HP Restored': {
                    Lv1: '16% Max HP / Droplet',
                    Lv2: '16% Max HP / Droplet',
                    Lv3: '16% Max HP / Droplet',
                    Lv4: '16% Max HP / Droplet',
                    Lv5: '16% Max HP / Droplet',
                    Lv6: '16% Max HP / Droplet',
                    Lv7: '16% Max HP / Droplet',
                    Lv8: '16% Max HP / Droplet',
                    Lv9: '16% Max HP / Droplet',
                    Lv10: '16% Max HP / Droplet',
                    Lv11: '16% Max HP / Droplet',
                    Lv12: '16% Max HP / Droplet',
                    Lv13: '16% Max HP / Droplet',
                    Lv14: '16% Max HP / Droplet',
                    Lv15: '16% Max HP / Droplet',
                },
                'HP Loss': {
                    Lv1: '8% Max HP / 0.5s',
                    Lv2: '8% Max HP / 0.5s',
                    Lv3: '8% Max HP / 0.5s',
                    Lv4: '8% Max HP / 0.5s',
                    Lv5: '8% Max HP / 0.5s',
                    Lv6: '8% Max HP / 0.5s',
                    Lv7: '8% Max HP / 0.5s',
                    Lv8: '8% Max HP / 0.5s',
                    Lv9: '8% Max HP / 0.5s',
                    Lv10: '8% Max HP / 0.5s',
                    Lv11: '8% Max HP / 0.5s',
                    Lv12: '8% Max HP / 0.5s',
                    Lv13: '8% Max HP / 0.5s',
                    Lv14: '8% Max HP / 0.5s',
                    Lv15: '8% Max HP / 0.5s',
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
                    Lv6: '165.16%',
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
            name: 'O Tears, I Shall Repay',
            image: 'https://genshin.honeyhunterworld.com/img/s_873201.webp',
            description:
                'Summons a Raging Waterfall that will deal\nAoE Hydro DMG\nto opponents in front of Neuvillette based on his Max HP. After hitting an opponent, this skill will generate 3 Sourcewater Droplets near that opponent.\nArkhe: Pneuma\nAt certain intervals, when the Raging Waterfall descends, a Spiritbreath Thorn will descend that will pierce opponents, dealing Pneuma-aligned\nHydro DMG\n.\n"The law can restrict all manner of crimes, but it cannot extirpate evil itself.',
            data: {
                'Skill DMG': {
                    Lv1: '12.86% Max HP',
                    Lv2: '13.83% Max HP',
                    Lv3: '14.79% Max HP',
                    Lv4: '16.08% Max HP',
                    Lv5: '17.04% Max HP',
                    Lv6: '18.01% Max HP',
                    Lv7: '19.3% Max HP',
                    Lv8: '20.58% Max HP',
                    Lv9: '21.87% Max HP',
                    Lv10: '23.16% Max HP',
                    Lv11: '24.44% Max HP',
                    Lv12: '25.73% Max HP',
                    Lv13: '27.34% Max HP',
                    Lv14: '28.94% Max HP',
                    Lv15: '30.55% Max HP',
                },
                'Spiritbreath Thorn DMG': {
                    Lv1: '20.8%',
                    Lv2: '22.36%',
                    Lv3: '23.92%',
                    Lv4: '26%',
                    Lv5: '27.56%',
                    Lv6: '29.12%',
                    Lv7: '31.2%',
                    Lv8: '33.28%',
                    Lv9: '35.36%',
                    Lv10: '37.44%',
                    Lv11: '39.52%',
                    Lv12: '41.6%',
                    Lv13: '44.2%',
                    Lv14: '46.8%',
                    Lv15: '49.4%',
                },
                'Spiritbreath Thorn Interval': {
                    Lv1: '10s',
                    Lv2: '10s',
                    Lv3: '10s',
                    Lv4: '10s',
                    Lv5: '10s',
                    Lv6: '10s',
                    Lv7: '10s',
                    Lv8: '10s',
                    Lv9: '10s',
                    Lv10: '10s',
                    Lv11: '10s',
                    Lv12: '10s',
                    Lv13: '10s',
                    Lv14: '10s',
                    Lv15: '10s',
                },
                'Sourcewater Droplet Duration': {
                    Lv1: '15s',
                    Lv2: '15s',
                    Lv3: '15s',
                    Lv4: '15s',
                    Lv5: '15s',
                    Lv6: '15s',
                    Lv7: '15s',
                    Lv8: '15s',
                    Lv9: '15s',
                    Lv10: '15s',
                    Lv11: '15s',
                    Lv12: '15s',
                    Lv13: '15s',
                    Lv14: '15s',
                    Lv15: '15s',
                },
                CD: {
                    Lv1: '12s',
                    Lv2: '12s',
                    Lv3: '12s',
                    Lv4: '12s',
                    Lv5: '12s',
                    Lv6: '12s',
                    Lv7: '12s',
                    Lv8: '12s',
                    Lv9: '12s',
                    Lv10: '12s',
                    Lv11: '12s',
                    Lv12: '12s',
                    Lv13: '12s',
                    Lv14: '12s',
                    Lv15: '12s',
                },
            },
        },
        {
            name: 'O Tides, I Have Returned',
            image: 'https://genshin.honeyhunterworld.com/img/s_873901.webp',
            description:
                'Unleashes waves that will deal\nAoE Hydro DMG\nbased on Neuvillette\'s Max HP. After a short interval, 2 waterfalls will descend and deal\nHydro DMG\nin a somewhat smaller AoE, and will generate 6 Sourcewater Droplets within an area in front.\n"The law is only established after its publication, and above that, the laws of nature have governed all species and eras since ancient times.',
            data: {
                'Skill DMG': {
                    Lv1: '22.26% Max HP',
                    Lv2: '23.93% Max HP',
                    Lv3: '25.6% Max HP',
                    Lv4: '27.82% Max HP',
                    Lv5: '29.49% Max HP',
                    Lv6: '31.16% Max HP',
                    Lv7: '33.39% Max HP',
                    Lv8: '35.61% Max HP',
                    Lv9: '37.84% Max HP',
                    Lv10: '40.06% Max HP',
                    Lv11: '42.29% Max HP',
                    Lv12: '44.52% Max HP',
                    Lv13: '47.3% Max HP',
                    Lv14: '50.08% Max HP',
                    Lv15: '52.86% Max HP',
                },
                'Waterfall DMG': {
                    Lv1: '9.11% Max HP',
                    Lv2: '9.79% Max HP',
                    Lv3: '10.47% Max HP',
                    Lv4: '11.38% Max HP',
                    Lv5: '12.06% Max HP',
                    Lv6: '12.75% Max HP',
                    Lv7: '13.66% Max HP',
                    Lv8: '14.57% Max HP',
                    Lv9: '15.48% Max HP',
                    Lv10: '16.39% Max HP',
                    Lv11: '17.3% Max HP',
                    Lv12: '18.21% Max HP',
                    Lv13: '19.35% Max HP',
                    Lv14: '20.49% Max HP',
                    Lv15: '21.63% Max HP',
                },
                CD: {
                    Lv1: '18s',
                    Lv2: '18s',
                    Lv3: '18s',
                    Lv4: '18s',
                    Lv5: '18s',
                    Lv6: '18s',
                    Lv7: '18s',
                    Lv8: '18s',
                    Lv9: '18s',
                    Lv10: '18s',
                    Lv11: '18s',
                    Lv12: '18s',
                    Lv13: '18s',
                    Lv14: '18s',
                    Lv15: '18s',
                },
                'Energy Cost': {
                    Lv1: '70',
                    Lv2: '70',
                    Lv3: '70',
                    Lv4: '70',
                    Lv5: '70',
                    Lv6: '70',
                    Lv7: '70',
                    Lv8: '70',
                    Lv9: '70',
                    Lv10: '70',
                    Lv11: '70',
                    Lv12: '70',
                    Lv13: '70',
                    Lv14: '70',
                    Lv15: '70',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Gather Like the Tide',
            image: 'https://genshin.honeyhunterworld.com/img/p_872301.webp',
            description:
                'Increases underwater Sprint SPD for your own party members by 15%.\nNot stackable with Passive Talents that provide the exact same effects.',
        },
        {
            name: "Heir to the Ancient Sea's Authority",
            image: 'https://genshin.honeyhunterworld.com/img/p_872101.webp',
            description:
                'When a party member triggers a Vaporize, Frozen, Electro-Charged, Bloom, Hydro Swirl, or a Hydro Crystallize reaction on opponents, 1 stack of Past Draconic Glories will be granted to Neuvillette for 30s. Max 3 stacks. Past Draconic Glories causes Charged Attack: Equitable Judgment to deal 110%/125%/160% of its original DMG.\nThe stacks of Past Draconic Glories created by each kind of Elemental Reaction exist independently.',
        },
        {
            name: 'Discipline of the Supreme Arbitration',
            image: 'https://genshin.honeyhunterworld.com/img/p_872201.webp',
            description:
                "For each 1% of Neuvillette's current HP greater than 30% of Max HP, he will gain 0.6%\nHydro DMG Bonus\n. A maximum bonus of 30% can be obtained this way.",
        },
    ],
    constellations: [
        {
            name: 'Venerable Institution',
            image: 'https://genshin.honeyhunterworld.com/img/c_871.webp',
            description:
                'When Neuvillette takes the field, he will obtain 1 stack of Past Draconic Glories from the Passive Talent "Heir to the Ancient Sea\'s Authority." You must first unlock the Passive Talent "Heir to the Ancient Sea\'s Authority."\nAdditionally, his interruption resistance will be increased while using the Charged Attack Empowerment: Legal Evaluation and the Charged Attack: Equitable Judgment.',
            level: 1,
        },
        {
            name: 'Juridical Exhortation',
            image: 'https://genshin.honeyhunterworld.com/img/c_872.webp',
            description:
                'The Passive Talent "Heir to the Ancient Sea\'s Authority" will be enhanced: Each stack of Past Draconic Glories will increase the CRIT DMG of Charged Attack: Equitable Judgment by 14%. The maximum increase that can be achieved this way is 42%.\nYou must first unlock the Passive Talent "Heir to the Ancient Sea\'s Authority."',
            level: 2,
        },
        {
            name: 'Ancient Postulation',
            image: 'https://genshin.honeyhunterworld.com/img/c_873.webp',
            description:
                'Increases the Level of\nNormal Attack: As Water Seeks Equilibrium\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Crown of Commiseration',
            image: 'https://genshin.honeyhunterworld.com/img/c_874.webp',
            description:
                'When Neuvillette is on the field and is healed, 1 Sourcewater Droplet will be generated. This effect can occur once every 4s.',
            level: 4,
        },
        {
            name: 'Axiomatic Judgment',
            image: 'https://genshin.honeyhunterworld.com/img/c_875.webp',
            description:
                'Increases the Level of\nO Tides, I Have Returned\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Wrathful Recompense',
            image: 'https://genshin.honeyhunterworld.com/img/c_876.webp',
            description:
                "When using Charged Attack: Equitable Judgment, Neuvillette can absorb nearby Sourcewater Droplets in an AoE. Each absorbed Droplet will increase the duration of Charged Attack: Equitable Judgment by 1s.\nAdditionally, when Equitable Judgment hits opponents, it will fire off 2 additional currents every 2s, each of which will deal 10% of Neuvillette's Max HP as\nHydro DMG\n. DMG dealt this way will count as DMG dealt by Equitable Judgment.",
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Neuvillette
