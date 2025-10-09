import fs from 'fs';
import path from 'path';

const frames = JSON.parse(fs.readFileSync(path.join('../lib/frames.json'), 'utf8'));
const systems = JSON.parse(fs.readFileSync(path.join('../lib/systems.json'), 'utf8'));
const weapons = JSON.parse(fs.readFileSync(path.join('../lib/weapons.json'), 'utf8'));

const usedSystemIds = new Set();
const usedWeaponIds = new Set();

frames.forEach((frame) => {
  const frameSystems = systems.filter((s) => {
    if (s.license_id === frame.id) {
      usedSystemIds.add(s.id);
      return true;
    }
    return false;
  });

  const frameWeapons = weapons.filter((w) => {
    if (w.license_id === frame.id) {
      usedWeaponIds.add(w.id);
      return true;
    }
    return false;
  });

  const data = [...frameSystems, ...frameWeapons];

  if (data.length > 0) {
    const fileName = `frame_${frame.name.toLowerCase().replaceAll(' ', '_')}.json`;
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
  }
});

const extraSystems = systems.filter((s) => !usedSystemIds.has(s.id));
const extraWeapons = weapons.filter((w) => !usedWeaponIds.has(w.id));

fs.writeFileSync('extra_systems.json', JSON.stringify(extraSystems, null, 2));
fs.writeFileSync('extra_weapons.json', JSON.stringify(extraWeapons, null, 2));
