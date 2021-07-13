import React, {Component} from 'react';
class Home extends Component {
    render() {
	    return (
		<div className="row ">
	           <div className="medium-12 columns">
                </div>

                <header id="header" id="home">
		  		<div class="header-top">
		  			<div class="container">
				  		<div class="row align-items-center">
				  			<div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
				        		<a href="index.html"><img src="img/logo.png" alt="" title=""/></a>			
				  			</div>
				  			<div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
								<a class="btns" >+52 786 123 4588</a>
				  				<a class="btns" >ecologiati@gmail.com</a>		
				  				<a class="icons" href="tel:+953 012 3654 896">
				  					<span class="lnr lnr-phone-handset"></span>
				  				</a>
				  				<a class="icons" href="mailto:support@colorlib.com">
				  					<span class="lnr lnr-envelope"></span>
				  				</a>		
				  			</div>
				  		</div>			  					
		  			</div>
				</div>
			    <div class="container main-menu">
			    	<div class="row align-items-center justify-content-between d-flex">
				      <nav id="nav-menu-container">
				        <ul class="nav-menu">
				          <li class="menu-active"><a href="index.html">Home</a></li>
				          <li><a href="about.html">Conocenos</a></li>
				          <li><a href="pricing.html">Hemeroteca</a></li>
				          <li><a href="opening-hour.html">Especiales </a>
				          	<ul>
				              <li><a href="">BIO-Vida</a>
				              <ul>
					              <li><a href="eficiencia.html">Eficiencia Energética Sostenible</a></li>
					              <li><a href="alimentos.html">Alimentos BIO</a></li>
					            </ul>
					          </li>
				              <li><a href="blog-single.html">Gestión Ambiental</a>
				              	<ul>
					              <li><a href="#">Cursos GA</a></li>
					              <li><a href="#">Energías Limpias</a></li>
					            </ul>
				              </li>		              
				            </ul>
				          </li>
				          <li class="menu-has-children"><a href="">Secciones</a>
				            <ul>
				              <li><a href="">Naturaleza TI</a>
				              <ul>
					              <li><a href="verde.html">Tecnología Verde</a></li>
					              <li><a href="#">Medio Ambiente</a></li>
					            </ul>
					          </li>
				              <li><a href="blog-single.html">Innovaciones</a>
				              	<ul>
					              <li><a href="#">Movilidad Eléctrica</a></li>
					              <li><a href="#">Energías Renovables</a></li>
					            </ul>
				              </li>
					          <li class="menu-has-children"><a href="">Otros</a>
					            <ul>
					              <li><a href="#">EcoTurismo</a></li>
					              <li><a href="#">Sostenibilidad</a></li>
					            </ul>
					          </li>					              
				            </ul>
				          </li>
				          <li><a href="elements.html">Foro</a></li>				          	          
				          <li><a href="contact.html">Contacto</a></li>
				        </ul>
				    </nav>
			      	<div class="menu-social-icons">
						<a href="https://www.facebook.com/groups/293805442167084/" target="_blank"><i class="fa fa-facebook"></i></a>
						<a href="https://twitter.com/ecologiaverde" target="_blank"><i class="fa fa-twitter"></i></a>
						
					</div>	    		
			    </div>
			</div>
		</header>

			
			<section class="banner-area relative"  id="home">
				<div class="overlay overlay-bg"></div>
				<div class="container">
					<div class="row fullscreen d-flex justify-content-center align-items-center">
						<div class="banner-content col-lg-9 col-md-12 justify-content-center">
							<h6 class="text-uppercase">HEMEROTECA, SECCIONES, ESPECIALES Y MUCHOS MÁS!</h6>
							<h1>
								Todo sobre Ecología y Medio Ambiente con TI			
							</h1>
							<p class="text-white mx-auto">
								Sí estas buscando una página informativa ecologica relacionada con Tecnologías de la Información, llegaste al lugar correcto, disfruta de nuestro extenso contenido.
							</p>
							<a href="contact.html" class="primary-btn header-btn text-uppercase mt-10">Envianos un mensaje</a>
						</div>											
					</div>
				</div>
			</section>
			
			<section class="open-hour-area">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-12 open-hour-wrap">
							<h1>Actualización</h1>
							<p>
								Horas de actualización de articulos
							</p>
							<a class="open-btn" href="#"> <span class="circle"></span>Horarios:</a>
							<div class="date-list d-flex flex-row justify-content-center">
								<ul class="colm-1">
									<li>Monday - Friday</li>
									<li>Saturday</li>
									<li>Sunday</li>
								</ul>
								<ul class="colm-2">
									<li><span>:</span>   10:00am to 05:00pm</li>
									<li><span>:</span>   12:00am to 03:00pm</li>
									<li><span>:</span>   closed</li>
								</ul>								
							</div>
						</div>
					</div>
				</div>	
			</section>
			
			<section class="service-area section-gap">
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="col-md-12 pb-40 header-text text-center">
							<h1 class="pb-10">Beneficios</h1>
							<p>
								Beneficios de la tecnologia con el medio ambiente.
							</p>
						</div>
					</div>							
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div class="single-service">
								<img class="img-fluid" src="img/s1.jpg" alt=""/>
								<a href="#"><h4>Energías renovables</h4></a>
								<p>
									Uno de los principales beneficios que ofrece la tecnología al medio ambiente está constituido por los grandes avances que se están desarrollando en las energías renovables.
								</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service">
								<img class="img-fluid" src="img/s2.jpeg" alt=""/>
								<a href="#"><h4>Casas inteligentes</h4></a>
								<p>
									Uno de los mayores avances tecnológicos que beneficia al medio ambiente es la creación de casas y edificios inteligentes. 
								</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service">
								<img class="img-fluid" src="img/s3.jpg" alt=""/>
								<a href="#"><h4>Control ambiental</h4></a>
								<p>
									Otro de los beneficios más importantes a destacar es el control ambiental que se puede realizar gracias la tecnología ambiental. 
								</p>
							</div>
						</div>	
						<div class="col-lg-3 col-md-6">
							<div class="single-service">
								<img class="img-fluid" src="img/s4.jpg" alt=""/>
								<a href="#"><h4>Transformación Digital</h4></a>
								<p>
									Finalmente, queremos destacar la transformación digital que están aplicando numerosas empresas con el objetivo de adaptarse a las nuevas formas de trabajar.
								</p>
							</div>
						</div>																		
					</div>
				</div>	
			</section>
			
			<section class="home-about-area section-gap relative">			
				<div class="container">
					<div class="row align-items-center justify-content-end">
						<div class="col-lg-6 no-padding home-about-right">
							<h1 class="text-white">
								Nuestros<br/>
								Valores
							</h1>
							<p>
								Responsables y comprometidos con toda esa gente que ocupa de alguna información comprobada y cierta sobre algun tema relacionado con el medio ambiente y tecnología.
							</p>
							<div class="row no-gutters">
								<div class="single-services col">
									<span class="lnr lnr-diamond"></span>
									<a href="#">
										<h4 class="text-white">Misón</h4>
									</a>
									<p>
										Estar a la vanguradia con la mejor información para ofrecer al lector.
									</p>
								</div>
								<div class="single-services col">
									<span class="lnr lnr-phone"></span>
									<a href="#">
										<h4 class="text-white">Soporte</h4>
									</a>
									<p>
										Estamos a tus ordenes 24/7 ! Llama a la línea: +52 786 153 8956
									</p>
								</div>								
							</div>
						</div>
					</div>
				</div>	
			</section>
		    <section class="team-area section-gap" id="team">
		        <div class="container">
		            <div class="row d-flex justify-content-center">
		                <div class="menu-content pb-70 col-lg-8">
		                    <div class="title text-center">
		                        <h1 class="mb-10">Tal vez te pueda interesar...</h1>
		                        <p>Revisa algunos de nuestros articulos, visita las diferentes secciones que tenemos para ti.</p>
		                    </div>
		                </div>
		            </div>
		            <div class="row justify-content-center d-flex align-items-center">
		                <div class="col-lg-3 col-md-6 single-team">
		                    <div class="thumb">
		                        <img class="img-fluid" src="img/t1.jpg" alt=""/>
		                        <div class="align-items-end justify-content-center d-flex">
		                            <p>
		                            	Por Alex Flores
		                            </p>
		                            <h4>Tecnología Verde</h4>		                            
		                        </div>
		                    </div>
		                </div>
		                <div class="col-lg-3 col-md-6 single-team">
		                    <div class="thumb">
		                        <img class="img-fluid" src="img/t2.jpg" alt=""/>
		                        <div class="align-items-end justify-content-center d-flex">
		                            <p>
		                            	Por Andy Florence
		                            </p>
		                            <h4>Movilidad Electrica</h4>		                            
		                        </div>
		                    </div>
		                </div>
		                <div class="col-lg-3 col-md-6 single-team">
		                    <div class="thumb">
		                        <img class="img-fluid" src="img/t3.jpg" alt=""/>
		                        <div class="align-items-end justify-content-center d-flex">
		                            <p>
		                            	Por  Luis Florence
		                            </p>
		                            <h4> EcoTurismo</h4>		                            
		                        </div>
		                    </div>
		                </div>
		                <div class="col-lg-3 col-md-6 single-team">
		                    <div class="thumb">
		                        <img class="img-fluid" src="img/t4.jpg" alt=""/>
		                        <div class="align-items-end justify-content-center d-flex">
		                            <p>
		                            	Por Leopoldo Díaz
		                            </p>
		                            <h4>Energias Renovables</h4>		                            
		                        </div>
		                    </div>
		                </div>		                		                		                
		            </div>
		        </div>
		    </section>	
			<footer class="footer-area section-gap">
				<div class="container">
					<div class="row">
						<div class="col-lg-2  col-md-6">
							<div class="single-footer-widget">
								<h6>Top de nuestros articulos</h6>
								<ul class="footer-nav">
									<li><a href="#">Eficiencia Energetica Sostenible</a></li>
									<li><a href="#">Cursos de Gestion Ambiental</a></li>
									<li><a href="#">Energias Limpias</a></li>
									<li><a href="#">Tecnología Verde</a></li>
									
									
								</ul>
							</div>
						</div>
						<div class="col-lg-4  col-md-6">
							<div class="single-footer-widget mail-chimp">
								<h6 class="mb-20">Contactanos</h6>
								<p>
									Calle Tierra y Libertad #44, Plan de Ayala Ciudad Hidalgo
								</p>
								<h3>+52 786 156 2365</h3>
								<h3>+52 786 123 5678</h3>
								<a href="archivos/politicas.pdf">Politicas de Proteccion Datos</a> <br/>
								<a href="archivos/privacidad.pdf">Aviso de Privacidad</a>
							</div>
						</div>							
						<div class="col-lg-6  col-md-12">
							<div class="single-footer-widget newsletter">
								<h6>Se parte de nuestra comunidad</h6>
								<p>Escribe tu email y se parte de la comunidad Ecología TI</p>
								<div id="mc_embed_signup">
									<form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="form-inline">

										<div class="form-group row" style="width: 100%">
											<div class="col-lg-8 col-md-12">
												<input name="EMAIL" placeholder="Tu email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" required="" type="email"/>
												<div style="position: absolute; left: -5000px;">
													<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"/>
												</div>
											</div> 
										
											<div class="col-lg-4 col-md-12">
												<button class="nw-btn primary-btn">Suscribete<span class="lnr lnr-arrow-right"></span></button>
											</div> 
										</div>		
										<div class="info"></div>
									</form>
								</div>		
							</div>
						</div>					
					</div>

					<div class="row footer-bottom d-flex justify-content-between">
						<p class="col-lg-8 col-sm-12 footer-text m-0">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
						<div class="col-lg-4 col-sm-12 footer-social">
							<a href="https://www.facebook.com/groups/293805442167084/" target="_blank"><i class="fa fa-facebook"></i></a>
							<a href="https://twitter.com/ecologiaverde" target="_blank"><i class="fa fa-twitter"></i></a>
							
						</div>
					</div>
				</div>
			</footer>

                </div>  
	     );
    }
}
export default Home