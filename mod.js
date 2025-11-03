//Change items in item-names.json (potions, scrolls, charms, jewels)
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);

itemNames.forEach((item) => {
  const itemtype = item.Key;
  let newName = null;

  // Scroll of Town Portal
  if (itemtype === 'tsc') {
    newName = `Tp`;
  }

  // Scroll of Identify
  if (itemtype === 'isc') {
    newName = `Id`;
  }

  // Strangling Gas Potion
  if (itemtype === 'gpl') {
    newName = `Sgp`;
  }

  // Fulminating Potion
  if (itemtype === 'opl') {
    newName = `Fulm`;
  }

  // Choking Gas Potion
  if (itemtype === 'gpm') {
    newName = `Cgp`;
  }

  // Exploding Potion
  if (itemtype === 'opm') {
    newName = `Expl`;
  }

  // Rancid Gas Potion
  if (itemtype === 'gps') {
    newName = `Rgp`;
  }

  // Oil Potion
  if (itemtype === 'ops') {
    newName = `Oil`;
  }

  // Stamina Potion
  if (itemtype === 'vps') {
    newName = `Stam`;
  }

  // Antidote Potion
  if (itemtype === 'yps') {
    newName = `Ant`;
  }

  // Rejuvenation Potion
  if (itemtype === 'rvs') {
    newName = `Rejuv`;
  }

  // Full Rejuvination Potion
  if (itemtype === 'rvl') {
    newName = `ÿc;!ÿc0Full`;
  }

  // Thawing Potion
  if (itemtype === 'wms') {
    newName = `Thaw`;
  }

  // Minor Healing Potion
  if (itemtype === 'hp1') {
    newName = `Hpÿc1¹`;
  }

  // Light Healing Potion
  if (itemtype === 'hp2') {
    newName = `Hpÿc1²`;
  }

  // Healing Potion
  if (itemtype === 'hp3') {
    newName = `Hpÿc1³`;
  }

  // Greater Healing Potion
  if (itemtype === 'hp4') {
    newName = `ÿc1-ÿc0Hp`;
  }

  // Super Healing Potion
  if (itemtype === 'hp5') {
    newName = `ÿc1!ÿc0Hp`;
  }

  // Minor Mana Potion
  if (itemtype === 'mp1') {
    newName = `Mpÿc3¹`;
  }

  // Light Mana Potion
  if (itemtype === 'mp2') {
    newName = `Mpÿc3²`;
  }

  // Mana Potion
  if (itemtype === 'mp3') {
    newName = `Mpÿc3³`;
  }

  // Greater Mana Potion
  if (itemtype === 'mp4') {
    newName = `ÿc3-ÿc0Mp`;
  }

  // Super Mana Potion
  if (itemtype === 'mp5') {
    newName = `ÿc3!ÿc0Mp`;
  }

  // Small Charm
  if (itemtype === 'cm1') {
    newName = `• ÿcNSmall Charm`;
  }

  // Grand Charm
  if (itemtype === 'cm3') {
    newName = `• ÿcNGrand Charm`;
  }

  // Jewel
  if (itemtype === 'jew') {
    newName = `• ÿcNJewel`;
  }

  // F Amethyst
  if (itemtype === 'gzv') {
    newName = `ÿc7[ÿc;@ÿc7] ÿc0Flawless Amethyst`;
  }

  // F Topaz
  if (itemtype === 'gly') {
    newName = `ÿc7[ÿc9@ÿc7] ÿc0Flawless Topaz`;
  }

  // F Sapphire
  if (itemtype === 'glb') {
    newName = `ÿc7[ÿcN@ÿc7] ÿc0Flawless Sapphire`;
  }

  // F Emerald
  if (itemtype === 'glg') {
    newName = `ÿc7[ÿcQ@ÿc7] ÿc0Flawless Emerald`;
  }

  // F Ruby
  if (itemtype === 'glr') {
    newName = `ÿc7[ÿcU@ÿc7] ÿc0Flawless Ruby`;
  }

  // F Diamond
  if (itemtype === 'glw') {
    newName = `ÿc7[ÿcF@ÿc7] ÿc0Flawless Diamond`;
  }

  // F Skull
  if (itemtype === 'skl') {
    newName = `ÿc7[ÿcH@ÿc7] ÿc0Flawless Skull`;
  }

  if (newName != null) {
    // update all localizations
    for (const key in item) {
      if (key !== 'id' && key !== 'Key') {
        item[key] = newName;
      }
    }
  }
});
D2RMM.writeJson(itemNamesFilename, itemNames);


