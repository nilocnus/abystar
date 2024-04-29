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

const Noelle: Character = {
    name: 'Noelle',
    icon: '/images/characters/UI_AvatarIcon_Noel.png',
    weapon: 'Claymore',
    vision: 'Geo',
    rarity: 4,
    description:
        'A maid who faithfully serves the Knights of Favonius. She dreams of joining their ranks someday.',
    occupation: 'Knights of Favonius',
    baseStats: {
        '1/20': {
            'Base HP': 1012.0,
            'Base ATK': 16.03,
            'Base DEF': 66.95,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.0,
        },
        '20/20': {
            'Base HP': 2600.0,
            'Base ATK': 41.17,
            'Base DEF': 172.0,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.0,
        },
        '20/40': {
            'Base HP': 3356.0,
            'Base ATK': 53.15,
            'Base DEF': 222.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.0,
        },
        '40/40': {
            'Base HP': 5027.0,
            'Base ATK': 79.61,
            'Base DEF': 332.56,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.0,
        },
        '40/50': {
            'Base HP': 5564.0,
            'Base ATK': 88.12,
            'Base DEF': 368.1,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.075,
        },
        '50/50': {
            'Base HP': 6400.0,
            'Base ATK': 101.35,
            'Base DEF': 423.4,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.075,
        },
        '50/60': {
            'Base HP': 7117.0,
            'Base ATK': 112.7,
            'Base DEF': 470.79,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.15,
        },
        '60/60': {
            'Base HP': 7953.0,
            'Base ATK': 125.94,
            'Base DEF': 526.09,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.15,
        },
        '60/70': {
            'Base HP': 8490.0,
            'Base ATK': 134.44,
            'Base DEF': 561.63,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.15,
        },
        '70/70': {
            'Base HP': 9325.0,
            'Base ATK': 147.67,
            'Base DEF': 616.87,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.15,
        },
        '70/80': {
            'Base HP': 9862.0,
            'Base ATK': 156.17,
            'Base DEF': 652.4,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.225,
        },
        '80/80': {
            'Base HP': 10698.0,
            'Base ATK': 169.41,
            'Base DEF': 707.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.225,
        },
        '80/90': {
            'Base HP': 11235.0,
            'Base ATK': 177.92,
            'Base DEF': 743.25,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.3,
        },
        '90/90': {
            'Base HP': 12071.0,
            'Base ATK': 191.16,
            'Base DEF': 798.55,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus Def': 0.3,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Favonius Bladework - Maid',
            image: '/images/characters/Skill_A_04.png',
            description:
                'Normal Attack\nPerforms up to 4 consecutive strikes.\nCharged Attack\nDrains Stamina over time to perform continuous spinning attacks against all nearby opponents.\nAt the end of the sequence, performs a more powerful slash.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '79.12%',
                    Lv2: '85.56%',
                    Lv3: '92%',
                    Lv4: '101.2%',
                    Lv5: '107.64%',
                    Lv6: '115%',
                    Lv7: '125.12%',
                    Lv8: '135.24%',
                    Lv9: '145.36%',
                    Lv10: '156.4%',
                    Lv11: '167.44%',
                    Lv12: '178.48%',
                    Lv13: '189.52%',
                    Lv14: '200.56%',
                    Lv15: '211.6%',
                },
                '2-Hit DMG': {
                    Lv1: '73.36%',
                    Lv2: '79.33%',
                    Lv3: '85.3%',
                    Lv4: '93.83%',
                    Lv5: '99.8%',
                    Lv6: '106.63%',
                    Lv7: '116.01%',
                    Lv8: '125.39%',
                    Lv9: '134.77%',
                    Lv10: '145.01%',
                    Lv11: '155.25%',
                    Lv12: '165.48%',
                    Lv13: '175.72%',
                    Lv14: '185.95%',
                    Lv15: '196.19%',
                },
                '3-Hit DMG': {
                    Lv1: '86.26%',
                    Lv2: '93.28%',
                    Lv3: '100.3%',
                    Lv4: '110.33%',
                    Lv5: '117.35%',
                    Lv6: '125.38%',
                    Lv7: '136.41%',
                    Lv8: '147.44%',
                    Lv9: '158.47%',
                    Lv10: '170.51%',
                    Lv11: '182.55%',
                    Lv12: '194.58%',
                    Lv13: '206.62%',
                    Lv14: '218.65%',
                    Lv15: '230.69%',
                },
                '4-Hit DMG': {
                    Lv1: '113.43%',
                    Lv2: '122.67%',
                    Lv3: '131.9%',
                    Lv4: '145.09%',
                    Lv5: '154.32%',
                    Lv6: '164.88%',
                    Lv7: '179.38%',
                    Lv8: '193.89%',
                    Lv9: '208.4%',
                    Lv10: '224.23%',
                    Lv11: '240.06%',
                    Lv12: '255.89%',
                    Lv13: '271.71%',
                    Lv14: '287.54%',
                    Lv15: '303.37%',
                },
                'Charged Attack Cyclic DMG': {
                    Lv1: '50.74%',
                    Lv2: '54.87%',
                    Lv3: '59%',
                    Lv4: '64.9%',
                    Lv5: '69.03%',
                    Lv6: '73.75%',
                    Lv7: '80.24%',
                    Lv8: '86.73%',
                    Lv9: '93.22%',
                    Lv10: '100.3%',
                    Lv11: '107.38%',
                    Lv12: '114.46%',
                    Lv13: '121.54%',
                    Lv14: '128.62%',
                    Lv15: '135.7%',
                },
                'Charged Attack Final DMG': {
                    Lv1: '90.47%',
                    Lv2: '97.84%',
                    Lv3: '105.2%',
                    Lv4: '115.72%',
                    Lv5: '123.08%',
                    Lv6: '131.5%',
                    Lv7: '143.07%',
                    Lv8: '154.64%',
                    Lv9: '166.22%',
                    Lv10: '178.84%',
                    Lv11: '191.46%',
                    Lv12: '204.09%',
                    Lv13: '216.71%',
                    Lv14: '229.34%',
                    Lv15: '241.96%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '40 / s',
                    Lv2: '40 / s',
                    Lv3: '40 / s',
                    Lv4: '40 / s',
                    Lv5: '40 / s',
                    Lv6: '40 / s',
                    Lv7: '40 / s',
                    Lv8: '40 / s',
                    Lv9: '40 / s',
                    Lv10: '40 / s',
                    Lv11: '40 / s',
                    Lv12: '40 / s',
                    Lv13: '40 / s',
                    Lv14: '40 / s',
                    Lv15: '40 / s',
                },
                'Max Duration': {
                    Lv1: '5s',
                    Lv2: '5s',
                    Lv3: '5s',
                    Lv4: '5s',
                    Lv5: '5s',
                    Lv6: '5s',
                    Lv7: '5s',
                    Lv8: '5s',
                    Lv9: '5s',
                    Lv10: '5s',
                    Lv11: '5s',
                    Lv12: '5s',
                    Lv13: '5s',
                    Lv14: '5s',
                    Lv15: '5s',
                },
                'Plunge DMG': {
                    Lv1: '74.59%',
                    Lv2: '80.66%',
                    Lv3: '86.73%',
                    Lv4: '95.4%',
                    Lv5: '101.47%',
                    Lv6: '108.41%',
                    Lv7: '117.95%',
                    Lv8: '127.49%',
                    Lv9: '137.03%',
                    Lv10: '147.44%',
                    Lv11: '157.85%',
                    Lv12: '168.26%',
                    Lv13: '178.66%',
                    Lv14: '189.07%',
                    Lv15: '199.48%',
                },
                'Low Plunge DMG': {
                    Lv1: '149.14%',
                    Lv2: '161.28%',
                    Lv3: '173.42%',
                    Lv4: '190.77%',
                    Lv5: '202.91%',
                    Lv6: '216.78%',
                    Lv7: '235.86%',
                    Lv8: '254.93%',
                    Lv9: '274.01%',
                    Lv10: '294.82%',
                    Lv11: '315.63%',
                    Lv12: '336.44%',
                    Lv13: '357.25%',
                    Lv14: '378.06%',
                    Lv15: '398.87%',
                },
                'High Plunge DMG': {
                    Lv1: '186.29%',
                    Lv2: '201.45%',
                    Lv3: '216.62%',
                    Lv4: '238.28%',
                    Lv5: '253.44%',
                    Lv6: '270.77%',
                    Lv7: '294.6%',
                    Lv8: '318.42%',
                    Lv9: '342.25%',
                    Lv10: '368.25%',
                    Lv11: '394.24%',
                    Lv12: '420.23%',
                    Lv13: '446.23%',
                    Lv14: '472.22%',
                    Lv15: '498.21%',
                },
            },
        },
        {
            name: 'Breastplate',
            image: '/images/characters/Skill_S_Noel_01.png',
            description:
                "Summons protective stone armor, dealing\nGeo DMG\nto surrounding opponents and creating a shield. The shield's DMG Absorption scales based on Noelle's DEF.\nThe shield has the following properties:\n\u00b7When Noelle's Normal and Charged Attacks hit a target, they have a certain chance to regenerate HP for all characters.\n\u00b7Possesses 150% DMG Absorption efficiency against all Elemental and Physical DMG.\nThe amount of HP healed when regeneration is triggered scales based on Noelle's DEF.\nNoelle is both a dutiful maid and a valiant knight.",
            data: {
                'Skill DMG': {
                    Lv1: '120% DEF',
                    Lv2: '129% DEF',
                    Lv3: '138% DEF',
                    Lv4: '150% DEF',
                    Lv5: '159% DEF',
                    Lv6: '168% DEF',
                    Lv7: '180% DEF',
                    Lv8: '192% DEF',
                    Lv9: '204% DEF',
                    Lv10: '216% DEF',
                    Lv11: '228% DEF',
                    Lv12: '240% DEF',
                    Lv13: '255% DEF',
                    Lv14: '270% DEF',
                    Lv15: '285% DEF',
                },
                'DMG Absorption': {
                    Lv1: '160% DEF + 769.79',
                    Lv2: '172% DEF + 846.77',
                    Lv3: '184% DEF + 930.18',
                    Lv4: '200% DEF + 1020',
                    Lv5: '212% DEF + 1116.24',
                    Lv6: '224% DEF + 1218.89',
                    Lv7: '240% DEF + 1327.96',
                    Lv8: '256% DEF + 1443.44',
                    Lv9: '272% DEF + 1565.34',
                    Lv10: '288% DEF + 1693.66',
                    Lv11: '304% DEF + 1828.39',
                    Lv12: '320% DEF + 1969.53',
                    Lv13: '340% DEF + 2117.1',
                    Lv14: '360% DEF + 2271.07',
                    Lv15: '380% DEF + 2431.47',
                },
                Healing: {
                    Lv1: '21.28% DEF + 102.72',
                    Lv2: '22.88% DEF + 112.99',
                    Lv3: '24.47% DEF + 124.12',
                    Lv4: '26.6% DEF + 136.11',
                    Lv5: '28.2% DEF + 148.95',
                    Lv6: '29.79% DEF + 162.65',
                    Lv7: '31.92% DEF + 177.2',
                    Lv8: '34.05% DEF + 192.61',
                    Lv9: '36.18% DEF + 208.87',
                    Lv10: '38.3% DEF + 226',
                    Lv11: '40.43% DEF + 243.97',
                    Lv12: '42.56% DEF + 262.81',
                    Lv13: '45.22% DEF + 282.5',
                    Lv14: '47.88% DEF + 303.05',
                    Lv15: '50.54% DEF + 324.45',
                },
                'Healing Triggering Chance': {
                    Lv1: '50%',
                    Lv2: '51%',
                    Lv3: '52%',
                    Lv4: '53%',
                    Lv5: '54%',
                    Lv6: '55%',
                    Lv7: '56%',
                    Lv8: '57%',
                    Lv9: '58%',
                    Lv10: '59%',
                    Lv11: '59%',
                    Lv12: '60%',
                    Lv13: '60%',
                    Lv14: '60%',
                    Lv15: '60%',
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
                CD: {
                    Lv1: '24s',
                    Lv2: '24s',
                    Lv3: '24s',
                    Lv4: '24s',
                    Lv5: '24s',
                    Lv6: '24s',
                    Lv7: '24s',
                    Lv8: '24s',
                    Lv9: '24s',
                    Lv10: '24s',
                    Lv11: '24s',
                    Lv12: '24s',
                    Lv13: '24s',
                    Lv14: '24s',
                    Lv15: '24s',
                },
            },
        },
        {
            name: 'Sweeping Time',
            image: '/images/characters/Skill_E_Noel_01.png',
            description:
                "Gathering the strength of stone around her weapon, Noelle strikes the opponents surrounding her within a large AoE, dealing\nGeo DMG\n.\nAfterwards, Noelle gains the following effects:\n\u00b7Larger attack AoE.\n\u00b7Converts attack DMG to\nGeo DMG\nthat cannot be overridden by any other elemental infusion.\n\u00b7Increased ATK that scales based on her DEF.\nSometimes, it's not just dust that needs sweeping...",
            data: {
                'Burst DMG': {
                    Lv1: '67.2%',
                    Lv2: '72.24%',
                    Lv3: '77.28%',
                    Lv4: '84%',
                    Lv5: '89.04%',
                    Lv6: '94.08%',
                    Lv7: '100.8%',
                    Lv8: '107.52%',
                    Lv9: '114.24%',
                    Lv10: '120.96%',
                    Lv11: '127.68%',
                    Lv12: '134.4%',
                    Lv13: '142.8%',
                    Lv14: '151.2%',
                    Lv15: '159.6%',
                },
                'Skill DMG': {
                    Lv1: '92.8%',
                    Lv2: '99.76%',
                    Lv3: '106.72%',
                    Lv4: '116%',
                    Lv5: '122.96%',
                    Lv6: '129.92%',
                    Lv7: '139.2%',
                    Lv8: '148.48%',
                    Lv9: '157.76%',
                    Lv10: '167.04%',
                    Lv11: '176.32%',
                    Lv12: '185.6%',
                    Lv13: '197.2%',
                    Lv14: '208.8%',
                    Lv15: '220.4%',
                },
                'ATK Bonus': {
                    Lv1: '40% DEF',
                    Lv2: '43% DEF',
                    Lv3: '46% DEF',
                    Lv4: '50% DEF',
                    Lv5: '53% DEF',
                    Lv6: '56% DEF',
                    Lv7: '60% DEF',
                    Lv8: '64% DEF',
                    Lv9: '68% DEF',
                    Lv10: '72% DEF',
                    Lv11: '76% DEF',
                    Lv12: '80% DEF',
                    Lv13: '85% DEF',
                    Lv14: '90% DEF',
                    Lv15: '95% DEF',
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
            name: "Maid's Knighthood",
            image: '/images/characters/UI_Talent_Cook_Defense.png',
            description:
                'When a Perfect Cooking is achieved on a DEF-boosting dish, Noelle has a 12% chance to obtain double the product.',
        },
        {
            name: 'Devotion',
            image: '/images/characters/UI_Talent_S_Noel_05.png',
            description:
                "When Noelle is in the party but not on the field, this ability triggers automatically when your active character's HP falls below 30%:\nCreates a shield for your active character that lasts for 20s and absorbs DMG equal to 400% of Noelle's DEF.\nThe shield has a 150% DMG Absorption effectiveness against all Elemental and Physical DMG.\nThis effect can only occur once every 60s.",
        },
        {
            name: 'Nice and Clean',
            image: '/images/characters/UI_Talent_S_Noel_06.png',
            description:
                'Noelle will decrease the CD of\nBreastplate\nby 1s for every 4 Normal or Charged Attack hits she scores on opponents.\nOne hit may be counted every 0.1s.',
        },
    ],
    constellations: [
        {
            name: 'I Got Your Back',
            image: '/images/characters/UI_Talent_S_Noel_01.png',
            description:
                "While\nSweeping Time\nand\nBreastplate\nare both in effect, the chance of Breastplate's healing effects activating is increased to 100%.",
            level: 1,
        },
        {
            name: 'Combat Maid',
            image: '/images/characters/UI_Talent_S_Noel_02.png',
            description:
                "Decreases the Stamina Consumption of Noelle's Charged Attacks by 20% and increases her Charged Attack DMG by 15%.",
            level: 2,
        },
        {
            name: 'Invulnerable Maid',
            image: '/images/characters/UI_Talent_U_Noel_01.png',
            description:
                'Increases the Level of\nBreastplate\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'To Be Cleaned',
            image: '/images/characters/UI_Talent_S_Noel_03.png',
            description:
                "When\nBreastplate\n's duration expires or it is destroyed by DMG, it will deal 400% of Noelle's ATK as\nGeo DMG\nto surrounding opponents.",
            level: 4,
        },
        {
            name: 'Favonius Sweeper Master',
            image: '/images/characters/UI_Talent_U_Noel_02.png',
            description:
                'Increases the Level of\nSweeping Time\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Must Be Spotless',
            image: '/images/characters/UI_Talent_S_Noel_04.png',
            description:
                "Sweeping Time\nincreases Noelle's ATK by an additional 50% of her DEF.\nAdditionally, every opponent defeated during the skill's duration adds 1s to the duration, up to 10s.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Noelle
