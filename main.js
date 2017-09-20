/*$(document).ready(function() {


  $("#roadVoteIncrease").click(function() {
    $("#roadVoteIncrease").css({color: 'green'})
  })

  $("#countVoteIncrease").click(function() {
    $("#countVoteIncrease").css({color: 'green'})
  })

  $("#slaughterVoteIncrease").click(function() {
    $("#slaughterVoteIncrease").css({color: 'green'})
  })




})
*/
function initMap() {
  var devil = {lat: 40.0154402, lng: -105.2772802};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: devil
  });
  var marker = new google.maps.Marker({
    position: devil,
    map: map
  });
}

/*$(document).ready(function(){

    // var socket = io('/chat-server')

    // connect to the socket server using the default namespace '/'
    // calling 'io()' here fires the 'connection' event on the server.
    var socket = io()
    socket.on('message', function(data){
        console.log(data.message)
        $('#chat-messages').append(`<div class="icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div><li class="message"> ${data.message}</li>`)

    })

    $('#all').on('click', function(){
        socket.emit('allchat', {message: $('input').val()})
        $('input').val('')
    })



})*/




var myRouter = new VueRouter({
    routes: [
        {
            path: '/', // localhost:8080/#
            component: {
                template: `
                <div class="home">
                <div class="row">
                <div class="col-md-3">
                  <div class="list-group">
                  <router-link to="/"><a href="#" class="list-group-item list-group-item-success">Home</a></router-link>
                  <router-link to="/bookOfTheMonth"><a href="#" class="list-group-item list-group-item-action">Book of the month</a></router-link>
                  <router-link to="/booksRead"><a href="#" class="list-group-item list-group-item-action">Books we've read</a></router-link>
                  <router-link to="/nextMonth"><a href="#" class="list-group-item list-group-item-action">Vote for next month's book!</a></router-link>
                  <router-link to="/guestList"><a href="#" class="list-group-item list-group-item-action">Guest List/RSVP</a></router-link>
                  <router-link to="/chat"><a href="#" class="list-group-item list-group-item-action"> Group Chat</a></router-link>
                  <router-link to="/contact"><a href="#" class="list-group-item list-group-item-action">Contact</a></router-link>
                  </div>
                </div>
                <div class="col-md-9">
                <h1 class="title text-center">September 2017</h1><hr id="homeHR"><br><br>
                <div class="card text-center border-dark">
                  <div class="card-header border-dark">
                    Book Club Info
                  </div>
                  <div class="card-body">
                    <h4>Next Event:</h4><hr id="eventHR">
                    <h4 class="card-title">September 7th @ 7:00 p.m.</h4>
                    <h4>Host: {{host}}</h4>
                    <h4>Address: 4 Privet Drive | Chicago, IL</h4>
                    <p class="card-text">Intelligentsia air plant vaporware selvage 90's offal, quinoa drinking vinegar polaroid raw denim. Dreamcatcher literally semiotics mustache irony. Ethical subway tile tacos sartorial. Leggings next level cardigan blog letterpress post-ironic. Meh fashion axe bushwick freegan. Selfies kale chips direct trade fingerstache jianbing taiyaki offal franzen cred. Tofu vice etsy actually, taxidermy copper mug fam health goth gastropub tousled microdosing pour-over disrupt small batch.</p>
                    <p>Bicycle rights tousled kogi meh. Bespoke drinking vinegar dreamcatcher, +1 cardigan hoodie hashtag pour-over raclette. PBR&B hoodie tacos, post-ironic air plant yr kombucha tousled try-hard. Paleo cold-pressed godard, pug truffaut chillwave bushwick mustache tofu disrupt pabst before they sold out. Try-hard artisan 8-bit, ugh gluten-free lyft gochujang kitsch slow-carb migas mlkshk trust fund kinfolk stumptown.</p>


                  </div>
                    <div id="map"></div>
                  </div>
                </div>
                </div>
                </div>

                `,
                props: ['host'],
                data: function(){
                  return {
                    map: null
                  }
                },
                mounted: function(){
                  initMap()
                //
                //     var devil = {lat: 40.0154402, lng: -105.2772802};
                //     var map = new google.maps.Map(document.getElementById("map"), {
                //       zoom: 16,
                //       center: devil
                //     });
                //     var marker = new google.maps.Marker({
                //       position: devil,
                //       map: map
                //     });
                //
                },
                created: function(){ console.log('created the main component')},
                destroyed: function(){ console.log('destroyed the main component')}
            }
        },
        {
            path: '/bookOfTheMonth',
            component : {
                template: `<div class="month">
                <div class="row">
                <div class="col-md-3">
                  <div class="list-group">
                    <router-link to="/"><a href="#" class="list-group-item list-group-item-success">Home</a></router-link>
                    <router-link to="/bookOfTheMonth"><a href="#" class="list-group-item list-group-item-action">Book of the month</a></router-link>
                    <router-link to="/booksRead"><a href="#" class="list-group-item list-group-item-action">Books we've read</a></router-link>
                    <router-link to="/nextMonth"><a href="#" class="list-group-item list-group-item-action">Vote for next month's book!</a></router-link>
                    <router-link to="/guestList"><a href="#" class="list-group-item list-group-item-action">Guest List/RSVP</a></router-link>
                    <router-link to="/chat"><a href="#" class="list-group-item list-group-item-action">Group Chat</a></router-link>
                    <router-link to="/contact"><a href="#" class="list-group-item list-group-item-action">Contact</a></router-link>
                  </div>
                </div>
                <div class="col-md-9 text-center">
                  <h1 class="title">Book of the Month:</h1><hr id="monthHR"><br>
                  <div class="thumbnail">
                    <img src="https://www.chipublib.org/wp-content/uploads/sites/3/2015/01/kccover.png" alt="San Francisco" height="500">
                    <p><strong>The Amazing Adventures of Kavalier and Clay</strong></p>
                    <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#adventuresModal">Book Details</a>
                  </div>

                </div>
              </div>
              <h2 class="title text-center" id="author">Michael Chabon</h2><hr id="authorHR">
              <div class="row">
                <div class="col-md-6 text-center">
                    <img src="http://www.trbimg.com/img-5835f29a/turbine/la-ca-jc-michael-chabon-moonglow-20161118" height="300" width="500">
                </div>
                <div class="col-md-6">
                  <p id="bio">Michael Chabon (/ˈʃeɪbɒn/ SHAY-bon; born May 24, 1963) is an American novelist, short story writer, and Pulitzer Prize winner.

                  Chabon's first novel, The Mysteries of Pittsburgh (1988), was published when he was 25. He followed it with Wonder Boys (1995), and two short-story collections. In 2000, Chabon published The Amazing Adventures of Kavalier & Clay, a novel that John Leonard, in a 2007 review of a later novel, called Chabon's magnum opus. It received the Pulitzer Prize for Fiction in 2001.<br><br>

                  Chabon's work is characterized by complex language, the frequent use of metaphor along with recurring themes, including nostalgia, divorce, abandonment, fatherhood, and most notably issues of Jewish identity. He often includes gay, bisexual, and Jewish characters in his work. Since the late 1990s, Chabon has written in an increasingly diverse series of styles for varied outlets; he is a notable defender of the merits of genre fiction and plot-driven fiction, and, along with novels, he has published screenplays, children's books, comics, and newspaper serials.</p>

                </div>
              </div>
            </div>`,
                created: function(){ console.log('created the images component')},
                destroyed: function(){ console.log('destroyed the images component')}
            }

        },
        {
            path: '/booksRead',
            component: {
              template: `<div class="books">
              <div class="row">
              <div class="col-md-3">
                <div class="list-group">
                  <router-link to="/"><a href="#" class="list-group-item list-group-item-success">Home</a></router-link>
                  <router-link to="/bookOfTheMonth"><a href="#" class="list-group-item list-group-item-action">Book of the month</a></router-link>
                  <router-link to="/booksRead"><a href="#" class="list-group-item list-group-item-action">Books we've read</a></router-link>
                  <router-link to="/nextMonth"><a href="#" class="list-group-item list-group-item-action">Vote for next month's book!</a></router-link>
                  <router-link to="/guestList"><a href="#" class="list-group-item list-group-item-action">Guest List/RSVP</a></router-link>
                  <router-link to="/chat"><a href="#" class="list-group-item list-group-item-action">Group Chat</a></router-link>
                  <router-link to="/contact"><a href="#" class="list-group-item list-group-item-action">Contact</a></router-link>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="thumbnail">
                  <img src="https://disneynerd242.files.wordpress.com/2012/12/hobbit-cover-688x1024.jpg" alt="Paris" height="250">
                  <p><strong>The Hobbit</strong></p>
                  <p>J.R.R. Tolkien</p>
                  <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#hobbitModal">Book Details</a>
                </div>
                <div class="thumbnail">
                  <img src="https://i.pinimg.com/736x/00/4b/c0/004bc03ab3504c8d7a17994450d208ff--tripod-fiction-movies.jpg" alt="Paris" height="250">
                  <p><strong>The War of the Worlds</strong></p>
                  <p>H.G. Wells</p>
                  <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#warModal">Book Details</a>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="thumbnail">
                  <img src="https://upload.wikimedia.org/wikipedia/en/c/c7/DWCity.jpg" alt="New York" height="250">
                  <p><strong>The Devil in the White City</strong></p>
                  <p>Erik Larson</p>
                  <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#devilModal">Book Details</a>
                </div>
                <div class="thumbnail">
                  <img src="http://d28hgpri8am2if.cloudfront.net/book_images/cvr9781451673265_9781451673265_hr.jpg" alt="Paris" height="250">
                  <p><strong>Fahrenheit 451</strong></p>
                  <p>Ray Bradbury</p>
                  <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#fahrenheitModal">Book Details</a>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="thumbnail">
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg" alt="San Francisco" height="250">
                  <p><strong>Ready Player One</strong></p>
                  <p>Ernest Cline</p>
                  <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#readyModal">Book Details</a>
                </div>
                <div class="thumbnail">
                  <img src="http://booksat.scarlettrugers.com/bookcoverdesign/wp-content/uploads/2013/10/1984-book-cover.jpeg" alt="Paris" height="250">
                  <p><strong>1984</strong></p>
                  <p>George Orwell</p>
                  <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#1984Modal">Book Details</a>
                </div>
              </div>
            </div>
          </div>`,
            }
        },
        {
            path: '/nextMonth',
            component: {
              template: `<div class="row">
              <div class="col-md-3">
                <div class="list-group">
                  <router-link to="/"><a href="#" class="list-group-item list-group-item-success">Home</a></router-link>
                  <router-link to="/bookOfTheMonth"><a href="#" class="list-group-item list-group-item-action">Book of the month</a></router-link>
                  <router-link to="/booksRead"><a href="#" class="list-group-item list-group-item-action">Books we've read</a></router-link>
                  <router-link to="/nextMonth"><a href="#" class="list-group-item list-group-item-action">Vote for next month's book!</a></router-link>
                  <router-link to="/guestList"><a href="#" class="list-group-item list-group-item-action">Guest List/RSVP</a></router-link>
                  <router-link to="/chat"><a href="#" class="list-group-item list-group-item-action">Group Chat</a></router-link>
                  <router-link to="/contact"><a href="#" class="list-group-item list-group-item-action">Contact</a></router-link>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="thumbnail">
                  <img src="https://dboyle93.files.wordpress.com/2014/05/the_road_oprahs_book_club-large.jpg" alt="Paris" height="250">
                  <p><strong>The Road</strong></p>
                  <p>Cormac McCarthy</p>
                  <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#roadModal">Book Details</a>
                </div>
                <div class="thumb">
                  <i class="btn fa fa-thumbs-o-up" aria-hidden="true" id="roadVoteIncrease" v-on:click="roadVotes += 1" data-toggle="modal" data-target="#voteModal"></i>
                  <p id="roadVoteCounter">{{roadVotes}}</p>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="thumbnail">
                  <img src="https://images.gr-assets.com/books/1309203605l/7126.jpg" alt="New York" height="250">
                  <p><strong>The Count of Monte Cristo</strong></p>
                  <p>Alexandre Dumas</p>
                  <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#countModal">Book Details</a>
                </div>
                <div class="thumb">
                  <i class="btn fa fa-thumbs-o-up" aria-hidden="true" id="countVoteIncrease" v-on:click="cristoVotes += 1" data-toggle="modal" data-target="#voteModal"></i>
                  <p id="countVoteCounter">{{cristoVotes}}</p>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="thumbnail">
                  <img src="http://bookcoverarchive.com/wp-content/uploads/amazon/slaughterhousefive.jpg" alt="San Francisco" height="250">
                  <p><strong>Slaughterhouse-Five</strong></p>
                  <p>Kurt Vonnegut</p>
                  <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#slaughterhouseModal">Book Details</a>
                </div>
                <div class="thumb">
                  <i class="btn fa fa-thumbs-o-up" aria-hidden="true" id="slaughterVoteIncrease" v-on:click="slaughterVotes += 1" data-toggle="modal" data-target="#voteModal"></i>
                  <p id="slaughterVoteCounter">{{slaughterVotes}}</p>
                </div>
              </div>
              </div>`,
              props: ['road-votes', 'cristo-votes', 'slaughter-votes'],
            }
        },
        {
            path: '/guestList',
            component: {
              template: `<div class="row">
                <div class="col-md-3">
                  <div class="list-group">
                    <router-link to="/"><a href="#" class="list-group-item list-group-item-success">Home</a></router-link>
                    <router-link to="/bookOfTheMonth"><a href="#" class="list-group-item list-group-item-action">Book of the month</a></router-link>
                    <router-link to="/booksRead"><a href="#" class="list-group-item list-group-item-action">Books we've read</a></router-link>
                    <router-link to="/nextMonth"><a href="#" class="list-group-item list-group-item-action">Vote for next month's book!</a></router-link>
                    <router-link to="/guestList"><a href="#" class="list-group-item list-group-item-action">Guest List/RSVP</a></router-link>
                    <router-link to="/chat"><a href="#" class="list-group-item list-group-item-action">Group Chat</a></router-link>
                    <router-link to="/contact"><a href="#" class="list-group-item list-group-item-action">Contact</a></router-link>
                  </div>
                </div>
                <div class="col-md-9">
                  <table class="table table-striped" id="table">
                      <thead class="thead-inverse">
                          <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Going</th>
                              <th>Not Going</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Jean</td>
                              <td>Gray</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                          <tr>
                              <td>Clark</td>
                              <td>Kent</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                          <tr>
                              <td>Peter</td>
                              <td>Parker</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                          <tr>
                              <td>Susan</td>
                              <td>Storm</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                          <tr>
                              <td>Wade</td>
                              <td>Wilson</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                          <tr>
                              <td>Bruce</td>
                              <td>Wayne</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                          <tr>
                              <td>Selina</td>
                              <td>Kyle</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                          <tr>
                              <td>Bruce</td>
                              <td>Banner</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                          <tr>
                              <td>Oswald</td>
                              <td>Cobblepot</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                          <tr>
                              <td>Anna</td>
                              <td>Marie</td>
                              <td><input type="checkbox"></td>
                              <td><input type="checkbox"></td>
                          </tr>
                      </tbody>
                  </table>
                  <button type="button" class="btn btn-success pull-right" id="rsvp" data-toggle="modal" data-target="#submitModal">Submit</button>
                </div>
              </div>`,
            }
        },
        {
            path: '/chat',
            component: {
              template: `<div class="row" id="chat-row">
              <div class="col-md-3">
                <div class="list-group">
                  <router-link to="/"><a href="#" class="list-group-item list-group-item-success">Home</a></router-link>
                  <router-link to="/bookOfTheMonth"><a href="#" class="list-group-item list-group-item-action">Book of the month</a></router-link>
                  <router-link to="/booksRead"><a href="#" class="list-group-item list-group-item-action">Books we've read</a></router-link>
                  <router-link to="/nextMonth"><a href="#" class="list-group-item list-group-item-action">Vote for next month's book!</a></router-link>
                  <router-link to="/guestList"><a href="#" class="list-group-item list-group-item-action">Guest List/RSVP</a></router-link>
                  <router-link to="/chat"><a href="#" class="list-group-item list-group-item-action">Group Chat</a></router-link>
                  <router-link to="/contact"><a href="#" class="list-group-item list-group-item-action">Contact</a></router-link>
                </div>
              </div>
              <div class="col-md-8 chat-area">
              <h2 class="text-center title">Group Chat</h2><hr id="chatHR">
            <div class="input-group">

              <input type="text" id="chatbox" class="form-control" placeholder="send a message to the group!" aria-label="Product name">
              <span class="input-group-btn">
                <button id="all" class="btn btn-dark" type="button">Send</button>
              </span>
            </div>
            <ul id="chat-messages"></ul>
              </div>
            </div>`,
            mounted: function() {
              var socket = io()
              socket.on('message', function(data){
                  console.log(data.message)
                  $('#chat-messages').append(`<div class="icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div><li class="message"> ${data.message}</li>`)

              })

              $('#all').on('click', function(){
                  socket.emit('allchat', {message: $('input').val()})
                  $('input').val('')
              })


            }
            }
        },
        {
            path: '/contact',
            component: {
              template: `<div class="row">
              <div class="col-md-3">
                <div class="list-group">
                  <router-link to="/"><a href="#" class="list-group-item list-group-item-success">Home</a></router-link>
                  <router-link to="/bookOfTheMonth"><a href="#" class="list-group-item list-group-item-action">Book of the month</a></router-link>
                  <router-link to="/booksRead"><a href="#" class="list-group-item list-group-item-action">Books we've read</a></router-link>
                  <router-link to="/nextMonth"><a href="#" class="list-group-item list-group-item-action">Vote for next month's book!</a></router-link>
                  <router-link to="/guestList"><a href="#" class="list-group-item list-group-item-action">Guest List/RSVP</a></router-link>
                  <router-link to="/chat"><a href="#" class="list-group-item list-group-item-action">Group Chat</a></router-link>
                  <router-link to="/contact"><a href="#" class="list-group-item list-group-item-action">Contact</a></router-link>
                </div>
              </div>
              <div class="col-md-8 contact-form">
            <h2 class="text-center">CONTACT</h2><hr id="contactHR">
            <div class="row">
              <div class="col-sm-5">
                <p></p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> 1060 W. Addison St.</p>
                <p><i class="fa fa-mobile" aria-hidden="true"></i> +312-444-5555</p>
                <p><i class="fa fa-envelope" aria-hidden="true"></i> myemail@something.com</p>
              </div>
              <div class="col-sm-7">
                <div class="row">
                  <div class="col-sm-6 form-group">
                    <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
                  </div>
                  <div class="col-sm-6 form-group">
                    <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
                  </div>
                </div>
                <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br>
                <div class="row">
                  <div class="col-sm-12 form-group">
                    <button class="btn btn-default pull-right" type="submit">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
              </div>`,
            }
        },

    ]


})


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
          // inside of a vue method, we can use `this` to access any data or method on that VM.
          // always send an object when using AJAX
          console.log(this.userName)
          $.post('/login-user',
          {username: this.userName, password: this.userPassword},
          (dataFromServer) => {
            console.log('line61: ', this, dataFromServer)
            this.user = dataFromServer
            window.location.href="/dashboard.html"
          })
          // $.ajax({
          //     url: '/login-user',
          //     type: 'POST',
          //     data: JSON.stringify({username: this.userName, password: this.userPassword}),
          //     contentType: 'application/json; charset=utf-8',
          //     dataType: 'json',
          //     success: function(dataFromServer) {
          //         console.log('line61: ', that, dataFromServer)
          //
          //             that.user = dataFromServer
          //             //window.location.href="/dashboard.html"
          //
          //     }
          // })
      },
      log: function(evt) {
        console.log(evt, '\n', this, '\n');
      }
    },
    router: myRouter,
})
