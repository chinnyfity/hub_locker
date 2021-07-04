<?php

class Sql_models extends CI_Model{
    function __construct(){
        parent::__construct();
        $this->load->database();
    }


    /* function fetchARecord2($tbl, $id){
        $this->db->select($tbl.'.*')->from($tbl);
        $this->db->where('md5('.$tbl.'.id)', $id);
        $query = $this->db->get();
        if($query->num_rows() > 0)
            return $query->row_array();
        else
            return false;
    } */


    public function searchStr($keyword) {
        $this->db->select('lck.*, ss.name as state1, lga.name as city1');
        $this->db->from('lockers lck');
        $this->db->join('states ss', 'ss.id = lck.states');
        $this->db->join('local_governments lga', 'lga.id = lck.citys');

        $this->db->where("(ss.name LIKE '%".$keyword."%' OR lga.name LIKE '%".$keyword."%')", NULL, FALSE);
        
        $query = $this->db->get();
        if($query->num_rows() > 0){
            return $query->result_array();
        }else{
            return false;
        }
    }


    var $order_column = array(null, "*");
    function make_datatables($tbls){
        //echo $tbls; exit;
        $tbls1="";
        if($tbls=="lockers") $tbls1 = "lockers";

        $this->fetchUsers($tbls1);

        if($_POST["length"] != -1){
            $this->db->limit($_POST["length"], $_POST["start"]);
        }
        $query = $this->db->get();
        return $query->result();
    }


    
    public function get_filtered_data($tbls){
        $tbls1="";
        //echo $tbls." ssse"; exit;

        if($tbls=="lockers") $tbls1 = "lockers";
        $this->fetchUsers($tbls1);

        $query = $this->db->get();
        return $query->num_rows();
    }


    function get_all_data($tbls){
        $tbls1="";
        $this->db->select("*");
        if($tbls == "lockers") $this->db->from('lockers');
        return $this->db->count_all_results();
    }


    

    function fetchUsers($tbls){
        //echo $tbls."wwww ==".$params3; exit;
        $nowtime = time();
        $txtsrchs = $_POST['search']['value'];


        if($tbls=="lockers"){
            $this->db->select('lck.*, lck.id as id1, ss.name as state1, lga.name as city1');
            $this->db->from('lockers lck');

            $this->db->join('states ss', 'ss.id = lck.states');
            $this->db->join('local_governments lga', 'lga.id = lck.citys');

            if(isset($txtsrchs) && $txtsrchs!="" && $txtsrchs!="lowest" && $txtsrchs!="highest"){
                $srchs = "(lck.titles like '%$txtsrchs%' OR lck.sizes like '%$txtsrchs%' OR lck.addrs like '%$txtsrchs%' OR lck.price like '%$txtsrchs%' OR ss.name like '%$txtsrchs%' OR lga.name like '%$txtsrchs%')";
                $this->db->where("$srchs");
            }

            if(isset($txtsrchs) && $txtsrchs=="lowest"){
                $this->db->order_by('lck.price', 'asc');
            }else if(isset($txtsrchs) && $txtsrchs=="highest"){
                $this->db->order_by('lck.price', 'desc');
            }else{
                $this->db->order_by('lck.id', 'desc');
            }
        }


    }


}

?>