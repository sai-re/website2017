<?php
    function gallery() {
        require_once 'info.php';

        function fetchData($link) {
            $ch = curl_init(); //initalise curl session
            curl_setopt($ch, CURLOPT_URL, $link); //url to process (can be fed directly into init parameter)
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0); //does not  check the existence of a common name in the SSL peer certificate (optional)
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); //stop cURL from verifying the peer's certificate
            curl_setopt($ch, CURLOPT_POST, 0); //do a regular HTTP POST if set to 1
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); //info type
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //set to true stops it returning json as string 
            $output = curl_exec($ch); //executes curl session 
            curl_close($ch); //close curl session
            return $output;
        }
        
        $result = json_decode(fetchData($url)); //Decodes a JSON string
        $posts = $result->data;
        
        foreach($posts as $post){ 
            $picture = $post->images->standard_resolution->url;
            $picture2 = substr_replace($picture,"/c224.0.631.631/",33,1);
            ?>
            
            <li class="gallery__item">
                <a target="_blank" href="<?=$picture; ?>">
                    <img class="gallery__img" src="<?=$picture; ?>">
                </a>
            </li>
    <?php }
    }
?>