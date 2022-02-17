
<?php 
	
	class mycrud{
		private $conn;

        public function __construct()
        {
            #database host, database user, database pass, database name
            $dbhost = 'localhost';
            $dbuser = 'root';
            $dbpass = "";
            $dbname = 'mysql';

            $this->conn= mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
            
            if(!$this->conn){
                die("Database Connection Error!!");
            }
        }


        // ========= CREATE DATA & ADD DATA ========== //
        public function add_data($data){
        	$ct_name = $data['ct_name'];
        	$ct_email = $data['ct_email'];
            $ct_msg = $data['ct_msg'];


        	$query = "INSERT INTO contact(ct_name,ct_email,ct_msg) VALUE('$ct_name','$ct_email','$ct_msg')";

        	if (mysqli_query($this->conn, $query)) {
        		return "Information Added Successfully";
        	}
        }



	}


 ?>