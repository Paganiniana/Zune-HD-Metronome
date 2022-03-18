app.service('Theme', [
  function() {
      theme={}
      theme.list = {
          "white-on-black": {
            name:"white-on-black",
            description: "White text on a black background"
          },
          "white-on-red":{
            name:"white-on-red",
            description: "White text on a red background"
          },
          "white-on-blue":{
            name: "white-on-blue",
            description: "White text on a blue background"
          }
      }
      theme.getTheme = function() {
        return this.list[localStorage.getItem('themeName')];
      }
      theme.setTheme = function(className) {
        localStorage.setItem('themeName', className);
      }

      if (!localStorage.getItem('themeName')) {
        theme.setTheme('white-on-black');
      } else {
        console.log(theme.getTheme())
      }

      //return crafted object
      return theme
  }])
