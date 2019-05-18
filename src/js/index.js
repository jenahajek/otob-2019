import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map=CanvasMap({
  textContainer:document.querySelector('.text'),
  mapSrc:'http://jenahajek.com/otob-2019/svg/map-new.svg',
  trailVisitedColor:'#872671',
  fontPresentColor:'#872671',
}).appendTo('.container')
