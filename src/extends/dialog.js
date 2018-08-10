import Vue from 'vue'
import Dialog from '@/components/dialog/Dialog'


let DialogExtends = Vue.extend(Dialog)
let dialogMethods = ["show", "toast","confirm","alert","loading","userDefine"]
dialogMethods.forEach((ele,i)=>{
  DialogExtends[ele] = (options)=>{

    const div = document.createElement('div');
    document.body.appendChild(div)
    const propsData = Object.assign({}, options);

    let dialogInstance = new DialogExtends({propsData}).$mount(div);
    DialogExtends['$'+ele] = dialogInstance
    dialogInstance[ele]();
  }
})


export default DialogExtends


// Vue.prototype.$dialog = DialogExtends
