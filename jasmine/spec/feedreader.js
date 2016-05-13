$(function() {
    /* This test suite tests that allFeeds are defined, and that they
     * are not empty.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url is defined', function(){
            allFeeds.forEach(function(myUrl){
                expect(myUrl.name).toBeDefined();
                expect(myUrl.length).not.toBe(0);
            });
            
        });

        /* Loops through each feed in the allFeeds 
         * object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined', function(){
            allFeeds.forEach(function(myName){
                expect(myName.name).toBeDefined();
                expect(myName.length).not.toBe(0);
            });
         });
    });
    
    /* This test suite ensures the menu element is hidden by default 
     * and that the click event toggles between revealing the menu
     * and hiding it.
     */ 
    describe('the menu', function(){
        

         // Big Thanks to Cody Perry [codyperry24] on the .hasClass method.
         it('menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* Ensures the menu changes visibility when the
          * menu icon is clicked. Does the menu display when
          * clicked and does it hide when clicked again?
          */

        it('menu is changed with icon click event', function(){

            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);

        });

        it('menu is toggled to hidden', function(){
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* Ensures when the loadFeed function is called
     * and completes its work, there is at least a single
     * .entry element within the .feed container.
     */
    describe('Initial Entries', function (){
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('loadFeed method called', function(){
            var entry = $('.feed .entry');
            expect(entry.length).toBeGreaterThan(0);
        });

     });

    /* A test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Method loadFeed() is asynchronous, so we still use beforeEach.
     */
    describe("New Feed Selection", function(){

        // variable feed to use later 
        var feed;

        beforeEach(function(done){
            loadFeed(0, function(){
                feed = $('.feed').html();
                done();
            });

        });
        // If content changes, the feed should not be empty
        it('new feed is loaded', function(done){
            loadFeed(1, function(){
                expect($('.feed').html()).not.toEqual(feed);
                done();  
            });
        });        
     });
}());
