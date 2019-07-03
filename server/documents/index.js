module.exports = ({ name,certi,univer,moreinfo }) => {
  var today = new Date(),
  date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
          @import url('https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&subset=chinese-simplified');

          body {
          
            margin:0;
            padding:0;
            background: #222;
            height: 100%;
            overflow: hidden;
          }

        
        
         

          .c {
            
            background-repeat: no-repeat;
            background-size:100%;
            width: 100%;
            margin: .5rem;
            height:80%;
            padding: .5rem 2rem 30rem 2rem; 
            box-sizing: border-box;
          }

         
          
          
        
       
          
       
          .box {
          
            border: 1px solid #000;
            
            text-shadow: .5rem .5rem .5rem rgba(0, 0, 0, 0.559);
            margin: 2rem auto 0 auto;
            border-radius: 100px;
            padding: 0 8rem 0 3rem;
            clear:both;
            content: "";
            display:bolck;
            color:#999;
          }

          .box-border {
            text-align: center;
            margin: 0 auto;
          }


          .box-border h3 {
            font-size: 1.4rem;
            font-weight: bold;
            margin: 0;
            line-height: 1.7;
          }

          .box h4 {
            text-shadow: .5rem .5rem .5rem rgba(0, 0, 0, 0.559);
            color: #999;

          }

          .box h1 {
            display: inline-block;
            padding-bottom: 1.8px;
            border-bottom: 2px solid #000;
            font-family: 'ZCOOL QingKe HuangYou', cursive;
            font-weight: bold;
            font-size: 1.7rem;
            word-spacing: -3px;
            margin: 0;
            color: #999;

          }

          .date {
            padding-top: 1rem;
            letter-spacing: 2px;
           
          }


          .auth {
            font-family: 'ZCOOL QingKe HuangYou', cursive;
            padding-bottom: 1.8px;
            display: inline-block;
            border-bottom: 2px solid #000;
            font-weight: bold;

          }


          .s {
            width: 100%;
          }
          .box-sign {
            width: 40%;
            margin-left: 70%;
            padding-top: 3rem;
            margin-top: 1rem;
          }

          .box-sign p {

            font-size: 1.5em;
          }


        

          h2 {
            font-size: 1.5rem;
            margin: 1rem 0 0 0;
            font-weight: 300;

          }
       

          </style>
       </head>
       <body>



       <div class="c">

          <div class="box">

      
          <h3 class="date">Date: ${date} </h3>

          <div class="box-border">
          <h1> Certificate of Developer </h1><br>
            <p class="auth">Bootcamp </p>
            <h2>${certi} ${name}</h2>
            <h3>${univer}</h3>
            <h3>${moreinfo}</h3>

            <div class="s">
           <div class="box-sign">
           
            <p>Abd Alwahab<br>
            International Learing<br> and
            Coding Acd</p>

            </div>

            </div>
          </div>
        

       
          </div>


       
        
       </div>


      
       
       </body>===
    </html>
    `;
};