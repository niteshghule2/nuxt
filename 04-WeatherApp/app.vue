<script setup lang="ts">
const cookie = useCookie("city")
const config = useRuntimeConfig()

if(!cookie.value) cookie.value="Pune"
const search = ref(cookie.value)
const input = ref("")
const background = ref("")
// const {data: city, error}=useFetch(()=>`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=08eafc62ae8480b36273e72a9d066c77`);
const {data:city, error} = useAsyncData("city", async()=>{
  let response;
  try{
    response = await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}`, {
      params:{
        units:"metric",
        appid: config.WEATHER_APP_SECRET
      }
    })
  cookie.value=search.value
  const temp = response.main.temp;
  if(temp<=-10){
    background.value="https://source.unsplash.com/1800x1200/?snow"
  }else if(temp> -10 && temp <= 0){
    background.value="https://source.unsplash.com/1800x1200/?cold-season"

  }else if(temp> 0 && temp <= 10){
    background.value="https://source.unsplash.com/1800x1200/?rain"

  }else{
    background.value="https://source.unsplash.com/1800x1200/?summer"

  }
  }catch(e){

  }
  return response;
  
}, {
  watch:[search]
})
let today = new Date()
today = today.toLocaleDateString("en-Us",{
  weekday:"long",
  year:"numeric",
  month: "long",
  day:"numeric"
})
const handleClick =()=>{
  const formatedSearch = input.value.trim().split(" ").join("+")
  search.value=formatedSearch;
  input.value="";
}
const goBack =()=>{
  search.value=cookie.value
}
</script>
<template>
  <div v-if="city" class="h-screen relative overflow-hidden">
    <img :src="background"/>
    <div class="absolute w-full h-full top-0 overlay" />
    <div class="absolute w-full h-full top-0 p-48">
      <div class="flex justify-between">
          <div>
            <h1 class="text-7xl text-white">{{city.name }}</h1>'
          <p class="font-extralight text-2xl mt-2 text-white">{{today}}</p>
          <img class="w-56 icon" :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`"/>
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">
            {{city.main.temp}}°
          </p>
        </div>
      </div>
      <div class="mt-20">
        <input type="text" class="w-1/2 h-10" placeholder="Search a city..." v-model="input">
        <button class="bg-sky-400 w-20 text-white h-10" @click="handleClick">Search</button>
      </div>
    </div>
  </div>
  <div v-else class="p-10">
    <h1 class="text-7xl">Oops, We cant find that city</h1>
    <button class="mt-5 bg-sky-400 px-10 w-50 text-white h-10" @click="goBack">Go Back</button>
  </div>
</template>
<style scoped>

.overlay{
  background-color: rgba(0,0,0,0.5);
}
.icon{
  margin-left: -2.75rem;
  margin-top: -2.75rem;
}
</style>