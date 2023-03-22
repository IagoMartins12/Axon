<?php

function axonInit(){
    register_nav_menus(){
        'primary_menu' => "primeiro menu",
	    'footer_menu'  => "menu footer",
    }
}
add_action( 'after_setup_theme', 'axonInit' );

