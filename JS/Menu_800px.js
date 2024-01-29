// Menu 800px
(function(){
	const listElements = document.querySelectorAll(".Menu_Opciones_Desp");
	const list = document.querySelector(".Menu_Desplegable");
	const menu = document.querySelector(".menu_menor");
	
	const addClick = ()=>{
		listElements.forEach(element =>{
			element.addEventListener("click", ()=>{
				
				let subMenu = element.children[1];
				let height = 0;
				element.classList.toggle("Menu_Opciones_act");
								
				if(subMenu.clientHeight === 0){
					height = subMenu.scrollHeight;
				}
				 subMenu.style.height = `${height}px`;
			});
		});
		
	}
	 if(window.innerWidth <= 1000){
        addClick();
    }

	menu.addEventListener('click', ()=> list.classList.toggle('Menu_Des_Desp'));

}
)();



