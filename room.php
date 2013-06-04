<?php 

	require_once 'session_start.php';

	foreach ( $_POST as $key=>$value ) {
	    if ( in_array( $key, $accepted ) && !empty($value) ) {
	        $_SESSION[$key] = $value;
	    }
	}

?>