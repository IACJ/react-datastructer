import ArrayList from './ArrayList'

let arrayList = new ArrayList();
arrayList.buildListWithRandomInteger(8);
export function getDataStructer(toX, toY) {
  return arrayList;
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
  arrayList = new ArrayList();
  arrayList.buildListWithRandomInteger(8);
  console.log('重新开始');
  refresh();
}