var mainVm = new Vue({
    el: '#app',
    data: {
      userName: '',
      userPassword: '',
      user: {},
      roadVotes: 6,
      cristoVotes: 3,
      slaughterVotes: 4,
      host: 'Carol K.',
    },
    methods: {
      loginUser : function(event){
          event.preventDefault()
          var that = this;
          // inside of a vue method, we can use `this` to access any data or method on that VM.
          // always send an object when using AJAX
          console.log(this.userName)

          $.ajax({
              url: '/login-user',
              type: 'POST',
              data: JSON.stringify({username: this.userName, password: this.userPassword}),
              contentType: 'application/json; charset=utf-8',
              dataType: 'json',
              success: function(dataFromServer) {
                  console.log('line61: ', dataFromServer)
                  if ( dataFromServer.success ) {
                      window.location.href="/dashboard.html"
                  }
              }
          })
      },
    },
})
