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

const Layla: Character = {
    name: 'Layla',
    icon: '/images/characters/UI_AvatarIcon_Layla.png',
    weapon: 'Sword',
    vision: 'Cryo',
    rarity: 4,
    description:
        'A Rtawahist student who specializes in Theoretical Astrology. Heavily prone to somnambulism and locked in a grinding war with sleep deprivation, the problem of restful slumber is a most troubling one to her.',
    occupation: 'Rtawahist',
    baseStats: {
        '1/20': {
            'Base HP': 930.0,
            'Base ATK': 18.16,
            'Base DEF': 54.94,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/20': {
            'Base HP': 2389.0,
            'Base ATK': 46.66,
            'Base DEF': 141.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/40': {
            'Base HP': 3084.0,
            'Base ATK': 60.23,
            'Base DEF': 182.17,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/40': {
            'Base HP': 4619.0,
            'Base ATK': 90.22,
            'Base DEF': 272.87,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/50': {
            'Base HP': 5113.0,
            'Base ATK': 99.86,
            'Base DEF': 302.03,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/50': {
            'Base HP': 5881.0,
            'Base ATK': 114.87,
            'Base DEF': 347.41,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/60': {
            'Base HP': 6540.0,
            'Base ATK': 127.72,
            'Base DEF': 386.29,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/60': {
            'Base HP': 7308.0,
            'Base ATK': 142.73,
            'Base DEF': 431.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/70': {
            'Base HP': 7801.0,
            'Base ATK': 152.37,
            'Base DEF': 460.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/70': {
            'Base HP': 8569.0,
            'Base ATK': 167.35,
            'Base DEF': 506.15,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/80': {
            'Base HP': 9062.0,
            'Base ATK': 177.0,
            'Base DEF': 535.31,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/80': {
            'Base HP': 9831.0,
            'Base ATK': 192.0,
            'Base DEF': 580.68,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/90': {
            'Base HP': 10324.0,
            'Base ATK': 201.64,
            'Base DEF': 609.84,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
        '90/90': {
            'Base HP': 11092.0,
            'Base ATK': 216.65,
            'Base DEF': 655.22,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Sword of the Radiant Path',
            image: '/images/characters/Skill_A_01.png',
            description:
                'Normal Attack\nPerforms up to 3 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '51.22%',
                    Lv2: '55.39%',
                    Lv3: '59.56%',
                    Lv4: '65.51%',
                    Lv5: '69.68%',
                    Lv6: '74.44%',
                    Lv7: '80.99%',
                    Lv8: '87.55%',
                    Lv9: '94.1%',
                    Lv10: '101.24%',
                    Lv11: '108.39%',
                    Lv12: '115.54%',
                    Lv13: '122.68%',
                    Lv14: '129.83%',
                    Lv15: '136.98%',
                },
                '2-Hit DMG': {
                    Lv1: '48.48%',
                    Lv2: '52.43%',
                    Lv3: '56.38%',
                    Lv4: '62.01%',
                    Lv5: '65.96%',
                    Lv6: '70.47%',
                    Lv7: '76.67%',
                    Lv8: '82.87%',
                    Lv9: '89.07%',
                    Lv10: '95.84%',
                    Lv11: '102.6%',
                    Lv12: '109.37%',
                    Lv13: '116.13%',
                    Lv14: '122.9%',
                    Lv15: '129.66%',
                },
                '3-Hit DMG': {
                    Lv1: '72.97%',
                    Lv2: '78.91%',
                    Lv3: '84.85%',
                    Lv4: '93.34%',
                    Lv5: '99.28%',
                    Lv6: '106.07%',
                    Lv7: '115.4%',
                    Lv8: '124.73%',
                    Lv9: '134.07%',
                    Lv10: '144.25%',
                    Lv11: '154.43%',
                    Lv12: '164.61%',
                    Lv13: '174.8%',
                    Lv14: '184.98%',
                    Lv15: '195.16%',
                },
                'Charged Attack DMG': {
                    Lv1: '100.28%',
                    Lv2: '108.44%',
                    Lv3: '116.60%',
                    Lv4: '128.26%',
                    Lv5: '136.43%',
                    Lv6: '145.76%',
                    Lv7: '158.58%',
                    Lv8: '171.41%',
                    Lv9: '184.23%',
                    Lv10: '198.22%',
                    Lv11: '212.21%',
                    Lv12: '226.20%',
                    Lv13: '240.20%',
                    Lv14: '254.19%',
                    Lv15: '268.18%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '20',
                    Lv2: '20',
                    Lv3: '20',
                    Lv4: '20',
                    Lv5: '20',
                    Lv6: '20',
                    Lv7: '20',
                    Lv8: '20',
                    Lv9: '20',
                    Lv10: '20',
                    Lv11: '20',
                    Lv12: '20',
                    Lv13: '20',
                    Lv14: '20',
                    Lv15: '20',
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
            name: 'Nights of Formal Focus',
            image: '/images/characters/Skill_S_Layla_01.png',
            description:
                "Puts forth a shield known as the Curtain of Slumber, dealing\nAoE Cryo DMG\n.\nThe Curtain of Slumber's DMG Absorption is based on Layla's Max HP and absorbs\nCryo DMG\nwith 250% effectiveness. When the shield is deployed, Layla will have\nCryo\napplied to her briefly.\nNight Stars and Shooting Stars\nWhile the Curtain of Slumber is active, it will create 1 Night Star that will be attached to it every 1.5s. When a character protected by this shield uses an Elemental Skill, 2 Night Stars will be created. Night Stars can be created once every 0.3s in this way. A maximum of 4 Night Stars can be accumulated at any one time.\nOnce the Curtain of Slumber has accumulated 4 Night Stars and there are opponents nearby, these Night Stars will transform into homing Shooting Stars that will be fired off in sequence, dealing\nCryo DMG\nto any opponents hit.\nIf the Curtain of Slumber's duration ends or it is destroyed, the Night Stars will disappear. If they are already being fired off as Shooting Stars, these Shooting Stars will last until this wave of shots ends.\nNew Night Stars cannot be created until the previous wave of Shooting Stars has been fired completely.\n\"She and I are like two master artisans who have never met, yet who sit at the same cushioned seat, embroidering the same dream-flower.\"",
            data: {
                'Skill DMG': {
                    Lv1: '12.8%',
                    Lv2: '13.76%',
                    Lv3: '14.72%',
                    Lv4: '16%',
                    Lv5: '16.96%',
                    Lv6: '17.92%',
                    Lv7: '19.2%',
                    Lv8: '20.48%',
                    Lv9: '21.76%',
                    Lv10: '23.04%',
                    Lv11: '24.32%',
                    Lv12: '25.6%',
                    Lv13: '27.2%',
                    Lv14: '28.8%',
                    Lv15: '30.4%',
                },
                'Shooting Star DMG': {
                    Lv1: '14.72%',
                    Lv2: '15.82%',
                    Lv3: '16.93%',
                    Lv4: '18.4%',
                    Lv5: '19.5%',
                    Lv6: '20.61%',
                    Lv7: '22.08%',
                    Lv8: '23.55%',
                    Lv9: '25.02%',
                    Lv10: '26.5%',
                    Lv11: '27.97%',
                    Lv12: '29.44%',
                    Lv13: '31.28%',
                    Lv14: '33.12%',
                    Lv15: '34.96%',
                },
                'Base Shield DMG Absorption': {
                    Lv1: '10.8% Max HP + 1040.01',
                    Lv2: '11.61% Max HP + 1144.02',
                    Lv3: '12.42% Max HP + 1256.71',
                    Lv4: '13.5% Max HP + 1378.06',
                    Lv5: '14.31% Max HP + 1508.08',
                    Lv6: '15.12% Max HP + 1646.76',
                    Lv7: '16.2% Max HP + 1794.12',
                    Lv8: '17.28% Max HP + 1950.14',
                    Lv9: '18.36% Max HP + 2114.83',
                    Lv10: '19.44% Max HP + 2288.19',
                    Lv11: '20.52% Max HP + 2470.22',
                    Lv12: '21.6% Max HP + 2660.91',
                    Lv13: '22.95% Max HP + 2860.27',
                    Lv14: '24.3% Max HP + 3068.3',
                    Lv15: '25.65% Max HP + 3285',
                },
                'Shield Duration': {
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
            name: 'Dream of the Star-Stream Shaker',
            image: '/images/characters/Skill_E_Layla_01.png',
            description:
                'Unleashes a Celestial Dreamsphere that constantly fires Starlight Slugs at opponents within its AoE, dealing\nCryo DMG\n.\nWhen a Starlight Slug hits, it will generate 1 Night Star for nearby Curtains of Slumber. Each Curtain of Slumber can gain 1 Night Star this way every 0.5s.\n"Sleep now, sleep now; and may many destinies be revealed before your slumbering eyes, within your star-paved dreams."',
            data: {
                'Starlight Slug DMG': {
                    Lv1: '4.65% Max HP',
                    Lv2: '5% Max HP',
                    Lv3: '5.35% Max HP',
                    Lv4: '5.81% Max HP',
                    Lv5: '6.16% Max HP',
                    Lv6: '6.51% Max HP',
                    Lv7: '6.97% Max HP',
                    Lv8: '7.44% Max HP',
                    Lv9: '7.9% Max HP',
                    Lv10: '8.37% Max HP',
                    Lv11: '8.83% Max HP',
                    Lv12: '9.3% Max HP',
                    Lv13: '9.88% Max HP',
                    Lv14: '10.46% Max HP',
                    Lv15: '11.04% Max HP',
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
            name: 'Shadowy Dream-Signs',
            image: '/images/characters/UI_Talent_Eula_Combine.png',
            description:
                'When Layla crafts Character Talent Materials, she has a 10% chance to receive double the product.',
        },
        {
            name: 'Like Nascent Light',
            image: '/images/characters/UI_Talent_S_Layla_05.png',
            description:
                'While the\nCurtain of Slumber\nis active, the Deep Sleep effect will activate each time the Curtain gains 1 Night Star:\n\u00b7The Shield Strength of a character under the effect of the Curtain of Slumber increases by 6%.\n\u00b7This effect can have a maximum of 4 stacks and persists until the Curtain of Slumber disappears.',
        },
        {
            name: 'Sweet Slumber Undisturbed',
            image: '/images/characters/UI_Talent_S_Layla_06.png',
            description:
                "The DMG dealt by the Shooting Stars fired by\nNights of Formal Focus\nis increased by 1.5% of Layla's Max HP.",
        },
    ],
    constellations: [
        {
            name: 'Fortress of Fantasy',
            image: '/images/characters/UI_Talent_S_Layla_01.png',
            description:
                'The Shield Absorption of the Curtain of Slumber generated by\nNights of Formal Focus\nis increased by 20%.\nAdditionally, when unleashing Nights of Formal Focus, she will generate a shield for any nearby party members who are not being protected by a Curtain of Slumber. This shield will have 35% of the absorption of a Curtain of Slumber, will last for 12s, and will absorb\nCryo DMG\nwith 250% effectiveness.',
            level: 1,
        },
        {
            name: "Light's Remit",
            image: '/images/characters/UI_Talent_S_Layla_02.png',
            description:
                'When Shooting Stars from\nNights of Formal Focus\nstrike opponents, they will each restore 1 Energy to Layla. Each Shooting Star can restore Energy to her in this manner once.',
            level: 2,
        },
        {
            name: 'Secrets of the Night',
            image: '/images/characters/UI_Talent_U_Layla_01.png',
            description:
                'Increases the Level of\nNights of Formal Focus\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Starry Illumination',
            image: '/images/characters/UI_Talent_S_Layla_03.png',
            description:
                "When\nNights of Formal Focus\nstarts to fire off Shooting Stars, it will grant all nearby party members the Dawn Star effect, causing their Normal and Charged Attack DMG to increase based on 5% of Layla's Max HP.\nDawn Star can last up to 3s and will be removed 0.05s after dealing Normal or Charged Attack DMG.",
            level: 4,
        },
        {
            name: 'Stream of Consciousness',
            image: '/images/characters/UI_Talent_U_Layla_02.png',
            description:
                'Increases the Level of\nDream of the Star-Stream Shaker\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Radiant Soulfire',
            image: '/images/characters/UI_Talent_S_Layla_04.png',
            description:
                'Shooting Stars from\nNights of Formal Focus\ndeal 40% increased DMG, and Starlight Slugs from\nDream of the Star-Stream Shaker\ndeal 40% increased DMG.\nAdditionally, the interval between the creation of Night Stars via Nights of Formal Focus is decreased by 20%.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Layla
