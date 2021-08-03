app.service('Animation', [
    function() {
        // currentClass is a string,
        // One of:
        // 'left-to-right'
        // 'right-to-left'

        animation = {}
        animation.currentClass = "";
        animation.setAnimationClass = null;

        // takes a function from the root controller to set class on ng-view
        animation.setSetter = function(func) {
            this.setAnimationClass = func;
        }

        // retrieves current class string
        animation.getCurrentClass = function() {
            return animation.currentClass;
        }

        // START SETTERS, uses setAnimationClass
        animation.setRightLeft = function() {
            this.currentClass = 'right-to-left';
            if (this.setAnimationClass) {
                 this.setAnimationClass();
            }
            console.log('right-to-left');
        }
        animation.setLeftRight = function() {
            this.currentClass = 'left-to-right';
            if (this.setAnimationClass) {
                this.setAnimationClass();
            }
            console.log('left-to-right');
        }
        animation.setTopLevel = function() {
          this.currentClass = 'top-level';
          if (this.setAnimationClass) {
              this.setAnimationClass();
          }
          console.log('left-to-right');
        }
        animation.setBottomLevel = function() {
          this.currentClass = 'bottom-level';
          if (this.setAnimationClass) {
              this.setAnimationClass();
          }
          console.log('left-to-right');
        }
        animation.clearClass = function() {
            this.currentClass = "";
            if (this.setAnimationClass) {
                this.setAnimationClass()
            }
            console.log('cleared');
        }
        // used to set animation.previousClass
        //   VITALLY important for animation class controllers
        //   on the hierarchyically intermediate page.
        animation.setPreviousPage = function(url) {
          this.previousPage = url;
        }

        return animation;
    }]);
