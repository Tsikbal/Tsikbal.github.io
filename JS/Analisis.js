(function() { //Redondeo de números
  function decimalAdjust(type, value, exp) {
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));

    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
})();


function LineLS(Xs, Ys){
	SumXY = 0, SumX = 0, SumY = 0, SumX_2 = 0, N = 0,
	m = 0, b = 0, R_2=0, PromYs = 0, 
	Ji = 0, Del_m = 0, Del_b = 0,
	SumR_1 = 0, SumR_2 =0;
	FinalXs = [], FinalYs = [], 
	D_x = [];

	if (Xs.length != Ys.length){
		return alert("¡Diferentes dimensiones!");
	}	
	
	for(var i = 0; i< Xs.length; i++){
		SumXY += Xs[i]*Ys[i];
		SumX += Xs[i];
		SumY += Ys[i];
		SumX_2 += Xs[i]*Xs[i]; 
		N++;
	}
	m = (N*SumXY- SumX*SumY)/(N*SumX_2-SumX*SumX);
	b = (SumX_2*SumY- SumX*SumXY)/(N*SumX_2-SumX*SumX);
	// var xMax = Math.max(LXs);
	
	PromYs = SumY/N;
	
	for(var i = 0; i<Xs.length; i++){
		SumR_1 += (Ys[i]-PromYs)*(Ys[i]-PromYs);
		SumR_2 += (Ys[i]-(m*Xs[i]+b))*(Ys[i]-(m*Xs[i]+b));
	}
	
	R_2 =(SumR_1-SumR_2)/(SumR_1);
	Ji = Math.pow(SumR_2/(N-2), 1/2);
	Del_m = Ji*Math.pow(N/(N*SumX_2-SumX*SumX), 1/2);
	Del_b = Ji*Math.pow(SumX_2/(N*SumX_2-SumX*SumX), 1/2);
	
	for(var i = 0; i< Xs.length; i++){
		y= Xs[i]*m+b;
		x = Math.round10(Xs[i], -3)
		FinalXs.push(x);
		FinalYs.push(y);
	}
}

function GenerarTabel(relleno, val1, val2, val3, val4, val5){
	let TablaCuerpo = document.getElementById(relleno);
	TablaCuerpo.innerHTML += `<tr><td>${Math.round10(val1, -3)}</td>  <td>${Math.round10(val2, -3)}</td>  <td>${Math.round10(val3, -4)}</td> 
								  <td>${Math.round10(val4, -3)}</td>  <td>${Math.round10(val5, -3)}</td></tr>`;
}

function GrafLineal(Canvas, EjeX, EjeY, EjeY_ajuste, D_Lx, D_Rx, Tx, Ty){
	const grafica = document.querySelector(Canvas);
	const Conf = {
		type: "scatter",
		data: {
			datasets: [{
				data: EjeX.map((x, i) => ({ x, y: EjeY[i] })),
				showLine: false,  // Mostrar la línea de tendencia
				borderColor: 'blue',
				}, {
				data: EjeX.map((x, i) => ({ x, y: EjeY_ajuste[i] })),
				showLine: true,
				borderColor: 'rgba(255, 0, 0, 0.5)',
				pointRadius: 0,
				borderDash: [5, 5],  // Establecer un patrón de líneas punteadas
				}, {
				data: D_Lx.map((x, i) => ({ x, y: EjeY[i]})),
				showLine: false,
				borderColor: 'blue',
				pointRadius: 2,
				}, {
				data: D_Rx.map((x, i) => ({ x, y: EjeY[i]})),
				showLine: false,
				borderColor: 'blue',
				pointRadius: 2,
				}
			]},
		
			options: {
				scales: {
					x: {
						title: {display: true,
						text: Tx,
						color: 'rgba(0, 0, 3, 0.8)',
						font: {size: 15},
						padding: {top: 20, left:0, right: 0, bottom: 15}}
					},
					y: {
						title: {display: true,
						text: Ty,
						color: 'rgba(0, 0, 3, 0.8)',
						font: {size: 15},
						padding: {top: 20, left:0, right: 0, bottom: 0}}
					}},
				plugins: {
					title: {
						display: true,
						text: "Linealización",
						color: 'rgba(0, 0, 37, 0.8)',
						font: {size: 18},}
				}}
	}

	if(window.Graf){
		window.Graf.clear();
		window.Graf.destroy();
	}
	
	window.Graf = new Chart(grafica, Conf);
}

function LinGrafica(chartContainer, dataPoints, Titulo, T_EjeX, T_EjeY) {
		
      var chart = new CanvasJS.Chart(chartContainer, {
        animationEnabled: true,
        title: {
          text: Titulo,
		  fontFamily: "tahoma",
		  fontSize: 28
        },
        axisX: {
			title: T_EjeX,
          // interval: 1
        },
        axisY: {
          title: T_EjeY,
        },
        toolTip: {
          shared: true
        },
        data: dataPoints

      });

      // Renderizar el gráfico
      chart.render();

      // Mostrar el contenedor del gráfico
      document.getElementById("chartContainer").style.display = "block";
    }