//Change gold item label on the ground
const itemNameAffixesFilename = 'local\\lng\\strings\\item-nameaffixes.json';
const itemNameAffixes = D2RMM.readJson(itemNameAffixesFilename);

itemNameAffixes.forEach((item) => {
  const itemtype = item.Key;
  let newName = null;

  // Gold
  if (itemtype === 'gld') {
    newName = ``;
  }

  if (newName != null) {
    // update all localizations
    for (const key in item) {
      if (key !== 'id' && key !== 'Key') {
        item[key] = newName;
      }
    }
  }
});
D2RMM.writeJson(itemNameAffixesFilename, itemNameAffixes);


//Change high rune names on the ground
const itemRunesFilename = 'local\\lng\\strings\\item-runes.json';
const itemRunes = D2RMM.readJson(itemRunesFilename);

itemRunes.forEach((item) => {
  const itemtype = item.Key;
  let newName = null;

  // El
  if (itemtype === 'r01') {
    newName = `El ÿc5[ÿc71ÿc5]`;
  }
  
  // Eld
  if (itemtype === 'r02') {
    newName = `Eld ÿc5[ÿc72ÿc5]`;
  }

  // Tir
  if (itemtype === 'r03') {
    newName = `Tir ÿc5[ÿc73ÿc5]`;
  }  
  
  // Nef
  if (itemtype === 'r04') {
    newName = `Nef ÿc5[ÿc74ÿc5]`;
  }

  // Eth
  if (itemtype === 'r05') {
    newName = `Eth ÿc5[ÿc75ÿc5]`;
  }

  // Ith
  if (itemtype === 'r06') {
    newName = `Ith ÿc5[ÿc76ÿc5]`;
  }

  // Tal
  if (itemtype === 'r07') {
    newName = `Tal ÿc5[ÿc77ÿc5]`;
  }
  
  // Ral
  if (itemtype === 'r08') {
    newName = `Ral ÿc5[ÿc78ÿc5]`;
  }

  // Ort
  if (itemtype === 'r09') {
    newName = `Ort ÿc5[ÿc79ÿc5]`;
  }

  // Thul
  if (itemtype === 'r10') {
    newName = `Thul ÿc5[ÿc710ÿc5]`;
  }
  
  // Amn
  if (itemtype === 'r11') {
    newName = `Amn ÿc5[ÿc711ÿc5]`;
  }

  // Sol
  if (itemtype === 'r12') {
    newName = `Sol ÿc5[ÿc712ÿc5]`;
  }

  // Shael
  if (itemtype === 'r13') {
    newName = `Shael ÿc5[ÿc713ÿc5]`;
  }
  
  // Dol
  if (itemtype === 'r14') {
    newName = `Dol ÿc5[ÿc714ÿc5]`;
  }

  // Hel
  if (itemtype === 'r15') {
    newName = `Hel ÿc5[ÿc715ÿc5]`;
  }

  // Io
  if (itemtype === 'r16') {
    newName = `Io ÿc5[ÿc716ÿc5]`;
  }
  
  // Lum
  if (itemtype === 'r17') {
    newName = `Lum ÿc5[ÿc717ÿc5]`;
  }
  
  // Ko
  if (itemtype === 'r18') {
    newName = `Ko ÿc5[ÿc718ÿc5]`;
  }

  // Fal
  if (itemtype === 'r19') {
    newName = `Fal ÿc5[ÿc719ÿc5]`;
  }
  
  // Lem
  if (itemtype === 'r20') {
    newName = `Lem ÿc5[ÿc720ÿc5]`;
  }

  // Pul
  if (itemtype === 'r21') {
    newName = `ÿc1*  ÿc@Pul ÿc0[ÿc121ÿc0]  ÿc1*`;
  }

  // Um
  if (itemtype === 'r22') {
    newName = `ÿc1*  ÿc@Um ÿc0[ÿc122ÿc0]  ÿc1*`;
  }

  // Mal
  if (itemtype === 'r23') {
    newName = `ÿc1*  ÿc@Mal ÿc0[ÿc123ÿc0]  ÿc1*`;
  }

  // Ist
  if (itemtype === 'r24') {
    newName = `ÿc1*  ÿc@Ist ÿc0[ÿc124ÿc0]  ÿc1*`;
  }

  // Gul
  if (itemtype === 'r25') {
    newName = `ÿcA*ÿc1*  ÿc@Gul ÿc0[ÿc125ÿc0]  ÿcA*ÿc1*`;
  }

  // Vex
  if (itemtype === 'r26') {
    newName = `ÿcA*ÿc1*  ÿc@Vex ÿc0[ÿc126ÿc0]  ÿcA*ÿc1*`;
  }

  // Ohm
  if (itemtype === 'r27') {
    newName = `ÿcA*ÿc1*  ÿc@Ohm ÿc0[ÿc127ÿc0]  ÿcA*ÿc1*`;
  }

  // Lo
  if (itemtype === 'r28') {
    newName = `ÿcA*ÿc1*  ÿc@Lo ÿc0[ÿc128ÿc0]  ÿcA*ÿc1*`;
  }

  // Sur
  if (itemtype === 'r29') {
    newName = `ÿc;*ÿc2*ÿc1*    ÿc@Sur ÿc0[ÿc229ÿc0]    ÿc;*ÿc2*ÿc1*`;
  }

  // Ber
  if (itemtype === 'r30') {
    newName = `ÿc;*ÿc2*ÿc1*    ÿc@Ber ÿc0[ÿc230ÿc0]    ÿc;*ÿc2*ÿc1*`;
  }

  // Jah
  if (itemtype === 'r31') {
    newName = `ÿc;*ÿc2*ÿc1*    ÿc@Jah ÿc0[ÿc231ÿc0]    ÿc;*ÿc2*ÿc1*`;
  }

  // Cham
  if (itemtype === 'r32') {
    newName = `ÿc;*ÿc2*ÿc1*    ÿc@Cham ÿc0[ÿc232ÿc0]   ÿc;*ÿc2*ÿc1*`;
  }

  // Zod
  if (itemtype === 'r33') {
    newName = `ÿc;*ÿc2*ÿc1*    ÿc@Zod ÿc0[ÿc233ÿc0]    ÿc;*ÿc2*ÿc1*`;
  }

  
  if (newName != null) {
    // update all localizations
    for (const key in item) {
      if (key !== 'id' && key !== 'Key') {
        item[key] = newName;
      }
    }
  }
});
D2RMM.writeJson(itemRunesFilename, itemRunes);




//change on-ground tooltip style to be slightly smaller and less see-through
const profileHDFilename = 'global\\ui\\layouts\\_profilehd.json';
const profileHD = D2RMM.readJson(profileHDFilename);
profileHD.TooltipStyle.inGameBackgroundColor = [0,0,0,0.85],
profileHD.TooltipStyle.backgroundColor = [0,0,0,0.9],
profileHD.TooltipFontSize = 32,
profileHD.TooltipStyle.inGameShowItemsSelectedBackgroundColor = [0.1,0.1,0.2,1],
D2RMM.writeJson(profileHDFilename, profileHD);





//this simply copies the rune.json files instead of modifying each one with code which I am too dumb to understand how to do. It gets the job done, it may cause issues if you have other mods that modify the runes.json files (extremely unlikely).
D2RMM.copyFile('hd','hd',true);
