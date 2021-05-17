const app = new Vue({
  el: "#app",
  mounted(){
    
    /* console.log(this.emails); */
    this.callApi1("https://flynn.boolean.careers/exercises/api/random/mail");
  },

  data:{
  emails:[]

  },

  methods:{
    callApi1(url){
      
      axios.get(url).then(resp => {
        /* console.log(resp.data); */
        /* console.log(resp.data.response); */
        this.emails.push(resp.data.response);
        /* console.log(this.emails.length) */
        if(this.emails.length < 10){
          this.callApi1(url)
        }
      }).catch(err=>{
        console.log(err);
      });

    }
  }
})