
import {getCompanyName} from './util';       //ES6从另一个模块导入指定方法——声明依赖关系
import '../css/base.css';                    //让入口index.js依赖于css文件
import '../css/index.css';
import pic20 from '../img/20.jpg';
import pic40 from '../img/40.jpg';

function createDiv() {
  var div = document.createElement('div');
  div.classList.add('hello');
  div.innerHTML = '版权所有：'+getCompanyName();

  var img1=new Image();
  var img2=new Image();
  img1.src=pic20;
  img2.src=pic40;
  div.appendChild(img1);
  div.appendChild(img2);
  return div;
}
document.body.appendChild(createDiv());