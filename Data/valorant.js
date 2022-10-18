const Champions_Role = {
  INITIATOR:
    'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png',
  SENTINEL:
    'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt72ffc2e48d4a7a58/5eaa06852b79652f27c31ff6/Sentinel.png',
  DUELIST:
    'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png',
  CONTROLLER:
    'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png',
};

export const Valorant = [
  {
    id: 1,
    name: 'Brimstone',
    role: 'controller',
    role_pic: Champions_Role.CONTROLLER,
    biography:
      "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance makes him an unmatched boots-on-the-ground commander.",
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png',
    abilities: [
      {
        type: 'Q',
        name: 'incendiary',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4',
        icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29aa6cc80f1caa7b/5eaf8607af7e315106b47daa/TX_Brimstone_Q.png',
        description:
          'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.',
      },
      {
        type: 'E',
        name: 'sky smoke',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf4359fed083686b/5ecad7d198f79d6925dbee07/Brimstone_E_v001_web.mp4',
        icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7c9f45408b1bf6e8/5eaf8607d4b10d15d3e8db48/TX_Brimstone_E.png',
        description:
          'EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.',
      },
      {
        type: 'C',
        name: 'stim beacon',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc34c3d692ea83f41/5ecad7d0177c51692beb1fe4/Brimstone_C_v001_web.mp4',
        icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt71797e5088fa6920/5eaf8606b8a6356e4ddc100d/TX_Brimstone_C.png',
        description:
          'EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.',
      },
      {
        type: 'X',
        name: 'orbital strike',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d19d83ba51eb18f/5ecad7d297b46c1911ad1868/Brimstone_X_v001_web.mp4',
        icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt68102861930b231f/5eaf8606f66b2515dea76b38/TX_Brimstone_X.png',
        description:
          'EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.',
      },
    ],
  },
  {
    id: 2,
    name: 'Phoenix',
    role: 'duelist',
    role_pic: Champions_Role.DUELIST,
    biography:
      "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 3,
    name: 'Sage',
    role: 'sentinel',
    role_pic: Champions_Role.SENTINEL,
    biography:
      'The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 4,
    name: 'Sova',
    role: 'initiator',
    role_pic: Champions_Role.INITIATOR,
    biography:
      "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 5,
    name: 'Viper',
    role: 'controller',
    role_pic: Champions_Role.CONTROLLER,
    biography:
      "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 6,
    name: 'Cypher',
    role: 'sentinel',
    role_pic: Champions_Role.SENTINEL,
    biography:
      "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 7,
    name: 'Reyna',
    role: 'duelist',
    role_pic: Champions_Role.DUELIST,
    biography:
      'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 8,
    name: 'Killjoy',
    role: 'sentinel',
    role_pic: Champions_Role.SENTINEL,
    biography:
      "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 9,
    name: 'Breach',
    role: 'initiator',
    role_pic: Champions_Role.INITIATOR,
    biography:
      'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt100d13bfa8286a3d/5eb7cdc11ea0c32e33b95fa2/V_AGENTS_587x900_Breach.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 10,
    name: 'Omen',
    role: 'controller',
    role_pic: Champions_Role.CONTROLLER,
    biography:
      'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 11,
    name: 'Jett',
    role: 'duelist',
    role_pic: Champions_Role.DUELIST,
    biography:
      "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 12,
    name: 'Raze',
    role: 'duelist',
    role_pic: Champions_Role.DUELIST,
    biography:
      'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },

  {
    id: 13,
    name: 'Skye',
    role: 'initiator',
    role_pic: Champions_Role.INITIATOR,
    biography:
      'Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 14,
    name: 'Yoru',
    role: 'duelist',
    role_pic: Champions_Role.DUELIST,
    biography:
      'Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 15,
    name: 'Astra',
    role: 'controller',
    role_pic: Champions_Role.CONTROLLER,
    biography:
      "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 16,
    name: 'Kay/o',
    role: 'initiator',
    role_pic: Champions_Role.INITIATOR,
    biography:
      "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 17,
    name: 'Chamber',
    role: 'sentinel',
    role_pic: Champions_Role.SENTINEL,
    biography:
      'Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6f1392b30784e029/618d9da0d380f814d61f001c/WebUpdate_Chamber_KeyArt.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 18,
    name: 'Neon',
    role: 'duelist',
    role_pic: Champions_Role.DUELIST,
    biography:
      'Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png',
    abilities: [
      {
        type: 'Q',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'E',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'C',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
      {
        type: 'X',
        name: '',
        video: '',
        icon: '',
        description: '',
      },
    ],
  },
  {
    id: 19,
    name: 'Fade',
    role: 'initiator',
    role_pic: Champions_Role.INITIATOR,
    biography:
      'Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.',
    img: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt516d37c6c84fcda0/625db737c9aa404b76ddd594/Fade_Key_Art_587x900_for_Website.png',
    abilities: [
      {
        type: 'Q',
        name: 'seize',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbec73caca7bf1045/62701777bae21939d5444b9e/Q-seize_video_NEW.mp4',
        icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltff792b334e149272/625db875fd9afd4b1fe2fbf2/Fade_-_E_-_Haunt.png',
        description:
          'Equip an orb of nightmare ink. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the ink will explode and create a zone in which enemies who are caught in it cannot escape the zone by normal means. RE-USE the ability to drop the projectile early in-flight',
      },
      {
        type: 'E',
        name: 'haunt',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt82a21218065dc472/625f2c47fd9afd4b1fe300ea/E-Haunt_video.mp4',
        icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc12f51743ac56940/625db87d7e7b344b2534f838/Fade_-_C_-_Prowler.png',
        description:
          'Equip a nightmarish entity. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the orb will turn into a nightmarish entity that will reveal the location of enemies caught in its line of sight. Enemies can destroy this entity. RE-USE the ability to drop the projectile early in-flight.',
      },
      {
        type: 'C',
        name: 'prowler',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf4e7a6525fe6ec42/625f2c7cfd9afd4b1fe300ee/C-Prowler_video.mp4',
        icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70f96353cf61d295/625db8887e7b344b2534f83c/Fade_-_X_-_Nightfall.png',
        description:
          'EQUIP a Prowler. FIRE will send the Prowler out, causing it to travel in a straight line. The Prowler will lock onto any enemies or trails in their frontal vision cone and chase them, nearsighting them if it reaches them. HOLD the FIRE button to steer the Prowler in the direction of your crosshair.',
      },
      {
        type: 'X',
        name: 'nightfall',
        video:
          'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt75dfbdc2fbf6bfe1/625f2ba62777714c51b313be/X-Nightfall_Video.mp4',
        icon: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt80d49ffb1f533029/625db8131574214ead41fc2f/Fade_-_Q_-_Seize.png',
        description:
          'EQUIP the power of Fear. FIRE to send out a wave of nightmare energy that can traverse through walls. The energy creates a trail to the opponent as well as deafens and decays them.',
      },
    ],
  },
];
