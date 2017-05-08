import HashTable from './HashTable'

let hashTable = new HashTable();
hashTable.generateHashTable();
export function getDataStructer(toX, toY) {
  return hashTable;
}

let refresher = null;
export function getRefresher(o) {
  console.log('getRefresher');
  if (refresher) {
    console.log('refresher changed');
  }
  refresher= o;
  return () => {
    refresher = null;
  };
}
export function refresh() {
  refresher();
}

export function getMaxNum(){
  let dataNodeWidth = 60;
  return Math.floor(document.body.clientWidth /dataNodeWidth) -1;
}

export function reBegin() {
  hashTable = new HashTable();
  hashTable.generateHashTable();
  console.log('重新开始');
  refresh();
}