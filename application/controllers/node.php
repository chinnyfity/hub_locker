<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Node extends CI_Controller {

    public $xauth;
    public $show_name;

    public function __construct(){
        parent::__construct();

        $this->load->helper(array('form', 'url', 'html', 'directory', 'cookie'));
        $this->load->library(array('form_validation', 'security', 'pagination', 'session', 'Compress', 'nativesession'));
        $this->load->library('controller_list');
        
        $this->perPage = 20;
        
        $this->form_validation->set_message('regex_match[/^[0-9]{6,11}$/]', 'Phone must contain numbers and a maximum of 11 digits!');
        $this->load->model('sql_models');

        
        @date_default_timezone_set('Africa/Lagos');

    }




    public function index(){
        $data['page_title'] = "";
        $data['page_name'] = "";
        $data['page_header'] = "";
        $data['datamsg'] = "";
        $this->load->view("index", $data);
    }

    
    public function rent_now(){
        $data['page_title'] = "Rent Locker";
        $data['page_name'] = "rent_now";
        $data['page_header'] = "";
        $data['datamsg'] = "";
        $this->load->view("locker_info", $data);
    }



    public function getSearches(){
        $keyword = $this->input->post('keyword');

        if(isset($keyword) && $keyword!=""){
            $result = $this->sql_models->searchStr($keyword);
            if($result){
                $k=1;
                foreach ($result as $rs) {
                    $addrs = ucwords(strtolower($rs['addrs']));
                    $city1 = $rs['city1'];
                    $states = $city1.", ".$rs['state1'];
                    
                    $addrs = " ($addrs)";
                    
                    $returnStr = str_replace($this->input->post('keyword'), '<b style="color:#960">'.$this->input->post('keyword').'</b>', $states.' <b>Locker '.$k.'</b> '.$addrs);

                    echo '<li class="set_item" onclick="set_item(\''.str_replace(array("'"), "\'", $states).'\')"><i class="fa fa-map-marker"></i> &nbsp;'.$returnStr.'</li>';
                    $k++;
                }
            }else{
                echo '<div class="text-center" style="color:#555; padding:0; margin:0 0 0 -20px; font-size: 14.5px !important; line-height: 19px">No records found!</div>';
            }
        }   
    }



    function fetch_records(){
        $url_task = $this->uri->segment(3);

        if($url_task=="") $url_task="lockers";

        $fetch_data = $this->sql_models->make_datatables($url_task);
        $data = array();
        $conts = 1;
        foreach($fetch_data as $row){   
            $sub_array = array();
            $ids = $row->id1;
            // $nows = substr(time(), -5);
            // $ids_hash = $ids.$nows;
            
            if($url_task=="lockers"){
                $titles = $row->titles;
                $descrip = "<font style='line-height:18px'>$row->descrip</font>";
                $descrip2 = $row->descrip2;
                $qty = $row->qty;
                $city1 = $row->city1;
                $state1 = $row->state1;
                $addrs = ucwords(strtolower($row->addrs));
                $locs = "<p style='font-weight:normal!important;font-size:13px;line-height:18px!important;color:#c46e17;margin-top:4px;opacity:0.9'>$addrs $city1</p>";

                if($qty >=1) $qty="$qty Available"; else $qty="None Available";
            }


            if($url_task=="lockers"){
                $sub_array[] = $conts;
                $sub_array[] = ucwords($titles);
                $sub_array[] = $descrip.$locs;
                $sub_array[] = $descrip2;
                $sub_array[] = $qty;
                $sub_array[] = "<a href='".base_url()."rent-now/'><font class='btn_rent'>Rent Now</font></a>";
            }

            $data[] = $sub_array;
            $conts++;
        }

        $output = array(
            "draw"              =>  intval($_POST["draw"]),
            "recordsTotal"      =>  $this->sql_models->get_all_data($url_task),
            "recordsFiltered"   =>  $this->sql_models->get_filtered_data($url_task),
            "data"              =>  $data
        );
        echo json_encode($output);
    }



    /* function filter_sort(){
        $txtsort = $this->input->post('txtsort');
        $url_task="lockers";

        $fetch_data = $this->sql_models->make_datatables($url_task, $txtsort);
        $data = array();
        $conts = 1;
        foreach($fetch_data as $row){   
            $sub_array = array();
            $ids = $row->id1;
            
            if($url_task=="lockers"){
                $titles = $row->titles;
                $descrip = "<font style='line-height:18px'>$row->descrip</font>";
                $descrip2 = $row->descrip2;
                $qty = $row->qty;
                $city1 = $row->city1;
                $state1 = $row->state1;
                $addrs = ucwords(strtolower($row->addrs));
                $locs = "<p style='font-weight:normal!important;font-size:13px;line-height:18px!important;color:#c46e17;margin-top:4px;opacity:0.9'>$addrs</p>";

                if($qty >=1) $qty="$qty Available"; else $qty="None Available";
            }


            if($url_task=="lockers"){
                $sub_array[] = $conts;
                $sub_array[] = ucwords($titles);
                $sub_array[] = $descrip.$locs;
                $sub_array[] = $descrip2;
                $sub_array[] = $qty;
                $sub_array[] = "<font class='btn_rent'>Rent Now</font>";
            }

            $data[] = $sub_array;
            $conts++;
        }

        $output = array(
            "draw"              =>  intval($_POST["draw"]),
            "recordsTotal"      =>  $this->sql_models->get_all_data($url_task, $txtsort),
            "recordsFiltered"   =>  $this->sql_models->get_filtered_data($url_task, $txtsort),
            "data"              =>  $data
        );
        echo json_encode($output);
    } */



}






