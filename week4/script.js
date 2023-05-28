var names=new Array();
names[0]="Yakov";
names[1]="Jonny";
names[2]="Jenny";
names[3]="jason";
names[4]="paul";
names[5]="franky";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}