import Heap from './HeapQueue'

let heap = new Heap();
heap.generateHeap(12);

export function getDataStructer() {
  return heap;
}

export function getMaxNum(){
  return 31;
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
export function reBegin() {
  heap = new Heap();
  heap.generateHeap(12);
  console.log('重新开始');
  refresh();
}