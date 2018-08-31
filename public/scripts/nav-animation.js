// const runBubbleMachine = function(){
//   const canvas = document.getElementById('canvas');
//   canvas.height = canvas.clientHeight;
//   canvas.width = canvas.clientWidth;

//   const ctx = canvas.getContext('2d');
//   const width = canvas.width;
//   const height = canvas.height;
//   const bubbles = [];

//   function makeBubble() {
//     console.log(width);
//     console.log("make");
//     const r = Math.floor(Math.random() * 50);
//     const w = Math.floor(Math.random() * width);
//     const h = height + r;
//     bubbles.push([w, h, r]);
//     if (bubbles.length > 7) {
//       bubbles.shift();
//     }
//   };

//   function releaseBubbles() {
//     ctx.clearRect(0, 0, width, height);
//     bubbles.forEach((bubble) => {
//       console.log(bubble);
//       ctx.beginPath();
//       ctx.arc(bubble[0], bubble[1], bubble[2], 0, Math.PI*2);
//       ctx.stroke();
//       if (bubble[0] > width/2) {
//         bubble[0] -= 0.1;
//       }
//       else if (bubble[0] < width/2) {
//         bubble[0] += 0.1;
//       }
//       bubble[1] -= 0.7;
//       bubble[2] += 0.1;
//     });
//   }
// };

// export default runBubbleMachine;