//Change items in item-names.json (potions, scrolls, charms, jewels)
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);

itemNames.forEach((item) => {
  const itemtype = item.Key;
  let newName = null;

  // highlight base item if set to be highlighted, but first check if it actually exists in the config
  if (Object.hasOwn(config, "bth_" + itemtype) && config["bth_" + itemtype]) {
    newName = item.enUS + ` ÿc;*ÿc2*ÿc1* ÿc@Base ÿc;*ÿc2*ÿc1*`;
  }

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
    newName = `ÿc;!FullRejuva`;
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

  switch(itemtype) {
    // Low runes from El to Lem
    case "r01":
    case "r02":
    case "r03":
    case "r04":
    case "r05":
    case "r06":
    case "r07":
    case "r08":
    case "r09":
    case "r10":
    case "r11":
    case "r12":
    case "r13":
    case "r14":
    case "r15":
    case "r16":
    case "r17":
    case "r18":
    case "r19":
    case "r20":
      // remove leading 'r', then convert to number to remove any leading zero for first 9 levels
      newName = item.enUS + ` ÿc5[ÿc7` + Number(itemtype.substring(1)) + `ÿc5]`;
      break;
    // Pul, Um, Mal, Ist
    case "r21":
    case "r22":
    case "r23":
    case "r24":
      newName = `ÿc1*  ÿc@` + item.enUS + ` ÿc0[ÿc1` + itemtype.substring(1) + `ÿc0]  ÿc1*`;
      break;
    // Gul, Vex, Ohm, Lo
    case "r25":
    case "r26":
    case "r27":
    case "r28":
      newName = `ÿcA*ÿc1*  ÿc@` + item.enUS + ` ÿc0[ÿc1` + itemtype.substring(1) + `ÿc0]  ÿcA*ÿc1*`;
      break;
    // Sur, Ber, Jah, Cham, Zod
    case "r29":
    case "r30":
    case "r31":
    case "r32":
    case "r33":
      newName = `ÿc;*ÿc2*ÿc1*    ÿc@` + item.enUS + ` ÿc0[ÿc2` + itemtype.substring(1) + `ÿc0]    ÿc;*ÿc2*ÿc1*`;
      break;
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
//profileHD.TooltipFontSize = 32,
profileHD.TooltipStyle.inGameShowItemsSelectedBackgroundColor = [0.1,0.1,0.2,1],
D2RMM.writeJson(profileHDFilename, profileHD);





//this simply copies the rune.json files instead of modifying each one with code which I am too dumb to understand how to do. It gets the job done, it may cause issues if you have other mods that modify the runes.json files (extremely unlikely).
D2RMM.copyFile('hd','hd',true);
