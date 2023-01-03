//picking random word from collection

export function getRandom() {
  const words = [
    'quince',
    'number',
    'mask',
    'library',
    'trick',
    'obsolete',
    'reason',
    'broad',
    'authority',
    'cow',
    'watery',
    'fetch',
    'lip',
    'direction',
    'obedient',
    'squash',
    'strip',
    'locket',
    'petite',
    'disappear',
    'dinner',
    'labored',
    'fax',
    'scared',
    'remarkable',
    'morning',
    'toad',
    'afraid',
    'flight',
    'super',
    'careful',
    'want',
    'sofa',
    'glistening',
    'mate',
    'giant',
    'gamy',
    'communicate',
    'flagrant',
    'dam',
    'thundering',
    'ticket',
    'greet',
    'bike',
    'chess',
    'linen',
    'bless',
    'radiate',
    'liquid',
    'sip',
    'thoughtless',
    'brainy',
    'start',
    'float',
    'appliance',
    'baseball',
    'dust',
    'repair',
    'ragged',
    'history',
    'apparel',
    'suspect',
    'limping',
    'stick',
    'guarded',
    'deranged',
    'boiling',
    'unwieldy',
    'print',
    'saw',
    'zebra',
    'lake',
    'squirrel',
    'freezing',
    'glib',
    'unable',
    'tranquil',
    'chief',
    'debt',
    'mind',
    'fireman',
    'eyes',
    'creator',
    'riddle',
    'sleet',
    'adaptable',
    'nosy',
    'plant',
    'treat',
    'industry',
    'careless',
    'zesty',
    'electric',
    'spooky',
    'magnificent',
    'great',
    'juice',
    'warm',
    'different',
    'monkey',
  ]
  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)]
  }

  let word = random_item(words)
  return word
}
