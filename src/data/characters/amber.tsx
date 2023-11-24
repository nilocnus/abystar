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

const Amber: Character = {
    name: 'Amber',
    icon: '/images/characters/amber.png',
    weapon: 'Bow',
    vision: 'Pyro',
    rarity: 4,
    description:
        "Always energetic and full of life, Amber's the best \u2014 albeit only \u2014 Outrider of the Knights of Favonius.",
    occupation: 'Knights of Favonius',
    baseStats: {
        '1/20': {
            'Base HP': 793.0,
            'Base ATK': 18.7,
            'Base DEF': 50.36,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/20': {
            'Base HP': 2038.0,
            'Base ATK': 48.04,
            'Base DEF': 129.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/40': {
            'Base HP': 2630.0,
            'Base ATK': 62.01,
            'Base DEF': 166.99,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/40': {
            'Base HP': 3940.0,
            'Base ATK': 92.88,
            'Base DEF': 250.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/50': {
            'Base HP': 4361.0,
            'Base ATK': 102.8,
            'Base DEF': 276.86,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/50': {
            'Base HP': 5016.0,
            'Base ATK': 118.25,
            'Base DEF': 318.46,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/60': {
            'Base HP': 5578.0,
            'Base ATK': 131.48,
            'Base DEF': 354.1,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/60': {
            'Base HP': 6233.0,
            'Base ATK': 146.93,
            'Base DEF': 395.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/70': {
            'Base HP': 6654.0,
            'Base ATK': 156.85,
            'Base DEF': 422.42,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/70': {
            'Base HP': 7309.0,
            'Base ATK': 172.28,
            'Base DEF': 463.97,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/80': {
            'Base HP': 7730.0,
            'Base ATK': 182.2,
            'Base DEF': 490.7,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/80': {
            'Base HP': 8385.0,
            'Base ATK': 197.65,
            'Base DEF': 532.29,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/90': {
            'Base HP': 8806.0,
            'Base ATK': 207.57,
            'Base DEF': 559.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
        '90/90': {
            'Base HP': 9461.0,
            'Base ATK': 223.02,
            'Base DEF': 600.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
    },
    activeSkills: [
        {
            name: 'Normal Attack: Sharpshooter',
            image: 'https://genshin.honeyhunterworld.com/img/s_213101.webp',
            description:
                'Normal Attack\nPerforms up to 5 consecutive shots with a bow.\nCharged Attack\nPerforms a more precise\nAimed Shot\nwith increased DMG.\nWhile aiming, flames will accumulate on the arrowhead. A fully charged flaming arrow will deal\nPyro DMG\n.\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '36.12%',
                    Lv2: '39.06%',
                    Lv3: '42%',
                    Lv4: '46.2%',
                    Lv5: '49.14%',
                    Lv6: '52.5%',
                    Lv7: '57.12%',
                    Lv8: '61.74%',
                    Lv9: '66.36%',
                    Lv10: '71.4%',
                    Lv11: '76.44%',
                    Lv12: '81.48%',
                    Lv13: '86.52%',
                    Lv14: '91.56%',
                    Lv15: '96.6%',
                },
                '2-Hit DMG': {
                    Lv1: '36.12%',
                    Lv2: '39.06%',
                    Lv3: '42%',
                    Lv4: '46.2%',
                    Lv5: '49.14%',
                    Lv6: '52.5%',
                    Lv7: '57.12%',
                    Lv8: '61.74%',
                    Lv9: '66.36%',
                    Lv10: '71.4%',
                    Lv11: '76.44%',
                    Lv12: '81.48%',
                    Lv13: '86.52%',
                    Lv14: '91.56%',
                    Lv15: '96.6%',
                },
                '3-Hit DMG': {
                    Lv1: '46.44%',
                    Lv2: '50.22%',
                    Lv3: '54%',
                    Lv4: '59.4%',
                    Lv5: '63.18%',
                    Lv6: '67.5%',
                    Lv7: '73.44%',
                    Lv8: '79.38%',
                    Lv9: '85.32%',
                    Lv10: '91.8%',
                    Lv11: '98.28%',
                    Lv12: '104.76%',
                    Lv13: '111.24%',
                    Lv14: '117.72%',
                    Lv15: '124.2%',
                },
                '4-Hit DMG': {
                    Lv1: '47.3%',
                    Lv2: '51.15%',
                    Lv3: '55%',
                    Lv4: '60.5%',
                    Lv5: '64.35%',
                    Lv6: '68.75%',
                    Lv7: '74.8%',
                    Lv8: '80.85%',
                    Lv9: '86.9%',
                    Lv10: '93.5%',
                    Lv11: '100.1%',
                    Lv12: '106.7%',
                    Lv13: '113.3%',
                    Lv14: '119.9%',
                    Lv15: '126.5%',
                },
                '5-Hit DMG': {
                    Lv1: '59.34%',
                    Lv2: '64.17%',
                    Lv3: '69%',
                    Lv4: '75.9%',
                    Lv5: '80.73%',
                    Lv6: '86.25%',
                    Lv7: '93.84%',
                    Lv8: '101.43%',
                    Lv9: '109.02%',
                    Lv10: '117.3%',
                    Lv11: '125.58%',
                    Lv12: '133.86%',
                    Lv13: '142.14%',
                    Lv14: '150.42%',
                    Lv15: '158.7%',
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
                'Fully-Charged Aimed Shot': {
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
            name: 'Explosive Puppet',
            image: 'https://genshin.honeyhunterworld.com/img/s_213201.webp',
            description:
                "The ever-reliable Baron Bunny takes the stage.\nBaron Bunny\n\u00b7Continuously taunts the enemy, drawing their fire.\n\u00b7Baron Bunny's HP scales with Amber's Max HP.\n\u00b7When destroyed or when its timer expires, Baron Bunny explodes, dealing\nAoE Pyro DMG\n.\nHold\nAdjusts the throwing direction of Baron Bunny.\nThe longer the button is held, the further the throw.\nBaron Bunny hails from a storied lineage, but Amber has stopped keeping count since Baron Bunny the 893rd.",
            data: {
                'Inherited HP': {
                    Lv1: '41.36%',
                    Lv2: '44.46%',
                    Lv3: '47.56%',
                    Lv4: '51.7%',
                    Lv5: '54.8%',
                    Lv6: '57.9%',
                    Lv7: '62.04%',
                    Lv8: '66.18%',
                    Lv9: '70.31%',
                    Lv10: '74.45%',
                    Lv11: '78.58%',
                    Lv12: '82.72%',
                    Lv13: '87.89%',
                    Lv14: '93.06%',
                    Lv15: '98.23%',
                },
                'Explosion DMG': {
                    Lv1: '123.2%',
                    Lv2: '132.44%',
                    Lv3: '141.68%',
                    Lv4: '154%',
                    Lv5: '163.24%',
                    Lv6: '172.48%',
                    Lv7: '184.8%',
                    Lv8: '197.12%',
                    Lv9: '209.44%',
                    Lv10: '221.76%',
                    Lv11: '234.08%',
                    Lv12: '246.4%',
                    Lv13: '261.8%',
                    Lv14: '277.2%',
                    Lv15: '292.6%',
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
            },
        },
        {
            name: 'Fiery Rain',
            image: 'https://genshin.honeyhunterworld.com/img/s_213901.webp',
            description:
                "Fires off a shower of arrows, dealing continuous\nAoE Pyro DMG\n.\nAmber's passion truly burns hot.",
            data: {
                'Fiery Rain DMG Per Wave': {
                    Lv1: '28.08%',
                    Lv2: '30.19%',
                    Lv3: '32.29%',
                    Lv4: '35.1%',
                    Lv5: '37.21%',
                    Lv6: '39.31%',
                    Lv7: '42.12%',
                    Lv8: '44.93%',
                    Lv9: '47.74%',
                    Lv10: '50.54%',
                    Lv11: '53.35%',
                    Lv12: '56.16%',
                    Lv13: '59.67%',
                    Lv14: '63.18%',
                    Lv15: '66.69%',
                },
                'Total Fiery Rain DMG': {
                    Lv1: '505.44%',
                    Lv2: '543.35%',
                    Lv3: '581.26%',
                    Lv4: '631.8%',
                    Lv5: '669.71%',
                    Lv6: '707.62%',
                    Lv7: '758.16%',
                    Lv8: '808.7%',
                    Lv9: '859.25%',
                    Lv10: '909.79%',
                    Lv11: '960.34%',
                    Lv12: '1010.88%',
                    Lv13: '1074.06%',
                    Lv14: '1137.24%',
                    Lv15: '1200.42%',
                },
                Duration: {
                    Lv1: '2s',
                    Lv2: '2s',
                    Lv3: '2s',
                    Lv4: '2s',
                    Lv5: '2s',
                    Lv6: '2s',
                    Lv7: '2s',
                    Lv8: '2s',
                    Lv9: '2s',
                    Lv10: '2s',
                    Lv11: '2s',
                    Lv12: '2s',
                    Lv13: '2s',
                    Lv14: '2s',
                    Lv15: '2s',
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
                'Energy Cost': {
                    Lv1: '40',
                    Lv2: '40',
                    Lv3: '40',
                    Lv4: '40',
                    Lv5: '40',
                    Lv6: '40',
                    Lv7: '40',
                    Lv8: '40',
                    Lv9: '40',
                    Lv10: '40',
                    Lv11: '40',
                    Lv12: '40',
                    Lv13: '40',
                    Lv14: '40',
                    Lv15: '40',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Gliding Champion',
            image: 'https://genshin.honeyhunterworld.com/img/p_212301.webp',
            description:
                'Decreases gliding Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.',
        },
        {
            name: 'Every Arrow Finds Its Target',
            image: 'https://genshin.honeyhunterworld.com/img/p_212101.webp',
            description:
                'Increases the CRIT Rate of\nFiery Rain\nby 10% and widens its AoE by 30%.',
        },
        {
            name: 'Precise Shot',
            image: 'https://genshin.honeyhunterworld.com/img/p_212201.webp',
            description:
                'Aimed Shot hits on weak points increase ATK by 15% for 10s.',
        },
    ],
    constellations: [
        {
            name: 'One Arrow to Rule Them All',
            image: 'https://genshin.honeyhunterworld.com/img/c_211.webp',
            description:
                "Fires 2 arrows per\nAimed Shot\n. The second arrow deals 20% of the first arrow's DMG.",
            level: 1,
        },
        {
            name: 'Bunny Triggered',
            image: 'https://genshin.honeyhunterworld.com/img/c_212.webp',
            description:
                "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it.\nExplosion via manual detonation deals 200% additional DMG.",
            level: 2,
        },
        {
            name: 'It Burns!',
            image: 'https://genshin.honeyhunterworld.com/img/c_213.webp',
            description:
                'Increases the Level of\nFiery Rain\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: "It's Not Just Any Doll...",
            image: 'https://genshin.honeyhunterworld.com/img/c_214.webp',
            description:
                "Decreases\nExplosive Puppet\n's CD by 20%. Adds 1 additional charge.",
            level: 4,
        },
        {
            name: "It's Baron Bunny!",
            image: 'https://genshin.honeyhunterworld.com/img/c_215.webp',
            description:
                'Increases the Level of\nExplosive Puppet\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Wildfire',
            image: 'https://genshin.honeyhunterworld.com/img/c_216.webp',
            description:
                "Fiery Rain\nincreases all party members' Movement SPD by 15% and ATK by 15% for 10s.",
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Amber
