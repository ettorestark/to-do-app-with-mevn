<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
			<div class="container">
				<router-link class="navbar-brand" to="/">To Do APP</router-link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarColor01">
					<ul class="navbar-nav ml-auto">
						<!-- 
						<li class="nav-item">
							<a class="nav-link" href="#">Features</a>
						</li> 
						-->
					</ul>
				</div>
			</div>
		</nav>
		<div class="container">
			<slot/>
		</div>
	</div>
</template>
