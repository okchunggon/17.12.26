
function solve(){
			var weight1 = document.getElementById('input1').value;
			var weight2 = document.getElementById('input2').value;
			var weight3 = document.getElementById('input3').value;
			var weight4 = document.getElementById('input4').value;
			var weight5 = document.getElementById('input5').value;
			var weight6 = document.getElementById('input6').value;

			var wgt = [weight1, weight2, weight3, weight4, weight5, weight6];

			var mean = (Number(wgt[0])+Number(wgt[1])+Number(wgt[1])+Number(wgt[1])+Number(wgt[1])+Number(wgt[1]))/6;

			var x = mean.toFixed(1);

			document.getElementById('result').innerHTML = x;
		}