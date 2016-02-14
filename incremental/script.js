var bytes = 0;
var kilobytes = 0;
var totalCount = 0;

//on click
var shop1costBytes = 25;
var shop1quan = 0;
var shop1prod = 2;
var shop1mult = 1.50;

//on click
var shop2costBytes =  10240;
var shop2quan = 0;
var shop2prod = 50;
var shop2mult = 1.50;

//automated
var shop3costBytes =  100;
var shop3quan = 0;
var shop3prod = 1;
var shop3mult = 1.10;

//automated
var shop4costBytes = 500;
var shop4quan = 0;
var shop4prod = 8;
var shop4mult = 1.10;

var shop5costBytes = 1250;
var shop5quan = 0;
var shop5prod = 24;
var shop5mult = 1.10;


loading();
document.getElementById("Counter").innerHTML = bytes + " Bytes";
document.getElementById("shopQuantity1").innerHTML = "You bought the faster bandwidth already " + shop1quan + " times!";
document.getElementById("shopQuantity2").innerHTML = "You bought the Dial-Up-Internet already " + shop2quan + " times!";
document.getElementById("shopQuantity3").innerHTML = "You bought an Auto-Downloader already " + shop3quan + " times!";
document.getElementById("shopQuantity4").innerHTML = "You hacked a old pc from a grandma already " + shop4quan + " times!";
document.getElementById("shopQuantity5").innerHTML = "You bought automated Dial-Up-Internet already " + shop5quan + " times!";
document.getElementById("shopCost1").innerHTML = "Cost: " + shop1costBytes + " Bytes";
document.getElementById("shopCost2").innerHTML = "Cost: " + shop2costBytes + " Bytes";
document.getElementById("shopCost3").innerHTML = "Cost: " + shop3costBytes + " Bytes";
document.getElementById("shopCost4").innerHTML = "Cost: " + shop4costBytes + " Bytes";
document.getElementById("shopCost5").innerHTML = "Cost: " + shop5costBytes + " Bytes";
document.getElementById("title").innerHTML = "<h1>incremental Alpha preview-0.6</h1>"

function twentyBitEgg()
	{
	//Easteregg for reaching 1024 Kilobytes
	console.log("ERROR: 20-Bit-Number-Overflow. Bytes have been reset to 0.");
	bytes = 0
	}
	
function shop1Buy()
	{
	//Function for buying Shop-Item 1
	if (bytes >= shop1costBytes)
		{
		bytes = bytes - shop1costBytes
		shop1quan = shop1quan + 1
		shop1costBytes = Math.round(shop1mult * shop1costBytes)
		document.getElementById("shopQuantity1").innerHTML = "You bought the faster bandwidth already " + shop1quan + " times!";
		document.getElementById("shopCost1").innerHTML = "Cost: " + shop1costBytes + " Bytes";
		console.log("Buying of Shop-Item 1 succeeded.");
		document.getElementById("Counter").innerHTML = bytes + " Bytes";
		}
	else
		{
		console.log("Buying of Shop-Item 1 failed.");
		}
	}

	
function shop2Buy()
	{
	//Function for buying Shop-Item 2
	if (bytes >= shop2costBytes)
		{
		bytes = bytes - shop2costBytes
		shop2quan = shop2quan + 1
		shop2costBytes = Math.round(shop2mult * shop2costBytes)
		document.getElementById("shopQuantity2").innerHTML = "You bought the Dial-Up-Internet already " + shop2quan + " times!";
		document.getElementById("shopCost2").innerHTML = "Cost: " + shop2costBytes + " Bytes";
		console.log("Buying of Shop-Item 2 succeeded.");
		document.getElementById("Counter").innerHTML = bytes + " Bytes";
		}
	else
		{
		console.log("Buying of Shop-Item 2 failed.");
		}
	}
	
function shop3Buy()
	{
	//Function for buying Shop-Item 3
	if (bytes >= shop3costBytes)
		{
		bytes = bytes - shop3costBytes
		shop3quan = shop3quan + 1
		shop3costBytes = Math.round(shop3mult * shop3costBytes) 
		document.getElementById("shopQuantity3").innerHTML = "You bought the Auto-Downloader already " + shop3quan + " times!";
		document.getElementById("shopCost3").innerHTML = "Cost: " + shop3costBytes + " Bytes";
		console.log("Buying of Shop-Item 3 succeeded.");
		document.getElementById("Counter").innerHTML = bytes + " Bytes";
		}
	else
		{
		console.log("Buying of Shop-Item 3 failed.");
		}
	}
	
