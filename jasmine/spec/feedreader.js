/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url is defined', function(){
            allFeeds.forEach(function(myUrl){
                expect(myUrl.name).toBeDefined();
                expect(myUrl.length).not.toBe(0);
            });
            
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined', function(){
            allFeeds.forEach(function(myName){
                expect(myName.name).toBeDefined();
                expect(myName.length).not.toBe(0);
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('the menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */


         // Big Thanks to Cody Perry [codyperry24] on the .hasClass method.
         it('menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
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

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
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
                feed = $('.feed').html();
                loadFeed(0, done);
            });

            it('new feed is loaded', function(){
                expect($('.feed')).not.toEqual(feed);
            });
         });
}());
