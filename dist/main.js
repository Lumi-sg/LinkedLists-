(()=>{"use strict";class t{constructor(t=null,e=null){this.value=t,this.next=e}}document.querySelector("body").style.backgroundColor="black",new class{constructor(t=null){this.head=t}Append(e){if(!this.head)return this.head=new t(e),this;let n=this.findTail();return n.next=new t(e),n}Prepend(e){if(!this.head)return this.head=new t(e),this;let n=this.head;this.head=new t(e,n)}Size(){let t=0,e=this.head;for(;e;)t++,e=e.next;return t}Head(){return this.head}At(t){if(!this.head)return null;let e=this.head;for(let n=0;n<t;n++)e=e.next;return e||null}Pop(){if(!this.head)return null;if(!this.head.next)return;let t=this.head,e=null;for(;t.next;)e=t,t=t.next;e.next=null}Contains(t){}Find(t){}toString(){}findTail(){if(!this.head)return null;let t=this.head;for(;null!=t.next;)t=t.next;return t}}})();