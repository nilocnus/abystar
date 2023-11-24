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

const YunJin: Character = {
    name: 'Yun Jin',
    icon: '/images/characters/yun-jin.png',
    weapon: 'Polearm',
    vision: 'Geo',
    rarity: 4,
    description:
        'A renowned Liyue opera singer who is skilled in both playwriting and singing. Her style is one-of-a-kind, exquisite and delicate, much like the person herself.',
    occupation: 'Yun-Han Opera Troupe',
    baseStats: {
        '1/20': {
            'Base HP': 894.0,
            'Base ATK': 16.03,
            'Base DEF': 61.57,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '20/20': {
            'Base HP': 2296.0,
            'Base ATK': 41.17,
            'Base DEF': 158.18,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '20/40': {
            'Base HP': 2963.0,
            'Base ATK': 53.15,
            'Base DEF': 204.18,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '40/40': {
            'Base HP': 4438.0,
            'Base ATK': 79.61,
            'Base DEF': 305.84,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0,
        },
        '40/50': {
            'Base HP': 4913.0,
            'Base ATK': 88.12,
            'Base DEF': 338.53,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0667,
        },
        '50/50': {
            'Base HP': 5651.0,
            'Base ATK': 101.35,
            'Base DEF': 389.39,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.0667,
        },
        '50/60': {
            'Base HP': 6283.0,
            'Base ATK': 112.7,
            'Base DEF': 432.96,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.1333,
        },
        '60/60': {
            'Base HP': 7021.0,
            'Base ATK': 125.94,
            'Base DEF': 483.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.1333,
        },
        '60/70': {
            'Base HP': 7495.0,
            'Base ATK': 134.44,
            'Base DEF': 516.51,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.1333,
        },
        '70/70': {
            'Base HP': 8233.0,
            'Base ATK': 147.67,
            'Base DEF': 567.31,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.1333,
        },
        '70/80': {
            'Base HP': 8707.0,
            'Base ATK': 156.17,
            'Base DEF': 599.99,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.2,
        },
        '80/80': {
            'Base HP': 9445.0,
            'Base ATK': 169.41,
            'Base DEF': 650.85,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.2,
        },
        '80/90': {
            'Base HP': 9919.0,
            'Base ATK': 177.92,
            'Base DEF': 683.53,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.2667,
        },
        '90/90': {
            'Base HP': 10657.0,
            'Base ATK': 191.16,
            'Base DEF': 734.39,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Energy Recharge': 0.2667,
        },
    },
    activeSkills: [
        {
            name: 'Normal Attack: Cloud-Grazing Strike',
            image: 'https://genshin.honeyhunterworld.com/img/s_643101.webp',
            description:
                'Normal Attack\nPerforms up to 5 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '40.51%',
                    Lv2: '43.8%',
                    Lv3: '47.1%',
                    Lv4: '51.81%',
                    Lv5: '55.11%',
                    Lv6: '58.88%',
                    Lv7: '64.06%',
                    Lv8: '69.24%',
                    Lv9: '74.42%',
                    Lv10: '80.07%',
                    Lv11: '85.72%',
                    Lv12: '91.37%',
                    Lv13: '97.03%',
                    Lv14: '102.68%',
                    Lv15: '108.33%',
                },
                '2-Hit DMG': {
                    Lv1: '40.25%',
                    Lv2: '43.52%',
                    Lv3: '46.8%',
                    Lv4: '51.48%',
                    Lv5: '54.76%',
                    Lv6: '58.5%',
                    Lv7: '63.65%',
                    Lv8: '68.8%',
                    Lv9: '73.94%',
                    Lv10: '79.56%',
                    Lv11: '85.18%',
                    Lv12: '90.79%',
                    Lv13: '96.41%',
                    Lv14: '102.02%',
                    Lv15: '107.64%',
                },
                '3-Hit DMG': {
                    Lv1: '50.48%',
                    Lv2: '54.59%',
                    Lv3: '58.70%',
                    Lv4: '64.57%',
                    Lv5: '68.68%',
                    Lv6: '73.38%',
                    Lv7: '79.83%',
                    Lv8: '86.29%',
                    Lv9: '92.75%',
                    Lv10: '99.79%',
                    Lv11: '106.83%',
                    Lv12: '113.88%',
                    Lv13: '120.92%',
                    Lv14: '127.97%',
                    Lv15: '135.01%',
                },
                '4-Hit DMG': {
                    Lv1: '52.80%',
                    Lv2: '57.10%',
                    Lv3: '61.40%',
                    Lv4: '67.54%',
                    Lv5: '71.84%',
                    Lv6: '76.74%',
                    Lv7: '83.50%',
                    Lv8: '90.25%',
                    Lv9: '97.01%',
                    Lv10: '104.38%',
                    Lv11: '111.75%',
                    Lv12: '119.12%',
                    Lv13: '126.48%',
                    Lv14: '133.85%',
                    Lv15: '141.22%',
                },
                '5-Hit DMG': {
                    Lv1: '67.34%',
                    Lv2: '72.82%',
                    Lv3: '78.3%',
                    Lv4: '86.13%',
                    Lv5: '91.61%',
                    Lv6: '97.87%',
                    Lv7: '106.49%',
                    Lv8: '115.1%',
                    Lv9: '123.71%',
                    Lv10: '133.11%',
                    Lv11: '142.51%',
                    Lv12: '151.9%',
                    Lv13: '161.3%',
                    Lv14: '170.69%',
                    Lv15: '180.09%',
                },
                'Charged Attack': {
                    Lv1: '121.69%',
                    Lv2: '131.6%',
                    Lv3: '141.5%',
                    Lv4: '155.65%',
                    Lv5: '165.56%',
                    Lv6: '176.87%',
                    Lv7: '192.44%',
                    Lv8: '208%',
                    Lv9: '223.57%',
                    Lv10: '240.55%',
                    Lv11: '260.01%',
                    Lv12: '282.89%',
                    Lv13: '305.77%',
                    Lv14: '328.65%',
                    Lv15: '353.61%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '25',
                    Lv2: '25',
                    Lv3: '25',
                    Lv4: '25',
                    Lv5: '25',
                    Lv6: '25',
                    Lv7: '25',
                    Lv8: '25',
                    Lv9: '25',
                    Lv10: '25',
                    Lv11: '25',
                    Lv12: '25',
                    Lv13: '25',
                    Lv14: '25',
                    Lv15: '25',
                },
                'Plunge DMG': {
                    Lv1: '63.93%',
                    Lv2: '69.14%',
                    Lv3: '74.34%',
                    Lv4: '81.77%',
                    Lv5: '86.98%',
                    Lv6: '92.93%',
                    Lv7: '101.1%',
                    Lv8: '109.28%',
                    Lv9: '117.46%',
                    Lv10: '126.38%',
                    Lv11: '135.3%',
                    Lv12: '144.22%',
                    Lv13: '153.14%',
                    Lv14: '162.06%',
                    Lv15: '170.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '127.84%',
                    Lv2: '138.24%',
                    Lv3: '148.65%',
                    Lv4: '163.51%',
                    Lv5: '173.92%',
                    Lv6: '185.81%',
                    Lv7: '202.16%',
                    Lv8: '218.51%',
                    Lv9: '234.86%',
                    Lv10: '252.7%',
                    Lv11: '270.54%',
                    Lv12: '288.38%',
                    Lv13: '306.22%',
                    Lv14: '324.05%',
                    Lv15: '341.89%',
                },
                'High Plunge DMG': {
                    Lv1: '159.68%',
                    Lv2: '172.67%',
                    Lv3: '185.67%',
                    Lv4: '204.24%',
                    Lv5: '217.23%',
                    Lv6: '232.09%',
                    Lv7: '252.51%',
                    Lv8: '272.93%',
                    Lv9: '293.36%',
                    Lv10: '315.64%',
                    Lv11: '337.92%',
                    Lv12: '360.2%',
                    Lv13: '382.48%',
                    Lv14: '404.76%',
                    Lv15: '427.04%',
                },
            },
        },
        {
            name: 'Opening Flourish',
            image: 'https://genshin.honeyhunterworld.com/img/s_643201.webp',
            description:
                "Ms. Yun may just be acting out fights on stage, but her skills with the spear are real enough to defend against her foes.\nPress\nFlourishes her polearm in a cloud-grasping stance, dealing\nGeo DMG\n.\nHold\nTakes up the Opening Flourish stance and charges up, forming a shield. DMG Absorption is based on Yun Jin's Max HP and has 150% effectiveness against all Elemental DMG and Physical DMG. The shield lasts until she finishes unleashing her Elemental Skill.\nWhen the skill is released, when its duration ends, or when the shield breaks, Yun Jin will unleash the charged energy as an attack, dealing\nGeo DMG\n.\nBased on the time spent charging, it will either unleash an attack at Charge Level 1 or Level 2.\nOne glorious moment on-stage, a decade of preparation behind it.",
            data: {
                'Press DMG': {
                    Lv1: '149.12% DEF',
                    Lv2: '160.3% DEF',
                    Lv3: '171.49% DEF',
                    Lv4: '186.4% DEF',
                    Lv5: '197.58% DEF',
                    Lv6: '208.77% DEF',
                    Lv7: '223.68% DEF',
                    Lv8: '238.59% DEF',
                    Lv9: '253.5% DEF',
                    Lv10: '268.42% DEF',
                    Lv11: '283.33% DEF',
                    Lv12: '298.24% DEF',
                    Lv13: '316.88% DEF',
                    Lv14: '335.52% DEF',
                    Lv15: '354.16% DEF',
                },
                'Charge Level 1 DMG': {
                    Lv1: '260.96% DEF',
                    Lv2: '280.53% DEF',
                    Lv3: '300.1% DEF',
                    Lv4: '326.2% DEF',
                    Lv5: '345.77% DEF',
                    Lv6: '365.34% DEF',
                    Lv7: '391.44% DEF',
                    Lv8: '417.54% DEF',
                    Lv9: '443.63% DEF',
                    Lv10: '469.73% DEF',
                    Lv11: '495.82% DEF',
                    Lv12: '521.92% DEF',
                    Lv13: '554.54% DEF',
                    Lv14: '587.16% DEF',
                    Lv15: '619.78% DEF',
                },
                'Charge Level 2 DMG': {
                    Lv1: '372.8% DEF',
                    Lv2: '400.76% DEF',
                    Lv3: '428.72% DEF',
                    Lv4: '466% DEF',
                    Lv5: '493.96% DEF',
                    Lv6: '521.92% DEF',
                    Lv7: '559.2% DEF',
                    Lv8: '596.48% DEF',
                    Lv9: '633.76% DEF',
                    Lv10: '671.04% DEF',
                    Lv11: '708.32% DEF',
                    Lv12: '745.6% DEF',
                    Lv13: '792.2% DEF',
                    Lv14: '838.8% DEF',
                    Lv15: '885.4% DEF',
                },
                'Shield DMG Absorption': {
                    Lv1: '12% Max HP + 1155.43',
                    Lv2: '12.9% Max HP + 1270.99',
                    Lv3: '13.8% Max HP + 1396.18',
                    Lv4: '15% Max HP + 1531',
                    Lv5: '15.9% Max HP + 1675.45',
                    Lv6: '16.8% Max HP + 1829.53',
                    Lv7: '18% Max HP + 1993.24',
                    Lv8: '19.2% Max HP + 2166.58',
                    Lv9: '20.4% Max HP + 2349.54',
                    Lv10: '21.6% Max HP + 2542.14',
                    Lv11: '22.8% Max HP + 2744.37',
                    Lv12: '24% Max HP + 2956.23',
                    Lv13: '25.5% Max HP + 3177.72',
                    Lv14: '27% Max HP + 3408.84',
                    Lv15: '28.5% Max HP + 3649.59',
                },
                CD: {
                    Lv1: '9s',
                    Lv2: '9s',
                    Lv3: '9s',
                    Lv4: '9s',
                    Lv5: '9s',
                    Lv6: '9s',
                    Lv7: '9s',
                    Lv8: '9s',
                    Lv9: '9s',
                    Lv10: '9s',
                    Lv11: '9s',
                    Lv12: '9s',
                    Lv13: '9s',
                    Lv14: '9s',
                    Lv15: '9s',
                },
            },
        },
        {
            name: "Cliffbreaker's Banner",
            image: 'https://genshin.honeyhunterworld.com/img/s_643901.webp',
            description:
                "Deals\nAoE Geo DMG\nand grants all nearby party members a Flying Cloud Flag Formation.\nFlying Cloud Flag Formation\nWhen Normal Attack DMG is dealt to opponents, Bonus DMG will be dealt based on Yun Jin's current DEF.\nThe effects of this skill will be cleared after a set duration or after being triggered a specific number of times.\nWhen one Normal Attack hits multiple opponents, the effect is triggered multiple times according to the number of opponents hit. The number of times that the effect is triggered is counted independently for each member of the party with Flying Cloud Flag Formation.\nAs the drums resound, as swords and halberds weave and clash, the doyenne is transformed into a mighty general.\nAs the instruments on stage strum in unison, lo, see how she vanquishes these demons!",
            data: {
                'Skill DMG': {
                    Lv1: '244%',
                    Lv2: '262.3%',
                    Lv3: '280.6%',
                    Lv4: '305%',
                    Lv5: '323.3%',
                    Lv6: '341.6%',
                    Lv7: '366%',
                    Lv8: '390.4%',
                    Lv9: '414.8%',
                    Lv10: '439.2%',
                    Lv11: '463.6%',
                    Lv12: '488%',
                    Lv13: '518.5%',
                    Lv14: '549%',
                    Lv15: '579.5%',
                },
                'DMG Increase': {
                    Lv1: '32.16% DEF',
                    Lv2: '34.57% DEF',
                    Lv3: '36.98% DEF',
                    Lv4: '40.2% DEF',
                    Lv5: '42.61% DEF',
                    Lv6: '45.02% DEF',
                    Lv7: '48.24% DEF',
                    Lv8: '51.46% DEF',
                    Lv9: '54.67% DEF',
                    Lv10: '57.89% DEF',
                    Lv11: '61.1% DEF',
                    Lv12: '64.32% DEF',
                    Lv13: '68.34% DEF',
                    Lv14: '72.36% DEF',
                    Lv15: '76.38% DEF',
                },
                Duration: {
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
                'Trigger Quota': {
                    Lv1: '30',
                    Lv2: '30',
                    Lv3: '30',
                    Lv4: '30',
                    Lv5: '30',
                    Lv6: '30',
                    Lv7: '30',
                    Lv8: '30',
                    Lv9: '30',
                    Lv10: '30',
                    Lv11: '30',
                    Lv12: '30',
                    Lv13: '30',
                    Lv14: '30',
                    Lv15: '30',
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
            name: 'Light Nourishment',
            image: 'https://genshin.honeyhunterworld.com/img/p_642301.webp',
            description:
                'When Perfect Cooking is achieved on Food with Adventure-related effects, there is a 12% chance to obtain double the product.',
        },
        {
            name: 'True to Oneself',
            image: 'https://genshin.honeyhunterworld.com/img/p_642101.webp',
            description:
                'Using\nOpening Flourish\nat the precise moment when Yun Jin is attacked will unleash its Level 2 Charged (Hold) form.',
        },
        {
            name: 'Breaking Conventions',
            image: 'https://genshin.honeyhunterworld.com/img/p_642201.webp',
            description:
                "The Normal Attack DMG Bonus granted by\nFlying Cloud Flag Formation\nis further increased by 2.5%/5%/7.5%/11.5% of Yun Jin's DEF when the party contains characters of 1/2/3/4 Elemental Types, respectively.",
        },
    ],
    constellations: [
        {
            name: 'Thespian Gallop',
            image: 'https://genshin.honeyhunterworld.com/img/c_641.webp',
            description: "Opening Flourish's\nCD is decreased by 18%.",
            level: 1,
        },
        {
            name: 'Myriad Mise-En-Sc\u00e8ne',
            image: 'https://genshin.honeyhunterworld.com/img/c_642.webp',
            description:
                "After\nCliffbreaker's Banner\nis unleashed, all nearby party members' Normal Attack DMG is increased by 15% for 12s.",
            level: 2,
        },
        {
            name: 'Seafaring General',
            image: 'https://genshin.honeyhunterworld.com/img/c_643.webp',
            description:
                "Increases the Level of\nCliffbreaker's Banner\nby 3.\nMaximum upgrade level is 15.",
            level: 3,
        },
        {
            name: 'Flower and a Fighter',
            image: 'https://genshin.honeyhunterworld.com/img/c_644.webp',
            description:
                'When Yun Jin triggers the Crystallize Reaction, her DEF is increased by 20% for 12s.',
            level: 4,
        },
        {
            name: 'Famed Throughout the Land',
            image: 'https://genshin.honeyhunterworld.com/img/c_645.webp',
            description:
                'Increases the Level of\nOpening Flourish\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Decorous Harmony',
            image: 'https://genshin.honeyhunterworld.com/img/c_646.webp',
            description:
                'Characters under the effects of the\nFlying Cloud Flag Formation\nhave their Normal ATK SPD increased by 12%.',
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default YunJin
