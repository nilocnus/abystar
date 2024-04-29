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

const Candace: Character = {
    name: 'Candace',
    icon: '/images/characters/UI_AvatarIcon_Candace.png',
    weapon: 'Polearm',
    vision: 'Hydro',
    rarity: 4,
    description:
        'A descendant of King Deshret with an amber left eye. The defender of Aaru Village.',
    occupation: 'Aaru Village',
    baseStats: {
        '1/20': {
            'Base HP': 912.0,
            'Base ATK': 17.81,
            'Base DEF': 57.23,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/20': {
            'Base HP': 2342.0,
            'Base ATK': 45.75,
            'Base DEF': 147.01,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/40': {
            'Base HP': 3024.0,
            'Base ATK': 59.05,
            'Base DEF': 189.76,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/40': {
            'Base HP': 4529.0,
            'Base ATK': 88.45,
            'Base DEF': 284.24,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/50': {
            'Base HP': 5013.0,
            'Base ATK': 97.91,
            'Base DEF': 314.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/50': {
            'Base HP': 5766.0,
            'Base ATK': 112.62,
            'Base DEF': 361.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/60': {
            'Base HP': 6411.0,
            'Base ATK': 125.22,
            'Base DEF': 402.38,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/60': {
            'Base HP': 7164.0,
            'Base ATK': 139.93,
            'Base DEF': 449.65,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/70': {
            'Base HP': 7648.0,
            'Base ATK': 149.38,
            'Base DEF': 480.03,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/70': {
            'Base HP': 8401.0,
            'Base ATK': 164.07,
            'Base DEF': 527.24,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/80': {
            'Base HP': 8885.0,
            'Base ATK': 173.53,
            'Base DEF': 557.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/80': {
            'Base HP': 9638.0,
            'Base ATK': 188.24,
            'Base DEF': 604.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/90': {
            'Base HP': 10122.0,
            'Base ATK': 197.69,
            'Base DEF': 635.25,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
        '90/90': {
            'Base HP': 10875.0,
            'Base ATK': 212.4,
            'Base DEF': 682.52,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Gleaming Spear - Guardian Stance',
            image: '/images/characters/Skill_A_03.png',
            description:
                'Normal Attack\nPerforms up to 4 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '60.8%',
                    Lv2: '65.75%',
                    Lv3: '70.7%',
                    Lv4: '77.77%',
                    Lv5: '82.72%',
                    Lv6: '88.38%',
                    Lv7: '96.15%',
                    Lv8: '103.93%',
                    Lv9: '111.71%',
                    Lv10: '120.19%',
                    Lv11: '128.67%',
                    Lv12: '137.16%',
                    Lv13: '145.64%',
                    Lv14: '154.13%',
                    Lv15: '162.61%',
                },
                '2-Hit DMG': {
                    Lv1: '61.15%',
                    Lv2: '66.12%',
                    Lv3: '71.1%',
                    Lv4: '78.21%',
                    Lv5: '83.19%',
                    Lv6: '88.88%',
                    Lv7: '96.7%',
                    Lv8: '104.52%',
                    Lv9: '112.34%',
                    Lv10: '120.87%',
                    Lv11: '129.4%',
                    Lv12: '137.93%',
                    Lv13: '146.47%',
                    Lv14: '155%',
                    Lv15: '163.53%',
                },
                '3-Hit DMG': {
                    Lv1: '78.86%',
                    Lv2: '85.28%',
                    Lv3: '91.71%',
                    Lv4: '100.87%',
                    Lv5: '107.29%',
                    Lv6: '114.62%',
                    Lv7: '124.71%',
                    Lv8: '134.80%',
                    Lv9: '144.89%',
                    Lv10: '155.89%',
                    Lv11: '166.89%',
                    Lv12: '177.89%',
                    Lv13: '188.91%',
                    Lv14: '199.91%',
                    Lv15: '210.91%',
                },
                '4-Hit DMG': {
                    Lv1: '94.94%',
                    Lv2: '102.67%',
                    Lv3: '110.4%',
                    Lv4: '121.44%',
                    Lv5: '129.17%',
                    Lv6: '138%',
                    Lv7: '150.14%',
                    Lv8: '162.29%',
                    Lv9: '174.43%',
                    Lv10: '187.68%',
                    Lv11: '200.93%',
                    Lv12: '214.18%',
                    Lv13: '227.42%',
                    Lv14: '240.67%',
                    Lv15: '253.92%',
                },
                'Charged Attack DMG': {
                    Lv1: '124.18%',
                    Lv2: '134.29%',
                    Lv3: '144.4%',
                    Lv4: '158.84%',
                    Lv5: '168.95%',
                    Lv6: '180.5%',
                    Lv7: '196.38%',
                    Lv8: '212.27%',
                    Lv9: '228.15%',
                    Lv10: '245.48%',
                    Lv11: '262.81%',
                    Lv12: '280.14%',
                    Lv13: '297.46%',
                    Lv14: '314.79%',
                    Lv15: '332.12%',
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
            name: "Sacred Rite: Heron's Sanctum",
            image: '/images/characters/Skill_S_Candace_01.png',
            description:
                "Candace's fighting style is capable of warding off an entire tide of foes.\nTap\nRushes forward with her shield, dealing\nHydro DMG\nto opponents in front of her.\nHold\nRaises her shield to block incoming attacks from nearby opponents, forming a barrier that absorbs DMG based on her Max HP and absorbs\nHydro DMG\n250% more effectively. This barrier lasts until the Elemental Skill is unleashed.\nAfter holding for a certain period of time, Candace will finish charging, and when the skill button is released, the skill duration expires, or when the barrier is broken, she will perform a leaping strike that deals\nHydro DMG\nto opponents in front of her.\nThe oath of the guardians is more stalwart yet than the shields they inherit.",
            data: {
                'Shield DMG Absorption': {
                    Lv1: '12% Max HP + 1155.56',
                    Lv2: '12.9% Max HP + 1271.14',
                    Lv3: '13.8% Max HP + 1396.34',
                    Lv4: '15% Max HP + 1531.17',
                    Lv5: '15.9% Max HP + 1675.64',
                    Lv6: '16.8% Max HP + 1829.73',
                    Lv7: '18% Max HP + 1993.46',
                    Lv8: '19.2% Max HP + 2166.82',
                    Lv9: '20.4% Max HP + 2349.81',
                    Lv10: '21.6% Max HP + 2542.43',
                    Lv11: '22.8% Max HP + 2744.68',
                    Lv12: '24% Max HP + 2956.57',
                    Lv13: '25.5% Max HP + 3178.08',
                    Lv14: '27% Max HP + 3409.22',
                    Lv15: '28.5% Max HP + 3650',
                },
                'Basic DMG': {
                    Lv1: '12% Max HP',
                    Lv2: '12.9% Max HP',
                    Lv3: '13.8% Max HP',
                    Lv4: '15% Max HP',
                    Lv5: '15.9% Max HP',
                    Lv6: '16.8% Max HP',
                    Lv7: '18% Max HP',
                    Lv8: '19.2% Max HP',
                    Lv9: '20.4% Max HP',
                    Lv10: '21.6% Max HP',
                    Lv11: '22.8% Max HP',
                    Lv12: '24% Max HP',
                    Lv13: '25.5% Max HP',
                    Lv14: '27% Max HP',
                    Lv15: '28.5% Max HP',
                },
                'Charged Up DMG': {
                    Lv1: '19.04% Max HP',
                    Lv2: '20.47% Max HP',
                    Lv3: '21.9% Max HP',
                    Lv4: '23.8% Max HP',
                    Lv5: '25.23% Max HP',
                    Lv6: '26.66% Max HP',
                    Lv7: '28.56% Max HP',
                    Lv8: '30.46% Max HP',
                    Lv9: '32.37% Max HP',
                    Lv10: '34.27% Max HP',
                    Lv11: '36.18% Max HP',
                    Lv12: '38.08% Max HP',
                    Lv13: '40.46% Max HP',
                    Lv14: '42.84% Max HP',
                    Lv15: '45.22% Max HP',
                },
                'Press CD': {
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
                'Hold CD': {
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
            name: "Sacred Rite: Wagtail's Tide",
            image: '/images/characters/Skill_E_Candace_01.png',
            description:
                "Raising her weapon on high, Candace calls upon a divine blessing that deals\nAoE Hydro DMG\nbased on her Max HP and continuously confers the Prayer of the Crimson Crown on your active character.\nPrayer of the Crimson Crown\nThis effect has the following properties:\n\u00b7Characters deal increased Elemental DMG with their Normal Attacks.\n\u00b7Whenever a character takes the field, they will unleash a rippling wave of water that deals\nHydro DMG\nto nearby opponents. There is a limited number of waves that can be triggered in the duration of this skill.\n\u00b7Sword, Claymore, and Polearm-wielding characters under this effect will obtain a\nHydro Infusion\n.\nThis secret rite has been passed down through Candace's clan from generation to generation. Though the old faiths have become lost over the years, the sands still protect the heirs of the ancient realm.",
            data: {
                'Skill DMG': {
                    Lv1: '6.61% Max HP',
                    Lv2: '7.11% Max HP',
                    Lv3: '7.6% Max HP',
                    Lv4: '8.26% Max HP',
                    Lv5: '8.76% Max HP',
                    Lv6: '9.25% Max HP',
                    Lv7: '9.92% Max HP',
                    Lv8: '10.58% Max HP',
                    Lv9: '11.24% Max HP',
                    Lv10: '11.9% Max HP',
                    Lv11: '12.56% Max HP',
                    Lv12: '13.22% Max HP',
                    Lv13: '14.05% Max HP',
                    Lv14: '14.87% Max HP',
                    Lv15: '15.7% Max HP',
                },
                Duration: {
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
                'DMG Bonus': {
                    Lv1: '20%',
                    Lv2: '20%',
                    Lv3: '20%',
                    Lv4: '20%',
                    Lv5: '20%',
                    Lv6: '20%',
                    Lv7: '20%',
                    Lv8: '20%',
                    Lv9: '20%',
                    Lv10: '20%',
                    Lv11: '20%',
                    Lv12: '20%',
                    Lv13: '20%',
                    Lv14: '20%',
                    Lv15: '20%',
                },
                'Wave Impact DMG': {
                    Lv1: '6.61% Max HP',
                    Lv2: '7.11% Max HP',
                    Lv3: '7.6% Max HP',
                    Lv4: '8.26% Max HP',
                    Lv5: '8.76% Max HP',
                    Lv6: '9.25% Max HP',
                    Lv7: '9.92% Max HP',
                    Lv8: '10.58% Max HP',
                    Lv9: '11.24% Max HP',
                    Lv10: '11.9% Max HP',
                    Lv11: '12.56% Max HP',
                    Lv12: '13.22% Max HP',
                    Lv13: '14.05% Max HP',
                    Lv14: '14.87% Max HP',
                    Lv15: '15.7% Max HP',
                },
                'Wave Instances': {
                    Lv1: '3',
                    Lv2: '3',
                    Lv3: '3',
                    Lv4: '3',
                    Lv5: '3',
                    Lv6: '3',
                    Lv7: '3',
                    Lv8: '3',
                    Lv9: '3',
                    Lv10: '3',
                    Lv11: '3',
                    Lv12: '3',
                    Lv13: '3',
                    Lv14: '3',
                    Lv15: '3',
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
            name: "To Dawn's First Light",
            image: '/images/characters/UI_Talent_Explosion_Climb.png',
            description:
                'Decreases climbing Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.',
        },
        {
            name: 'Aegis of Crossed Arrows',
            image: '/images/characters/UI_Talent_S_Candace_05.png',
            description:
                "If Candace is hit by an attack in the Hold duration of\nSacred Rite: Heron's Sanctum\n, that skill will finish charging instantly.",
        },
        {
            name: 'Celestial Dome of Sand',
            image: '/images/characters/UI_Talent_S_Candace_06.png',
            description:
                "Characters affected by the Prayer of the Crimson Crown caused by\nSacred Rite: Wagtail's Tide\nwill deal 0.5% increased DMG to opponents for every 1,000 points of Candace's Max HP when they deal Elemental DMG with their Normal Attacks.",
        },
    ],
    constellations: [
        {
            name: 'Returning Heiress of the Scarlet Sands',
            image: '/images/characters/UI_Talent_S_Candace_01.png',
            description:
                "The duration of Prayer of the Crimson Crown effect triggered by\nSacred Rite: Wagtail's Tide\nis increased by 3s.",
            level: 1,
        },
        {
            name: 'Moon-Piercing Brilliance',
            image: '/images/characters/UI_Talent_S_Candace_02.png',
            description:
                "When\nSacred Rite: Heron's Sanctum\nhits opponents, Candace's Max HP will be increased by 20% for 15s.",
            level: 2,
        },
        {
            name: "Hunter's Supplication",
            image: '/images/characters/UI_Talent_U_Candace_01.png',
            description:
                "Increases the Level of\nSacred Rite: Wagtail's Tide\nby 3.\nMaximum upgrade level is 15.",
            level: 3,
        },
        {
            name: 'Sentinel Oath',
            image: '/images/characters/UI_Talent_S_Candace_03.png',
            description:
                "Shortens the Hold CD of\nSacred Rite: Heron's Sanctum\nto be the same as that of the Tapping CD.",
            level: 4,
        },
        {
            name: 'Heterochromatic Gaze',
            image: '/images/characters/UI_Talent_U_Candace_02.png',
            description:
                "Increases the Level of\nSacred Rite: Heron's Sanctum\nby 3.\nMaximum upgrade level is 15.",
            level: 5,
        },
        {
            name: 'The Overflow',
            image: '/images/characters/UI_Talent_S_Candace_04.png',
            description:
                "When characters (excluding Candace herself) affected by the Prayer of the Crimson Crown caused by\nSacred Rite: Wagtail's Tide\ndeal Elemental DMG to opponents using Normal Attacks, an attack wave will be unleashed that deals\nAoE Hydro DMG\nequal to 15% of Candace's Max HP.\nThis effect can trigger once every 2.3s and is considered Elemental Burst DMG.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Candace
