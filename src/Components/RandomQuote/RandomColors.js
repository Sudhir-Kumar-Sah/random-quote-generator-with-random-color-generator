
export function randomColors(){
const colorArray = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let color = "#";
for(let i = 0; i < 6; i++){
    color += colorArray[Math.floor(Math.random() * colorArray.length)];
}
return color;
};