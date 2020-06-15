$(document).ready(function(){
//SLIDER

	$('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    pager: false
  	});

//POSTS
	var posts = [
		{
			title: 'Prueba de título 1',
			date: 'Publicado el '+ moment().format("ddd D") + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
			content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			title: 'Prueba de título 2',
			date: 'Publicado el '+ moment().format("ddd D") + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
			content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			title: 'Prueba de título 3',
			date: 'Publicado el '+ moment().format("ddd D") + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
			content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			title: 'Prueba de título 4',
			date: 'Publicado el '+ moment().format("ddd D") + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
			content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			title: 'Prueba de título 5',
			date: 'Publicado el '+ moment().format("ddd D") + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
			content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		}
	]
	posts.forEach((item,index)=>{
		var post = `
		<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}

					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
		`;
		$("#posts").append(post);

	});

	//selector de tema
	var theme=$("#theme");
	$("#to-red").click(function(){
		theme.attr("href","css/red.css");
	});
	$("#to-yellow").click(function(){
		theme.attr("href","css/yellow.css");
	});
	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css");
	});
	$("#to-black").click(function(){
		theme.attr("href","css/black.css");
	});
});