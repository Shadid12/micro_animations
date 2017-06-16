$("#brand").hide();



const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };

var el = $(".m");

var shape = new mojs.Shape({
  parent:       el,
  shape:        'circle',
  scale:         { 0 : 1 }, 
  radius:        30,
  duration:      1000,
  delay:         500,
  easing:        'cubic.out',
  repeat:        0,
  x:            120,
  y:            0
});

const rect = new mojs.Shape({
  parent:       el,
  shape:  			'rect',
  fill:         'none',
  radius:       40,
  stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
  strokeWidth:  { 10: 0 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  angle:        { 0: 90 },
  
  duration:     2000,
  repeat:       0
});

const rect2 = new mojs.Shape({
  parent:       el,
  shape:  			'rect',
  fill:         'none',
  radius:       50,
  stroke:       { '#A20021' : '#93E1D8' },
  strokeWidth:  { 10: 0 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  angle:        { 0: 180 },
  
  duration:     1500,
  repeat:       0
});

const pol = new mojs.Shape({
  parent:       el,
  shape:  			'polygon',
  points:       6,
  fill:         'none',
  stroke:       { '#C9344F' : '#93E1D8' },
  strokeWidth:  { 0: 5 },
  strokeDasharray: '100%',
  strokeDashoffset: { '100%' : '-100%' },
  radius:       70,
  duration:     700,
  delay:        500,
  
});

const load1 = new mojs.Shape({
  parent:       el,
  shape:  			'rect',
  fill:         { '#F64040' : '#343434', curve: scaleCurve },
  radius:       10,
  rx:           3,
  x:            { [-125] : 125, easing: shiftCurve },
  scaleX:       { 1 : 1, curve: scaleCurve },
  scaleY:       { 1 : 1, curve: nScaleCurve },
  origin:       { '0 50%' : '100% 50%', easing: shiftCurve },
  
  isYoyo:         true,
  delay:        500,
  duration:     800,
  repeat:       1,
  //isForce3d:    true
});


$("#b").click(function(){
  $("#brand").hide();
  shape.play();
  rect.play();
  rect2.play();
  // pol.play();
  
  setTimeout(function(){
    $("#brand").fadeIn();
    pol.play();
    load1.play();
  }, 1200);
  
});