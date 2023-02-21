Check whether a number is Prime or not.

let num=17;
if(isPrime(num)){
console.log('Prime Number');
}else{
console.log('Not Prime');
}
function isPrime(){
	if(num==0 || num==1){
		return false;
	}else{
		let cnt=0;
		for(let i=2;i<num**(1/2);i++){
			if(num%i==0){
				cnt++;
			}
		}
		if(cnt==0){
			return true;		
		}else{
			return false;
		}
	}  	
}