function shop4Buy()
	{
	//Function for buying Shop-Item 4
	if (bytes >= shop4costBytes)
		{
		bytes = bytes - shop4costBytes
		shop4quan = shop4quan + 1
		shop4costBytes = Math.round(shop4mult * shop4costBytes) 
		document.getElementById("shopQuantity4").innerHTML = "You hacked a old pc from a grandma already " + shop4quan + " times!";
		document.getElementById("shopCost4").innerHTML = "Cost: " + shop4costBytes + " Bytes";
		console.log("Buying of Shop-Item 4 succeeded.");
		document.getElementById("Counter").innerHTML = bytes + " Bytes";
		}
	else
		{
		console.log("Buying of Shop-Item 4 failed.");
		}
	}
	
function shop5Buy()
	{
	//Function for buying Shop-Item 5
	if (bytes >= shop5costBytes)
		{
		bytes = bytes - shop5costBytes
		shop5quan = shop5quan + 1
		shop5costBytes = Math.round(shop5mult * shop5costBytes) 
		document.getElementById("shopQuantity5").innerHTML = "You bought automated Dial-Up-Internet already " + shop5quan + " times!";
		document.getElementById("shopCost5").innerHTML = "Cost: " + shop5costBytes + " Bytes";
		console.log("Buying of Shop-Item 5 succeeded.");
		document.getElementById("Counter").innerHTML = bytes + " Bytes";
		}
	else
		{
		console.log("Buying of Shop-Item 5 failed.");
		}
	}
	
function upCount(){
	//Function for pressing the button
	bytes = bytes + 1 + shop1quan * shop1prod + shop2quan * shop2prod;
	totalCount = totalCount + 1 + shop1quan *shop1prod + shop2quan * shop2prod;
	document.getElementById("Counter").innerHTML = bytes + " Bytes";
	//console.log(count);
	if (bytes >= 1048576)
		{
		twentyBitEgg();
		}
	}

var functionEverySecond=setInterval(function () {Byte()}, 1000);

function Byte()
	{
    bytes = bytes + shop3quan * shop3prod + shop4quan * shop4prod + shop5quan * shop5prod;
	totalCount = totalCount + shop3quan * shop3prod + shop4quan * shop4prod + shop5quan * shop5prod;
	document.getElementById("Counter").innerHTML = bytes + " Bytes";
	if (bytes >= 1048576)
		{
		twentyBitEgg();
		}
	}

var save = {
	bytes: bytes,
	kilobytes: kilobytes,
	totalCount: totalCount,
	shop1costBytes: shop1costBytes,
	shop1quan: shop1quan,
	shop2costBytes: shop2costBytes,
	shop2quan: shop2quan,
}

function saving()
	{
	savecount = savecount + 1
	var save =
		{
		bytes: bytes,
		kilobytes: kilobytes,
		totalCount: totalCount,
		shop1costBytes: shop1costBytes,
		shop1quan: shop1quan,
		shop2costBytes: shop2costBytes,
		shop2quan: shop2quan,
		shop3costBytes: shop3costBytes,
		shop3quan: shop3quan,
		shop4costBytes: shop4costBytes,
		shop4quan: shop4quan,
		shop5costBytes: shop5costBytes,
		shop5quan: shop5quan,
		savecount: savecount
		}
	localStorage.setItem("save",JSON.stringify(save));
	}
	
function loading()
	{
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.bytes !== "undefined") bytes = savegame.bytes;
	if (typeof savegame.kilobytes !== "undefined") kilobytes = savegame.kilobytes;
	if (typeof savegame.shop1costBytes !== "undefined") shop1costBytes = savegame.shop1costBytes;
	if (typeof savegame.shop1quan !== "undefined") shop1quan = savegame.shop1quan;
	if (typeof savegame.shop2costBytes !== "undefined") shop2costBytes = savegame.shop2costBytes;
	if (typeof savegame.shop2quan !== "undefined") shop2quan = savegame.shop2quan;
	if (typeof savegame.shop3costBytes !== "undefined") shop3costBytes = savegame.shop3costBytes;
	if (typeof savegame.shop3quan !== "undefined") shop3quan = savegame.shop3quan;
	if (typeof savegame.shop4costBytes !== "undefined") shop4costBytes = savegame.shop4costBytes;
	if (typeof savegame.shop4quan !== "undefined") shop4quan = savegame.shop4quan;
	if (typeof savegame.shop5costBytes !== "undefined") shop5costBytes = savegame.shop5costBytes;
	if (typeof savegame.shop5quan !== "undefined") shop5quan = savegame.shop5quan;
	if (typeof savegame.savecount !== "undefined") savecount = savegame.savecount;
	}
	