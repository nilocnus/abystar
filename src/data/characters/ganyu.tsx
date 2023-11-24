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

const Ganyu: Character = {
    name: 'Ganyu',
    icon: '/images/characters/ganyu.png',
    weapon: 'Bow',
    vision: 'Cryo',
    rarity: 5,
    description:
        'The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.',
    occupation: 'Yuehai Pavilion',
    baseStats: {
        '1/20': {
            'Base HP': 763.0,
            'Base ATK': 26.07,
            'Base DEF': 49.06,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/20': {
            'Base HP': 1978.0,
            'Base ATK': 67.62,
            'Base DEF': 127.26,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/40': {
            'Base HP': 2632.0,
            'Base ATK': 89.97,
            'Base DEF': 169.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/40': {
            'Base HP': 3939.0,
            'Base ATK': 134.62,
            'Base DEF': 253.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/50': {
            'Base HP': 4403.0,
            'Base ATK': 150.5,
            'Base DEF': 283.26,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/50': {
            'Base HP': 5066.0,
            'Base ATK': 173.16,
            'Base DEF': 325.89,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/60': {
            'Base HP': 5686.0,
            'Base ATK': 194.33,
            'Base DEF': 365.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/60': {
            'Base HP': 6355.0,
            'Base ATK': 217.22,
            'Base DEF': 408.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/70': {
            'Base HP': 6820.0,
            'Base ATK': 233.1,
            'Base DEF': 438.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/70': {
            'Base HP': 7495.0,
            'Base ATK': 256.19,
            'Base DEF': 482.18,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/80': {
            'Base HP': 7960.0,
            'Base ATK': 272.07,
            'Base DEF': 512.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.28800000000000003,
        },
        '80/80': {
            'Base HP': 8643.0,
            'Base ATK': 295.43,
            'Base DEF': 556.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.28800000000000003,
        },
        '80/90': {
            'Base HP': 9108.0,
            'Base ATK': 311.31,
            'Base DEF': 585.91,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
        '90/90': {
            'Base HP': 9797.0,
            'Base ATK': 334.85,
            'Base DEF': 630.21,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
    },
    activeSkills: [
        {
            name: 'Normal Attack: Liutian Archery',
            image: 'https://genshin.honeyhunterworld.com/img/s_373101.webp',
            description:
                'Normal Attack\nPerforms up to 6 consecutive shots with a bow.\nCharged Attack\nPerforms a more precise\nAimed Shot\nwith increased DMG.\nWhile aiming, an icy aura will accumulate on the arrowhead before the arrow is fired. Has different effects based on how long the energy has been charged:\n\u00b7Charge Level 1: Fires off an icy arrow that deals\nCryo DMG\n.\n\u00b7Charge Level 2: Fires off a Frostflake Arrow that deals\nCryo DMG\n. The Frostflake Arrow blooms after hitting its target, dealing\nAoE Cryo DMG\n.\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '31.73%',
                    Lv2: '34.32%',
                    Lv3: '36.9%',
                    Lv4: '40.59%',
                    Lv5: '43.17%',
                    Lv6: '46.13%',
                    Lv7: '50.18%',
                    Lv8: '54.24%',
                    Lv9: '58.3%',
                    Lv10: '62.73%',
                    Lv11: '67.8%',
                    Lv12: '73.77%',
                    Lv13: '79.74%',
                    Lv14: '85.7%',
                    Lv15: '92.21%',
                },
                '2-Hit DMG': {
                    Lv1: '35.6%',
                    Lv2: '38.5%',
                    Lv3: '41.4%',
                    Lv4: '45.54%',
                    Lv5: '48.44%',
                    Lv6: '51.75%',
                    Lv7: '56.3%',
                    Lv8: '60.86%',
                    Lv9: '65.41%',
                    Lv10: '70.38%',
                    Lv11: '76.07%',
                    Lv12: '82.77%',
                    Lv13: '89.46%',
                    Lv14: '96.16%',
                    Lv15: '103.46%',
                },
                '3-Hit DMG': {
                    Lv1: '45.49%',
                    Lv2: '49.2%',
                    Lv3: '52.9%',
                    Lv4: '58.19%',
                    Lv5: '61.89%',
                    Lv6: '66.12%',
                    Lv7: '71.94%',
                    Lv8: '77.76%',
                    Lv9: '83.58%',
                    Lv10: '89.93%',
                    Lv11: '97.2%',
                    Lv12: '105.76%',
                    Lv13: '114.31%',
                    Lv14: '122.87%',
                    Lv15: '132.2%',
                },
                '4-Hit DMG': {
                    Lv1: '45.49%',
                    Lv2: '49.2%',
                    Lv3: '52.9%',
                    Lv4: '58.19%',
                    Lv5: '61.89%',
                    Lv6: '66.12%',
                    Lv7: '71.94%',
                    Lv8: '77.76%',
                    Lv9: '83.58%',
                    Lv10: '89.93%',
                    Lv11: '97.2%',
                    Lv12: '105.76%',
                    Lv13: '114.31%',
                    Lv14: '122.87%',
                    Lv15: '132.2%',
                },
                '5-Hit DMG': {
                    Lv1: '48.25%',
                    Lv2: '52.17%',
                    Lv3: '56.1%',
                    Lv4: '61.71%',
                    Lv5: '65.64%',
                    Lv6: '70.13%',
                    Lv7: '76.3%',
                    Lv8: '82.47%',
                    Lv9: '88.64%',
                    Lv10: '95.37%',
                    Lv11: '103.08%',
                    Lv12: '112.16%',
                    Lv13: '121.23%',
                    Lv14: '130.3%',
                    Lv15: '140.19%',
                },
                '6-Hit DMG': {
                    Lv1: '57.62%',
                    Lv2: '62.31%',
                    Lv3: '67%',
                    Lv4: '73.7%',
                    Lv5: '78.39%',
                    Lv6: '83.75%',
                    Lv7: '91.12%',
                    Lv8: '98.49%',
                    Lv9: '105.86%',
                    Lv10: '113.9%',
                    Lv11: '123.11%',
                    Lv12: '133.95%',
                    Lv13: '144.78%',
                    Lv14: '155.61%',
                    Lv15: '167.43%',
                },
                'Aimed Shot': {
                    Lv1: '43.86%',
                    Lv2: '47.43%',
                    Lv3: '51%',
                    Lv4: '56.1%',
                    Lv5: '59.67%',
                    Lv6: '63.75%',
                    Lv7: '69.36%',
                    Lv8: '74.97%',
                    Lv9: '80.58%',
                    Lv10: '86.7%',
                    Lv11: '92.82%',
                    Lv12: '98.94%',
                    Lv13: '105.06%',
                    Lv14: '111.18%',
                    Lv15: '117.3%',
                },
                'Aimed Shot Charge Level 1': {
                    Lv1: '124%',
                    Lv2: '133.3%',
                    Lv3: '142.6%',
                    Lv4: '155%',
                    Lv5: '164.3%',
                    Lv6: '173.6%',
                    Lv7: '186%',
                    Lv8: '198.4%',
                    Lv9: '210.8%',
                    Lv10: '223.2%',
                    Lv11: '235.6%',
                    Lv12: '248%',
                    Lv13: '263.5%',
                    Lv14: '279%',
                    Lv15: '294.5%',
                },
                'Frostflake Arrow DMG': {
                    Lv1: '128%',
                    Lv2: '137.6%',
                    Lv3: '147.2%',
                    Lv4: '160%',
                    Lv5: '169.6%',
                    Lv6: '179.2%',
                    Lv7: '192%',
                    Lv8: '204.8%',
                    Lv9: '217.6%',
                    Lv10: '230.4%',
                    Lv11: '243.2%',
                    Lv12: '256%',
                    Lv13: '272%',
                    Lv14: '288%',
                    Lv15: '304%',
                },
                'Frostflake Arrow Bloom DMG': {
                    Lv1: '217.6%',
                    Lv2: '233.92%',
                    Lv3: '250.24%',
                    Lv4: '272%',
                    Lv5: '288.32%',
                    Lv6: '304.64%',
                    Lv7: '326.4%',
                    Lv8: '348.16%',
                    Lv9: '369.92%',
                    Lv10: '391.68%',
                    Lv11: '413.44%',
                    Lv12: '435.2%',
                    Lv13: '462.4%',
                    Lv14: '489.6%',
                    Lv15: '516.8%',
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
            name: 'Trail of the Qilin',
            image: 'https://genshin.honeyhunterworld.com/img/s_373201.webp',
            description:
                'Leaving a single Ice Lotus behind, Ganyu dashes backward, shunning all impurity and dealing\nAoE Cryo DMG\n.\nIce Lotus\n\u00b7Continuously taunts surrounding opponents, attracting them to attack it.\n\u00b7Endurance scales based on Ganyu\'s Max HP.\n\u00b7Blooms profusely when destroyed or once its duration ends, dealing\nAoE Cryo DMG\n.\n"You saw me, you say? You must be mistaken. I was working overtime then."',
            data: {
                'Inherited HP': {
                    Lv1: '120%',
                    Lv2: '129%',
                    Lv3: '138%',
                    Lv4: '150%',
                    Lv5: '159%',
                    Lv6: '168%',
                    Lv7: '180%',
                    Lv8: '192%',
                    Lv9: '204%',
                    Lv10: '216%',
                    Lv11: '228%',
                    Lv12: '240%',
                    Lv13: '255%',
                    Lv14: '270%',
                    Lv15: '285%',
                },
                'Skill DMG': {
                    Lv1: '132%',
                    Lv2: '141.9%',
                    Lv3: '151.8%',
                    Lv4: '165%',
                    Lv5: '174.9%',
                    Lv6: '184.8%',
                    Lv7: '198%',
                    Lv8: '211.2%',
                    Lv9: '224.4%',
                    Lv10: '237.6%',
                    Lv11: '250.8%',
                    Lv12: '264%',
                    Lv13: '280.5%',
                    Lv14: '297%',
                    Lv15: '313.5%',
                },
                Duration: {
                    Lv1: '6s',
                    Lv2: '6s',
                    Lv3: '6s',
                    Lv4: '6s',
                    Lv5: '6s',
                    Lv6: '6s',
                    Lv7: '6s',
                    Lv8: '6s',
                    Lv9: '6s',
                    Lv10: '6s',
                    Lv11: '6s',
                    Lv12: '6s',
                    Lv13: '6s',
                    Lv14: '6s',
                    Lv15: '6s',
                },
                CD: {
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
            },
        },
        {
            name: 'Celestial Shower',
            image: 'https://genshin.honeyhunterworld.com/img/s_373901.webp',
            description:
                'Coalesces atmospheric frost and snow to summon a Sacred Cryo Pearl that exorcises evil.\nDuring its ability duration, the Sacred Cryo Pearl will continuously rain down shards of ice, striking opponents within an AoE and dealing\nCryo DMG\n.\nGanyu can bring down sweet rains as a matter of course. But against demons and heretics, they become bitter, freezing snow.',
            data: {
                'Ice Shard DMG': {
                    Lv1: '70.27%',
                    Lv2: '75.54%',
                    Lv3: '80.81%',
                    Lv4: '87.84%',
                    Lv5: '93.11%',
                    Lv6: '98.38%',
                    Lv7: '105.41%',
                    Lv8: '112.44%',
                    Lv9: '119.46%',
                    Lv10: '126.49%',
                    Lv11: '133.52%',
                    Lv12: '140.54%',
                    Lv13: '149.33%',
                    Lv14: '158.11%',
                    Lv15: '166.9%',
                },
                Duration: {
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
                'Energy Cost': {
                    Lv1: '60',
                    Lv2: '60',
                    Lv3: '60',
                    Lv4: '60',
                    Lv5: '60',
                    Lv6: '60',
                    Lv7: '60',
                    Lv8: '60',
                    Lv9: '60',
                    Lv10: '60',
                    Lv11: '60',
                    Lv12: '60',
                    Lv13: '60',
                    Lv14: '60',
                    Lv15: '60',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Preserved for the Hunt',
            image: 'https://genshin.honeyhunterworld.com/img/p_372301.webp',
            description:
                'Refunds 15% of the ore used when crafting Bow-type weapons.',
        },
        {
            name: 'Undivided Heart',
            image: 'https://genshin.honeyhunterworld.com/img/p_372101.webp',
            description:
                'After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their resulting bloom effects is increased by 20% for 5s.',
        },
        {
            name: 'Harmony Between Heaven and Earth',
            image: 'https://genshin.honeyhunterworld.com/img/p_372201.webp',
            description:
                'Celestial Shower\ngrants a 20%\nCryo DMG Bonus\nto active party members in the AoE.',
        },
    ],
    constellations: [
        {
            name: 'Dew-Drinker',
            image: 'https://genshin.honeyhunterworld.com/img/c_371.webp',
            description:
                "Charge Level 2 Frostflake Arrows or Frostflake Arrow Blooms decrease opponents'\nCryo RES\nby 15% for 6s upon hit.\nA hit also regenerates 2 Energy for Ganyu. This effect can only occur once per Charge Level 2 Frostflake Arrow, regardless if Frostflake Arrow itself or its Bloom hits the target.",
            level: 1,
        },
        {
            name: 'The Auspicious',
            image: 'https://genshin.honeyhunterworld.com/img/c_372.webp',
            description: 'Trail of the Qilin\ngains 1 additional charge.',
            level: 2,
        },
        {
            name: 'Cloud-Strider',
            image: 'https://genshin.honeyhunterworld.com/img/c_373.webp',
            description:
                'Increases the Level of\nCelestial Shower\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Westward Sojourn',
            image: 'https://genshin.honeyhunterworld.com/img/c_374.webp',
            description:
                'Opponents standing within the AoE of\nCelestial Shower\ntake increased DMG. This effect strengthens over time.\nIncreased DMG taken begins at 5% and increases by 5% every 3s, up to a maximum of 25%.\nThe effect lingers for 3s after the opponent leaves the AoE.',
            level: 4,
        },
        {
            name: 'The Merciful',
            image: 'https://genshin.honeyhunterworld.com/img/c_375.webp',
            description:
                'Increases the Level of\nTrail of the Qilin\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'The Clement',
            image: 'https://genshin.honeyhunterworld.com/img/c_376.webp',
            description:
                'Using\nTrail of the Qilin\ncauses the next Frostflake Arrow shot within 30s to not require charging.',
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Ganyu
