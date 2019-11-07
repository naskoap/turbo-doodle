const Tabltr = {
    data: function () {
      const data = [
        {id:1, name:"Oli Bob", progress:12, gender:"male", rating:1, col:"red", dob:"", car:1, lucky_no:5, cheese:"Cheader"},
        {id:2, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true, lucky_no:10, cheese:"Gouda"},
        {id:3, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true", lucky_no:12, cheese:"Manchego"},
        {id:4, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980", lucky_no:18, cheese:"Brie"},
        {id:5, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999", lucky_no:33, cheese:"Cheader"},
      ];
      return {
        tabulator: null, //variable to hold your table
        tableData:
          data, //data for table to display
      }
    },
    watch:{
      //update table if data changes
      tableData:{
        handler: function (newData) {
          this.tabulator.replaceData(newData);
        },
        deep: true,
      }
    },
    mounted(){
      //instantiate Tabulator when element is mounted
      this.tabulator = new Tabulator(this.$refs.table, {
        data: this.tableData, //link data to table
        layout:"fitColumns",      //fit columns to width of table
	      responsiveLayout:"hide",  //hide columns that dont fit on the table
        initialSort:[             //set the initial sort order of the data
		        {column:"rating", dir:"desc"},
	      ],
        columns: [
          {title:"Name", field:"name"},
          {title:"Progress", field:"progress", sorter:"number"},
          {title:"Gender", field:"gender"},
          {title:"Rating", field:"rating"},
          {title:"Favourite Color", field:"col"},
          {title:"Date Of Birth", field:"dob", align:"center"},
        ],
      });
    },
    template: '<div ref="table" id="example-table"></div>' //create table holder element
};
