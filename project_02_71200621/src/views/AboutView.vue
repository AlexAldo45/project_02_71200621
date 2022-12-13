<template>
  
  <body>
    <div class="about">
      <div class="dalemChat">
        <div class="navbar">
          <span class="dalamNavnar">
            <span><p class="pesan">Pesan Terakhir</p></span>
            <div class="rataKanan"><router-link to="/"><span class="logout"><img  src="../assets/logout.png" alt=""></span></router-link></div>
          </span>
          <span class="dalamNavnar2">
            <div>
              <p class="pesan2">Kirim Pesan Ke:</p>
              <div><input class="namaTujuan" type="text"></div>
            </div> 
            
          </span>
        </div>
          <div class="chat">
            <div class="atasChat">
              <span class="atasChat2">
                ujahdkw
              </span>
            </div>
            <!-- test -->
        </div>  
      </div>
    </div>
  </body>
  
</template>
<style>
  .about{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .dalemChat{
    display: flex;
  }
  .chat{
    background-color: white;
  }
  .atasChat{
    width: 180vh;
    background-color: rgb(144,148,220);
    height: 45px;
    display: flex;
    padding: 15px;
  }
  .atasChat2{
    margin: 7px;
    padding-left: 20px;
    color: white;
    font-weight: 550;
    font-size: 20px;
  }
  .navbar{
    width: 1000px;
    height: 100vh;
    background-color: rgb(72,92,220);
  }
  .dalamNavnar{
    padding: 15px;
    display: flex;
  }
  .dalamNavnar2{
    padding: 15px;
    display: flex;
    bottom: 0;
    position: fixed;
  }
  .pesan{
    color: white;
    font-weight: 550;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0px;
    font-size: 18px;
  }
  .pesan2{
    color: white;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0px;
    font-size: 17px;
    padding-bottom: 8px;
  }
  .namaTujuan{
    width: 300vh;
    max-width: 233px;
    height: 20px;
    border-radius: 5px;
    border-color: azure;
    font-size: 17px;
    padding: 5px;
  }
  .logout img{ 
    width:30px;
    height:30px;
  }
  .rataKanan{
    padding-left: 140px;
  }
  
  /* test */
 
</style>