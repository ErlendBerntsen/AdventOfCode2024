const fs = require("fs");
const { console } = require("inspector");

  async function task1() {
    try {
      fs.readFile("input.txt", "utf8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          let a = [];
          let b = [];
          const lines = data.split("\r\n");
          lines.forEach(x  => {
            const line = x.split("   ");
            a.push(line[0]);
            b.push(line[1]);
          })
          a.sort();
          b.sort();
          
          let sum = 0;
          for(let i = 0; i < a.length; i++){

            sum += Math.abs(parseInt(b[i]) - parseInt(a[i]));
          }
          console.log(sum);

        }
      });

    } catch (error) {
      console.log(error);

    }
    
  }

  
  async function task2() {
    try {
      fs.readFile("input.txt", "utf8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          let a = [];
          let b = [];
          const lines = data.split("\r\n");
          lines.forEach(x  => {
            const line = x.split("   ");
            a.push(line[0]);
            b.push(line[1]);
          })
          
          const dict = new Map();
          for(let i = 0; i < b.length; i++){
            if(dict.has(b[i])){
              dict.set(b[i], dict.get(b[i]) + 1)
            }else{
              dict.set(b[i], 1);
            }

          }

          let sum = 0;
          for(let i = 0; i < a.length; i++){
            if(dict.has(a[i])){
              sum += parseInt(a[i]) * dict.get(a[i]);
            }
          }
          console.log(sum);

        }
      });

    } catch (error) {
      console.log(error);

    }
    
  }

  task2();