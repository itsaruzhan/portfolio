<template>
  <div
     id="allAbout"
  >
  <div class="container-fluid" id="bit"><span id="about"
          class="title text-center"
          >Here's a bit about me</span >
          <hr>
  <div class="wrapper">
    <div class="left">
      <div class="text">
          <p>What I love</p>
         <span v-for="s in aboutMe"
                  :key="s"
                   data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
                 id="love" >{{ s  }} <br></span>
       
      </div> 
     </div>
   <div class="right">
        <div class="text" data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
        <img :src="hobby1" id="hobby1" /><div class="horIm"><img :src="hobby3" id="hobby3" /> 
                    <img :src="hobby2" id="hobby2" /></div>
      </div>
    </div>
  </div>
</div>

 <div class="container-fluid" id="bit">
         
  <div class="wrapper1">
    <div class="left1">
      <div class="text">
          <p id="wrT"> Where I have been</p>
         
           <ul v-for="(e) in education"
            :key="e.name" data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
            <div class="edu">
              <p>1. {{ e.name[0] }}, {{ e.place[0] }}</p>
              <br>
              <p> 
                  {{ e.gpa[0] }}</p>
              <br>
              <p>{{ e.date[0] }}</p>
              <br>
              <p class="px-2 pb-2 pt-2" style="text-align: justify;"> {{ e.description }}</p>
            </div>
            </ul>
            <br>
             <ul v-for="(e) in education"
            :key="e.name" data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
            <div class="edu">
              <p>2. {{ e.name[1] }}, {{ e.place[1] }}</p>
              <br>
              <p> {{ e.degree || e.position }}
                  {{ e.gpa[1] }}</p>
              <br>
              <p>{{ e.date[1] }}</p>
              <br>
              <p class="px-2 pb-2 pt-2" style="text-align: justify;"> {{ e.description }}</p>
            </div>
            </ul>
       
      </div> 
     </div>
   <div class="right1">
            <div class="text">
       <img  id="sdu" width="400" height="330" src="https://sdu.edu.kz/wp-content/uploads/2020/03/Suleyman-e1583333111176.jpg" alt="">
<img id="school" width="400px" height="330"  src="https://yt3.ggpht.com/ytc/AKedOLQE1zuuVqFY1zErz25Ngx6QYLgNR7II6zQVO1zz=s900-c-k-c0x00ffffff-no-rj" alt="">
 
      </div>
    </div>
  </div>
</div>

   
  </div>
</template>

<script>

import info from "../../info";

export default {
  name: "About",
  components: {
   
  },
 
  data() {
    return {
      education: info.education,
      hobby1: info.hobby1,
      hobby2: info.hobby2,
      hobby3: info.hobby3,
      aboutMe: info.aboutMe,

      
    };
    
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.whatIlove{
  height: 530px;
  width: 400px;
  background-color: rgb(166, 166, 167);
  color: aliceblue;
  border-radius: 8px;
  padding: 22px;
  margin-top: 80px;
  margin-bottom: 80px;
  text-align: left;
}
#love{
  font-size: 23px;

  line-height: 53px;
}
#about{
  background-color:rgb(204, 203, 204) ;
  padding-top: 100px;
  text-align: center;
}
#hobby1{
  height: 250px;
  width: 350px;
  border-radius: 7px;


}
#hobby2{
  height: 300px;
  width: 330px;
  object-fit: cover;
  margin-bottom: 30px;
  border-radius: 7px;
  padding-left: 20px;
  margin-left: -10px;
  margin-top: 30px;
}
#hobby3{
  height: 300px;
  width: 220px;
  object-fit: cover;
  margin-top: 30px;
   margin-left: -150px;
  border-radius: 7px;
  padding-right: 20px;
  
}
.horIm{
  display: flex;
  margin-right: 80px;
 
}

#allAbout {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(204, 203, 204);
  padding: 0;
}

#bit {
  background-color: rgb(204, 203, 204);
  height: 800px;
  overflow: hidden;
}

.wrapper, .wrapper1 {
  width: 100%;
  height: 100%;
  display:flex;
  background: #ccc;
  transform: translateX(-25%);
}


.left {
  height: 100%;
  background-color: rgb(204, 203, 204);
  clip-path: polygon(0 0, 100% 0, 50% 100%, 0% 100%);
  flex: 1 0 75%;
  transform: translateX(25%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.right {
  height: 100%;
  background: #343a40;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  flex: 1 0 75%;
  transform: translateX(-25%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.left1 {
  height: 100%;
  background-color: #343a40;
  
  clip-path: polygon(0 0, 100% 0, 50% 100%, 0% 100%);
  flex: 1 0 75%;
  transform: translateX(25%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.right1 {
  height: 100%;
  background: rgb(204, 203, 204);
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  flex: 1 0 75%;
  transform: translateX(-25%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.left .text {
  width:50%;
  margin-left: 15%;
  text-align: left;
  margin-top: -40px;
  
}
.left1 .text {
  width:50%;
  margin-left: 15%;
  text-align: left;
  color: rgb(185, 182, 182);
  
}
.left .text p{
  border-bottom: 1px solid rgb(185, 182, 182);
}
.right .text {
  width:50%;
  padding-right: 10%;
  
}
.right1 .text {
  width:50%;
  padding-right: 30%;
  color: #343a40;
  text-align: center;
}
hr{
  margin: 10px 550px;
  margin-bottom: 20px;
  color: rgb(185, 182, 182);
}
.wh {
  padding: 0;
  background-color:#343a40 ;
  padding-top: 50px;
  height: 100px;
  color: #ccc;
}
.wh div p{
  color: white;
  transition: all 1s;
}
#sdu, #school{
  border-radius: 7px;
  padding: 10px;
  margin:15px;
  border: 1px solid grey
}
#school{
  margin-left: -120px;
}
#wrT{
  border-bottom: 1px solid white;
  
}

</style>
