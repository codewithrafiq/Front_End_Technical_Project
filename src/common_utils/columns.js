// code
// name
// type
// availability
// needing_repair
// durability
// max_durability
// mileage
// price
// minimum_rent_period




export const columns = [
  {name: "sl", label: "Serial No"},
  {
    name: "name",
    label: "Name",
    options: {
     filter: true,
     sort: false,
    }
   },
    {
     name: "code",
     label: "Code",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      name: "availability",
      label: "Availability",
      options: {
       filter: true,
       sort: false,
       customBodyRender: (val) => {
         return val === true ? "True" : "False";
       }
      }
     },

    {
      name: "needing_repair",
      label: "Needing Repair",
      options: {
       filter: true,
       sort: false,
       customBodyRender: (val) => {
        return val === true ? "True" : "False";
      }
      }
     },
     {
      name: "durability",
      label: "Durability",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "mileage",
      label: "Mileage",
      options: {
       filter: true,
       sort: false,
       customBodyRender: (val) => {
         return val === null ? "0" : val;
       }
      }
     },
    // {
    //  name: "type",
    //  label: "Type",
    //  options: {
    //   filter: true,
    //   sort: false,
    //  }
    // },


    // {
    //   name: "max_durability",
    //   label: "Max Durability",
    //   options: {
    //    filter: true,
    //    sort: false,
    //   }
    //  },

    // {
    //   name: "price",
    //   label: "Price",
    //   options: {
    //    filter: true,
    //    sort: false,
    //   }
    //  },
    // {
    //   name: "minimum_rent_period",
    //   label: "Minimum Rent Period",
    //   options: {
    //    filter: true,
    //    sort: false,
    //   }
    //  },
   ];
   