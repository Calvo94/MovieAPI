describe("Movies Controller",function(){

  var moviesController, movie, req, res;
  movie = { find:jasmine.createSpy() , findById:jasmine.createSpy() };
  req={ params: { id:1 } };
  res = { send: jasmine.createSpy(),status: jasmine.createSpy()};
  moviesController = require('./../controllers/moviesController')(movie);

  describe("Get",function(){
    it('should call movie.find function',function() {
      moviesController.get(req,res);
      expect(movie.find).toHaveBeenCalled();
    });
  });

  describe("get by id", function(){
    it('should call movie.findById function',function(){
      moviesController.getById(req,res);
      expect(movie.findById).toHaveBeenCalled();
    })
  })
});
