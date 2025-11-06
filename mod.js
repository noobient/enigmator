//Change items in item-names.json (potions, scrolls, charms, jewels)
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);

itemNames.forEach((item) => {
  const itemtype = item.Key;
  let newName = null;

  // Highlight base item if set to be highlighted, but first check if it actually exists in the config
  if (Object.hasOwn(config, "bth_" + itemtype) && config["bth_" + itemtype]) {
    newName = item.enUS + ` ÿc;*ÿc2*ÿc1* ÿc@Base ÿc;*ÿc2*ÿc1*`;
  }

  switch(itemtype) {
    case "tsc": // Scroll of Town Portal
      newName = `Tp`;
      break;
    case "isc": // Scroll of Identify
      newName = `Id`;
      break;
    case "gpl": // Strangling Gas Potion
      newName = `Sgp`;
      break;
    case "opl": // Fulminating Potion
      newName = `Fulm`;
      break;
    case "gpm": // Choking Gas Potion
      newName = `Cgp`;
      break;
    case "opm": // Exploding Potion
      newName = `Expl`;
      break;
    case "gps": // Rancid Gas Potion
      newName = `Rgp`;
      break;
    case "ops": // Oil Potion
      newName = `Oil`;
      break;
    case "vps": // Stamina Potion
      newName = `Stam`;
      break;
    case "yps": // Antidote Potion
      newName = `Ant`;
      break;
    case "rvs": // Rejuvenation Potion
      newName = `Rejuv`;
      break;
    case "rvl": // Full Rejuvination Potion
      newName = `ÿc;!FullRejuva`;
      break;
    case "wms": // Thawing Potion
      newName = `Thaw`;
      break;
    case "hp1": // Minor Healing Potion
      newName = `Hpÿc1¹`;
      break;
    case "hp2": // Light Healing Potion
      newName = `Hpÿc1²`;
      break;
    case "hp3": // Healing Potion
      newName = `Hpÿc1³`;
      break;
    case "hp4": // Greater Healing Potion
      newName = `ÿc1-ÿc0Hp`;
      break;
    case "hp5": // Super Healing Potion
      newName = `ÿc1!ÿc0Hp`;
      break;
    case "mp1": // Minor Mana Potion
      newName = `Mpÿc3¹`;
      break;
    case "mp2": // Light Mana Potion
      newName = `Mpÿc3²`;
      break;
    case "mp3": // Mana Potion
      newName = `Mpÿc3³`;
      break;
    case "mp4": // Greater Mana Potion
      newName = `ÿc3-ÿc0Mp`;
      break;
    case "mp5": // Super Mana Potion
      newName = `ÿc3!ÿc0Mp`;
      break;
    case "cm1": // Small Charm
      newName = `• ÿcNSmall Charm`;
      break;
    case "cm3": // Grand Charm
      newName = `• ÿcNGrand Charm`;
      break;
    case "jew": // Jewel
      newName = `• ÿcNJewel`;
      break;
    case "gzv": // F Amethyst
      newName = `ÿc7[ÿc;@ÿc7] ÿc0Flawless Amethyst`;
      break;
    case "gly": // F Topaz
      newName = `ÿc7[ÿc9@ÿc7] ÿc0Flawless Topaz`;
      break;
    case "glb": // F Sapphire
      newName = `ÿc7[ÿcN@ÿc7] ÿc0Flawless Sapphire`;
      break;
    case "glg": // F Emerald
      newName = `ÿc7[ÿcQ@ÿc7] ÿc0Flawless Emerald`;
      break;
    case "glr": // F Ruby
      newName = `ÿc7[ÿcU@ÿc7] ÿc0Flawless Ruby`;
      break;
    case "glw": // F Diamond
      newName = `ÿc7[ÿcF@ÿc7] ÿc0Flawless Diamond`;
      break;
    case "skl": // F Skull
      newName = `ÿc7[ÿcH@ÿc7] ÿc0Flawless Skull`;
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
