/* Basic style for Slider */
.slider{
    position: relative;
       width: 640px;
       padding-top: 320px; 
       margin: 100px auto;
       box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.75);
   }
    
   /* Style for Image*/
   .slider>img{
       position: absolute;
       left: 0; top: 0;
       transition: all 0.5s;
   }
    
   .slider input[name='slide_switch'] {
       display: none;
   }
    
   .slider label {
       margin: 18px 0 0 18px;
       border: 3px solid #999;
       float: left;
       cursor: pointer;
       transition: all 0.5s;
       opacity: 0.6;
   }
    
   .slider label img{
       display: block;
   }
    
   .slider input[name='slide_switch']:checked+label {
       border-color: #666;
       opacity: 1;
   }
   /* Main images */
   .slider input[name='slide_switch'] ~ img {
       opacity: 0;
       transform: scale(1.1);
   }
    
   .slider input[name='slide_switch']:checked+label+img {
       opacity: 1;
       transform: scale(1);
   }