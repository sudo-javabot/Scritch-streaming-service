const Scratch = require("scratch3-api");
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
var fs = require("fs");
var session;
var cloud;

async function main() {
	session = await Scratch.UserSession.create("bilman66", "bilman55");
	cloud = await session.cloudSession("572117964");
}

main();

let FRAME1 = name("@frame");
let FRAME2 = name("@frame");
let FRAME3 = name("@frame");
let FRAME4 = name("@frame");
let FRAME5 = name("@frame");
let FRAME6 = name("@frame");
let FRAME7 = name("@frame");
let FRAME8 = name("@frame");

async function name(variable){
	return cloud.name(variable);
}

const width = 64;
const height = 32;

async function set(variable, value){
	cloud.set(variable, value);
}
async function get(variable){
	return cloud.get(variable);
}

var data;

async function update(){
	
	var f1 = data.substring(256 * 0, 256 * 1);
	var f2 = data.substring(256 * 1, 256 * 2);
	var f3 = data.substring(256 * 2, 256 * 3);
	var f4 = data.substring(256 * 3, 256 * 4);
	var f5 = data.substring(256 * 4, 256 * 5);
	var f6 = data.substring(256 * 5, 256 * 6);
	var f7 = data.substring(256 * 6, 256 * 7);
	var f8 = data.substring(256 * 7, 256 * 8);
	
	set(FRAME2, f2);
	set(FRAME3, f3);
	set(FRAME4, f4);
	set(FRAME5, f5);
	set(FRAME6, f6);
	set(FRAME7, f7);
	set(FRAME8, f8);
	set(FRAME1, f1);
}
let FPS = 20

while(true){
	/*
	* capture a frame from the desktop and convert it to 3-bit RGB (r = 1/0, g = 1/0, b = 1/0) and 64 by 32 pixels, and run through each pixel row by row
	* COLORS:
	* (0, 0, 0) = 0
	* (0, 0, 1) = 1
	* (0, 1, 0) = 2
	* (1, 0, 0) = 3
	* (0, 1, 1) = 4
	* (1, 1, 0) = 5
	* (1, 0, 1) = 6
	* (1, 1, 1) = 7
	* after each pixel the output color should be added to the data variable
	* after the convertion the update function will run and set the variables
	*/
	update();
	// I'm not the best at javascript and don't know what function to call to wait, but can you call it here for a time of (1000 / FPS)?
}