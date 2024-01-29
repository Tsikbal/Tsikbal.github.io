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


function LinRadiometria(){
	let Post = 0, Volt = 0;
	LXs = [], LYs = [];
	
	Post = document.getElementById("Pos").value,
	Volt = document.getElementById("Vol").value;
	let PostCad = Post.split(" "), VoltCad = Volt.split(" "),
		Xss = new Array(PostCad.length), Yss = new Array(PostCad.length);
	for(var i=0; i < PostCad.length; i++){
		Xss[i]=parseFloat(PostCad[i]);
		Yss[i]=parseFloat(VoltCad[i]);
	}
	
	if (Post == 0 || Volt == 0){
		return alert("Las cadenas están vacías");
	}
	if (PostCad.length != VoltCad.length){
		return alert("Las cadenas Tienen diferente longitud");
	}
	
	for(var i = 0; i< Xss.length; i++){
		LXs.push(Math.log10(Xss[i]));
		LYs.push(Math.log10(Yss[i]));
	}
	
	LineLS(Xss, Yss);
	
	GenerarTabel("ValoresTab", m, b, R_2, Del_m, Del_b);
	
	GrafLineal("#GrCanvas", FinalXs, Yss, FinalYs, "Log(Posición)", "Log(Voltaje)");
};

function LinRefl_Refr(){
	let Ang_I = 0, Ang_R = 0;
	
	Ang_I = document.getElementById("Ang_R").value,
	Ang_R = document.getElementById("Ang_I").value;
	let AngICad = Ang_I.split(" "), AngRCad = Ang_R.split(" "),
		Xss = new Array(AngICad.length), Yss = new Array(AngICad.length);
	for(var i=0; i < AngICad.length; i++){
		Xss[i]=parseFloat(AngICad[i]);
		Yss[i]=parseFloat(AngRCad[i]);
	}
	
	if (Ang_I == 0 && Ang_R == 0){
		return alert("Las cadenas están vacías");
	}
	if (AngICad.length != AngRCad.length){
		return alert("Las cadenas Tienen diferente longitud");
	}
	
	LineLS(Xss, Yss);
	
	GenerarTabel("ValoresTab", m, b, R_2);
	
	GrafLineal("#GrCanvas", FinalXs, Yss, FinalYs, "&theta; Reflexión", "&theta; Incidencia");
};

function LinRefl_Refr_2(){
	let Ang_I = 0, Ang_R = 0;
	SXs = [], SYs = [];
	
	Ang_I = document.getElementById("Ang_R").value,
	Ang_R = document.getElementById("Ang_I").value;
	let AngICad = Ang_I.split(" "), AngRCad = Ang_R.split(" "),
		Xss = new Array(AngICad.length), Yss = new Array(AngICad.length);
	for(var i=0; i < AngICad.length; i++){
		Xss[i]=parseFloat(AngICad[i]);
		Yss[i]=parseFloat(AngRCad[i]);
	}
	
	if (Ang_I == 0 && Ang_R == 0){
		return alert("Las cadenas están vacías");
	}
	if (AngICad.length != AngRCad.length){
		return alert("Las cadenas Tienen diferente longitud");
	}
	
	for(var i = 0; i< Xss.length; i++){
		SXs.push(Math.sin(Xss[i]*Math.PI/180));
		SYs.push(Math.sin(Yss[i]*Math.PI/180));
	}
	
	LineLS(SXs, SYs);
	
	GenerarTabel("ValoresTab", m, b, R_2);
	
	GrafLineal("#GrCanvas", FinalXs, SYs, FinalYs, "&theta; Reflexión", "&theta; Incidencia");
};


function LineLS(Xs, Ys){
	SumXY = 0, SumX = 0, SumY = 0, SumX_2 = 0, N = 0,
	m = 0, b = 0, R_2=0, PromYs = 0, 
	Ji = 0, Del_m = 0, Del_b = 0,
	SumR_1 = 0, SumR_2 =0;
	FinalXs = [], FinalYs = [];

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
// LineLS(Xss, Yss);	

function GenerarTabel(relleno, val1, val2, val3, val4, val5){
	let TablaCuerpo = document.getElementById(relleno);
	TablaCuerpo.innerHTML += `<tr><td>${Math.round10(val1, -3)}</td>  <td>${Math.round10(val2, -3)}</td>  <td>${Math.round10(val3, -4)}</td> 
								  <td>${Math.round10(val4, -3)}</td>  <td>${Math.round10(val5, -3)}</td></tr>`;
}

function GrafLineal(Canvas, EjeX, EjeY, EjeY_ajuste, Tx, Ty){
	const grafica = document.querySelector(Canvas);
	const Conf = {
		type: "scatter",
		data:{
			labels: EjeX,
				datasets: [{
					label: "Mediciones",
					data: EjeY,
					borderColor: 'rgba(0, 0, 0)',
					backgroundColor: "rgba(120, 120, 37, 0.8)",
					pointRadius: 4,
					pointBackgroundColor: "rgba(120, 120, 37, 0.8)"},
					{label: "Ajuste",
					data: EjeY_ajuste,
					borderColor: 'rgba(0, 0, 37, 0.8)',
					pointRadius: 0,
					type: "line"}],
			},
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


